import { Link } from "react-router-dom";
import "./Cultura.scss";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import BuscaCEP from "../../components/BuscaCEPCultura.jsx";



function Cultura() {
  const [pesquisa, setPesquisa] = useState("");
  const [bairro, setBairro] = useState("");

  const locaisCulturais = [
  { nome: "Centro Cultural São Paulo", bairro: "Liberdade" },
  { nome: "Museu do Ipiranga", bairro: "Ipiranga" },
  { nome: "Biblioteca Mário de Andrade", bairro: "República" },
  { nome: "Casa das Rosas", bairro: "Bela Vista" },
  { nome: "Casa de Cultura do Butantã", bairro: "Butantã" },
];



  const handleInputChange = (e) => {
    setPesquisa(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Pesquisa enviada:", pesquisa);
    setPesquisa("");
  };

  return (
    <div className="container-cultura">
      <header className="topo">
        <div className="logo">
          <Link to='/' className="Link">
          Localiza<span>LivreSP</span>
          </Link>
        </div>
        <nav>
          <Link to="/lazer">Lazer</Link>
          <Link to="/Esporte">Esportes</Link>
          <Link to="/" aria-label="Página inicial">
            <i className="fa-solid fa-house"></i>
          </Link>
        </nav>
      </header>

      <section
        className="hero cultura-hero"
        style={{ backgroundImage: `url(/assets/images/cul.jpg)` }}
      >
        <h1>Locais Culturais</h1>
      </section>

      <section className="desc-cultura">
        <p>
          Explore centros culturais, museus, bibliotecas, teatros, casas de cultura e projetos comunitários que promovem arte, conhecimento e criatividade de forma acessível. Descubra oficinas, exposições, apresentações e eventos gratuitos ou de baixo custo perto de você. Conecte-se com a cultura, aprenda algo novo e viva experiências enriquecedoras para todas as idades!
        </p>
        <img
          src="/assets/images/cultural.jpg"
          alt="Imagem ilustrativa de atividades culturais em São Paulo"
          className="fotoCultura"
          loading="lazy"
        />
      </section>

    <section className="pesquisaCultura">
  <form onSubmit={handleSubmit} className="searchForm">
    <input
      type="text"
      placeholder="Buscar por nome, categoria, bairro ou atividade..."
      value={pesquisa}
      onChange={handleInputChange}
      className="searchInput"
      aria-label="Campo de busca por locais culturais"
    />
    <button type="submit" className="searchButton">
      <i className="fa-solid fa-magnifying-glass"></i>
    </button>
  </form>


</section>

  <section className="populares">
          <h2>Mais populares</h2>
          <p className="leadpopu">veja aqui os lugares culturais mais frenquentados da cidade.</p>

          <div className="cartoes">
            <article className="cartao">
              <a href='https://www.masp.com.br/' className='link-categorias'>
                <img src="assets/images/masp.webp" />
                <h3> Museu de Arte de SP </h3>
                <p>Localização: Av. Paulista, 1578 – Bela Vista, São Paulo, SP.
                  Verifique os dias de gratuidade.</p>
              </a>
            </article>

            <article className="cartao">
              <a href='https://museuafrobrasil.org.br/' className='link-categorias'>

                <img src="assets/images/AFRO.jpg" />
                <h3>Museu Afro Brasil </h3>
                <p>Localização:Parque Ibirapue
                  ra, portão 10.
                  Quartas-feiras
                </p>
              </a>
            </article>

            <article className="cartao">
              <a href='https://parquevillalobos.com.br/' className='link-categorias'>
                <img src="assets/images/ipiranga.jpg" />

                <h3>Museu do Ipiranga  </h3>
                <p>Localização:Rua dos Patriotas, 100.
                  Quartas-feiras; 1º domingo do mês; feriados:25/1 e 7/9.
                </p>
              </a>
            </article>

            <article className="cartao">
              <a href='https://pinacoteca.org.br/' className='link-categorias'>
                <img src="assets/images/pinaco.jfif" />
                <h3>parque ecologico tiete</h3>
                <p>  Trilhas, ciclovia, quadras, campos, pedalinho, playgrounds, lanchonetes, CRAS e museu .</p>
              </a>
            </article>

          </div>
        </section>
   


      <section className="areaCultura">
        <h2>Espaços Culturais</h2>

        <div className="locais-grid">
          <div className="coluna-esquerda">
            <a
              href="https://www.google.com/maps?q=Centro+Cultural+São+Paulo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver Centro Cultural São Paulo no Google Maps"
            >
              <div className="local-card grande">
                <img src="/assets/images/ccsp.png" alt="Centro Cultural São Paulo" loading="lazy" />
                <div className="info">
                  <h3>Centro Cultural São Paulo (CCSP)</h3>
                  <p>Rua Vergueiro, 1000 - Liberdade</p>
                </div>
              </div>
            </a>

            <a
              href="https://www.google.com/maps?q=Museu+do+Ipiranga,+São+Paulo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver Museu do Ipiranga no Google Maps"
            >
              <div className="local-card grande">
                <img src="/assets/images/museuipiranga.png" alt="Museu do Ipiranga" loading="lazy" />
                <div className="info">
                  <h3>Museu do Ipiranga</h3>
                  <p>Parque da Independência - Ipiranga</p>
                </div>
              </div>
            </a>
          </div>

          <div className="coluna-direita">
            <a
              href="https://www.google.com/maps?q=Biblioteca+Mário+de+Andrade,+São+Paulo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver Biblioteca Mário de Andrade no Google Maps"
            >
              <div className="local-card pequeno">
                <img src="/assets/images/biblioteca.png" alt="Biblioteca Mário de Andrade" loading="lazy" />
                <div className="info">
                  <h3>Biblioteca Mário de Andrade</h3>
                  <p>Rua da Consolação, 94 - República</p>
                </div>
              </div>
            </a>

            <a
              href="https://www.google.com/maps?q=Casa+de+Cultura+do+Butantã,+São+Paulo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver Casa de Cultura do Butantã no Google Maps"
            >
              <div className="local-card pequeno">
                <img src="/assets/images/casacultura.png" alt="Casa de Cultura do Butantã" loading="lazy" />
                <div className="info">
                  <h3>Casa de Cultura do Butantã</h3>
                  <p>Av. Junta Mizumoto, 13 - Jardim Peri</p>
                </div>
              </div>
            </a>

            <a
              href="https://www.google.com/maps?q=Casa+das+Rosas,+São+Paulo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver Casa das Rosas no Google Maps"
            >
              <div className="local-card pequeno central">
                <img src="/assets/images/casadasrosas.webp" alt="Casa das Rosas" loading="lazy" />
                <div className="info">
                  <h3>Casa das Rosas</h3>
                  <p>Av. Paulista, 37 - Bela Vista</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <main>
        <section className="containerPesquisaMapa">
          <h2>Veja locais próximos de você</h2>
          <div className="containerPesquisaMapa">
            <section className="pesquisaCulturaMapa">
             
              <BuscaCEP onEnderecoEncontrado={(bairroEncontrado) => setBairro(bairroEncontrado)} />

{bairro && (
  <div className="resultado-bairro">
   
    <ul>
      {locaisCulturais
        .filter((local) =>
          local.bairro.toLowerCase() === bairro.toLowerCase()
        )
        .map((local) => (
          <li key={local.nome}>{local.nome}</li>
        ))}
    </ul>

   
  </div>
)}

            </section>
          </div>

          <br />
          <br />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.385218520387!2d-46.6623393850227!3d-23.590475184667895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c2d6a9b6bb%3A0x67b198b8f4cdbb!2sAvenida%20Paulista!5e0!3m2!1spt-BR!2sbr!4v1234567890"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Mapa de locais culturais em São Paulo"
          ></iframe>
        </section>
      </main>
<br /><br /><br /> 
      <footer className="rodapeC">
  <div className="container-roda">
    <div className="logo-roda">
      Localiza<span>LivreSP</span>
    </div>

  <div className="descricaoo">
  <h4>Descubra cultura, lazer e esportes gratuitos em São Paulo</h4>
</div>

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
  );
}

export default Cultura;