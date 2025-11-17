import { useState } from 'react'
import './Inicio.scss'
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";


function Inicio() {
  return (
    <div className='container-inicio'>
      <header className="inicio">
        <div className="container-comeco">
          <div className="logo">Localiza<span>LivreSP</span></div>
          <nav className="nave">
            <Link to="/Cultura">Cultura</Link>
            <Link to="/Esporte">Esporte</Link>
            <Link to="/Lazer">Lazer</Link>
            <Link to="/Conta"><i className="fa-solid fa-circle-user"></i></Link>
          </nav>
        </div>
      </header>
      <main>
        <section className="inicio-hero">
          <div className="overlay"></div>
          <div className="hero-content">
            <h1>Bem-vindo ao melhor <span>GUIA DE EVENTOS  </span>
              culturais da Cidade de
              São Paulo!</h1>
            <p className="hero-sub">
              Aqui você encontra atividades gratuitas e acessíveis para toda a família.
            </p>
            <nav className="hero-actions">
              <h3 className="pri">
                <i className="fa-solid fa-user icon-inicio"></i>
                <Link to="/Login" className="link">entrar</Link>
              </h3>
              <h3 className="seg">
                <i className="fa-solid fa-file-pen icon-inicio"></i>
                <Link to="/Cadastro" className="link">cadastre-se</Link>
              </h3>
            </nav>
          </div>
        </section>

        <section className="desc ">
          <div className="desc-esquerda">
            <img src="https://blog.blablacar.com.br/wp-content/uploads/2024/06/sala-nobre-museu-do-ipiranga-sp.webp" alt="feature" />
          </div>
          <div className="desc-direita">
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
              <button className='bnt-sobre'>sobre nós</button>
            </Link>
          </div>
        </section>

        <section className="parques">
          <h2>Parques</h2>
          <p className="lead">Espaços verdes ideais para relaxar, se exercitar ou curtir momentos ao ar livre.</p>

          <div className="cartoes">
            <article className="cartao">
              <a href='https://www.parquedoibirapuera.org/' className='link-categorias' target="_blank">
                <img src="/assets/images/ibira.png" alt="Parque do Ibirapuera" />
                <h3>Parque do Ibirapuera</h3>
                <p>Ótimo para caminhadas e piqueniques. Entrada gratuita.</p>
              </a>
            </article>

            <article className="cartao">
              <a href='https://prefeitura.sp.gov.br/web/meio_ambiente/w/parques/regiao_sul/5747' className='link-categorias' target="_blank">

                <img src="/assets/images/independencia.png" alt="Parque  Indepencia" />
                <h3>Parque  Indepencia</h3>
                <p>Eventos culturais, exposições e muito espaço para atividades.</p>
              </a>
            </article>

            <article className="cartao">
              <a href='https://parquevillalobos.com.br/' className='link-categorias' target="_blank">

                <img src="/assets/images/villa.png" alt="Parque Villa-Lobos" />
                <h3>Parque Villa-Lobos</h3>
                <p>Área esportiva e pistas de corrida — ideal para famílias.</p>
              </a>
            </article>

            <article className="cartao">
              <a href='https://www.parqueecologicodotiete.com.br/' className='link-categorias' target="_blank">
                <img src="/assets/images/parqueeco.png" alt="parque ecologico tiete" />
                <h3>parque ecologico tiete</h3>
                <p>  Trilhas, ciclovia, quadras, campos, pedalinho, playgrounds, lanchonetes, CRAS e museu .</p>
              </a>
            </article>

          </div>
        </section>
      </main>

      <section className="container2">
        <div className="p2">
          <h2 >Programação ceu's</h2>
         
          <p className=''>Centros educacionais unificados</p>
          <p>
            Os CEUs foram construídos com o objetivo de promover uma educação à população de maneira integral, democrática, emancipatória, humanizadora e com qualidade social. Juntando não somente educação, mas também, a cultura, o esporte, lazer ,recreação e cinema gratuito , possibilitando o desenvolvimento do ser humano como um todo, como pessoa de direitos e deveres e dono de sua história.
          </p>
          <Link className='btn btn-ceus' to='/UnidadesCeus'>Encontrar Unidades</Link>
        </div>
        <div className="p3">
          <img src="https://pbs.twimg.com/media/GcW4CGNWoAAe1_1?format=jpg&name=4096x4096" alt="CEU" />
          <a className="btn btn-segundo" href="https://ceu.sme.prefeitura.sp.gov.br/programacao/" target="_blank">Saiba mais</a>
        </div>
      </section>

      <h1>Categorias</h1>
      <p class="subtitulo">veja o que você está procurando no momento</p>

      <div class="categorias">
        <Link to='/Esporte' className='link-categorias'>
          <div className="categoria">
            <img src="/assets/images/esportes.jpg" />
            <p>esportes</p>
          </div>
        </Link>

        <Link to='/Cultura' className='link-categorias'>
          <div className="categoria">
            <img src="/assets/images/culture.jpg" />
            <p>espaços<br />culturais</p>
          </div>
        </Link>

        <Link to='/Lazer' className='link-categorias'>
          <div className="categoria">
            <img src="/assets/images/lazer.jpg" />
            <p>lazer</p>
          </div>
        </Link>
      </div>


      <section className="parcerias">
        <h2>Nossas Parcerias</h2>
        <p className="lead">Empresas e organizações que apoiam nossa missão de conectar a comunidade a eventos gratuitos em São Paulo.</p>
        <div className="carousel">
          <div className="parcerias1">
            <div className="parceria">
              <a href="https://prefeitura.sp.gov.br/web/esportes" target="_blank"><img src="/assets/images/secretaria.png" /></a>
              <h3>Secretaria Municipal de Esportes e Lazer </h3>
            </div>
            <div className="parceria">
              <a href="https://sampacultura.com/" target="_blank"><img src="/assets/images/sampa.png" /></a>
              <h3>sampa cultural </h3>
            </div>
            <div className="parceria">
              <a href="https://educacao.sme.prefeitura.sp.gov.br/centroseducacionaisunificados/" target="_blank"><img src="/assets/images/ceu.png
              " /></a>
              <h3>Centros Educacionais Unificados</h3>
            </div>
            <div className="parceria">
              <a href=" https://www.sescsp.org.br/" target="_blank"><img src="/assets/images/sescc.png
              " /></a>
              <h3>sesc</h3>
            </div>
            <div className="parceria">
              <a href="https://catracalivre.com.br/" target="_blank"><img src="/assets/images/catacra.png" /></a>
              <h3>Catraca Livre</h3>
            </div>
               <div className="parceria">
              <a href="https://www.circuitospcine.com.br/" target="_blank"><img src="/assets/images/spcine.jpg" /></a>
              <h3>Circuito Spcine</h3>
            </div>

<br />
<br />
<br />
<br />
<br />

          </div>
        </div>
      </section>
      <footer className="rodape">
        <div className="container-roda">
          <div className="logo-roda">
            Localiza<span>LivreSP</span>
          </div>

          <p className="descricaoo">
            <h4>Descubra cultura, lazer e esportes gratuitos em São Paulo</h4></p>

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



          <p className="copys">© {new Date().getFullYear()} LocalizaLivreSP — Conectando a cidade. — Todos os direitos reservados.</p>
        </div>
      </footer>

    </div>
  )
}

export default Inicio;




