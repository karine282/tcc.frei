import express from 'express';
import esportesRepository from "../Repository/lugaresEsportivosRepository.js";  
import con from "../Repository/Conection.js";  

const router = express.Router();

router.get('/esportes', async (req, res) => {
    try {
        const { nome } = req.query;
        console.log('chegou');
        if (!nome || nome.trim().length < 2) {
            return res.status(400).json({ erro: "Informe ao menos 2 letras para busca." });
        }

        const info = await esportesRepository.buscarLocaisPorNomeOuBairro(nome);
        console.log(info);

        if (info.length === 0) {
            return res.status(404).json({ erro: "Nenhum local encontrado." });
        }

        res.status(200).json({ resultados: info });
    } catch (erro) {
        console.error("Erro ao buscar locais esportivos:", erro);
        res.status(500).json({ erro: "Erro ao buscar locais esportivos" });
    }
});

export default router;