import express from 'express';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import con from "../Repository/Conection.js";
/*
import salvarCadastroService from '../service/cadastro/salvarCadastroService.js';
import consultarUsuarioService from '../service/cadastro/consultarCadastroService.js';
*/

const servidor = express();


servidor.post("/cadastro", async (req, res) => {
    try {

        
        const { nome, email, genero, cep, senha } = req.body;

        if (!nome || !email || !genero || !cep || !senha)
            return res.status(400).json({ erro: "Preencha todos os campos" });

        const [usuarioExiste] = await con.query(`
        SELECT * FROM tb_cadastro 
             WHERE email_usuario = ?
         `, [email]);

        if (usuarioExiste.length > 0)
            return res.status(400).json({ erro: "Email já cadastrado" });

        const senhaHash = await bcrypt.hash(senha, 10);
        await con.query("INSERT INTO tb_cadastro (nm_usuario, email_usuario, ds_genero, ds_cep, senha) VALUES (?, ?, ?, ?, ?)", [nome, email, genero, cep, senhaHash]);

        res.status(201).json({ mensagem: "Usuário cadastrado com sucesso!" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ erro: "Erro ao cadastrar usuário" });
    }
});

    /*
    endPoints.post('/filme', async (req, resp) => {
    try {
        let filmeObj = req.body;

        let id = await salvarFilmeService(filmeObj)
        resp.send({
            id: id
        })
    } 
    catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err))

    }


})
    */


export default servidor;
