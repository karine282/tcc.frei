import "./utils/global.js";
import "dotenv/config.js";
import express from 'express';
import cors from 'cors';
import adicionarRotas from "./Rotas.js";
import con from "./Repository/Conection.js";
import { loginController } from "./controller/LoginController.js";


const servidor = express();
servidor.use(cors());
servidor.use(express.json());

//configura os controllers
adicionarRotas(servidor);


const PORTA = process.env.PORTA;
servidor.listen(PORTA, () => console.log(`Api subiu na porta ${PORTA}`));