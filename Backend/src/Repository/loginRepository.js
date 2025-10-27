import con from "./connection.js";

export async function consultarUsuario(email) {

    let comando = `
    select * from tb_cadastro
    where email_usuario like ?
    `
    
    let res = await con.query(comando, ['%' + email + "%"]);
    let registros = res[0];
    return registros;  
}