import { salvarCadastro } from "../../Repository/cadastroRepository.js";
import { consultarUsuario } from '../../Repository/loginRepository.js'
import {validarNovoCadastro , validarCadastroIgual } from '../../validation/cadastro/cadastroValidation.js'

export default async function salvarCadastroService(cadastroObj) {
    validarNovoCadastro(cadastroObj)

    let registros = await consultarUsuario(cadastroObj.email);
    validarCadastroIgual(registros)


    let id =  await salvarCadastro(cadastroObj)
    return id;

}
