import express from 'express';
import culturaRepository from "../Repository/lugaresCulturaisRepository.js"; 
import con from "../Repository/Conection.js";  


const router = express.Router();

router.get('/cultura', async (req, res) => {
    try {
        const { nome } = req.query;
        if (!nome || nome.trim().length < 2) {
            return res.status(400).json({ erro: "Informe ao menos 2 letras para busca." });
        }

        const info = await culturaRepository.buscarLocaisPorNomeOuBairro(nome);

        if (info.length === 0) {
            return res.status(404).json({ erro: "Nenhum local encontrado." });
        }

        res.status(200).json({ resultados: info });
    } catch (erro) {
        console.error("Erro ao buscar locais culturais:", erro);
        res.status(500).json({ erro: "Erro ao buscar locais culturais" });
    }
});

export default router;