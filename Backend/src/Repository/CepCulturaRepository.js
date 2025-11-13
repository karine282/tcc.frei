import axios from "axios";

class CepRepository {
  async buscarPorCep(cep) {
    try {
      const url = `https://viacep.com.br/ws/${cep}/json/`;
      const response = await axios.get(url);

      if (response.data.erro) {
        throw new Error("CEP não encontrado.");
      }

      return response.data;
    } catch (erro) {
      console.error("Erro ao buscar CEP:", erro.message);
      throw new Error("Erro ao consultar o CEP.");
    }
  }
}

export default new CepRepository();