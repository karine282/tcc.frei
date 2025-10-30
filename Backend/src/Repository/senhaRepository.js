import con from "./connection.js";

export async function recuperarSenha(senha) {

        let comando = `
    select * from tb_cadastro
    where senha like ?
    `
    
    let res = await con.query(comando, ['%' + senha + "%"]);
    let registros = res[0];
    return registros;
}