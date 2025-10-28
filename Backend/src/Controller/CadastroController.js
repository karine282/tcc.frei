import express from 'express';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import con from "../Repository/Conection.js"
import { validarNovoCadastro, validarUsuarioDuplicado, validarCamposObrigatorios } from '../validation/cadastro/cadastroValidation.js'

const servidor = express();

servidor.post("/cadastro", async (req, res) => {
    try {
      console.log(" Dados recebidos:", req.body);
  
      const { nome, email, genero, cep, senha } = req.body;

// Valida campos obrigatórios
validarCamposObrigatorios({ nome, email, genero, cep, senha });

//  Valida campos específicos
validarNovoCadastro({ nome, email, genero, cep });

 //  Verifica se já existe usuário com o mesmo email
 await validarUsuarioDuplicado(con, email);

     //  Criptografa a senha

 const senhaHash = await bcrypt.hash(senha, 10);
 console.log(" Senha criptografada gerada com sucesso");


     //  Insere no banco

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


export default servidor;
