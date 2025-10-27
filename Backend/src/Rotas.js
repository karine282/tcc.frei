import CadastroController from './Controller/CadastroController.js'

export default function adicionarRotas(servidor){
    servidor.use(CadastroController)
}
