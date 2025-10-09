import { Link } from "react-router-dom";
import "./Cultura.scss";

function Cultura() {
  return (
    <>
      <header>
        <div className="logo">
          Localiza<span>LivreSP</span>
        </div>
        <nav>
          <Link to="/" className="active">Cultura</Link>
          <Link to="/lazer">Lazer</Link>
          <Link to="/esportes">Esportes</Link>
          <Link to="/login">Login</Link>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>Locais Culturais</h1>
          <p>Visite lugares incríveis e mergulhe na cultura de São Paulo.</p>
        </section>

        <section className="cards">
          <div className="card">
            <img src="/img/museu-afro-brasil.jpg" alt="Museu Afro Brasil" />
            <h3>Museu Afro Brasil</h3>
          </div>
          <div className="card">
            <img src="/img/beco-batman.jpg" alt="Beco do Batman" />
            <h3>Beco do Batman</h3>
          </div>
          <div className="card">
            <img src="/img/mario-andrade.jpg" alt="Biblioteca Mário de Andrade" />
            <h3>Biblioteca Mário de Andrade</h3>
          </div>
        </section>

        <section className="mapa">
          <h2>Veja locais próximos de você</h2>
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

      <footer>
        <p>© 2025 LocalizaLivreSP — Todos os direitos reservados.</p>
        <div className="social">
          <a href="#"><img src="/img/facebook.svg" alt="Facebook" /></a>
          <a href="#"><img src="/img/instagram.svg" alt="Instagram" /></a>
          <a href="#"><img src="/img/twitter.svg" alt="Twitter" /></a>
        </div>
      </footer>
    </>
  );
}

export default Cultura;
