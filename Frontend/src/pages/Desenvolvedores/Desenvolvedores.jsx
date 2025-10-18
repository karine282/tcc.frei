import { Link } from "react-router-dom";
import "./Desenvolvedores.scss";
import React from "react";

export default function Desenvolvedores() {
  return (

<div className="sobre-container">
      <header className="sobre-header">
        <img
          src="https://cdn-icons-png.flaticon.com/512/906/906324.png"
          alt="Logo da empresa"
          className="empresa-logo"
        />
        <h1 className="empresa-nome">TechWave Solutions</h1>
      </header>

      <section className="sobre-conteudo">
        <h2>Sobre nós</h2>
        <p>
          A <strong>TechWave Solutions</strong> é uma empresa especializada no
          desenvolvimento de <strong>aplicações web modernas</strong>, rápidas e
          seguras. Nossa equipe trabalha com as mais recentes tecnologias para
          criar soluções personalizadas que ajudam nossos clientes a se destacar
          no mundo digital.
        </p>
      </section>

      <section className="informacoes">
        <h2>Informações</h2>
        <ul>
          <li>📍 Localização: São Paulo, SP - Brasil</li>
          <li>📧 E-mail: contato@techwave.com</li>
          <li>🌐 Site: www.techwave.com</li>
          <li>📞 Telefone: (11) 99999-9999</li>
        </ul>
      </section>

      <footer className="sobre-footer">
        <p>© 2025 TechWave Solutions. Todos os direitos reservados.</p>
      </footer>
    </div>

  )
}