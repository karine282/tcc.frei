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
          <Link to='/' className="link-cultura">
          Localiza<span>LivreSP</span>
          </Link>
        </div>
        <nav>
          <Link to="/lazer">Lazer</Link>
          <Link to="/Esporte">Esportes</Link>
          <Link to="/">
            <i className="fa-solid fa-house"></i>
          </Link>
        </nav>
      </header>

      {/* HERO */}
      <section
        className="hero cultura-hero"
        style={{ backgroundImage: `url(/assets/images/cultura.png)` }}
      >
        <h1>Locais Culturais</h1>
      </section>

      {/* DESCRIÇÃO */}
      <section className="desc-cultura">
        <p>
          Explore centros culturais, museus, bibliotecas, teatros, casas de cultura e projetos comunitários que promovem arte, conhecimento e criatividade de forma acessível. Descubra oficinas, exposições, apresentações e eventos gratuitos ou de baixo custo perto de você. Conecte-se com a cultura, aprenda algo novo e viva experiências enriquecedoras para todas as idades!
        </p>
        <img
          src="/assets/images/desccultura.jpg"
          alt="foto de pessoas pulando"
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
            <i className="fa-solid fa-magnifying-glass icone-pesquisar"></i>
            </button>
          </form>
        </section>
      </div>

      {/* ÁREA DE LOCAIS */}

      <section className="locais">
        <h2>Locais</h2>

        <div className="locais-grid">
          {/* Esquerda */}
          <div className="coluna-esquerda">
            <div className="local-card grande">
              <a href='https://www.google.com/search?q=Centro+Cultural+S%C3%A3o+Paulo+(CCSP)&rlz=1C1GCEA_enBR1147BR1147&oq=Centro+Cultural+S%C3%A3o+Paulo+(CCSP)&gs_lcrp=EgZjaHJvbWUqDAgAEEUYOxjjAhiABDIMCAAQRRg7GOMCGIAEMg0IARAuGK8BGMcBGIAEMgYIAhBFGEAyCAgDEAAYFhgeMggIBBAAGBYYHjIICAUQABgWGB4yCAgGEAAYFhgeMggIBxAAGBYYHtIBBzc5OWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8' target="_blank">
              <img src="/assets/images/centrocultural.png" alt="Centro Cultural São Paulo (CCSP)" />
              <div className="info">
                <h3>Centro Cultural São Paulo (CCSP)</h3>
                <p>Rua Vergueiro, 1000 - Liberdade.</p>
              </div>
              </a>
            </div>

            <div className="local-card grande">
              <a href='https://museudoipiranga.org.br/' target="_blank">
              <img src="/assets/images/museuipiranga.png" alt="Museu do Ipiranga" />
              <div className="info">
                <h3>Museu do Ipiranga</h3>
                <p>Parque da Independência - Ipiranga</p>
              </div>
              </a>
            </div>
          </div>

          {/* Direita */}
          <div className="coluna-direita">
            <div className="local-card pequeno">
              <a href='htthttps://prefeitura.sp.gov.br/web/cultura/bma' target="_blank">
              <img src="/assets/images/biblioteca.png" alt="Biblioteca Mário de Andrade" />
              <div className="info">
                <h3>Biblioteca Mário de Andrade</h3>
                <p>Rua da Consolação, 94 - República</p>
              </div>
              </a>
            </div>

            <div className="local-card pequeno">
              <a href='https://www.tripadvisor.com.br/Attraction_Review-g303631-d550339-Reviews-Paulista_Avenue-Sao_Paulo_State_of_Sao_Paulo.html' target="_blank">
              <img src="/assets/images/avenidapaulista.png" alt="Paulista Aberta" />
              <div className="info">
                <h3>Casa de Cultura do Butantã</h3>
                <p>Av. Junta Mizumoto, 13 - Jardim Peri</p>
              </div>
              </a>
            </div>

            <div className="local-card pequeno central">
              <a href='https://cinemateca.org.br/' target="_blank">
              <img src="/assets/images/cinema.png" alt="Cinemateca Brasileira" />
              <div className="info">
                <h3>Cinemateca Brasileira</h3>
                <p>Largo Sen. Raul Cardoso, 207 - Vila Clementino</p>
              </div>
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* MAPA */}
      <main>
        <section className="containerPesquisaMapa">
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
                <i className="fa-solid fa-magnifying-glass icone-pesquisar"></i>
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
        <div className="button-container">
            <Link to="/login-administrativo">
              <button className="col">Painel administrativo</button>
            </Link>

            <Link to="/Desenvolvedores">
              <button className="col">Colaboradores</button>
            </Link>
          </div>
      </footer>

    </div>
  );
}

export default Cultura;
