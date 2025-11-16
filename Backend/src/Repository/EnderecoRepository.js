import con from "./Conection.js";

class EnderecoRepository {
  async verificarCEP(cep) {
    const resultados = await con.query('SELECT cep FROM tb_ceps WHERE cep = ? LIMIT 1', [cep]);

    if (Array.isArray(resultados) && Array.isArray(resultados[0]) && resultados[0].length > 0) {
      return true;
    }

    return false;
  }
}

export default new EnderecoRepository();