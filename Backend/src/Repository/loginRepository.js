import con from "./Conection.js";

class LoginRepository {
  // Busca um usuário pelo email
  async buscarUsuarioPorEmail(email) {
    try {
      const [rows] = await con.query(
        "SELECT * FROM tb_cadastro WHERE email_usuario = ?",
        [email]
      );
      return rows.length > 0 ? rows[0] : null;  
    } catch (erro) {
      console.error("Erro ao buscar usuário por email:", erro);
      throw new Error("Erro ao acessar o banco de dados.");
    }
  }
}

export default new LoginRepository();  