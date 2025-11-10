import express from 'express';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import enderecoRepository from '../Repository/EnderecoRepository.js';
import axios from 'axios';

const router = express.Router();

const MAPBOX_ACCESS_TOKEN = 'YOUR_MAPBOX_ACCESS_TOKEN';

async function geocodificarCEP(cep) {
  try {
    const response = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${cep}.json?access_token=${MAPBOX_ACCESS_TOKEN}&country=BR`);
    if (response.data.features.length > 0) {
      const [lng, lat] = response.data.features[0].center;
      return { lat, lng };
    }
    throw new Error('CEP não encontrado no Mapbox');
  } catch (error) {
    throw new Error('Erro ao geocodificar CEP: ' + error.message);
  }
}

async function buscarLugaresCulturais(lat, lng) {
  try {
    const categories = 'museum,theater,art_gallery,historic_site,library';
    const radius = 5000; // 5 km
    const limit = 10; // Máximo 10 resultados
    const response = await axios.get(`https://api.mapbox.com/search/searchbox/v1/category/${categories}?access_token=${MAPBOX_ACCESS_TOKEN}&proximity=${lng},${lat}&limit=${limit}`);
    
    return response.data.suggestions.map(place => ({
      nome: place.name,
      endereco: place.full_address || place.place_name,
      coordenadas: place.mapbox_id ? { lat: place.center[1], lng: place.center[0] } : null
    }));
  } catch (error) {
    throw new Error('Erro ao buscar lugares culturais: ' + error.message);
  }
}

// Rota para buscar lugares culturais por CEP
router.post('/buscar-lugares-culturais', async (req, res) => {
  const { cep } = req.body;

  if (!cep || cep.length !== 8 || !/^\d+$/.test(cep)) {
    return res.status(400).json({ error: 'CEP inválido. Deve ter 8 dígitos numéricos.' });
  }

  try {
    // Verifica se o CEP existe no banco
    const cepExiste = await enderecoRepository.verificarCEP(cep);
    if (!cepExiste) {
      return res.status(404).json({ error: 'CEP não encontrado no banco de dados.' });
    }

    // Geocodifica o CEP
    const { lat, lng } = await geocodificarCEP(cep);

    // Busca lugares culturais próximos
    const lugares = await buscarLugaresCulturais(lat, lng);

    res.json({
      cep,
      coordenadas: { lat, lng },
      lugares_culturais: lugares
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;