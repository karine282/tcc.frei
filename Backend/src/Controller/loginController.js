import express from 'express';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import con from "../Repository/Conection.js";
import { validarCamposLogin, validarUsuario, validarSenha } from '../validation/login/loginValidation.js';

const servidor = express();

servidor.post("/login", async (req, res) => {
    try {
        const { email, senha } = req.body;

        //  Valida se os campos foram preenchidos
        validarCamposLogin({ email, senha });

        //  Busca o usuário no banco
        const [usuarios] = await con.query(
            "SELECT * FROM tb_cadastro WHERE email_usuario = ?",
            [email]
        );

        //  Valida se o usuário existe
        validarUsuario(usuarios);
        const usuario = usuarios[0];

        //  Verifique o nome da coluna do ID na sua tabela:
        // Se for `id_usuario`, troque no código abaixo.

        //  Valida a senha
        const senhaValida = await bcrypt.compare(senha, usuario.senha);
        validarSenha(senhaValida);

        //  Gera token JWT
        const token = jwt.sign(
            { id: usuario.id_cadastro, nome: usuario.nm_usuario },
            process.env.JWT_SECRET || "chave-secreta",
            { expiresIn: "1h" }
        );

        //  Retorna os dados necessários para o front (agora incluindo cep e genero)
        res.json({
            mensagem: "Login realizado com sucesso!",
            id: usuario.id_cadastro,
            nome: usuario.nm_usuario,
            email: usuario.email_usuario,
            cep: usuario.ds_cep,  // Adicionado: CEP do cadastro
            genero: usuario.ds_genero,  // Adicionado: Gênero do cadastro
            token
        });

    } catch (err) {
        console.error(err.message);

        if (
            err.message === "Preencha todos os campos" ||
            err.message === "Usuário não encontrado" ||
            err.message === "Senha incorreta"
        ) {
            return res.status(400).json({ erro: err.message });
        }

        res.status(500).json({ erro: "Erro no login" });
    }
});

export default servidor;