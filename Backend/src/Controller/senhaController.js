import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import con from "../Repository/Conection.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const servidor = express();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS, 
  },
});


async function enviarEmail(destino, assunto, html) {
  try {
    await transporter.sendMail({
      from: `"LocalizaLivreSP" <${process.env.EMAIL_USER}>`,
      to: destino,
      subject: assunto,
      html,
    });
    console.log("Email enviado com sucesso!");
  } catch (error) {
    console.error("Erro ao enviar email:", error);
  }
}


servidor.post("/recuperar-senha", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) throw new Error("Informe o e-mail");

    // Busca o usuário
    const [usuarios] = await con.query(
      `SELECT id_usuario, nm_usuario FROM tb_cadastro 
      WHERE email_usuario = ?`,
      [email]
    );

    if (usuarios.length === 0) throw new Error("Usuário não encontrado");

    const usuario = usuarios[0];

    const token = jwt.sign(
      { id: usuario.id_usuario },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    const link = `http://localhost:5173/resetar-senha?token=${token}`;

    await enviarEmail(
      email,
      "Recuperação de Senha - LocalizaLivreSP",
      `
      <h2>Olá, ${usuario.nm_usuario}</h2>
      <p>Você solicitou a redefinição de senha.</p>
      <p>Clique no link abaixo para redefinir sua senha (válido por 1 hora):</p>
      <a href="${link}" target="_blank">${link}</a>
      <br/><br/>
      <p>Se você não fez esta solicitação, ignore este e-mail.</p>
      `
    );

    res.json({ mensagem: "Link de recuperação enviado! Verifique sua caixa de entrada de e-mail." });

  } catch (err) {
    console.error("Erro completo:", err);

    if (["Informe o e-mail", "Usuário não encontrado"].includes(err.message))
      return res.status(400).json({ erro: err.message });

    res.status(500).json({ erro: "Erro ao solicitar recuperação de senha" });
  }
});

servidor.post("/resetar-senha", async (req, res) => {
  try {
    const { token, novaSenha } = req.body;
    if (!token || !novaSenha) throw new Error("Token e nova senha são obrigatórios");

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.id;

    const salt = await bcrypt.genSalt(10);
    const senhaCriptografada = await bcrypt.hash(novaSenha, salt);

    await con.query(
      "UPDATE tb_cadastro SET senha = ? WHERE id_usuario = ?",
      [senhaCriptografada, userId]
    );

    res.json({ mensagem: "Senha atualizada com sucesso!" });

  } catch (err) {
    console.error(err.message);

    if (err.name === "TokenExpiredError")
      return res.status(400).json({ erro: "Token expirado, solicite novamente" });
    if (err.name === "JsonWebTokenError")
      return res.status(400).json({ erro: "Token inválido" });
    if (err.message === "Token e nova senha são obrigatórios")
      return res.status(400).json({ erro: err.message });

    res.status(500).json({ erro: "Erro ao redefinir senha" });
  }
});

export default servidor;
