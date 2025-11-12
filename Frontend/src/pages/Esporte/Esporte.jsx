import { useState } from 'react';
import './Esporte.scss';
import { Link } from "react-router-dom";
import BuscaCEPEsporte from '../../components/BuscaCEPEsporte';


export default function Esporte() {
  const [pesquisa, setPesquisa] = useState('');
  const [cep, setCep] = useState('');
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
      const response = await fetch(`http://localhost:5010/api/esportes?nome=${encodeURIComponent(pesquisa)}`);
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

    e.preventDefault();
    console.log(`Texto pesquisado: ${pesquisa}`);
  };

  const handleCepChange = (e) => setCep(e.target.value);

  const handleCepSubmit = (e) => {
    e.preventDefault();
    console.log(`CEP pesquisado: ${cep}`);
  };



  return (
    <div className='container-esporte'>
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

      <section
        className="hero esporte-hero"
        style={{ backgroundImage: `url(/assets/images/tenis.png)` }}
      >
        <h1>Esportes</h1>
      </section>

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

        <section className="pesquisaEsporte">
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



      <section className="areaClubes">
        <h2>Clubes</h2>

        <div className="locais-grid">
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

      <main>
         <section className="containerPesquisaMapa">
                  <h2>Veja locais próximos de você</h2>
                  <div className="containerPesquisaMapa">
                    <section className="pesquisaCulturaMapa">
                             <BuscaCEPEsporte onEnderecoEncontrado={(bairroEncontrado) => setBairro(bairroEncontrado)} />
                      
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
            title="Mapa de locais esportivos em São Paulo"
          ></iframe>
        </section>
      </main>

      <footer className="rodapeE">
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
  );
}