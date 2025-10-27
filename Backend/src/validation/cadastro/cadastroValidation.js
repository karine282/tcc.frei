

export function validarNovoCadastro(cadastroObj) {
    if (!cadastroObj.nome)
        throw new Error("nome de usuario obrigatorio");

    if (!cadastroObj.email)
        throw new Error("email obrigatorio");

    if (!cadastroObj.genero)
        throw new Error('genero obrigatorio');

    if (isNaN(cadastroObj.cep))
        throw new Error(`cep obrigatorio`)

    

}

export function validarCadastroUnico(registros) {
    if (registros.length == 0)
        throw new Error("usuario não encontrado");
}

export function validarCadastroIgual(registros) {
    if (registros.length > 0)
        throw new Error("já existe uma conta");

}
