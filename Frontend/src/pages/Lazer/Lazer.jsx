import { useState } from 'react';
import './Lazer.scss';
import { Link } from "react-router-dom";
import BuscaCEPLazer from '../../components/BuscaCEPLazer';

export default function Lazer() {
  const [pesquisa, setPesquisa] = useState('');
  const [resultados, setResultados] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState("");
  const [bairro, setBairro] = useState("");

  const handleInputChange = (e) => {
    setPesquisa(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`Texto pesquisado: ${pesquisa}`);

    if (!pesquisa.trim()) {
      setErro("Digite algo para pesquisar.");
      setResultados([]);
      return;
    }

    setCarregando(true);
    setErro("");
    setResultados([]);

    try {
      const response = await fetch(`http://localhost:5010/api/lazer?nome=${encodeURIComponent(pesquisa)}`);
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


    const handleCepChange = (e) => setCep(e.target.value);

  }


  return (
    <><div className='container-lazer'>

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

        <section className="pesquisaLazer">
          <form onSubmit={handleSubmit} className="searchForm">
            <input
              type="text"
              placeholder="Buscar por nome"
              value={pesquisa}
              onChange={handleInputChange}
              className="searchInput"
              aria-label="Campo de busca por locais de lazer"
            />
            <button type="submit" className="searchButton">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>

          {carregando && <p>Buscando locais de lazer...</p>}
          {erro && <p style={{ color: "red" }}>{erro}</p>}

          {resultados.length > 0 && (
            <div className="resultados-lazer">
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

      <section className="parques">
         <h2>Mais populares</h2>
        <p className="leadpopu">veja aqui os lugares para lazer mais frenquentados da cidade.</p>

        <div className="cartoes">
          <article className="cartao">
            <a href='https://www.circuitospcine.com.br/' className='link-categorias'>
              <img src="https://spcine.com.br/wp-content/uploads/butantc3a3-10.jpg" alt="Parque 1" />
              <h3>circuito spcine  </h3>
              <p> rede de salas de cinema públicas,acesso gratuito ao cinema: 27 CEUS e 5 Centros Culturais.</p>
            </a>
          </article>

          <article className="cartao">
            <a href='https://www.mercadomunicipalsp.com/' className='link-categorias'>

              <img src="https://www.mercadomunicipalsp.com/wp-content/uploads/2016/12/mercadaosp.jpg" alt="Parque 2" />
              <h3>Mercado Municipal de São Paulo  </h3>
              <p>Endereço: R. da Cantareira, 306 - Centro Histórico de São Paulo, São Paulo - SP, 01024-900.</p>
            </a>
          </article>

          <article className="cartao">
            <a href='https://minhasinscricoes.com.br/evento/vamostrilhar2025' className='link-categorias'>

              <img src="https://offloadmedia.feverup.com/saopaulosecreto.com/wp-content/uploads/2025/02/25174720/vamos-trilhar-sp-1024x683.jpeg" alt="Parque 3" />
              <h3> Vamos Trilhar</h3>
              <p>depende da trilha específica que você escolher, pois os pontos de embarque e os parques são diferentes.  </p>
            </a>
          </article>

          <article className="cartao">
            <a href='https://www.parqueecologicodotiete.com.br/' className='link-categorias'>
              <img src="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxZtr-jOvHm4I2yEDU7TBSPyNye_rFouply8WDAVqfieXHwxPJaumtf3i63CuzKMepAYSSnPrFVcM9beqwk3kvB7DH_cOIlgcLB5ZYdlTgELYjHN139mnYz_pgyGU06BKD-E6Q=s680-w680-h510-rw" alt="Parque 4" />
              <h3>Beco do Batman</h3>
              <p> Endereço: R. Medeiros de Albuquerque, 82-154 - Jardim das Bandeiras, São Paulo - SP, 05436-060</p>
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

      <main>
        <section className="containerPesquisaMapa">
          <h2>Veja locais próximos de você</h2>
          <div className="containerPesquisaMapa">
            <section className="pesquisaCulturaMapa">
              <BuscaCEPLazer onEnderecoEncontrado={(bairroEncontrado) => setBairro(bairroEncontrado)} />

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