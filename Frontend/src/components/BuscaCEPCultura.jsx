import React, { useState } from "react";

export default function BuscaLocaisCulturais() {  
  const [busca, setBusca] = useState("");
  const [locais, setLocais] = useState([]);
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const termoBusca = busca.trim();

    if (!termoBusca || termoBusca.length < 2) {
      setErro("Informe ao menos 2 letras para busca.");
      setLocais([]);
      return;
    }

    setErro("");
    setCarregando(true);

    try {
      const response = await fetch(`http://localhost:5010/api/cultura?nome=${encodeURIComponent(termoBusca)}`);
      if (!response.ok) {
        throw new Error("Erro na resposta da API");
      }
      const data = await response.json();
      if (data.resultados) {
        setLocais(data.resultados);
      } else {
        setLocais([]);
        setErro("Nenhum local encontrado.");
      }
    } catch (error) {
      console.error("Erro ao buscar locais culturais:", error);
      setErro("Erro ao buscar locais culturais. Tente novamente.");
      setLocais([]);
    } finally {
      setCarregando(false);
    }
  }

  return (
    <div className="containerPesquisa">
      <section className="pesquisaLocais">
        <form onSubmit={handleSubmit} className="searchForm">
          <input
            type="text"
            placeholder="Digite o nome ou bairro do local cultural"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="searchInput"
          />
          <button type="submit" className="searchButton">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>

        {carregando && <p>Carregando...</p>}

        {erro && <p className="erro">{erro}</p>}

        {locais.length > 0 && !erro && (
          <div className="locaisProximos">
            <h4>Locais culturais encontrados:</h4>
            <div className="cards-container">
              {locais.map((local, index) => (
                <a
                  key={index}
                  href={local.link || "#"}  // Supondo que a tabela tenha um campo 'link', ajuste se necessário
                  target="_blank"
                  rel="noopener noreferrer"
                  className="local-card"
                >
                  <h5>{local.nome}</h5>
                  <p>{local.endereco || local.bairro}</p>  {/* Ajuste campos conforme a tabela */}
                </a>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
