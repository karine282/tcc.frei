import cadastradoController from "./Controller/cadastroController.js";
import loginController from './Controller/loginController.js';
import senhaController from './Controller/senhaController.js'

export default function adicionarRotas(servidor) {
  servidor.use(cadastradoController);
  servidor.use(loginController);
  servidor.use(senhaController);
}
