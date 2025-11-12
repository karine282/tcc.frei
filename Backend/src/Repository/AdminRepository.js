import con from "./connection.js";

export async function consultarAdmUsuario(email) {

    let comando = `
    select * from tb_adm
    where email like ?
    `
    
    let res = await con.query(comando, ['%' + email + "%"]);
    let registros = res[0];
    return registros;  
}