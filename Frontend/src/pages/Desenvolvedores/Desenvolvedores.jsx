import { Link } from "react-router-dom";
import "./Desenvolvedores.scss";
import React from "react";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";



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
            <img className="membros" src="assets/images/karine.webp" alt="" />
            <h3>Karine Cavalcante </h3>
            <p>Dev frontend e Design</p>
            <p>iniciante frontend e backend procurando aprimoraçâo na area.</p>
            <a href="https://www.linkedin.com/in/karine-cavalcante-leal-36316b2b7/?trk=opento_sprofile_details"><button>Linkedin</button></a>
          </div>
          <div className="membro">
            <img className="membros" src="assets/images/samuel.webp" alt="" />
            <h3>Samuel de Almeida </h3>
            <p>Dev frontend e banco</p>
            <p>iniciante na area de frontend criar interfaces de banco de dados.</p>
            <a href="https://media.discordapp.net/attachments/1354419042978496666/1433400250923618354/IMG-20251030-WA0006.jpg?ex=69048d83&is=69033c03&hm=c0b9e5dabb61e0e769b7be5335e2ab88ae93b70ca15ab109a98e981816035e59&=&format=webp&width=989&height=541"><button>Linkedin</button></a>
          </div>
          <div className="membro">
            <img className="membros" src="assets/images/jennifer.webp" alt="" />
            <h3>Jennifer Berto </h3>
            <p>Dev frontend </p>
            <p>iniciante na area de frontend e  criação de interface Design.</p>
            <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_pro"><button>Linkedin</button></a>
          </div>
          <div className="membro">
            <img className="membros" src="assets/images/geovanna.webp" alt="" />
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


      
      <section className="parceriasdev">
        <h2>Nossas Parcerias</h2>
        <p className="leadev">Empresas e organizações que apoiam nossa missão de conectar a comunidade a eventos gratuitos em São Paulo.</p>
        <div className="carouseldev">
          <div className="parceriasdev2">
            <div className="parceriadev">
              <a href="https://www.brandup.com.br/"><img src="assets/images/PARdev1.webp" /></a>
              <h3>BRANDUP: Agência de Marketing para E-commerce </h3>
            </div>
            <div className="parceriadev">
              <a href="https://www.netlify.com/"><img src="assets/images/PARdev2.png" /></a>
              <h3>Netlify </h3>
            </div>
            <div className="parceriadev">
              <a href="https://www.contabilizei.com.br/sao-paulo/?utm_device=c&utm_term=contabilizei&utm_source=google&utm_medium=cpc&utm_campaign=%5BS%5D_Institucional_Novo_SP&hsa_cam=23030008525&hsa_grp=190703922652&hsa_mt=e&hsa_src=g&hsa_ad=774446589341&hsa_acc=1466761651&hsa_net=adwords&hsa_kw=contabilizei&hsa_tgt=kwd-301556658861&hsa_ver=3&gad_source=1&gad_campaignid=23030008525&gclid=Cj0KCQiA5abIBhCaARIsAM3-zFUxl3YdOKbZqTA8-sMUr1XSNI0riWV7AtCdF2m1PEfvKj3gNNV72KYaAsqPEALw_wcB"><img src="assets/images/PARdev3.jfif" /></a>
              <h3>Contabilizei Escritório de Contabilidade</h3>
            </div>
            <div className="parceriadev">
              <a href=" https://www.wework.com/pt-BR"><img src="assets/images/PARdev4.svg" /></a>
              <h3>wework </h3>
            </div>
          

          </div>
        </div>
      </section>
<br />
<br /><br /><br />

   <footer className="rodapee">
  <div className="container-rodape">
    <div className="logo-rodape">
      Dev<span>Paulista</span>
    </div>

    <p className="descricao">
      Criando Sites e Designs para o seu Negocio — descubra o seu melhor com desenvolvimento web da DevPaulista.
    </p>

    <div className="redes-sociais">
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="icone"
      >
        <FaInstagram />
      </a>
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="icone"
      >
        <FaFacebook />
      </a>
      <a
        href="https://www.tiktok.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="icone"
      >
        <FaTiktok />
      </a>
    </div>

 

    <p className="copy">© {new Date().getFullYear()} DevPaulista — Todos os direitos reservados.</p>
  </div>
</footer>

    </div>
  );
}