import express from "express";
import con from "../Repository/Conection.js";  


const router = express.Router();

router.post("/contato", async (req, res) => {
  try {
    const { nome, email, mensagem } = req.body;

    if (!nome || !email || !mensagem) {
      return res.status(400).json({ erro: "preencha todos os campos." });
    }

    await SalvarContato(nome, email, mensagem);
    res.status(200).json({ mensagem: "mensagem enviada com sucesso!" });
  } catch (erro) {
    console.error("erro ao enviar contato:", erro);
    res.status(500).json({ erro: "erro interno no servidor." });
  }
});

export default router;
