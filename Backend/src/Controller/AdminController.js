import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import admRepository from "../Repository/AdminRepository.js";  
import con from "../Repository/Conection.js";  


dotenv.config();
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET;

router.post("/loginAdm", async (req, res) => {
  try {
    const { email, senha } = req.body;

    if (!email || !senha) {
      return res.status(400).json({ erro: "Preencha todos os campos." });
    }

    const usuario = await admRepository.buscarUsuarioPorEmail(email);
    if (!usuario) {
      return res.status(404).json({ erro: "Usuário não encontrado." });
    }

    if (!admRepository.verificarSeEhAdmin(usuario)) {
      return res.status(403).json({ erro: "Acesso negado. Usuário não é administrador." });
    }

    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    if (!senhaValida) {
      return res.status(401).json({ erro: "Senha incorreta." });
    }

    const token = jwt.sign(
      { id: usuario.id_usuario, email: usuario.email_usuario, role: "admin" },
      JWT_SECRET,
      { expiresIn: "2h" }
    );

    res.status(200).json({
      mensagem: "Login realizado com sucesso!",
      usuario: {
        nome: usuario.nm_usuario,
        email: usuario.email_usuario,
      },
      token,
    });
  } catch (erro) {
    console.error("Erro ao fazer login:", erro);
    res.status(500).json({ erro: "Erro interno do servidor." });
  }
});

export default router;