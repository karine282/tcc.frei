import express from 'express';
import con from "../Repository/Conection.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { validarNovoCadastro, validarUsuarioDuplicado, validarCamposObrigatorios } from '../validation/cadastro/cadastroValidation.js'
import { buscarCadastroPorId } from "../Repository/cadastroRepository.js";

const servidor = express();

servidor.post("/cadastro", async (req, res) => {
  try {
    console.log(" Dados recebidos:", req.body);

    const { nome, email, genero, cep, senha } = req.body;

    validarCamposObrigatorios({ nome, email, genero, cep, senha });

    validarNovoCadastro({ nome, email, genero, cep });

    await validarUsuarioDuplicado(con, email);


    const senhaHash = await bcrypt.hash(senha, 10);
    console.log(" Senha criptografada gerada com sucesso");



    await con.query(`
        INSERT INTO tb_cadastro (nm_usuario, email_usuario, ds_genero, ds_cep, senha)
        VALUES (?, ?, ?, ?, ?)
      `, [nome, email, genero, cep, senhaHash]);

    console.log("Usuário inserido com sucesso");
    res.status(201).json({ mensagem: "Usuário cadastrado com sucesso!" });

  } catch (err) {
    console.error(" Erro no cadastro:", err.message);

    if (
      err.message === "Preencha todos os campos" ||
      err.message === "nome de usuario obrigatorio" ||
      err.message === "email obrigatorio" ||
      err.message === "genero obrigatorio" ||
      err.message === "cep obrigatorio" ||
      err.message === "Email já cadastrado"
    ) {
      return res.status(400).json({ erro: err.message });
    }

    res.status(500).json({ erro: "Erro ao cadastrar usuário" });
  }
});

servidor.get("/cadastro/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await buscarCadastroPorId(id);

    if (!usuario)
      return res.status(404).json({ erro: "Usuário não encontrado" });

    res.status(200).json(usuario);
  } catch (err) {
    console.error("Erro ao buscar usuário:", err.message);
    res.status(500).json({ erro: "Erro interno ao buscar usuário" });
  }
});

export default servidor;