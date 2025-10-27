import express from 'express';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import con from "../Repository/Conection.js";

const servidor = express();

servidor.post("/login", async (req, res) => {
    try {
        const { email, senha } = req.body;
        
        const [usuarios] = await con.query(
            ` SELECT * FROM tb_cadastro 
            WHERE email_usuario = ?`, [email]);
            
            if (usuarios.length === 0)
            return res.status(404).json({ erro: "Usuário não encontrado" });
            
            const usuario = usuarios[0];
            const senhaValida = await bcrypt.compare(senha, usuario.senha);
            
            if (!senhaValida)
            return res.status(401).json({ erro: "Senha incorreta" });
            
            const token = jwt.sign({ id: usuario.id, nome: usuario.nome }, process.env.JWT_SECRET, { expiresIn: "1h" });
            res.json({ mensagem: "Login realizado com sucesso!", token });
        } catch (err) {
            console.error(err);
            res.status(500).json({ erro: "Erro no login" });
        }
    });

export default servidor;