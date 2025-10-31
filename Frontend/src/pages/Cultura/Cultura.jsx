import { Link } from "react-router-dom";
import "./Cultura.scss";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

function Cultura() {
  // Estado da pesquisa
  const [pesquisa, setPesquisa] = useState("");

  // Atualiza o valor do input
  const handleInputChange = (e) => {
    setPesquisa(e.target.value);
  };

  // Lida com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Pesquisa enviada:", pesquisa);
  };

  return (
    <div className="container-cultura">

      {/* TOPO */}
      <header className="topo">
        <div className="logo">
          Localiza<span>LivreSP</span>
        </div>
        <nav>
          <Link to="/lazer">Lazer</Link>
          <Link to="/esportes">Esportes</Link>
          <Link to="/">
            <i className="fa-solid fa-house"></i>
          </Link>
        </nav>
      </header>

      {/* HERO */}
      <section
        className="hero cultura-hero"
        style={{ backgroundImage: `url(/assets/images/tenis.png)` }}
      >
        <h1>Locais Culturais</h1>
      </section>

      {/* DESCRIÇÃO */}
      <section className="desc-cultura">
        <p>
          Explore centros culturais, museus, bibliotecas, teatros, casas de cultura e projetos comunitários que promovem arte, conhecimento e criatividade de forma acessível. Descubra oficinas, exposições, apresentações e eventos gratuitos ou de baixo custo perto de você. Conecte-se com a cultura, aprenda algo novo e viva experiências enriquecedoras para todas as idades!
        </p>
        <img
          src="/assets/images/descricaoEsporte.png"
          alt="Descrição cultura"
          className="fotoCultura"
        />
      </section>

      {/* PESQUISA */}
      <div className="containerPesquisa">
        <section className="pesquisaCultura">
          <form className="searchForm" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Buscar por nome, categoria, bairro ou atividade..."
              value={pesquisa}
              onChange={handleInputChange}
              className="searchInput"
            />
            <button type="submit" className="searchButton">
              <CiSearch className="icone-pesquisar" />
            </button>
          </form>
        </section>
      </div>

      {/* ÁREA DE LOCAIS */}
      <section className="areaCultura">
        <h2>Espaços Culturais</h2>
        <div className="containerCultura">
          <div className="esquerdaCultura">
            <img
              src="/assets/images/clubeJoerg.png"
              alt="Centro Cultural São Paulo"
              className="culturaImagemGrande"
            />
            <p>
              <strong>Centro Cultural São Paulo (CCSP)</strong><br />
              Rua Vergueiro, 1000 – Liberdade. <br />
              <a
                href="https://www.google.com/maps?q=Centro+Cultural+São+Paulo"
                target="_blank"
                rel="noopener noreferrer"
                className="destaqueEndereco"
              >
                Ver no Google Maps
              </a>
            </p>
          </div>

          <div className="direitaCultura">
            <div className="culturaCard">
              <p>
                <strong>Museu do Ipiranga</strong><br />
                <a
                  href="https://www.google.com/maps?q=Museu+do+Ipiranga,+São+Paulo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Parque da Independência – Ipiranga
                </a>
              </p>
            </div>
            <div className="culturaCard">
              <p>
                <strong>Biblioteca Mário de Andrade</strong><br />
                <a
                  href="https://www.google.com/maps?q=Biblioteca+Mário+de+Andrade,+São+Paulo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rua da Consolação, 94 – República
                </a>
              </p>
            </div>
            <div className="culturaCard">
              <p>
                <strong>Casa de Cultura do Butantã</strong><br />
                <a
                  href="https://www.google.com/maps?q=Casa+de+Cultura+do+Butantã,+São+Paulo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Av. Junta Mizumoto, 13 – Jardim Peri
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MAPA */}
      <main>
        <section className="mapa">
          <h2>Veja locais próximos de você</h2>
          <div className="containerPesquisaMapa">
            <section className="pesquisaCulturaMapa">
              <form onSubmit={handleSubmit} className="searchForm">
                <input
                  type="text"
                  placeholder="CEP"
                  value={pesquisa}
                  onChange={handleInputChange}
                  className="searchInput"
                />
                <button type="submit" className="searchButton">
                  <CiSearch />
                </button>
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

      {/* RODAPÉ */}
      <footer className="rodapeCultura">
        <div className="container">
          <div className="logo">
            Localiza<span>LivreSP</span>
          </div>
          <h4>Descubra cultura, lazer e esportes gratuitos em São Paulo</h4>
          <p>© LocalizaLivreSP — Conectando a cidade.</p>
        </div>
      </footer>

    </div>
  );
}

export default Cultura;
