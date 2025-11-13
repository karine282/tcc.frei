import con from "./Conection.js";

class CulturaRepository {
  async buscarLocaisPorNomeOuBairro(termoBusca) {
    try {
      const query = `
        SELECT * FROM locais_culturais 
        WHERE nome LIKE ? 
        OR bairro LIKE ?
        LIMIT 20
      `;
      const busca = `%${termoBusca}%`;
      const [rows] = await con.execute(query, [busca, busca]);
      return rows; 
    } catch (erro) {
      console.error("Erro ao buscar locais culturais:", erro);
      throw new Error("Erro ao acessar o banco de dados.");
    }
  }
}

export default new CulturaRepository(); 