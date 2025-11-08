import { useState } from 'react';
import './Lazer.scss';
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";



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
        <Link to='/' className='Link'>
        <div className="logo">Localiza<span>LivreSP</span></div>
        </Link>
        <nav>
          <Link to="/cultura">Cultura</Link>
          <Link to="/Esporte" className="active">Esportes</Link>
          <Link to='/'><i class="fa-solid fa-house"></i></Link>
        </nav>
      </header>


      
      <section
        className="hero lazer-hero"
        style={{ backgroundImage: `url(/assets/images/lazer.png)` }}
      >
        <h1>Lazer</h1>
      </section>

      <section className="desc-lazer">
        <p>
          Descubra opções de lazer gratuito em São Paulo! Aqui você encontra ONGs, parques, institutos, cinemas e museus que oferecem atividades culturais, educativas e de entretenimento sem custo. Explore espaços próximos a você e aproveite a cidade de forma acessível e inclusiva.
        </p>
        <img
          src="/assets/images/lazer.jpg"
          alt="Descrição lazer"
          className="fotoLazer"
        />
      </section>

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

         <section className="parques">
          
          <div className="cartoes">
            <article className="cartao">
              <a href='https://www.parquedoibirapuera.org/' className='link-categorias'>
                <img src="https://i.pinimg.com/736x/b1/58/46/b1584660ec016e5fbad337b0061b9b39.jpg" alt="Parque 1" />
                <h3>Parque do Ibirapuera</h3>
                <p>Ótimo para caminhadas e piqueniques. Entrada gratuita.</p>
              </a>
            </article>

            <article className="cartao">
              <a href='https://prefeitura.sp.gov.br/web/meio_ambiente/w/parques/regiao_sul/5747' className='link-categorias'>

                <img src="https://i.pinimg.com/1200x/bc/6b/11/bc6b1167e29bbf927e5a380c8a4113b0.jpg" alt="Parque 2" />
                <h3>Parque  Indepencia</h3>
                <p>Eventos culturais, exposições e muito espaço para atividades.</p>
              </a>
            </article>

            <article className="cartao">
              <a href='https://parquevillalobos.com.br/' className='link-categorias'>

                <img src="https://i.pinimg.com/1200x/17/7a/bc/177abc0fd9ecac38ac42937f7d2dbb29.jpg" alt="Parque 3" />
                <h3>Parque Villa-Lobos</h3>
                <p>Área esportiva e pistas de corrida — ideal para famílias.</p>
              </a>
            </article>

            <article className="cartao">
              <a href='https://www.parqueecologicodotiete.com.br/' className='link-categorias'>
                <img src="https://www.parqueecologicodotiete.com.br/content-wp/uploads/2017/08/parque-ecologico-tiete-peda.jpg" alt="Parque 4" />
                <h3>parque ecologico tiete</h3>
                <p>  Trilhas, ciclovia, quadras, campos, pedalinho, playgrounds, lanchonetes, CRAS e museu .</p>
              </a>
            </article>

          </div>
        </section>
      
      <section className="locais">
        <h2>Locais</h2>

        <div className="locais-grid">
          <div className="coluna-esquerda">
            <a href='https://prefeitura.sp.gov.br/meio_ambiente/w/parques/regiao_sul/5747' target="_blank">
            <div className="local-card grande">
              <img src="/assets/images/parqueind.png" alt="Parque da Independência" />
              <div className="info">
                <h3>Parque da Independência</h3>
                <p>Av. Nazaré, s/n - Ipiranga</p>
              </div>
            </div>
            </a>

            <div className="local-card grande">
              <a href='https://parquedaciencia.butantan.gov.br/' target="_blank">
              <img src="/assets/images/ciencia.png" alt="Parque da Ciência do Instituto Butantan" />
              <div className="info">
                <h3>Parque da Ciência do Instituto Butantan</h3>
                <p>Avenida Vital Brasil, 1500 - Butantã</p>
              </div>
              </a>
            </div>
          </div>

          {/* Direita */}
          <div className="coluna-direita">
            <div className="local-card pequeno">
              <a href='https://www.sesc.com.br/unidade/sesc-belenzinho/' target="_blank">
              <img src="/assets/images/sesc.png" alt="Sesc SP" />
              <div className="info">
                <h3>Sesc SP</h3>
                <p>Rua Padre Adelino, 1000 - Belenzinho</p>
              </div>
              </a>
            </div>

            <div className="local-card pequeno">
              <a href='https://www.melhoresdestinos.com.br/avenida-paulista.html' target="_blank">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5hNpTPDNRfH58xAHWQ3VUFSreaPRY8Wvc7w&s" alt="Paulista Aberta" />
              <div className="info">
                <h3>Paulista Aberta</h3>
                <p>Av. Paulista, 900</p>
              </div>
              </a>
            </div>

            <div className="local-card pequeno central">
              <a href='https://cinemateca.org.br/' target="_blank">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8fFL8I_dVcR34uklRZEYUyCMBXem-tm-R1w&s" alt="Cinemateca Brasileira" />
              <div className="info">
                <h3>Cinemateca Brasileira</h3>
                <p>Largo Sen. Raul Cardoso, 207 - Vila Clementino</p>
              </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <main>
        <section className="containerPesquisaMapa">
          <h2>Veja lugares mais proximos de você!</h2>
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
            ></iframe>
        </section>
      </main>

      <footer className="rodapeL">
  <div className="container-roda">
    <div className="logo-roda">
      Localiza<span>LivreSP</span>
    </div>

    <p className="descricaoo">
    <h4>Descubra cultura, lazer e esportes gratuitos em São Paulo</h4></p>

    <div className="redes-sociaiss">
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="icone"
      >
        <FaInstagram />
      </a>
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="icone"
      >
        <FaFacebook />
      </a>
      <a
        href="https://www.tiktok.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="icone"
      >
        <FaTiktok />
      </a>
    </div>

    <div className="button-container">
            <Link to="/login-administrativo">
              <button className="col">Painel administrativo</button>
            </Link>
            <Link to="/Desenvolvedores">
              <button className="col">Colaboradores</button>
            </Link>
          </div>

 

    <p className="copys">© {new Date().getFullYear()} LocalizaLivreSP — Conectando a cidade. — Todos os direitos reservados.</p>
  </div>
</footer>
            </div>
    </>
  );
}