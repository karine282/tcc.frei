import express from 'express';
import con from "../Repository/Conection.js";

const router = express.Router();

// GET /api/locais?nome=algo
router.get('/esportes', async (req, res) => {
    try {
        const { nome } = req.query;
        console.log('chegou')
        if (!nome || nome.trim().length < 2) {
            return res.status(400).json({ erro: "Informe ao menos 2 letras para busca." });
        }

        const query = `
            SELECT * FROM locais_esportivos 
            WHERE nome LIKE ? 
            OR bairro LIKE ?
            LIMIT 20
        `;
        const busca = `%${nome}%`;
        const [rows] = await con.execute(query, [busca, busca]);
        console.log(rows);
        

        if (rows.length === 0) {
            return res.status(404).json({ erro: "Nenhum local encontrado." });
        }

        res.status(200).json({ resultados: rows });
    } catch (erro) {
        console.error("Erro ao buscar locais esportivos:", erro);
        res.status(500).json({ erro: "Erro ao buscar locais esportivos" });
    }
});

export default router;
