import { useState } from 'react'
import './Inicio.scss'
import { Link } from "react-router-dom";

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
              <Link to="/Login">entrar</Link></h3>
              <h3 className='seg'><Link to="/Cadastro">cadastre-se</Link></h3>
              <i className="fa-solid fa-house"></i>
            </nav>
          </div>
        </section>

        <section className="feature container">
          <div className="feature-left">
            <img src="https://i.pinimg.com/736x/77/56/5a/77565a1458bba2eab3fe341a12ef349f.jpg" alt="feature" />
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
            <a className="btn btn-segundo" href="#">Saiba mais</a>
          </div>
        </section>

        <section className="parques container">
          <h2>Parques</h2>
          <p className="lead">Espaços verdes ideais para relaxar, se exercitar ou curtir momentos ao ar livre.</p>

          <div className="cards">
            <article className="card">
              <img src="https://i.pinimg.com/736x/b1/58/46/b1584660ec016e5fbad337b0061b9b39.jpg" alt="Parque 1" />
              <h3>Parque Aclimação</h3>
              <p>Ótimo para caminhadas e piqueniques. Entrada gratuita.</p>
            </article>

            <article className="card">
              <img src="https://i.pinimg.com/1200x/bc/6b/11/bc6b1167e29bbf927e5a380c8a4113b0.jpg" alt="Parque 2" />
              <h3>Parque do Ibirapuera</h3>
              <p>Eventos culturais, exposições e muito espaço para atividades.</p>
            </article>

            <article className="card">
              <img src="https://i.pinimg.com/1200x/17/7a/bc/177abc0fd9ecac38ac42937f7d2dbb29.jpg" alt="Parque 3" />
              <h3>Parque Villa-Lobos</h3>
              <p>Área esportiva e pistas de corrida — ideal para famílias.</p>
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
          <a className="btn btn-segundo" href="#">Saiba mais</a>
        </div>
      </section>

      <footer className="rodape">
        <div className="container">
          <p>© LocalizaLivreSP — Conectando a cidade.</p>
        </div>
      </footer>
    </>
  )
}

export default Inicio
