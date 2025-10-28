// Valida se os campos de login foram preenchidos
export function validarCamposLogin({ email, senha }) {
    if (!email || !senha) {
        throw new Error("Preencha todos os campos");
    }
}

// Valida se o usuário existe no banco
export function validarUsuario(usuarios) {
    if (usuarios.length === 0) {
        throw new Error("Usuário não encontrado");
    }
}

// Valida se a senha está correta
export function validarSenha(senhaValida) {
    if (!senhaValida) {
        throw new Error("Senha incorreta");
    }
}
