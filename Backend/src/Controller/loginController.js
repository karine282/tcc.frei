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

        // Valida se o usuário existe
        validarUsuario(usuarios);

        const usuario = usuarios[0];

        // Valida a senha
        const senhaValida = await bcrypt.compare(senha, usuario.senha);
        validarSenha(senhaValida);

        //  Gera token JWT
        const token = jwt.sign(
            { id: usuario.id_usuario, nome: usuario.nm_usuario }, 
            process.env.JWT_SECRET, 
            { expiresIn: "1h" }
        );

        res.json({ mensagem: "Login realizado com sucesso!", token });

    } catch (err) {
        console.error(err.message);

        // Decide status HTTP de acordo com o erro
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
