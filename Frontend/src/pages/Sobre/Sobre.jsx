import { Link } from "react-router-dom";
import "./Sobre.scss";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

function Sobre() {
  return (
    <>
      <main className="sobre-mainn">
        <section className="sobre-heroo">
          <div className="containerso">
            <h1 className="titulo-sobre">
            Localiza<span className="logo-sobre">LivreSP</span>
            </h1>
            <p className="descricao-sobre">
              Conectando você às melhores atividades gratuitas e acessíveis em São Paulo.
            </p>
          </div>
        </section>

        <section className="sobre-contente container">
          <div className="sectionsobre">
            <h2><span>Nossa Missão</span></h2>
            <p>
              O <span>LocalizaLivreSP</span> é o seu <span>guia definitivo</span> para
              descobrir <span>eventos culturais</span>, <span>esportivos</span> e de
              <span> lazer gratuitos</span> na cidade de <span>São Paulo</span>.
              <br />
              <span>Nosso objetivo</span> é <span>promover o acesso à cultura, ao esporte e ao lazer</span> 
              para todas as famílias, facilitando a localização de atividades que enriquecem a vida urbana.
            </p>
          </div>

          <div className="sectionsobre">
            <h2><span>O que Oferecemos</span></h2>
            <ul>
              <li><strong>Eventos Culturais:</strong> Exposições, shows, teatros e muito mais em espaços públicos.</li>
              <li><strong>Atividades Esportivas:</strong> Quadras, pistas e eventos para todas as idades.</li>
              <li><strong>Lazer ao Ar Livre:</strong> Parques, feiras e passeios familiares.</li>
             
            </ul>
            <p>
              A cidade de <span>São Paulo</span> oferece uma <span>infinidade de oportunidades</span> para se
              <span> divertir e aprender</span> sem gastar muito. Aqui, você encontra tudo isso de forma
              <span> organizada</span> e <span>fácil de acessar</span>.
            </p>
          </div>

          <div className="sectionsobre">
            <h2><span>Nossa História</span></h2>
            <p>
              Fundado em <span>2025</span> por um grupo da <span>cidade paulistana</span>, o
              <span> LocalizaLivreSP</span> nasceu da necessidade de <span>democratizar o acesso</span> às atividades gratuitas da cidade.
              Inspirados pelas <span>ruas vibrantes</span> de São Paulo e pela <span>diversidade cultural</span>,
              criamos uma plataforma que conecta <span>moradores e visitantes</span> às riquezas culturais,
              esportivas e de lazer disponíveis. <br />
              Hoje, somos uma <span>comunidade engajada</span>, ajudando milhares de pessoas a
              descobrirem o <span>melhor de São Paulo</span> sem custos elevados.
            </p>
          </div>

          <div className="sectionsobre">
            <h2><span>Nossa Equipe</span></h2>
            <p>
              Nossa equipe é formada por <span>apaixonados por São Paulo</span>: designers urbanos,
              jornalistas culturais, educadores físicos e desenvolvedores tecnológicos. Cada membro traz
              uma <span>perspectiva única</span>, garantindo que a plataforma seja
              <span> inclusiva</span> e <span>acessível</span>. <br />
              todos comprometidos em tornar a navegação
              <span> simples, rápida e envolvente</span>.
            </p>
          </div>

          <div className="sectionsobre">
            <h2><span>Impacto na Comunidade</span></h2>
            <p>
              Desde o lançamento, o <span>LocalizaLivreSP</span> já impactou
              <span> mais de 50.000 usuários</span>, incentivando a <span>participação em eventos culturais e esportivos</span>.
              <br />
              Reduzimos o <span>isolamento social</span> em bairros periféricos e
              <span> aumentamos o acesso</span> a atividades locais, colaborando com
              <span> organizações parceiras</span> para expandir o lazer gratuito e inclusivo.
            </p>
          </div>

          <div className="sectionsobre">
            <h2><span>Planos Futuros</span></h2>
            <p>
              Planejamos expandir o <span>LocalizaLivreSP</span> com <span>mapas interativos</span>,
              <span> notificações em tempo real</span> e <span>parcerias</span> com prefeituras e ONGs.
              <br />
              Nossa <span>visão</span> é transformar São Paulo em uma cidade ainda mais
              <span> conectada, inclusiva e vibrante</span>, onde todos possam aproveitar o melhor
              <span> sem barreiras financeiras</span>.
            </p>
          </div>
        </section>
      </main>

      <footer className="rodape">
        <div className="container-roda">
          <div className="logoo-rodape">
            Localiza<span>LivreSP</span>
          </div>

          <h4 className="descricaoo">
            Descubra <span>cultura</span>, <span>lazer</span> e <span>esportes gratuitos</span> em <span>São Paulo</span>
          </h4>

          <div className="redes-sociaiss">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="icones">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="icones">
              <FaFacebook />
            </a>
            <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" className="icones">
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
            © {new Date().getFullYear()} DevPaulista — Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Sobre;
