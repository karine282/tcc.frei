import "./utils/global.js";
import "dotenv/config.js";
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import con from "./Repository/Conection.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import adicionarRotas from "./Rotas.js";


const servidor = express();
servidor.use(cors());
servidor.use(express.json());
dotenv.config();


adicionarRotas(servidor);


const PORTA = process.env.PORTA;
servidor.listen(PORTA, () => console.log(`Api subiu na porta ${PORTA}`));