

export  function validarNovoUsuario(usuarioObj) {
    if (!usuarioObj.nome)
        throw new Error("nome do usuario obrigatorio");

    if (!usuarioObj.email)
        throw new Error("email do usuario obrigatorio");

    if (!usuarioObj.genero)
        throw new Error("genero do usuario obrigatorio");

        if(isNaN(usuarioObj.cep))
        throw new Error("cep invalido ");

    if (!usuarioObj.senha)
        throw new Error("senha obrigatorio");

}

export function validarUsuarioUnico(registros){
    if(registros.length == 0)
        throw new Error("usuario não encontrado");


}

export function validarUsuarioIgual(registros){
        if(registros.length > 0)
        throw new Error("já exite uma conta");
}