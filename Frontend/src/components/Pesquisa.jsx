import React, { useState } from 'react';

const dadosExemplo = [
  { id: 1, nome: "Futebol no Parque", categoria: "Esporte", bairro: "Centro" },
  { id: 2, nome: "Aula de Yoga", categoria: "Saúde", bairro: "Vila Mariana" },
  { id: 3, nome: "Show de Jazz", categoria: "Cultura", bairro: "Pinheiros" },
  { id: 4, nome: "Feira de Artesanato", categoria: "Lazer", bairro: "Centro" },
];

export default function Pesquisa() {
  const [pesquisa, setPesquisa] = useState('');
  const [resultados, setResultados] = useState(dadosExemplo);

  const handleInputChange = (e) => setPesquisa(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const filtro = dadosExemplo.filter(item =>
      item.nome.toLowerCase().includes(pesquisa.toLowerCase()) ||
      item.categoria.toLowerCase().includes(pesquisa.toLowerCase()) ||
      item.bairro.toLowerCase().includes(pesquisa.toLowerCase())
    );

    setResultados(filtro);
  };

  return (
    <div className='containerPesquisa'>
      <section className="pesquisaEsporte">
        <form onSubmit={handleSubmit} className="searchForm">
          <input
            type="text"
            placeholder="Buscar por nome, categoria, bairro ou atividade..."
            value={pesquisa}
            onChange={handleInputChange}
            className="searchInput"
          />
          <button type="submit" className="searchButton">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </section>

      <div className="resultadosPesquisa">
        {resultados.length === 0 ? (
          <p>Nenhum resultado encontrado.</p>
        ) : (
          <ul>
            {resultados.map(item => (
              <li key={item.id}>
                <strong>{item.nome}</strong> - {item.categoria} - {item.bairro}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
