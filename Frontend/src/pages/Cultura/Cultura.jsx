import { Link } from "react-router-dom";
import "./Cultura.scss";
import { useState } from "react";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import BuscaCEP from "../../components/BuscaCEP.jsx";

function Cultura() {
  const [pesquisa, setPesquisa] = useState("");
  const [resultados, setResultados] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState("");
  const [bairro, setBairro] = useState("");

  const handleInputChange = (e) => {
    setPesquisa(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!pesquisa.trim()) {
      setErro("Digite algo para pesquisar.");
      setResultados([]);
      return;
    }

    setCarregando(true);
    setErro("");
    setResultados([]);

    try {
      const response = await fetch(`http://localhost:5010/api/cultura?nome=${encodeURIComponent(pesquisa)}`);
      const data = await response.json();
      console.log("Data recebida:", data);


      if (response.ok) {
        setResultados(data.resultados);
        if (!data || data.resultados.length === 0) {
          setErro("Nenhum local cultural encontrado.");
        }
      } else {
        setErro(data.erro || "Erro ao buscar locais culturais.");
      }
    } catch (error) {
      console.error(error);
      setErro("Erro ao conectar com o servidor.");
    } finally {
      setCarregando(false);
    }
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

      {/* Seção de Pesquisa */}
      <section className="pesquisaCultura">
        <form onSubmit={handleSubmit} className="searchForm">
          <input
            type="text"
            placeholder="Buscar por nome"
            value={pesquisa}
            onChange={handleInputChange}
            className="searchInput"
            aria-label="Campo de busca por locais culturais"
          />
          <button type="submit" className="searchButton">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>

        {carregando && <p>Buscando locais culturais...</p>}
        {erro && <p style={{ color: "red" }}>{erro}</p>}

        {resultados.length > 0 && (
          <div className="resultados-cultura">
            {resultados.map((local, index) => {
              const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(local.nome + " " + local.bairro)}`;
              return (
                <div key={index} className="cartao-resultado">
                  <h3>{local.nome}</h3>
                  <p>Bairro: {local.bairro}</p>
                  <a
                    href={mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="maps-link"
                    aria-label={`Abrir ${local.nome} no Google Maps`}
                  >
                    Ver no Google Maps
                  </a>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Seções existentes de parques e espaços culturais */}
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
              <h3>Parque  Independencia</h3>
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
              <h3>Parque Ecológico Tietê</h3>
              <p>Trilhas, ciclovia, quadras, campos, pedalinho, playgrounds, lanchonetes, CRAS e museu.</p>
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
                <img src="/assets/images/casadasrosas.png" alt="Casa das Rosas" loading="lazy" />
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
                      .filter((local) => local.bairro.toLowerCase() === bairro.toLowerCase())
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

      <footer className="rodapeC">
        <div className="container-roda">
          <div className="logo-roda">
            Localiza<span>LivreSP</span>
          </div>

          <div className="descricaoo">
            <h4>Descubra cultura, lazer e esportes gratuitos em São Paulo</h4>
          </div>

          <div className="redes-sociaiss">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="icone">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="icone">
              <FaFacebook />
            </a>
            <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" className="icone">
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

          <p className="copys">
            © {new Date().getFullYear()} LocalizaLivreSP — Conectando a cidade. — Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Cultura;
