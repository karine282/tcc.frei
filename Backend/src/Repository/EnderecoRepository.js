import con from "./Conection.js";

class EnderecoRepository {
  async verificarCEP(cep) {
    const results = await con.query('SELECT cep FROM tb_ceps WHERE cep = ? LIMIT 1', [cep]);

    if (Array.isArray(results) && Array.isArray(results[0]) && results[0].length > 0) {
      return true;
    }

    return false;
  }
}

export default new EnderecoRepository();