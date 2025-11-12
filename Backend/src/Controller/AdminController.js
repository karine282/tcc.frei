import express from 'express';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import con from "../Repository/Conection.js";
import { validarCamposLogin, validarUsuario, validarSenha } from '../validation/login/loginValidation.js';

const servidor = express();

servidor.post("/loginAdm", async (req, res) => {
    try {

      const senhaHash = await bcrypt.hash(senha, 10);
      console.log(" Senha criptografada gerada com sucesso");
        const { email, senha } = req.body;

        await con.query(`
          INSERT INTO tb_adm (email, senha)
          VALUES (?, ?, ?, ?, ?)
        `, [email, senhaHash]);

        // Verifica se campos foram enviados
        validarCamposLogin({ email, senha });

        // Busca usuário pelo email
        const [usuarios] = await con.query(
            "SELECT * FROM tb_adm WHERE email = ?",
            [email]
        );

        validarUsuario(usuarios);
        const usuario = usuarios[0];

        // Compara senha informada com a senha criptografada no banco
        const senhaValida = await bcrypt.compare(senha, usuario.senha);
        validarSenha(senhaValida);

        // Gera token JWT válido por 1h
        const token = jwt.sign(
            { id: usuario.id_cadastro, nome: usuario.nm_usuario },
            process.env.JWT_SECRET || "chave-secreta",
            { expiresIn: "1h" }
        );

        //  Retorna os dados necessários ao front-end
        return res.status(200).json({
            mensagem: "Entrando...",
            id: usuario.id_cadastro,
            email: usuario.email,
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
