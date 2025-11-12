import express from 'express';
import con from "../Repository/Conection.js"; 
import geocoder from 'node-geocoder';
import haversine from 'haversine-distance';

const router = express.Router();

const geocoderConfig = geocoder({
  provider: 'openstreetmap', 
});

// Rota existente: Buscar locais culturais por nome ou bairro
router.get('/Cepcultural', async (req, res) => {
  try {
    const { nome } = req.query;
    if (!nome || nome.trim().length < 2) {
      return res.status(400).json({ erro: "Informe ao menos 2 letras para busca." });
    }

    const query = `
      SELECT * FROM locais_BuscarCepCultura 
      WHERE nome LIKE ? 
      OR endereco LIKE ? 
      LIMIT 20
    `;
    const busca = `%${nome}%`;
    const [rows] = await con.execute(query, [busca, busca]);

    if (rows.length === 0) {
      return res.status(404).json({ erro: "Nenhum local encontrado." });
    }

    res.status(200).json({ resultados: rows });
  } catch (erro) {
    console.error("Erro ao buscar locais culturais:", erro);
    res.status(500).json({ erro: "Erro ao buscar locais culturais" });
  }
});

// Nova rota: Buscar local cultural mais próximo de um CEP
router.get('/local-proximo/:cep', async (req, res) => {
  const cep = req.params.cep;

  // Validação básica do CEP (formato brasileiro)
  const cepRegex = /^\d{5}-\d{3}$/;
  if (!cepRegex.test(cep)) {
    return res.status(400).json({ error: 'CEP inválido. Use o formato 12345-678.' });
  }

  try {
    // 1. Geocodificar o CEP do usuário
    const userLocation = await geocoderConfig.geocode(`${cep}, Brasil`);
    if (userLocation.length === 0) {
      return res.status(404).json({ error: 'CEP não encontrado.' });
    }
    const userCoords = { lat: userLocation[0].latitude, lng: userLocation[0].longitude };

    // 2. Buscar locais com coordenadas
    const [locais] = await con.execute(
      'SELECT nome, endereco, latitude, longitude FROM locais_BuscarCepCultura WHERE latitude IS NOT NULL AND longitude IS NOT NULL'
    );

    if (locais.length === 0) {
      return res.status(404).json({ error: 'Nenhum local com coordenadas encontrado.' });
    }

    // 3. Calcular distâncias e encontrar o mais próximo
    let closest = null;
    let minDistance = Infinity;

    locais.forEach(local => {
      const localCoords = { lat: local.latitude, lng: local.longitude };
      const distance = haversine(userCoords, localCoords) / 1000; // Em km
      if (distance < minDistance) {
        minDistance = distance;
        closest = { ...local, distancia_km: Math.round(distance * 100) / 100 }; // Arredondar para 2 casas
      }
    });

    // 4. Retornar o resultado
    res.json({
      cep_consultado: cep,
      local_mais_proximo: closest
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
});

export default router;