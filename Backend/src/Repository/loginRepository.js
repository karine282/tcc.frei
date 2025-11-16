import con from "./Conection.js";

class LoginRepository {
  async buscarUsuarioPorEmail(email) {
    try {
      const [info] = await con.query(
        "SELECT * FROM tb_cadastro WHERE email_usuario = ?",
        [email]
      );
      return info.length > 0 ? info[0] : null;  
    } catch (erro) {
      console.error("Erro ao buscar usuário por email:", erro);
      throw new Error("Erro ao acessar o banco de dados.");
    }
  }
}

export default new LoginRepository();  