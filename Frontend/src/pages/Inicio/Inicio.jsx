import { useState } from 'react'
import './Inicio.scss'
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

function Inicio() {
  return (
    <>
      <header className="inicio">
        <div className="container comeco">
          <div className="logo">Localiza<span>LivreSP</span></div>
          <nav className="nave">
            <Link to="/Cultura">Cultura</Link>
            <Link to="/Esporte">Esporte</Link>
            <Link to="/Lazer">Lazer</Link>
            <Link to='/conta'><i class="fa-solid fa-circle-user"></i></Link>
          </nav>
        </div>
      </header>
      <main>
        <section className="atencao">
          <div className="parte1">
          </div>
          <div className="container hero-content">
            <h1>Bem-vindo ao melhor <span>GUIA DE EVENTOS</span> culturais da Cidade de São Paulo!</h1>
            <p className="hero-sub">Aqui você encontra atividades gratuitas e acessíveis para toda a família.</p>
            <nav className="hero-actions">
              <h3 className='pri'>
                <i class="fa-solid fa-user"></i>
                <Link to="/Login" className='link'>entrar</Link>
              </h3>
              <h3 className='seg'>
                <i class="fa-solid fa-file-pen icon-inicio"></i>
                <Link to="/Cadastro" className='link'>cadastre-se</Link></h3>

            </nav>
          </div>
        </section>

        <section className="feature container">
          <div className="feature-left">
            <img src="/assets/images/sub.jpg" alt="feature" />
          </div>
          <div className="feature-right">
            <p>
              Aqui você encontra as melhores opções para curtir a cidade — de forma gratuita ou acessível.
              Nosso objetivo é conectar a comunidade a tudo que São Paulo oferece: eventos culturais, atividades
              esportivas, feiras, exposições e lazer ao ar livre — com informações claras e atualizadas.
            </p>
            <ul>
              <li>Passeios com a família</li>
              <li>Cultura no seu bairro</li>
              <li>Esporte para todas as idades</li>
            </ul>
            <p>A cidade é sua. Aproveite!</p>
            <Link to='/Sobre'>
              <button className='sobre'>sobre nos</button>
            </Link>
          </div>
        </section>

        <section className="parques">
          <h2>Parques</h2>
          <p className="lead">Espaços verdes ideais para relaxar, se exercitar ou curtir momentos ao ar livre.</p>

          <div className="cartoes">
            <article className="cartao">
              <img src="https://i.pinimg.com/736x/b1/58/46/b1584660ec016e5fbad337b0061b9b39.jpg" alt="Parque 1" />
              <h3>Parque do Ibirapuera</h3>
              <p>Ótimo para caminhadas e piqueniques. Entrada gratuita.</p>
            </article>

            <article className="cartao">
              <img src="https://i.pinimg.com/1200x/bc/6b/11/bc6b1167e29bbf927e5a380c8a4113b0.jpg" alt="Parque 2" />
              <h3>Parque do Indepencia</h3>
              <p>Eventos culturais, exposições e muito espaço para atividades.</p>
            </article>

            <article className="cartao">
              <img src="https://i.pinimg.com/1200x/17/7a/bc/177abc0fd9ecac38ac42937f7d2dbb29.jpg" alt="Parque 3" />
              <h3>Parque Villa-Lobos</h3>
              <p>Área esportiva e pistas de corrida — ideal para famílias.</p>
            </article>

            <article className="cartao">
              <img src="https://www.parqueecologicodotiete.com.br/content-wp/uploads/2017/08/parque-ecologico-tiete-peda.jpg" alt="Parque 4" />
              <h3>parque ecologico tiete</h3>
              <p>  Trilhas, ciclovia, quadras, campos, pedalinho, playgrounds, lanchonetes, CRAS e museu .</p>
            </article>

          </div>
        </section>
      </main>

      <section className="container2">
        <div className="p2">
          <h2>Programação ceu’s</h2>
          <img src="" alt="" />  centros educacionais unificados
          <p>
            Os CEUs foram construídos com o objetivo de promover uma educação à população de maneira integral, democrática, emancipatória, humanizadora e com qualidade social. Juntando não somente educação, mas também, a cultura, o esporte, lazer e recreação, possibilitando o desenvolvimento do ser humano como um todo, como pessoa de direitos e deveres e dono de sua história.
          </p>
        </div>
        <div className="p3">
          <img src="https://educacaoeterritorio.org.br/wp-content/uploads/portal_aprendiz/2015/08/ceu5.jpg" alt="CEU" />
          <a className="btn btn-segundo" href="https://ceu.sme.prefeitura.sp.gov.br/programacao/">Saiba mais</a>
        </div>
      </section>

      <h1>Categorias</h1>
      <p class="subtitulo">veja o que você está procurando no momento</p>

      <div class="categorias">
        <div class="categoria">
          <img src="/assets/images/esportes.jpg" />
          <p>esportes</p>
        </div>

        <div class="categoria">
          <img src="/assets/images/cultu.jpg" />
          <p>espaços<br />culturais</p>
        </div>

        <div class="categoria">
          <img src="/assets/images/lazer.jpg" />
          <p>lazer</p>
        </div>
      </div>


      <section className="parcerias">
        <h2>Nossas Parcerias</h2>
        <p className="lead">Empresas e organizações que apoiam nossa missão de conectar a comunidade a eventos gratuitos em São Paulo.</p>
        <div className="carousel">
          <div className="carousel-inner">
            <div className="parceria-item">
              <img src="/assets/images/clube.png" alt="Parceria 1" />
              <h3>Clube de Esportes</h3>
            </div>
            <div className="parceria-item">
              <img src="/assets/images/tenis.png" alt="Parceria 2" />
              <h3>Tenis Clube</h3>
            </div>
            <div className="parceria-item">
              <img src="/assets/images/voleiesporte.png" alt="Parceria 3" />
              <h3>Vôlei Esporte</h3>
            </div>
            <div className="parceria-item">
              <img src="/assets/images/instagram.png" alt="Parceria 4" />
              <h3>Instagram</h3>
            </div>
            {/* Add more parceria-items as needed */}
          </div>
        </div>
      </section>

      <footer className="rodape">
        <div className="container">
          <div className="logo">
            Localiza<span>LivreSP</span>
          </div>

          <h4>Descubra cultura, lazer e esportes gratuitos em São Paulo</h4>

          <div className="redes">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="icones"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="icones"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="icones"
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



          <p>© LocalizaLivreSP — Conectando a cidade.</p>
        </div>
      </footer>
    </>
  )
}

export default Inicio
