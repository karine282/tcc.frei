import express from 'express';
import cadastradoController from './Controller/CadastroController.js';
import loginController from './Controller/loginController.js';
import senhaController from './Controller/senhaController.js';
import ContatoController from './Controller/ContatoController.js';
import lugaresCulturaisController from './Controller/lugaresCulturaisController.js';
import lugaresEsportivosController from './Controller/lugaresEsportivosController.js';
import lugaresLazerController from './Controller/lugaresLazerController.js';
import admController from './Controller/AdminController.js';
import * as CepCultura from './Controller/CepCultura.js';
import * as CepEsporte from './Controller/CepEsporte.js';
import * as CepLazer from './Controller/CepLazer.js';

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
  servidor.get('/api/cultura', CepCultura.listarCultura);
  servidor.get('/api/cultura/:bairro', CepCultura.buscarPorBairro);
  servidor.get('/api/esporte', CepEsporte.listarEsporte);
  servidor.get('/api/esporte/:bairro', CepEsporte.buscarPorBairro);
  servidor.get('/api/lazer', CepLazer.listarLazer);
  servidor.get('/api/lazer/:bairro', CepLazer.buscarPorBairro);
}
