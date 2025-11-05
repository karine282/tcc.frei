import { useState } from 'react';
import './Esporte.scss';
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

export default function Esporte() {
  const [pesquisa, setPesquisa] = useState('');
  const [cep, setCep] = useState(''); // Estado separado para o CEP no mapa

  const handleInputChange = (e) => setPesquisa(e.target.value);
  const handleCepChange = (e) => setCep(e.target.value); // Handler para CEP
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Texto pesquisado: ${pesquisa}`);
    // Aqui você pode adicionar lógica para buscar resultados
  };
  const handleCepSubmit = (e) => {
    e.preventDefault();
    console.log(`CEP pesquisado: ${cep}`);
    // Sugestão: Integre com API de mapas para atualizar o iframe dinamicamente
  };

  return (
    <div className='container-esporte'>
      {/* Topo */}
      <header className="topo">
        <Link to='/' className='Link'> 
        <div className="logo">Localiza<span>LivreSP</span></div>
        </Link>
        <nav>
          <Link to="/cultura">Cultura</Link>
          <Link to="/lazer">Lazer</Link>
          <Link to='/'><i className="fa-solid fa-house"></i></Link>
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
          src="/assets/images/voleiesporte.png"
          alt="Imagem ilustrativa de atividades esportivas, como vôlei"
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
                  <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </section>
      </div>

      {/* Clubes */}
      <section className="areaClubes">
        <h2>Clubes</h2>

        <div className="locais-grid">
          {/* Esquerda */}
          <div className="coluna-esquerda">
            <div className="local-card grande">
              <a href='https://www.bing.com/maps/search?name=Clube+Escola+Santo+Amaro&trfc=&mepi=0%7E%7EEmbedded%7ELargeMapLink&FORM=MPSRPL&style=r&q=Clube+Escola+Santo+Amaro&ss=id.ypid%3AYN7993x2110695150883685952&ppois=-23.65450096130371_-46.71187973022461_Clube+Escola+Santo+Amaro&cp=-23.654501%7E-46.711880&lvl=16' target='blank'>
              <img src="/assets/images/clube.png" alt="Centro Esportivo Santo Amaro - CEE Joerg Bruder" />
              <div className="info">
                <h3>Centro Esportivo Santo Amaro - CEE Joerg Bruder</h3>
                <p>Av. Padre José Maria, 555 - Santo Amaro</p>
              </div>
              </a>
            </div>
             <div className="local-card grande">
              <img src="/assets/images/clube.png" alt="Centro Esportivo Santo Amaro - CEE Joerg Bruder" />
              <div className="info">
                <h3>Centro Esportivo Santo Amaro - CEE Joerg Bruder</h3>
                <p>Av. Padre José Maria, 555 - Santo Amaro</p>
              </div>
            </div>
          </div>

          {/* Direita */}
          <div className="coluna-direita">
            <div className="local-card pequeno">
              <a href='https://www.bing.com/maps/search?name=Centro+Esportivo+Man%C3%A9+Garrincha&trfc=&mepi=0%7E%7EEmbedded%7ELargeMapLink&FORM=MPSRPL&style=r&q=Centro+Esportivo+Man%C3%A9+Garrincha&ss=id.ypid%3AYN7993x10007318974561949929&ppois=-23.598100662231445_-46.65359878540039_Centro+Esportivo+Man%C3%A9+Garrincha&cp=-23.598101%7E-46.653599&lvl=16' target='blank'>
              <img src="/assets/images/centroesportivo.png" alt="Centro Esportivo Ibirapuera - CEE Mané Garrincha" />
              <div className="info">
                <h3>Centro Esportivo Ibirapuera - CEE Mané Garrincha</h3>
                <p>Rua Pedro de Toledo, 1651 - Vila Clementino</p>
              </div>
              </a>
            </div>

            <div className="local-card pequeno">
              <a href='https://prefeitura.sp.gov.br/web/esportes/w/noticias/263149' target='blank'>
              <img src="/assets/images/vilaguarani.png" alt="Centro Esportivo Vila Guarani - CEE Riyuso Ogawa" />

              <div className="info">
                <h3>Centro Esportivo Vila Guarani - CEE Riyuso Ogawa</h3>
                <p>Rua Lussanvira, 178 - Vila Guarani</p>
              </div>
              </a>
            </div>

            <div className="local-card pequeno central">
              <a href='https://www.sescsp.org.br/unidades/interlagos/' target='blank'>
              <img src="/assets/images/sescinter.png" alt="Sesc interlagos " />

              <div className="info">
                <h3>Sesc Interlagos</h3>
                <p>Av. Manuel Alves Soares 1100, São Paulo, SP, 04821-270</p>
              </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <main>
        <section className="containerPesquisaMapa">
          <h2>Veja locais próximos de você</h2>
          <div className='containerPesquisaMapa'>
            <section className="pesquisaEsporteMapa">
              <form onSubmit={handleCepSubmit} className="searchForm">
                <input
                  type="text"
                  placeholder="Digite seu CEP"
                  value={cep}
                  onChange={handleCepChange}
                  className="searchInput"
                />
                <button type="submit" className="searchButton">
                  <i class="fa-solid fa-magnifying-glass"></i>
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
            title="Mapa de locais esportivos em São Paulo"
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