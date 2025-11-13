import express from 'express';
import cadastradoController from './Controller/CadastroController.js';
import loginController from './Controller/loginController.js';
import senhaController from './Controller/senhaController.js';
import ContatoController from './Controller/ContatoController.js';
import lugaresCulturaisController from './Controller/lugaresCulturaisController.js';
import lugaresEsportivosController from './Controller/lugaresEsportivosController.js';
import lugaresLazerController from './Controller/lugaresLazerController.js';
import admController from './Controller/AdminController.js';
import CepCultura from './Controller/CepCultura.js';

export default function adicionarRotas(servidor) {
  servidor.use(cadastradoController);
  servidor.use(loginController);
  servidor.use(senhaController);
  servidor.use(ContatoController);
  servidor.use('/api', ContatoController);
  servidor.use('/api', lugaresCulturaisController);
  servidor.use('/api', lugaresEsportivosController);
  servidor.use('/api', lugaresLazerController);
  servidor.use(admController);
  servidor.use('/api', CepCultura);


 
}
