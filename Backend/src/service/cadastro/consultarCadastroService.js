 import { consultarUsuario } from "../../Repository/loginRepository.js";


 export default async function consultarUsuarioService(email) {
    if(!email){
        email = '';
    }

    let registros = await consultarUsuario(email);
    return registros;
 } 
 
