import express from 'express';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import loginRepository from "../Repository/loginRepository.js";  
import { validarCamposLogin, validarUsuario, validarSenha } from '../validation/login/loginValidation.js';
import con from "../Repository/Conection.js";  


const servidor = express();

servidor.post("/login", async (req, res) => {
    try {
        const { email, senha } = req.body;

        validarCamposLogin({ email, senha });

        const usuario = await loginRepository.buscarUsuarioPorEmail(email);
        validarUsuario([usuario]);  

        const senhaValida = await bcrypt.compare(senha, usuario.senha);
        validarSenha(senhaValida);

        const token = jwt.sign(
            { id: usuario.id_cadastro, nome: usuario.nm_usuario },
            process.env.JWT_SECRET || "chave-secreta",
            { expiresIn: "1h" }
        );

        res.json({
            mensagem: "login realizado com sucesso!",
            id: usuario.id_cadastro,
            nome: usuario.nm_usuario,
            email: usuario.email_usuario,
            cep: usuario.ds_cep,  
            genero: usuario.ds_genero,  
            token
        });

    } catch (err) {
        console.error(err.message);

        if (
            err.message === "preencha todos os campos" ||
            err.message === "usuário não encontrado" ||
            err.message === "senha incorreta"
        ) {
            return res.status(400).json({ erro: err.message });
        }

        res.status(500).json({ erro: "Erro no login" });
    }
});

export default servidor;