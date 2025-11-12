import con from "./Conection.js";

class CulturaRepository {
  // Busca locais culturais por nome ou bairro (usando LIKE)
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
      return rows;  // Retorna os resultados ou um array vazio
    } catch (erro) {
      console.error("Erro ao buscar locais culturais:", erro);
      throw new Error("Erro ao acessar o banco de dados.");
    }
  }
}

export default new CulturaRepository();  // Exporta uma instância singleton