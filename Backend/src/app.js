import "./utils/global.js";
import "dotenv/config.js";  // Já importa dotenv, então removi a linha duplicada
import express from 'express';
import cors from 'cors';
import con from "./Repository/Conection.js";  // Mantido, assumindo que é usado em outras partes
import bcrypt from "bcrypt";  // Mantido, usado no controller
import jwt from "jsonwebtoken";  // Mantido, usado no controller
import adicionarRotas from "./Rotas.js";
import enderecoController from './Controller/EnderecoController.js';  // Nova importação para a rota do Mapbox

const servidor = express();
servidor.use(cors());
servidor.use(express.json());

// Adiciona as rotas existentes do seu projeto
adicionarRotas(servidor);

// Adiciona a nova rota para buscar lugares culturais com Mapbox
servidor.use('/enderecos', enderecoController);

const PORTA = process.env.PORTA;
servidor.listen(PORTA, () => console.log(`Api subiu na porta ${PORTA}`));
