import con from "./Conection.js";

class CadastroRepository {
  // Busca usuário por ID 
  async buscarCadastroPorId(id) {
    try {
      const [rows] = await con.query("SELECT * FROM tb_cadastro WHERE id_usuario = ?", [id]);
      return rows.length > 0 ? rows[0] : null;
    } catch (erro) {
      console.error("Erro ao buscar usuário por ID:", erro);
      throw new Error("Erro ao acessar o banco de dados.");
    }
  }

  //  Inserir usuário
  async inserirUsuario(dados) {
    try {
      const { nome, email, genero, cep, senhaHash } = dados;
      await con.query(`
        INSERT INTO tb_cadastro (nm_usuario, email_usuario, ds_genero, ds_cep, senha)
        VALUES (?, ?, ?, ?, ?)
      `, [nome, email, genero, cep, senhaHash]);
      console.log("Usuário inserido com sucesso");
    } catch (erro) {
      console.error("Erro ao inserir usuário:", erro);
      throw new Error("Erro ao cadastrar usuário no banco.");
    }
  }

  //  Listar usuários (para admin)
  async listarUsuarios() {
    try {
      const [rows] = await con.query(`
        SELECT 
          id_usuario AS id,
          nm_usuario AS nome,
          email_usuario AS email,
          ds_genero AS genero,
          ds_cep AS cep
        FROM tb_cadastro
        ORDER BY id_usuario DESC
      `);
      return rows;
    } catch (erro) {
      console.error("Erro ao listar usuários:", erro);
      throw new Error("Erro ao buscar usuários no banco.");
    }
  }
}

export default new CadastroRepository();