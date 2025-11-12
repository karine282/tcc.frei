import con from "./conection.js";

class EnderecoRepository {
  async verificarCEP(cep) {
    return new Promise((resolve, reject) => {
      const query = 'SELECT ds_existe FROM tb_ceps WHERE cep = ?';
      con.query(query, [cep], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results.length > 0 && results[0].ds_existe === 1);
        }
      });
    });
  }
}

export default new EnderecoRepository();