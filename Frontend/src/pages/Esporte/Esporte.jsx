import { useState } from 'react';
import './Esporte.scss';
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";


export default function Esporte() {
  const [pesquisa, setPesquisa] = useState('');

  const handleInputChange = (e) => setPesquisa(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Texto pesquisado: ${pesquisa}`);
  };

  return (
    <>
      {/* Topo */}
      <header className="topo">
        <div className="logo">Localiza<span>LivreSP</span></div>
        <nav>
          <Link to="/cultura">Cultura</Link>
          <Link to="/lazer">Lazer</Link>
          <Link to="/esportes" className="active">Esportes</Link>
          <Link to="/login">Login</Link>
          <Link to='/'>Inicio</Link>
        </nav>
      </header>

      {/* Imagem de fundo do topo */}
      <section
        className="hero esporte-hero"
        style={{ backgroundImage: `url(/assets/images/tenis.png)` }}
      >
        <h1>Esportes</h1>
      </section>

      {/* Descrição do esporte */}
      <section className="desc-esporte">
        <p>
          Encontre quadras públicas, centros esportivos, projetos sociais, parques e ONGs que oferecem atividades físicas e esportivas gratuitas. São aulas, treinos, jogos e eventos para todas as idades e níveis. Descubra locais perto de você e movimente-se de forma acessível, saudável e inclusiva!
        </p>
        <img
          src="/assets/images/descricaoEsporte.png"
          alt="Descrição esporte"
          className="fotoEsporte"
        />
      </section>

      {/* Barra de pesquisa */}
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
              <i className="fa-solid fa-magnifying-glass icone-pesquisar"></i>
            </button>          </form>
        </section>
      </div>

      {/* Clubes */}
      <section className="areaClubes">
        <h2>Clubes</h2>
        <div className="containerClubes">
          <div className="esquerdaClube">
            <img
              src="/assets/images/clubeJoerg.png"
              alt="Clube Joerg Bruder"
              className="clubeImagemGrande"
            />
            <p>
              <strong>Centro Esportivo Santo Amaro – CEE Joerg Bruder</strong><br />
              Av. Padre José Maria, 555 – Santo Amaro. <br />
              <a
                href="https://www.google.com/maps?q=Av.+Padre+José+Maria,+555,+São+Paulo"
                target="_blank"
                rel="noopener noreferrer"
                className="destaqueEndereco"
              >
                Capital São Paulo
              </a>
            </p>
          </div>

          <div className="direitaClube">
            <div className="clubeCard">
              <p>
                <strong>Centro Esportivo Ibirapuera – CEE Mané Garrincha</strong><br />
                <a
                  href="https://www.google.com/maps?q=Rua+Pedro+de+Toledo,+1651,+São+Paulo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rua Pedro de Toledo, 1651 – Vila Clementino
                </a>
              </p>
            </div>
            <div className="clubeCard">
              <p>
                <strong>Centro Esportivo Vila Guarani – CEE Riyuso Ogawa</strong><br />
                <a
                  href="https://www.google.com/maps?q=Rua+Lussanvira,+178,+São+Paulo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rua Lussanvira, 178 – Vila Guarani
                </a>
              </p>
            </div>
            <div className="clubeCard">
              <p>
                <strong>Centro Esportivo Vila Carioca – Balneário Princesa Isabel</strong><br />
                <a
                  href="https://www.google.com/maps?q=Rua+Campante,+100,+São+Paulo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rua Campante, 100 – Vila Carioca
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <main>
        <section className="mapa">
          <h2>Veja locais próximos de você</h2>
          <div className='containerPesquisaMapa'>
            <section className="pesquisaEsporteMapa">
              <form onSubmit={handleSubmit} className="searchForm">
                <input
                  type="text"
                  placeholder="CEP"
                  value={pesquisa}
                  onChange={handleInputChange}
                  className="searchInput"
                />
                <button type="submit" className="searchButton" />
              </form>
            </section>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.385218520387!2d-46.6623393850227!3d-23.590475184667895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c2d6a9b6bb%3A0x67b198b8f4cdbb!2sAvenida%20Paulista!5e0!3m2!1spt-BR!2sbr!4v1234567890"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="rodapeEsporte">
        <div className="container">
          <div className="logo">Localiza<span>LivreSP</span></div>
          <h4>Descubra cultura, lazer e esportes gratuitos em São Paulo</h4>
          <p>© LocalizaLivreSP — Conectando a cidade.</p>
        </div>
      </footer>
    </>
  );
}
