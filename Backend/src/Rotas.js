
import cadastradoController from "./Controller/cadastroController.js";
import loginController from './Controller/loginController.js';

export default function adicionarRotas(servidor) {
  servidor.use(cadastradoController);
  servidor.use(loginController)
}
