import "dotenv/config.js";
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import adicionarRotas from "./Rotas.js";
import ContatoController from "./Controller/ContatoController.js";


const servidor = express();
servidor.use(cors());
servidor.use(express.json());
dotenv.config();


adicionarRotas(servidor);
servidor.use("/api", ContatoController);



const PORTA = process.env.PORTA;
servidor.listen(PORTA, () => console.log(`Api subiu na porta ${PORTA}`));