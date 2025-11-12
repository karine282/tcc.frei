import { Link } from "react-router-dom";
import "./Desenvolvedores.scss";
import React, { useState } from "react";
import api from "../../api";

export default function Desenvolvedores() {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/contato", { nome, email, mensagem });
      alert("Mensagem enviada com sucesso!");
      setNome("");
      setEmail("");
      setMensagem("");
    } catch (erro) {
      console.error("Erro ao enviar mensagem:", erro);
      alert("Erro ao enviar mensagem. Tente novamente.");
    }
  };

  return (
    <div className="container-desenvolvedores">

      <div className="container-sobre">
        <header className="inicio">
          <div className="container-comeco">
            <Link to='/' className='Link'>
              <div className="logo">Localiza<span>LivreSP</span></div>
            </Link>
            <nav className="nave">
              <Link to="/Conta"><i className="fa-solid fa-circle-user"></i></Link>
            </nav>
          </div>
        </header>
        <div className="headerr">
          <video
            className="video-fundo"
            src="/assets/video/video.mp4"
            autoPlay
            loop
            muted
            playsInline
          ></video>
          <h1 className="empresa">
            Localiza<span className="typing">LivreSP</span>
          </h1>
        </div>

        <section className="sobre-conteudo">
          <h2>Sobre nós</h2>
          <p>
            A <strong>DevPaulista</strong> é uma empresa especializada no
            desenvolvimento de <strong>aplicações web modernas</strong>, rápidas e
            seguras. Nossa equipe trabalha com as mais recentes tecnologias para
            criar soluções personalizadas que ajudam nossos clientes a se destacar
            no mundo digital.
          </p>
        </section>

        <section className="missao-visao">
          <div className="missao">
            <h2>Missão</h2>
            <p>
              Nossa missão é fornecer soluções tecnológicas inovadoras que
              impulsionam o crescimento dos nossos clientes, garantindo eficiência,
              segurança e excelência em cada projeto.
            </p>
          </div>
          <div className="visao">
            <h2>Visão</h2>
            <p>
              Ser a referência em desenvolvimento web no Brasil, liderando a
              transformação digital com criatividade e expertise técnica.
            </p>
          </div>
        </section>

        <section className="equipe">
          <h2>Equipe</h2>
          <div className="equipe-container">
            <div className="membro">
              <img className="membros" src="assets/images/karine.webp" alt="" />
              <h3>Karine Cavalcante</h3>
              <p>Dev frontend e Design</p>
              <p>
                Iniciante em frontend e backend, procurando aprimoração na área.
              </p>
              <a href="https://www.linkedin.com/in/karine-cavalcante-leal-36316b2b7/?trk=opento_sprofile_details">
                <button>Linkedin</button>
              </a>
            </div>

            <div className="membro">
              <img className="membros" src="assets/images/samuel.webp" alt="" />
              <h3>Samuel de Almeida</h3>
              <p>Dev frontend e banco</p>
              <p>
                Iniciante na área de frontend, criando interfaces e integrando
                banco de dados.
              </p>
              <a href="https://media.discordapp.net/attachments/1354419042978496666/1433400250923618354/IMG-20251030-WA0006.jpg">
                <button>Linkedin</button>
              </a>
            </div>

            <div className="membro">
              <img className="membros" src="assets/images/jennifer.webp" alt="" />
              <h3>Jennifer Berto</h3>
              <p>Dev frontend</p>
              <p>Iniciante em frontend e criação de interfaces com Design.</p>
              <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_pro">
                <button>Linkedin</button>
              </a>
            </div>

            <div className="membro">
              <img className="membros" src="assets/images/geovanna.webp" alt="" />
              <h3>Geovanna Cristina</h3>
              <p>Dev frontend e Design</p>
              <p>
                Iniciante procurando aprimorar suas habilidades em Design e API.
              </p>
              <a href="https://www.linkedin.com/in/geovanna-cristina-silva-lucas-063217395/">
                <button>Linkedin</button>
              </a>
            </div>
          </div>
        </section>

        <section className="servicos">
          <h2>Serviços</h2>
          <ul>
            <li>Desenvolvimento de Aplicações Web</li>
            <li>Consultoria em Tecnologia</li>
            <li>Design de Interfaces</li>
            <li>Manutenção e Suporte</li>
          </ul>
        </section>

        <section id="contato" className="contact-section">
          <div className="container-contato">
            <div className="formulario">
              <br />
              <h3>Entre em contato</h3>
              <br />
              <form className="contact-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Seu nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <textarea
                  placeholder="Mensagem"
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  required
                ></textarea>
                <button type="submit" className="btn-primary">
                  Enviar
                </button>
              </form>
            </div>

            <div className="informacoes">
              <br />
              <h3>Informações</h3>
              <br />
              <ul>
                <li>
                  <i className="fa-solid fa-location-dot icon-desenvolvedores"></i>
                  Localização: São Paulo, SP - Brasil
                </li>
                <li>
                  <i className="fa-regular fa-envelope icon-desenvolvedores"></i>
                  E-mail: DevPaulista@gmail.com
                </li>
                <li>
                  <i className="fa-solid fa-globe icon-desenvolvedores"></i>
                  Site: www.DevPaulista.com
                </li>
                <li>
                  <i className="fa-solid fa-phone icon-desenvolvedores"></i>
                  Telefone: (11) 99999-9999
                </li>
              </ul>
              <br />
            </div>
          </div>
        </section>

        <section className="parceriasdev">
          <h2>Nossas Parcerias</h2>
          <p className="leadev">
            Empresas e organizações que apoiam nossa missão de conectar a sua
            empresa ao mundo digital.
          </p>
          <div className="carouseldev">
            <div className="parceriasdev2">
              <div className="parceriadev">
                <a href="https://www.brandup.com.br/">
                  <img src="assets/images/PARdev1.webp" alt="parceiro 1" />
                </a>
                <h3>BRANDUP: Agência de Marketing para E-commerce</h3>
              </div>
              <div className="parceriadev">
                <a href="https://www.netlify.com/">
                  <img src="assets/images/PARdev2.png" alt="parceiro 2" />
                </a>
                <h3>Netlify</h3>
              </div>
              <div className="parceriadev">
                <a href="https://www.contabilizei.com.br/">
                  <img src="assets/images/PARdev3.jfif" alt="parceiro 3" />
                </a>
                <h3>Contabilizei Escritório de Contabilidade</h3>
              </div>
              <div className="parceriadev">
                <a href="https://www.wework.com/pt-BR">
                  <img src="assets/images/WeWork.png" alt="parceiro 4" />
                </a>
                <h3>WeWork</h3>
              </div>
            </div>
          </div>
        </section>

        <br />
        <br />
        <br />
        <br />

        <footer className="rodapee">
          <div className="container-rodape">
            <div className="logo-rodape">
              Localiza<span>LivreSP</span>
            </div>

            <p className="descricao">
              Criando Sites e Designs para o seu Negócio — descubra o seu melhor
              com desenvolvimento web da DevPaulista.
            </p>
            <div className="button-container">
              <Link to="/login-administrativo">
                <button className="col">Painel administrativo</button>
              </Link>

            </div>

            <p className="copy">
              © {new Date().getFullYear()} LocalizaLivreSp — Todos os direitos
              reservados.
            </p>
          </div>
        </footer>
      </div>
    </div>

  );
}
