import { consultarUsuario } from "../repository/LoginRepository.js";

export default async function consultarUsuarioService(login, senha) {
  if (!login || !senha) {
    throw new Error("Login e senha são obrigatórios!");
  }

  const registros = await consultarUsuario(login, senha);

  if (registros.length === 0) {
    throw new Error("Usuário ou senha inválidos.");
  }

  return registros[0]; // retorna o usuário encontrado
}
