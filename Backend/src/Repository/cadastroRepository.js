import con from "./Conection.js";

export async function salvarCadastro(cadastro) {
    let comando = `
    insert into tb_cadastro (nm_usuario, email_usuario, ds_genero, ds_cep, senha)
    values (?, ?, ?, ?, ?);
    `

    let resposta = await con.query(comando, [cadastro.nome, cadastro.email, cadastro.genero, cadastro.cep, cadastro.senha]);
    let info = [0];

    let idcadastro = info.insertId
    return idcadastro
}


export async function buscarCadastroPorId(id) {
    let comando = `
        select id_usuario as id,
               nm_usuario as nome,
               email_usuario as email,
               ds_genero as genero,
               ds_cep as cep
        from tb_cadastro
        where id_usuario = ?;
    `;

    let [linhas] = await con.query(comando, [id]);
    return linhas[0];
}




