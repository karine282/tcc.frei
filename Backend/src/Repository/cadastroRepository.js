import con from "./connection.js";

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


    
   

