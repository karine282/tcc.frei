import cadastradoController from "./Controller/cadastroController.js";
import loginController from './Controller/loginController.js';
import senhaController from './Controller/senhaController.js';
import ContatoController from './Controller/ContatoController.js';
import Admin from './Controller/AdminController.js';

export default function adicionarRotas(servidor) {
  servidor.use(cadastradoController);
  servidor.use(loginController);
  servidor.use(senhaController);
  servidor.use(ContatoController);
  ser
}
