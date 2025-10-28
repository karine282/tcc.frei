

export function validarNovoCadastro(cadastroObj) {
    if (!cadastroObj.nome)
        throw new Error("nome de usuario obrigatorio");

    if (!cadastroObj.email)
        throw new Error("email obrigatorio");

    if (!cadastroObj.genero)
        throw new Error('genero obrigatorio');
    if (!cadastroObj.cep || cadastroObj.cep.trim() === "")
        throw new Error("cep obrigatorio");

    const cepRegex = /^\d{5}-?\d{3}$/; 
    if (!cepRegex.test(cadastroObj.cep))
        throw new Error("CEP inválido");




}



export async function validarUsuarioDuplicado(conexao, email) {
    const [usuarioExiste] = await conexao.query(
        "SELECT * FROM tb_cadastro WHERE email_usuario = ?",
        [email]
    );
    if (usuarioExiste.length > 0) {
        throw new Error("Email já cadastrado");
    }
}

export function validarCamposObrigatorios({ nome, email, genero, cep, senha }) {
    if (!nome || !email || !genero || !cep || !senha) {
        throw new Error("Preencha todos os campos");
    }
}