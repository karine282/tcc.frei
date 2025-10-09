import { Link } from "react-router-dom";
import "./Lazer.scss";

export default  function Lazer() {
  return (
    <>
      <header>
        <div className="logo">
          Localiza<span>LivreSP</span>
        </div>
        <nav>
          <Link to="/cultura">Cultura</Link>
          <Link to="/lazer" className="active">Lazer</Link>
          <Link to="/esportes">Esportes</Link>
          <Link to="/login">Login</Link>
        </nav>
      </header>

      <main>
      <section className="hero lazer-hero">
  <div className="overlay">
    <h1>Descubra espaços de lazer em São Paulo</h1>
    <p>Parques, praças e atividades ao ar livre para todas as idades.</p>
    <div className="actions">
      <Link to="/entrar" className="btn">Entrar</Link>
      <Link to="/cadastro" className="btn-outline">Cadastre-se</Link>
    </div>
  </div>
</section>


        <section className="cards">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=60" alt="Parque Ibirapuera" />
            <h3>Parque Ibirapuera</h3>
            <p>Área verde e lazer</p>
          </div>
          <div className="card">
            <img src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=60" alt="Praça da República" />
            <h3>Praça da República</h3>
            <p>Eventos urbanos</p>
          </div>
          <div className="card">
            <img src="https://images.unsplash.com/photo-1435224654926-ecc9f7fa028c?w=800&q=60" alt="Parque Villa-Lobos" />
            <h3>Parque Villa-Lobos</h3>
            <p>Trilhas e esportes</p>
          </div>
          <div className="card">
            <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=60" alt="Praça do Pôr do Sol" />
            <h3>Praça do Pôr do Sol</h3>
            <p>Vista panorâmica</p>
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

