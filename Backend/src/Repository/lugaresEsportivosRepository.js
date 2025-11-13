import con from "./Conection.js";

class EsportesRepository {
  async buscarLocaisPorNomeOuBairro(termoBusca) {
    try {
      const query = `
        SELECT * FROM locais_esportivos 
        WHERE nome LIKE ? 
        OR bairro LIKE ?
        LIMIT 20
      `;
      const busca = `%${termoBusca}%`;
      const [rows] = await con.execute(query, [busca, busca]);
      return rows; 
    } catch (erro) {
      console.error("Erro ao buscar locais esportivos:", erro);
      throw new Error("Erro ao acessar o banco de dados.");
    }
  }
}

export default new EsportesRepository(); 