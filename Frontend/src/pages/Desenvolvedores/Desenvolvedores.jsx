import { Link } from "react-router-dom";
import "./Desenvolvedores.scss";
import React from "react";


export default function Desenvolvedores() {
  return (
    <div className="container-sobre">

<div className="headerr">
  <video 
    className="video-fundo" 
    src="/assets/video/video.mp4" 
    autoPlay 
    loop 
    muted 
    playsInline
  ></video>
<h1 className="empresa">Dev<span className="typing">Paulista</span>
</h1>

</div>

      <section className="sobre-conteudo">
        <h2>Sobre nós</h2>
        <p>
          A <strong>DevPaulista</strong> é uma empresa especializada no
          desenvolvimento de <strong>aplicações web modernas</strong>,rápidas e
          seguras.Nossa equipe trabalha com as mais recentes tecnologias para
          criar soluções personalizadas que ajudam nossos clientes a se destacar
          no mundo digital.
        </p>
      </section>

      <section className="missao-visao">
        <div className="missao">
          <h2>Missão</h2>
          <p>
            Nossa missão é fornecer soluções tecnológicas inovadoras que impulsionam o crescimento dos nossos clientes, garantindo eficiência, segurança e excelência em cada projeto.
          </p>
        </div>
        <div className="visao">
          <h2>Visão</h2>
          <p>
            Ser a referência em desenvolvimento web no Brasil, liderando a transformação digital com criatividade e expertise técnica.
          </p>
        </div>
      </section>

      <section className="equipe">
        <h2>Equipe</h2>
        <div className="equipe-container">
          <div className="membro">
            <img className="membros" src="https://media.discordapp.net/attachments/1354419042978496666/1433400251984777318/IMG-20251030-WA0004.jpg?ex=69048d83&is=69033c03&hm=aa362b50f3d83a8f6d9fd50fdf73900f37e559b1f65836ecf60580eab4cf6960&=&format=webp&width=911&height=524" alt="" />
            <h3>Karine Cavalcante </h3>
            <p>Dev frontend e Design</p>
            <p>iniciante frontend e backend procurando aprimoraçâo na area.</p>
            <a href="https://www.linkedin.com/in/karine-cavalcante-leal-36316b2b7/?trk=opento_sprofile_details"><button>Linkedin</button></a>
          </div>
          <div className="membro">
            <img className="membros" src="https://media.discordapp.net/attachments/1354419042978496666/1433400250923618354/IMG-20251030-WA0006.jpg?ex=69048d83&is=69033c03&hm=c0b9e5dabb61e0e769b7be5335e2ab88ae93b70ca15ab109a98e981816035e59&=&format=webp&width=989&height=541" alt="" />
            <h3>Samuel de Almeida </h3>
            <p>Dev frontend e banco</p>
            <p>iniciante na area de frontend criar interfaces de banco de dados.</p>
            <a href="https://media.discordapp.net/attachments/1354419042978496666/1433400250923618354/IMG-20251030-WA0006.jpg?ex=69048d83&is=69033c03&hm=c0b9e5dabb61e0e769b7be5335e2ab88ae93b70ca15ab109a98e981816035e59&=&format=webp&width=989&height=541"><button>Linkedin</button></a>
          </div>
          <div className="membro">
       <img className="membros" src="https://media.discordapp.net/attachments/1354419042978496666/1433400251464679504/IMG-20251030-WA0005.jpg?ex=69048d83&is=69033c03&hm=16e4a1176e9a9588393d07f25533e9252ccdb0cf4e25733bb0d5a79abf028534&=&format=webp&width=1113&height=630" alt="" />
            <h3>Jennifer Berto </h3>
            <p>Dev frontend </p>
            <p>iniciante na area de frontend e  criação de interface Design.</p>
            <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_pro"><button>Linkedin</button></a>
          </div>
          <div className="membro">
       <img className="membros" src="https://media.discordapp.net/attachments/1375435344928837674/1433432288708005948/9dc17f50-7176-4ed2-a341-c8c32fb55690.jpg?ex=6904ab59&is=690359d9&hm=ad4a3febb13137360c5e457b5c53a0ab2c83c22d79633324b8c6850f370b158d&=&format=webp&width=1232&height=693" alt="" />
            <h3>Geovanna Cristina</h3>
            <p>Dev frontend e Design</p>
            <p>iniciante procurando aprimorar na area em Design e API.</p>
            <a href="https://www.linkedin.com/in/geovanna-cristina-silva-lucas-063217395/"><button>Linkedin</button></a>
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
      <form className="contact-form">
        <input type="text" placeholder="Seu nome" required />
        <input type="email" placeholder="Seu e-mail" required />
        <textarea placeholder="Mensagem" required></textarea>
        <button type="submit" className="btn-primary">Enviar</button>
      </form>
    </div>

    <div className="informacoes">
      <br />
      <h3>Informações</h3>
      <br />
      <ul>
        <li><i class="fa-solid fa-location-dot icon-desenvolvedores"></i>Localização: São Paulo, SP - Brasil</li>
        <li><i class="fa-regular fa-envelope icon-desenvolvedores"></i>E-mail:DevPaulista@gmail.com</li>
        <li><i class="fa-solid fa-globe icon-desenvolvedores"></i> Site: www.DevPaulista.com</li>
        <li><i class="fa-solid fa-phone icon-desenvolvedores"></i>Telefone: (11) 99999-9999</li>
      </ul>
      <br />
    </div>
  </div>
</section>

      <footer className="sobre-footer">
        <p>© 2025 DevPaulista. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}