    import "dotenv/config.js";
    import dotenv from 'dotenv';
    import express from 'express';
    import cors from 'cors';
    import adicionarRotas from "./Rotas.js";
    import ContatoController from "./Controller/ContatoController.js";
    import CepCultura from "./Controller/CepCultura.js";




    const servidor = express();
    servidor.use(cors());
    servidor.use(express.json());
    dotenv.config();


    adicionarRotas(servidor);
    servidor.use("/api", ContatoController);
    const app = express();
    app.use(express.json());
    app.use("/api", CepCultura);



    const PORTA = process.env.PORTA;
    servidor.listen(PORTA, () => console.log(`Api subiu na porta ${PORTA}`));