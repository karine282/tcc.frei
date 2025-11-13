import express from "express";
import cepRepository from "../Repository/CepCulturaRepository.js";

const router = express.Router();

router.get("/cep/:cep", async (req, res) => {
  try {
    const { cep } = req.params;

    if (!/^\d{8}$/.test(cep)) {
      return res.status(400).json({ erro: "CEP inválido. Use 8 números." });
    }

    const endereco = await cepRepository.buscarPorCep(cep);
    res.status(200).json({ resultado: endereco });
  } catch (erro) {
    console.error("Erro ao buscar CEP:", erro);
    res.status(500).json({ erro: erro.message || "Erro ao buscar CEP." });
  }
});

export default router;
