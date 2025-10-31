import { useState } from 'react';
import './Lazer.scss';
import { Link } from "react-router-dom";


export default function Lazer() {
  const [pesquisa, setPesquisa] = useState('');

  const handleInputChange = (e) => setPesquisa(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Texto pesquisado: ${pesquisa}`);
  };

  return (
    <><div className='container-lazer'>

      {/* Topo */}
      <header className="topo">
        <div className="logo">Localiza<span>LivreSP</span></div>
        <nav>
          <Link to="/cultura">Cultura</Link>
          <Link to="/lazer">Lazer</Link>
          <Link to="/Esporte" className="active">Esportes</Link>
          <Link to='/'><i class="fa-solid fa-house"></i></Link>
        </nav>
      </header>


      {/* Imagem de fundo do topo */}
      <section
        className="hero lazer-hero"
        style={{ backgroundImage: `url(/assets/images/lazerpg.jpg)` }}
      >
        <h1>Lazer</h1>
      </section>

      <section className="desc-lazer">
        <p>
          “Descubra opções de lazer gratuito em São Paulo! Aqui você encontra ONGs, parques, institutos, cinemas e museus que oferecem atividades culturais, educativas e de entretenimento sem custo. Explore espaços próximos a você e aproveite a cidade de forma acessível e inclusiva.”
        </p>
        <img
          src="/assets/images/lazer2.jpg"
          alt="Descrição lazer"
          className="fotoLazer"
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
            <button type="submit" className="searchButton" />
          </form>
        </section>
      </div>

      {/* Clubes */}
      
      {/* Slides de locais de lazer */}
      <section className="slides-lazer">
        <h2>Pontos de Lazer em São Paulo</h2>
        <div className="slides-container">
          <div className="slide">
            <img src="/assets/images/masp.jpg" alt="MASP" />
            <p><strong>MASP</strong></p>
          </div>
          <div className="slide">
            <img src="/assets/images/mirante.jpg" alt="Mirante do Sesc" />
            <p><strong>Mirante do Sesc</strong></p>
          </div>
          <div className="slide">
            <img src="/assets/images/ibirapuera.jpg" alt="Parque Ibirapuera" />
            <p><strong>Parque Ibirapuera</strong></p>
          </div>
        </div>
      </section>
      {/* Locais */}
      <section className="locais">
        <h2>Locais</h2>

        <div className="locais-grid">
          {/* Esquerda */}
          <div className="coluna-esquerda">
            <div className="local-card grande">
              <img src="/assets/images/museu.jpg" alt="Parque da Independência" />
              <div className="info">
                <h3>Parque da Independência</h3>
                <p>Av. Nazaré, s/n – Ipiranga</p>
              </div>
            </div>

            <div className="local-card grande">
              <img src="/assets/images/butantan.jpg" alt="Parque da Ciência do Instituto Butantan" />
              <div className="info">
                <h3>Parque da Ciência do Instituto Butantan</h3>
                <p>Avenida Vital Brasil, 1500 – Butantã</p>
              </div>
            </div>
          </div>

          {/* Direita */}
          <div className="coluna-direita">
            <div className="local-card pequeno">
              <img src="/assets/images/sesc.jpg" alt="Sesc SP" />
              <div className="info">
                <h3>Sesc SP</h3>
                <p>Rua Padre Adelino, 1000 – Belenzinho</p>
              </div>
            </div>

            <div className="local-card pequeno">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5hNpTPDNRfH58xAHWQ3VUFSreaPRY8Wvc7w&s" alt="Paulista Aberta" />
              <div className="info">
                <h3>Paulista Aberta</h3>
                <p>Av. Paulista, 900</p>
              </div>
            </div>

            <div className="local-card pequeno central">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8fFL8I_dVcR34uklRZEYUyCMBXem-tm-R1w&s" alt="Cinemateca Brasileira" />
              <div className="info">
                <h3>Cinemateca Brasileira</h3>
                <p>Largo Sen. Raul Cardoso, 207 – Vila Clementino</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <main>
        <section className="mapa">
          <h2>Veja lugares mais proximos de você para seu lazer e da sua familia!</h2>
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
      <footer className="rodapeLazer">
        <div className="container">
          <div className="logo">Localiza<span>LivreSP</span></div>
          <h4>Descubra cultura, lazer e esportes gratuitos em São Paulo</h4>
          <p>© LocalizaLivreSP — Conectando a cidade.</p>
        </div>
      </footer>
            </div>
    </>
  );
}