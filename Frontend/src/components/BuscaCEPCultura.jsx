import React, { useState } from "react";

export default function BuscaCEP() {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState(null);
  const [erro, setErro] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const cepLimpo = cep.replace(/\D/g, "");

    if (cepLimpo.length !== 8) {
      setErro("Digite um CEP válido com 8 números.");
      setEndereco(null);
      return;
    }

    try {
      setErro("");

      const response = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
      const data = await response.json();

      const bairrosPorPrefixo = [
        { prefixo: "010", bairro: "Sé" },
        { prefixo: "013", bairro: "Bela Vista" },
        { prefixo: "015", bairro: "Cambuci" },
        { prefixo: "020", bairro: "Santana" },
        { prefixo: "030", bairro: "Brás" },
        { prefixo: "031", bairro: "Mooca" },
        { prefixo: "033", bairro: "Tatuapé" },
        { prefixo: "035", bairro: "Vila Matilde" },
        { prefixo: "040", bairro: "Vila Mariana" },
        { prefixo: "043", bairro: "Jabaquara" },
        { prefixo: "045", bairro: "Itaim Bibi" },
        { prefixo: "050", bairro: "Perdizes" },
        { prefixo: "054", bairro: "Pinheiros" },
        { prefixo: "056", bairro: "Morumbi" },
        { prefixo: "058", bairro: "Campo Limpo" },
        { prefixo: "080", bairro: "Itaquera" },
        { prefixo: "082", bairro: "São Mateus" },
        { prefixo: "084", bairro: "Guaianases" },
      ];

      const prefixo = cepLimpo.substring(0, 3);
      const bairroFallback =
        bairrosPorPrefixo.find((b) => b.prefixo === prefixo)?.bairro ||
        "Região de São Paulo";

      const ehSaoPaulo = cepLimpo >= "01000000" && cepLimpo <= "08499999";

      if (data.erro || !data.localidade) {
        if (ehSaoPaulo) {
          setEndereco({
            bairro: bairroFallback,
            localidade: "São Paulo",
          });
        } else {
          setErro("CEP fora da cidade de São Paulo.");
          setEndereco(null);
          return;
        }
      } else {
        if (data.localidade === "São Paulo") {
          setEndereco({
            bairro: data.bairro || bairroFallback,
            localidade: data.localidade,
          });
        } else {
          setErro("CEP fora da cidade de São Paulo.");
          setEndereco(null);
          return;
        }
      }
    } catch (error) {
      console.error("Erro ao buscar CEP:", error);
      setErro("Erro ao buscar o CEP. Tente novamente.");
      setEndereco(null);
    }
  }

 const locaisPorBairro = {
  "Sé": [
  { 
    nome: "Centro Cultural Banco do Brasil (CCBB)", 
    endereco: "R. Álvares Penteado, 112 - Sé, São Paulo - SP", 
    link: "https://www.google.com/maps/dir/?api=1&destination=R.+Álvares+Penteado,+112+-+Sé,+São+Paulo+-+SP"
  },
  { 
    nome: "Pateo do Collegio", 
    endereco: "Praça Pateo do Collegio, 2 - Sé, São Paulo - SP", 
    link: "https://www.google.com/maps/dir/?api=1&destination=Praça+Pateo+do+Collegio,+2+-+Sé,+São+Paulo+-+SP"
  },
  { 
    nome: "Catedral da Sé", 
    endereco: "Praça da Sé, s/n - Sé, São Paulo - SP", 
    link: "https://www.google.com/maps/dir/?api=1&destination=Praça+da+Sé,+São+Paulo+-+SP"
  },
  { 
    nome: "Centro Cultural Caixa", 
    endereco: "Praça da Sé, 111 - Sé, São Paulo - SP", 
    link: "https://www.google.com/maps/dir/?api=1&destination=Praça+da+Sé,+111+-+Sé,+São+Paulo+-+SP"
  },
  { 
    nome: "Solar da Marquesa de Santos", 
    endereco: "R. Roberto Simonsen, 136 - Sé, São Paulo - SP", 
    link: "https://www.google.com/maps/dir/?api=1&destination=R.+Roberto+Simonsen,+136+-+Sé,+São+Paulo+-+SP"
  },
  { 
    nome: "Casa da Imagem", 
    endereco: "R. Roberto Simonsen, 136 - Sé, São Paulo - SP", 
    link: "https://www.google.com/maps/dir/?api=1&destination=R.+Roberto+Simonsen,+136+-+Sé,+São+Paulo+-+SP"
  },
  { 
    nome: "Museu Anchieta", 
    endereco: "Pateo do Collegio, 2 - Sé, São Paulo - SP", 
    link: "https://www.google.com/maps/dir/?api=1&destination=Pateo+do+Collegio,+2+-+Sé,+São+Paulo+-+SP"
  },
  { 
    nome: "Sesc 24 de Maio", 
    endereco: "R. 24 de Maio, 109 - República, São Paulo - SP", 
    link: "https://www.google.com/maps/dir/?api=1&destination=R.+24+de+Maio,+109+-+República,+São+Paulo+-+SP"
  },
  { 
    nome: "Galeria do Rock", 
    endereco: "Av. São João, 439 - República, São Paulo - SP", 
    link: "https://www.google.com/maps/dir/?api=1&destination=Av.+São+João,+439+-+República,+São+Paulo+-+SP"
  },
  { 
    nome: "Vale do Anhangabaú (eventos culturais)", 
    endereco: "Centro Histórico - Sé, São Paulo - SP", 
    link: "https://www.google.com/maps/dir/?api=1&destination=Vale+do+Anhangabaú,+Centro,+São+Paulo+-+SP"
  }
],

  "Bela Vista": [
    { nome: "Teatro Sérgio Cardoso", endereco: "R. Rui Barbosa, 153 - Bela Vista", link: "https://maps.app.goo.gl/TVpw5dFbbAXW3hoCA" },
    { nome: "Museu Judaico de São Paulo", endereco: "R. Martinho Prado, 128 - Bela Vista", link: "https://maps.app.goo.gl/fpUN45ktDDiTMGSz5" },
    { nome: "Teatro Renault", endereco: "Av. Brigadeiro Luís Antônio, 411 - Bela Vista", link: "https://maps.app.goo.gl/XBxpsaR9eFDBSsyD6" },
    { nome: "Casa das Rosas", endereco: "Av. Paulista, 37 - Bela Vista", link: "https://maps.app.goo.gl/HKgPG88SgAATp6Ye8" },
    { nome: "MASP (terça-gratuita)", endereco: "Av. Paulista, 1578 - Bela Vista", link: "https://maps.app.goo.gl/g8Gx6VjfSkMaqdrB7" },
    { nome: "Mirante Sesc Paulista", endereco: "Av. Paulista, 119 - Bela Vista", link: "https://maps.app.goo.gl/nA2BkXop8vdynm7X9" },
    { nome: "Parque Trianon", endereco: "Av. Paulista, 1578 - Bela Vista", link: "https://maps.app.goo.gl/emmbRSfKF3wkLhxX7" },
    { nome: "Espaço Cultural Itaú", endereco: "Av. Paulista, 149 - Bela Vista", link: "https://maps.app.goo.gl/HqAKpUUHjEEwm52b9" },
    { nome: "Centro Cultural FIESP", endereco: "Av. Paulista, 1313 - Bela Vista", link: "https://maps.app.goo.gl/FJxjegoHqzuAmfnB9" },
    { nome: "Casa de Dona Yayá", endereco: "R. Major Diogo, 353 - Bela Vista", link: "https://maps.app.goo.gl/DgNSrNAJePuP8RPx7" }
  ],
  "Liberdade": [
    { nome: "Centro Cultural São Paulo", endereco: "Rua Vergueiro, 1000 - Liberdade", link: "https://maps.app.goo.gl/UTYt3f9L1V8EoLPp8" },
    { nome: "Museu Histórico da Imigração Japonesa", endereco: "R. São Joaquim, 381 - Liberdade", link: "https://maps.app.goo.gl/fQJMYrTo3AnbVdXU7" },
    { nome: "Feira da Liberdade (artesanato)", endereco: "Praça da Liberdade - Liberdade", link: "https://maps.app.goo.gl/CPJhkmSGkbuWAYiY7" },
    { nome: "Biblioteca Mário de Andrade – unidade Liberdade", endereco: "R. da Glória, l-? - Liberdade", link: "https://maps.app.goo.gl/y4inikdZodUoDvjYA" },
    { nome: "Templo Busshinji (visitação)", endereco: "R. da Glória, 99 - Liberdade", link: "https://maps.app.goo.gl/vS31v69BcqgkFgZBA" },
    { nome: "Galeria de Arte Liberdade (exposições gratuitas)", endereco: "R. da Glória, ?? - Liberdade", link: "https://maps.app.goo.gl/KvRAdQuphPbwEWA68" }
  ],
 "Penha": [
  { nome: "Centro Cultural da Penha", endereco: "Largo do Rosário, 20 - Penha", link: "https://maps.google.com/?q=Centro+Cultural+da+Penha,+Largo+do+Rosário,+20+-+Penha,+São+Paulo" },
  { nome: "Casa de Cultura Penha", endereco: "R. Francisco Coimbra, 403 - Penha", link: "https://maps.google.com/?q=Casa+de+Cultura+Penha,+R.+Francisco+Coimbra,+403+-+Penha,+São+Paulo" },
  { nome: "Parque Linear Tiquatira", endereco: "Av. Governador Carvalho Pinto - Penha", link: "https://maps.google.com/?q=Parque+Linear+Tiquatira,+Av.+Governador+Carvalho+Pinto,+Penha,+São+Paulo" },
  { nome: "Biblioteca Pública José Paulo Paes", endereco: "R. Francisco Coimbra, 403 - Penha", link: "https://maps.google.com/?q=Biblioteca+José+Paulo+Paes,+R.+Francisco+Coimbra,+403+-+Penha,+São+Paulo" },
  { nome: "Fábrica de Cultura Penha", endereco: "R. Francisco Coimbra, 403 - Penha", link: "https://maps.google.com/?q=Fábrica+de+Cultura+Penha,+R.+Francisco+Coimbra,+403+-+Penha,+São+Paulo" },
  { nome: "Centro de Vivência da Penha", endereco: "R. Dr. João Ribeiro, 304 - Penha", link: "https://maps.google.com/?q=Centro+de+Vivência+da+Penha,+R.+Dr.+João+Ribeiro,+304+-+Penha,+São+Paulo" },
  { nome: "Praça da Penha (eventos culturais)", endereco: "Praça N. Sra. da Penha - Penha", link: "https://maps.google.com/?q=Praça+da+Penha,+São+Paulo" },
  { nome: "Galeria de Arte Penha", endereco: "Largo do Rosário, 20 - Penha", link: "https://maps.google.com/?q=Galeria+de+Arte+Penha,+Largo+do+Rosário,+20+-+Penha,+São+Paulo" },
  { nome: "Biblioteca Monteiro Lobato – Penha", endereco: "R. Francisco Coimbra, 403 - Penha", link: "https://maps.google.com/?q=Biblioteca+Monteiro+Lobato,+R.+Francisco+Coimbra,+403+-+Penha,+São+Paulo" },
  { nome: "Centro Cultural Juventude Penha", endereco: "Av. Gov. Carvalho Pinto, 1500 - Penha", link: "https://maps.google.com/?q=Centro+Cultural+Juventude+Penha,+Av.+Governador+Carvalho+Pinto,+1500+-+Penha,+São+Paulo" }
],
"Santana": [
  { nome: "Biblioteca de São Paulo", endereco: "Av. Cruzeiro do Sul, 2630 - Santana", link: "https://maps.google.com/?q=Biblioteca+de+São+Paulo,+Av.+Cruzeiro+do+Sul,+2630+-+Santana,+São+Paulo" },
  { nome: "Teatro Alfredo Mesquita", endereco: "Av. Santos Dumont, 1770 - Santana", link: "https://maps.google.com/?q=Teatro+Alfredo+Mesquita,+Av.+Santos+Dumont,+1770+-+Santana,+São+Paulo" },
  { nome: "Parque da Juventude", endereco: "Av. Cruzeiro do Sul, 2630 - Santana", link: "https://maps.google.com/?q=Parque+da+Juventude,+Av.+Cruzeiro+do+Sul,+2630+-+Santana,+São+Paulo" },
  { nome: "Sesc Santana", endereco: "Av. Luiz Dumont Villares, 579 - Santana", link: "https://maps.google.com/?q=Sesc+Santana,+Av.+Luiz+Dumont+Villares,+579+-+Santana,+São+Paulo" },
  { nome: "Casa de Cultura do Tremembé", endereco: "R. Maria Amália Lopes Azevedo, 190 - Tremembé", link: "https://maps.google.com/?q=Casa+de+Cultura+do+Tremembé,+R.+Maria+Amália+Lopes+Azevedo,+190+-+Tremembé,+São+Paulo" },
  { nome: "Centro Cultural da Juventude Ruth Cardoso", endereco: "Av. Dep. Emílio Carlos, 3641 - Vila Nova Cachoeirinha", link: "https://maps.google.com/?q=Centro+Cultural+da+Juventude+Ruth+Cardoso,+Av.+Dep.+Emílio+Carlos,+3641+-+Vila+Nova+Cachoeirinha,+São+Paulo" },
  { nome: "Estação da Juventude", endereco: "Av. Cruzeiro do Sul, 2600 - Santana", link: "https://maps.google.com/?q=Estação+da+Juventude,+Av.+Cruzeiro+do+Sul,+2600+-+Santana,+São+Paulo" },
  { nome: "Biblioteca Alceu Amoroso Lima", endereco: "R. Henrique Schaumann, 777 - Pinheiros", link: "https://maps.google.com/?q=Biblioteca+Alceu+Amoroso+Lima,+R.+Henrique+Schaumann,+777+-+Pinheiros,+São+Paulo" },
  { nome: "Praça Charles Miller", endereco: "Praça Charles Miller - Pacaembu", link: "https://maps.google.com/?q=Praça+Charles+Miller,+Pacaembu,+São+Paulo" },
  { nome: "Galeria de Arte Norte São Paulo", endereco: "R. Voluntários da Pátria, 595 - Santana", link: "https://maps.google.com/?q=Galeria+de+Arte+Norte+São+Paulo,+R.+Voluntários+da+Pátria,+595+-+Santana,+São+Paulo" }
],

"Vila Nova Cachoeirinha": [
  {
    nome: "Centro Cultural da Juventude Ruth Cardoso",
    endereco: "Av. Dep. Emílio Carlos, 3641 - Vila Nova Cachoeirinha, São Paulo - SP",
    link: "https://www.google.com/maps/dir/?api=1&destination=Centro+Cultural+da+Juventude+Ruth+Cardoso,+São+Paulo,+SP"
  },
  {
    nome: "Biblioteca Afonso Schmidt",
  endereco: "Av. Elísio Teixeira Leite, 1479 - Vila Nova Cachoeirinha, São Paulo - SP",
    link: "https://www.google.com/maps/dir/?api=1&destination=Biblioteca+Afonso+Schmidt,+São+Paulo,+SP"
  },
  {
    nome: "Praça de Vivência Vila Nova Cachoeirinha (eventos gratuitos)",
    endereco: "R. da Cachoeirinha - Vila Nova Cachoeirinha, São Paulo - SP",
    link: "https://www.google.com/maps/dir/?api=1&destination=Praça+de+Vivência+Vila+Nova+Cachoeirinha,+São+Paulo,+SP"
  },
  {
    nome: "Galeria de Arte Vila Nova Cachoeirinha",
  endereco: "R. da Cachoeirinha - Vila Nova Cachoeirinha, São Paulo - SP",
    link: "https://www.google.com/maps/dir/?api=1&destination=Galeria+de+Arte+Vila+Nova+Cachoeirinha,+São+Paulo,+SP"
  },
  {
    nome: "Centro de Esporte e Cultura Vila Nova Cachoeirinha",
    endereco: "Av. Geraldo Deodato - Vila Nova Cachoeirinha, São Paulo - SP",
    link: "https://www.google.com/maps/dir/?api=1&destination=Centro+de+Esporte+e+Cultura+Vila+Nova+Cachoeirinha,+São+Paulo,+SP"
  },
  {
    nome: "Biblioteca Pública Vila Nova Cachoeirinha",
    endereco: "R. da Cachoeirinha - Vila Nova Cachoeirinha, São Paulo - SP",
    link: "https://www.google.com/maps/dir/?api=1&destination=Biblioteca+Pública+Vila+Nova+Cachoeirinha,+São+Paulo,+SP"
  },
  {
    nome: "Espaço Cultural Juventude Vila Nova Cachoeirinha",
    endereco: "R. da Cachoeirinha - Vila Nova Cachoeirinha, São Paulo - SP",
    link: "https://www.google.com/maps/dir/?api=1&destination=Espaço+Cultural+Juventude+Vila+Nova+Cachoeirinha,+São+Paulo,+SP"
  },
  {
    nome: "Parque Linear Vila Nova Cachoeirinha",
    endereco: "Av. Geraldo Deodato - Vila Nova Cachoeirinha, São Paulo - SP",
    link: "https://www.google.com/maps/dir/?api=1&destination=Parque+Linear+Vila+Nova+Cachoeirinha,+São+Paulo,+SP"
  },
  {
    nome: "Casa de Cultura da Cachoeirinha",
    endereco: "R. da Cachoeirinha - Vila Nova Cachoeirinha, São Paulo - SP",
    link: "https://www.google.com/maps/dir/?api=1&destination=Casa+de+Cultura+da+Cachoeirinha,+São+Paulo,+SP"
  },
  {
    nome: "Biblioteca Comunitária Vila Nova Cachoeirinha",
    endereco: "R. da Cachoeirinha - Vila Nova Cachoeirinha, São Paulo - SP",
    link: "https://www.google.com/maps/dir/?api=1&destination=Biblioteca+Comunitária+Vila+Nova+Cachoeirinha,+São+Paulo,+SP"
  }
],

"Lapa": [
  {
    nome: "Tendal da Lapa",
    endereco: "R. Guaicurus, 1100 - Lapa, São Paulo - SP",
    link: "https://www.google.com/maps/dir/?api=1&destination=Tendal+da+Lapa,+São+Paulo,+SP"
  },
  {
    nome: "Biblioteca Mário Schenberg",
    endereco: "R. Catão, 611 - Lapa, São Paulo - SP",
    link: "https://www.google.com/maps/dir/?api=1&destination=Biblioteca+Mário+Schenberg,+São+Paulo,+SP"
  },
  {
    nome: "Parque Villa-Lobos",
    endereco: "Av. Prof. Fonseca Rodrigues, 2001 - Alto de Pinheiros, São Paulo - SP",
    link: "https://www.google.com/maps/dir/?api=1&destination=Parque+Villa-Lobos,+São+Paulo,+SP"
  },
  {
    nome: "Casa de Cultura Lapa/Barra Funda",
    endereco: "R. Professor Plínio Barreto, 285 - Barra Funda, São Paulo - SP",
    link: "https://www.google.com/maps/dir/?api=1&destination=Casa+de+Cultura+Lapa+Barra+Funda,+São+Paulo,+SP"
  },
  {
    nome: "Sesc Pompeia",
    endereco: "R. Clélia, 93 - Pompeia, São Paulo - SP",
    link: "https://www.google.com/maps/dir/?api=1&destination=Sesc+Pompeia,+São+Paulo,+SP"
  },
  {
    nome: "Galeria Prestes Maia",
    endereco: "Viaduto do Chá - Anhangabaú, São Paulo - SP",
    link: "https://www.google.com/maps/dir/?api=1&destination=Galeria+Prestes+Maia,+São+Paulo,+SP"
  },
  {
    nome: "Biblioteca Alceu de Campos Rodrigues",
    endereco: "R. do Grito - Lapa, São Paulo - SP",
    link: "https://www.google.com/maps/dir/?api=1&destination=Biblioteca+Alceu+de+Campos+Rodrigues,+São+Paulo,+SP"
  },
  {
    nome: "Parque da Água Branca (eventos culturais)",
    endereco: "Av. Francisco Matarazzo, 455 - Água Branca, São Paulo - SP",
    link: "https://www.google.com/maps/dir/?api=1&destination=Parque+da+Água+Branca,+São+Paulo,+SP"
  },
  {
    nome: "Espaço Cultural Júlio Prestes (área gratuita)",
    endereco: "Praça Júlio Prestes - Luz, São Paulo - SP",
    link: "https://www.google.com/maps/dir/?api=1&destination=Espaço+Cultural+Júlio+Prestes,+São+Paulo,+SP"
  },
  {
    nome: "Casa das Caldeiras",
    endereco: "Av. Francisco Matarazzo, 2000 - Água Branca, São Paulo - SP",
    link: "https://www.google.com/maps/dir/?api=1&destination=Casa+das+Caldeiras,+São+Paulo,+SP"
  }
],

"Tatuapé": [
  {
    nome: "Praça Sílvio Romero",
    endereco: "Praça Sílvio Romero - Tatuapé, São Paulo - SP",
    link: "https://www.google.com/maps/dir/?api=1&destination=Praça+Sílvio+Romero,+Tatuapé,+São+Paulo,+SP"
  },
  {
    nome: "Centro Cultural Tatuapé",
    endereco: "R. Tuiuti, 515 - Tatuapé, São Paulo - SP",
    link: "https://www.google.com/maps/dir/?api=1&destination=Centro+Cultural+Tatuapé,+São+Paulo,+SP"
  },
  {
    nome: "Biblioteca Hans Christian Andersen",
    endereco: "Av. Celso Garcia, 4142 - Tatuapé, São Paulo - SP",
    link: "https://www.google.com/maps/dir/?api=1&destination=Biblioteca+Hans+Christian+Andersen,+São+Paulo,+SP"
  },
  {
    nome: "Teatro Eva Wilma",
    endereco: "R. Antônio de Lucena, 146 - Tatuapé, São Paulo - SP",
    link: "https://www.google.com/maps/dir/?api=1&destination=Teatro+Eva+Wilma,+São+Paulo,+SP"
  },
  {
    nome: "Fábrica de Cultura Tatuapé",
    endereco: "Av. Salim Farah Maluf, 700 - Tatuapé, São Paulo - SP",
    link: "https://www.google.com/maps/dir/?api=1&destination=Fábrica+de+Cultura+Tatuapé,+São+Paulo,+SP"
  },
  {
    nome: "Parque CERET (eventos culturais)",
    endereco: "R. Canuto Abreu, 505 - Tatuapé, São Paulo - SP",
    link: "https://www.google.com/maps/dir/?api=1&destination=Parque+CERET,+São+Paulo,+SP"
  },
  {
    nome: "Biblioteca Pública Mário Schenberg – Tatuapé",
    endereco: "R. Emília Marengo, 500 - Tatuapé, São Paulo - SP",
    link: "https://www.google.com/maps/dir/?api=1&destination=Biblioteca+Pública+Mário+Schenberg,+São+Paulo,+SP"
  },
  {
  nome: "Casa de Cultura Tatuapé (espaço gratuito)",
    endereco: "R. Tuiuti, 515 - Tatuapé, São Paulo - SP",
    link: "https://www.google.com/maps/dir/?api=1&destination=Casa+de+Cultura+Tatuapé,+São+Paulo,+SP"
  },
  {
    nome: "Praça Sílvio Romero (feiras culturais)",
    endereco: "Praça Sílvio Romero - Tatuapé, São Paulo - SP",
    link: "https://www.google.com/maps/dir/?api=1&destination=Praça+Sílvio+Romero,+São+Paulo,+SP"
  },
  {
    nome: "Espaço de Vivência Tatuapé (atividades gratuitas)",
    endereco: "Av. Celso Garcia, 4200 - Tatuapé, São Paulo - SP",
    link: "https://www.google.com/maps/dir/?api=1&destination=Espaço+de+Vivência+Tatuapé,+São+Paulo,+SP"
  }
],

"Vila Mariana": [
  {
    nome: "Museu Afro Brasil",
    endereco: "Av. Pedro Álvares Cabral, s/n - Parque Ibirapuera, São Paulo - SP",
    link: "https://www.google.com/maps/dir/?api=1&destination=Museu+Afro+Brasil,+São+Paulo,+SP"
  },
  {
    nome: "Auditório Ibirapuera",
    endereco: "Parque Ibirapuera - Portão 2, São Paulo - SP",
    link: "https://www.google.com/maps/dir/?api=1&destination=Auditório+Ibirapuera,+São+Paulo,+SP"
  },
  {
    nome: "Museu de Arte Contemporânea (MAC USP)",
    endereco: "Av. Pedro Álvares Cabral, 1301 - Vila Mariana, São Paulo - SP",
    link: "https://www.google.com/maps/dir/?api=1&destination=Museu+de+Arte+Contemporânea+MAC+USP,+São+Paulo,+SP"
  },
  {
    nome: "Parque Ibirapuera (eventos culturais gratuitos)",
    endereco: "Av. Pedro Álvares Cabral, s/n - Vila Mariana, São Paulo - SP",
    link: "https://www.google.com/maps/dir/?api=1&destination=Parque+Ibirapuera,+São+Paulo,+SP"
  },
  {
  nome: "Casa de Cultura Vila Mariana",
    endereco: "R. José Maria Lisboa, 838 - Vila Mariana, São Paulo - SP",
    link: "https://www.google.com/maps/dir/?api=1&destination=Casa+de+Cultura+Vila+Mariana,+São+Paulo,+SP"
  },
  {
    nome: "Biblioteca Pública Vila Mariana",
    endereco: "R. Domingos de Morais, 1732 - Vila Mariana, São Paulo - SP",
    link: "https://www.google.com/maps/dir/?api=1&destination=Biblioteca+Pública+Vila+Mariana,+São+Paulo,+SP"
  },
  {
    nome: "Centro de Pesquisa e Cultura USP – Vila Mariana",
    endereco: "Av. Dr. Altino Arantes, 1.000 - Vila Mariana, São Paulo - SP",
    link: "https://www.google.com/maps/dir/?api=1&destination=Centro+de+Pesquisa+e+Cultura+USP,+São+Paulo,+SP"
  },
  {
    nome: "Sala São Paulo (próximo)",
    endereco: "Praça Júlio Prestes - Luz, São Paulo - SP",
    link: "https://www.google.com/maps/dir/?api=1&destination=Sala+São+Paulo,+São+Paulo,+SP"
  },
  {
    nome: "Fábrica de Cultura Vila Mariana",
  endereco: "Av. Dr. Ricardo Jafet, 880 - Vila Mariana, São Paulo - SP",
    link: "https://www.google.com/maps/dir/?api=1&destination=Fábrica+de+Cultura+Vila+Mariana,+São+Paulo,+SP"
  },
  {
  nome: "Sesc Vila Mariana (atividades gratuitas)",
    endereco: "R. Pelotas, 141 - Vila Mariana, São Paulo - SP",
    link: "https://www.google.com/maps/dir/?api=1&destination=Sesc+Vila+Mariana,+São+Paulo,+SP"
  }
],

  "Tatuapé": [
    { nome: "Praça Sílvio Romero", endereco: "Praça Sílvio Romero - Tatuapé", link: "https://www.google.com/maps/dir/?api=1&destination=Praça+Sílvio+Romero+-+Tatuapé,+São+Paulo" },
    { nome: "Centro Cultural Tatuapé", endereco: "R. Tuiuti, 515 - Tatuapé", link: "https://www.google.com/maps/dir/?api=1&destination=Rua+Tuiuti,+515+-+Tatuapé,+São+Paulo" },
    { nome: "Biblioteca Hans Christian Andersen", endereco: "Av. Celso Garcia, 4142 - Tatuapé", link: "https://www.google.com/maps/dir/?api=1&destination=Av.+Celso+Garcia,+4142+-+Tatuapé,+São+Paulo" },
    { nome: "Teatro Eva Wilma", endereco: "R. Antônio de Lucena, 146 - Tatuapé", link: "https://www.google.com/maps/dir/?api=1&destination=Rua+Antônio+de+Lucena,+146+-+Tatuapé,+São+Paulo" },
    { nome: "Fábrica de Cultura Tatuapé", endereco: "Av. Salim Farah Maluf, 700 - Tatuapé", link: "https://www.google.com/maps/dir/?api=1&destination=Av.+Salim+Farah+Maluf,+700+-+Tatuapé,+São+Paulo" },
    { nome: "Parque CERET", endereco: "R. Venturi, 1074 - Tatuapé", link: "https://www.google.com/maps/dir/?api=1&destination=Rua+Venturi,+1074+-+Tatuapé,+São+Paulo" },
    { nome: "Biblioteca Pública Mário Schenberg", endereco: "R. Eng. Caetano Álvares, 70 - Tatuapé", link: "https://www.google.com/maps/dir/?api=1&destination=Rua+Engenheiro+Caetano+Álvares,+70+-+Tatuapé,+São+Paulo" },
    { nome: "Casa de Cultura Tatuapé", endereco: "R. Monte Serrat, 455 - Tatuapé", link: "https://www.google.com/maps/dir/?api=1&destination=Rua+Monte+Serrat,+455+-+Tatuapé,+São+Paulo" },
    { nome: "Praça Silvio Romero (Feira Cultural)", endereco: "Praça Sílvio Romero - Tatuapé", link: "https://www.google.com/maps/dir/?api=1&destination=Praça+Sílvio+Romero+-+Tatuapé,+São+Paulo" },
    { nome: "Espaço de Vivência Tatuapé", endereco: "Av. Celso Garcia, 4200 - Tatuapé", link: "https://www.google.com/maps/dir/?api=1&destination=Av.+Celso+Garcia,+4200+-+Tatuapé,+São+Paulo" }
  ],

  "Vila Mariana": [
    { nome: "Museu Afro Brasil", endereco: "Av. Pedro Álvares Cabral, s/n - Ibirapuera", link: "https://www.google.com/maps/dir/?api=1&destination=Museu+Afro+Brasil,+São+Paulo" },
    { nome: "Auditório Ibirapuera", endereco: "Parque Ibirapuera - Portão 2", link: "https://www.google.com/maps/dir/?api=1&destination=Auditório+Ibirapuera,+São+Paulo" },
    { nome: "Museu de Arte Contemporânea (MAC USP)", endereco: "Av. Pedro Álvares Cabral, 1301 - Vila Mariana", link: "https://www.google.com/maps/dir/?api=1&destination=Museu+de+Arte+Contemporânea+da+USP,+São+Paulo" },
    { nome: "Parque Ibirapuera", endereco: "Av. Pedro Álvares Cabral, s/n - Vila Mariana", link: "https://www.google.com/maps/dir/?api=1&destination=Parque+Ibirapuera,+São+Paulo" },
    { nome: "Casa de Cultura Vila Mariana", endereco: "R. Pelotas, 141 - Vila Mariana", link: "https://www.google.com/maps/dir/?api=1&destination=Rua+Pelotas,+141+-+Vila+Mariana,+São+Paulo" },
    { nome: "Biblioteca Anne Frank", endereco: "R. Anchieta, 645 - Vila Mariana", link: "https://www.google.com/maps/dir/?api=1&destination=Rua+Anchieta,+645+-+Vila+Mariana,+São+Paulo" },
    { nome: "Centro de Pesquisa e Formação Sesc", endereco: "R. Dr. Plínio Barreto, 285 - Bela Vista", link: "https://www.google.com/maps/dir/?api=1&destination=Rua+Dr.+Plínio+Barreto,+285,+São+Paulo" },
    { nome: "Sala São Paulo", endereco: "Praça Júlio Prestes - Luz", link: "https://www.google.com/maps/dir/?api=1&destination=Sala+São+Paulo,+Praça+Júlio+Prestes,+São+Paulo" },
    { nome: "Fábrica de Cultura Vila Mariana", endereco: "Av. Brigadeiro Luís Antônio, 1500 - Vila Mariana", link: "https://www.google.com/maps/dir/?api=1&destination=Av.+Brigadeiro+Luís+Antônio,+1500+-+São+Paulo" },
    { nome: "Sesc Vila Mariana", endereco: "R. Pelotas, 141 - Vila Mariana", link: "https://www.google.com/maps/dir/?api=1&destination=Sesc+Vila+Mariana,+Rua+Pelotas,+141,+São+Paulo" }
  ],

  "Pinheiros": [
    { nome: "Instituto Tomie Ohtake", endereco: "Av. Faria Lima, 201 - Pinheiros", link: "https://www.google.com/maps/dir/?api=1&destination=Instituto+Tomie+Ohtake,+São+Paulo" },
    { nome: "Beco do Batman", endereco: "R. Gonçalo Afonso - Vila Madalena", link: "https://www.google.com/maps/dir/?api=1&destination=Beco+do+Batman,+São+Paulo" },
    { nome: "Centro Cultural Rio Verde", endereco: "R. Belmiro Braga, 119 - Vila Madalena", link: "https://www.google.com/maps/dir/?api=1&destination=Centro+Cultural+Rio+Verde,+São+Paulo" },
    { nome: "Sesc Pinheiros", endereco: "R. Paes Leme, 195 - Pinheiros", link: "https://www.google.com/maps/dir/?api=1&destination=Sesc+Pinheiros,+São+Paulo" },
    { nome: "Feira da Benedito Calixto", endereco: "Praça Benedito Calixto - Pinheiros", link: "https://www.google.com/maps/dir/?api=1&destination=Praça+Benedito+Calixto,+São+Paulo" },
    { nome: "Galeria Choque Cultural", endereco: "R. Medeiros de Albuquerque, 250 - Vila Madalena", link: "https://www.google.com/maps/dir/?api=1&destination=Galeria+Choque+Cultural,+São+Paulo" },
    { nome: "Parque Villa-Lobos", endereco: "Av. Prof. Fonseca Rodrigues, 2001 - Alto de Pinheiros", link: "https://www.google.com/maps/dir/?api=1&destination=Parque+Villa-Lobos,+São+Paulo" },
    { nome: "Museu da Casa Brasileira", endereco: "Av. Brigadeiro Faria Lima, 2705 - Jardim Paulistano", link: "https://www.google.com/maps/dir/?api=1&destination=Museu+da+Casa+Brasileira,+São+Paulo" },
    { nome: "Casa das Caldeiras", endereco: "Av. Francisco Matarazzo, 2000 - Água Branca", link: "https://www.google.com/maps/dir/?api=1&destination=Casa+das+Caldeiras,+São+Paulo" },
    { nome: "Galeria Vermelho", endereco: "R. Minas Gerais, 350 - Consolação", link: "https://www.google.com/maps/dir/?api=1&destination=Galeria+Vermelho,+São+Paulo" }
  ],

  "Mooca": [
    { nome: "Museu da Imigração", endereco: "R. Visc. de Parnaíba, 1316 - Mooca", link: "https://www.google.com/maps/dir/?api=1&destination=Museu+da+Imigração,+São+Paulo" },
    { nome: "Teatro Municipal Arthur Azevedo", endereco: "Av. Paes de Barros, 955 - Mooca", link: "https://www.google.com/maps/dir/?api=1&destination=Teatro+Arthur+Azevedo,+São+Paulo" },
    { nome: "Clube Juventus", endereco: "R. Juventus, 690 - Mooca", link: "https://www.google.com/maps/dir/?api=1&destination=Clube+Juventus,+São+Paulo" },
    { nome: "Praça Visconde de Souza Fontes", endereco: "R. Orville Derby, 40 - Mooca", link: "https://www.google.com/maps/dir/?api=1&destination=Praça+Visconde+de+Souza+Fontes,+São+Paulo" },
    { nome: "Biblioteca Pública Affonso Taunay", endereco: "R. Taquari, 549 - Mooca", link: "https://www.google.com/maps/dir/?api=1&destination=Rua+Taquari,+549,+São+Paulo" },
    { nome: "Casa de Cultura da Mooca", endereco: "R. Taquari, 141 - Mooca", link: "https://www.google.com/maps/dir/?api=1&destination=Rua+Taquari,+141,+São+Paulo" },
    { nome: "Parque Sabesp Mooca", endereco: "Av. Paes de Barros, 2100 - Mooca", link: "https://www.google.com/maps/dir/?api=1&destination=Av.+Paes+de+Barros,+2100,+São+Paulo" },
    { nome: "Centro Educacional e Cultural da Mooca", endereco: "R. Taquari, 141 - Mooca", link: "https://www.google.com/maps/dir/?api=1&destination=Rua+Taquari,+141,+São+Paulo" },
    { nome: "Praça Madre de Deus", endereco: "R. da Mooca, 199 - Mooca", link: "https://www.google.com/maps/dir/?api=1&destination=Praça+Madre+de+Deus,+São+Paulo" },
    { nome: "Espaço Cultural Juventus", endereco: "R. Juventus, 690 - Mooca", link: "https://www.google.com/maps/dir/?api=1&destination=Rua+Juventus,+690,+São+Paulo" }
  ],
  "Jabaquara": [
    { nome: "Centro Cultural Jabaquara", endereco: "R. Arsênio Tavolieri, 45 - Jabaquara", link: "https://www.google.com/maps/dir/?api=1&destination=R.+Ars%C3%AAnio+Tavolieri,+45+-+Jabaquara,+S%C3%A3o+Paulo" },
    { nome: "Casa de Cultura do Jabaquara", endereco: "R. Arsênio Tavolieri, 45 - Jabaquara", link: "https://www.google.com/maps/dir/?api=1&destination=R.+Ars%C3%AAnio+Tavolieri,+45+-+Jabaquara,+S%C3%A3o+Paulo" },
    { nome: "Parque Lina e Paulo Raia", endereco: "Av. Dr. Hugo Beolchi, 900 - Jabaquara", link: "https://www.google.com/maps/dir/?api=1&destination=Av.+Dr.+Hugo+Beolchi,+900+-+Jabaquara,+S%C3%A3o+Paulo" },
    { nome: "Museu de Arte Popular do Ipiranga (próximo)", endereco: "Parque da Independência, s/n - Ipiranga", link: "https://www.google.com/maps/dir/?api=1&destination=Parque+da+Independ%C3%AAncia,+S%C3%A3o+Paulo" },
    { nome: "Praça do Jabaquara", endereco: "Praça do Jabaquara - Jabaquara", link: "https://www.google.com/maps/dir/?api=1&destination=Pra%C3%A7a+do+Jabaquara,+S%C3%A3o+Paulo" },
    { nome: "Igreja São Francisco de Assis do Jabaquara", endereco: "R. Nelson Fernandes, 81 - Jabaquara", link: "https://www.google.com/maps/dir/?api=1&destination=R.+Nelson+Fernandes,+81+-+Jabaquara,+S%C3%A3o+Paulo" },
    { nome: "Parque do Nabuco", endereco: "R. Frederico Albuquerque, 120 - Jabaquara", link: "https://www.google.com/maps/dir/?api=1&destination=R.+Frederico+Albuquerque,+120+-+Jabaquara,+S%C3%A3o+Paulo" },
    { nome: "Praça Santa Rita de Cássia", endereco: "Praça Santa Rita de Cássia - Jabaquara", link: "https://www.google.com/maps/dir/?api=1&destination=Pra%C3%A7a+Santa+Rita+de+C%C3%A1ssia,+Jabaquara,+S%C3%A3o+Paulo" },
    { nome: "Biblioteca Municipal Vicente de Carvalho", endereco: "Av. Santa Catarina, 1105 - Jabaquara", link: "https://www.google.com/maps/dir/?api=1&destination=Av.+Santa+Catarina,+1105+-+Jabaquara,+S%C3%A3o+Paulo" },
    { nome: "Feira de Artesanato do Jabaquara", endereco: "Praça Santa Rita de Cássia - Jabaquara", link: "https://www.google.com/maps/dir/?api=1&destination=Pra%C3%A7a+Santa+Rita+de+C%C3%A1ssia,+Jabaquara,+S%C3%A3o+Paulo" }
  ],

  "Itaim Bibi": [
    { nome: "Teatro VIVO", endereco: "Av. Dr. Chucri Zaidan, 860 - Vila Cordeiro", link: "https://www.google.com/maps/dir/?api=1&destination=Av.+Dr.+Chucri+Zaidan,+860+-+Vila+Cordeiro,+S%C3%A3o+Paulo" },
    { nome: "MuBE - Museu Brasileiro da Escultura", endereco: "Av. Europa, 218 - Jardim Europa", link: "https://www.google.com/maps/dir/?api=1&destination=Av.+Europa,+218+-+Jardim+Europa,+S%C3%A3o+Paulo" },
    { nome: "Teatro Santander", endereco: "Av. Pres. Juscelino Kubitschek, 2041 - Itaim Bibi", link: "https://www.google.com/maps/dir/?api=1&destination=Av.+Pres.+Juscelino+Kubitschek,+2041+-+Itaim+Bibi,+S%C3%A3o+Paulo" },
    { nome: "Parque do Povo", endereco: "Av. Henrique Chamma, 420 - Pinheiros", link: "https://www.google.com/maps/dir/?api=1&destination=Av.+Henrique+Chamma,+420+-+Pinheiros,+S%C3%A3o+Paulo" },
    { nome: "Casa Bandeirista", endereco: "Praça Monteiro Lobato, s/n - Itaim Bibi", link: "https://www.google.com/maps/dir/?api=1&destination=Pra%C3%A7a+Monteiro+Lobato,+s%2Fn+-+Itaim+Bibi,+S%C3%A3o+Paulo" },
    { nome: "Praça do Pôr do Sol", endereco: "R. Des. Ferreira França - Alto de Pinheiros", link: "https://www.google.com/maps/dir/?api=1&destination=R.+Des.+Ferreira+Fran%C3%A7a+-+Alto+de+Pinheiros,+S%C3%A3o+Paulo" },
    { nome: "Instituto Tomie Ohtake", endereco: "R. Coropés, 88 - Pinheiros", link: "https://www.google.com/maps/dir/?api=1&destination=R.+Corop%C3%A9s,+88+-+Pinheiros,+S%C3%A3o+Paulo" },
    { nome: "Parque do Ibirapuera", endereco: "Av. Pedro Álvares Cabral - Vila Mariana", link: "https://www.google.com/maps/dir/?api=1&destination=Av.+Pedro+%C3%81lvares+Cabral+-+Vila+Mariana,+S%C3%A3o+Paulo" },
    { nome: "Biblioteca Anne Frank", endereco: "R. Cojuba, 45 - Jardim Europa", link: "https://www.google.com/maps/dir/?api=1&destination=R.+Cojuba,+45+-+Jardim+Europa,+S%C3%A3o+Paulo" },
    { nome: "Feira de Artes da Vila Madalena", endereco: "R. Fradique Coutinho - Pinheiros", link: "https://www.google.com/maps/dir/?api=1&destination=R.+Fradique+Coutinho+-+Pinheiros,+S%C3%A3o+Paulo" }
  ],

  "Perdizes": [
    { nome: "Sesc Pompeia", endereco: "R. Clélia, 93 - Pompeia", link: "https://www.google.com/maps/dir/?api=1&destination=R.+Cl%C3%A9lia,+93+-+Pompeia,+S%C3%A3o+Paulo" },
    { nome: "Memorial da América Latina", endereco: "Av. Auro Soares de Moura Andrade, 664 - Barra Funda", link: "https://www.google.com/maps/dir/?api=1&destination=Av.+Auro+Soares+de+Moura+Andrade,+664+-+Barra+Funda,+S%C3%A3o+Paulo" },
    { nome: "Teatro Bradesco", endereco: "Rua Palestra Itália, 500 - Perdizes", link: "https://www.google.com/maps/dir/?api=1&destination=Rua+Palestra+It%C3%A1lia,+500+-+Perdizes,+S%C3%A3o+Paulo" },
    { nome: "Allianz Parque Tour", endereco: "Av. Francisco Matarazzo, 1705 - Água Branca", link: "https://www.google.com/maps/dir/?api=1&destination=Av.+Francisco+Matarazzo,+1705+-+%C3%81gua+Branca,+S%C3%A3o+Paulo" },
    { nome: "Parque da Água Branca", endereco: "Av. Francisco Matarazzo, 455 - Água Branca", link: "https://www.google.com/maps/dir/?api=1&destination=Av.+Francisco+Matarazzo,+455+-+%C3%81gua+Branca,+S%C3%A3o+Paulo" },
    { nome: "Museu da Bíblia", endereco: "Av. Francisco Matarazzo, 606 - Água Branca", link: "https://www.google.com/maps/dir/?api=1&destination=Av.+Francisco+Matarazzo,+606+-+%C3%81gua+Branca,+S%C3%A3o+Paulo" },
    { nome: "Praça Charles Miller", endereco: "Pacaembu", link: "https://www.google.com/maps/dir/?api=1&destination=Pra%C3%A7a+Charles+Miller,+Pacaembu,+S%C3%A3o+Paulo" },
    { nome: "Museu do Futebol", endereco: "Praça Charles Miller, s/n - Pacaembu", link: "https://www.google.com/maps/dir/?api=1&destination=Pra%C3%A7a+Charles+Miller,+s%2Fn+-+Pacaembu,+S%C3%A3o+Paulo" },
    { nome: "Teatro TUCA", endereco: "R. Monte Alegre, 1024 - Perdizes", link: "https://www.google.com/maps/dir/?api=1&destination=R.+Monte+Alegre,+1024+-+Perdizes,+S%C3%A3o+Paulo" },
    { nome: "Praça Irmãos Karmann", endereco: "Av. Sumaré, 611 - Perdizes", link: "https://www.google.com/maps/dir/?api=1&destination=Av.+Sumar%C3%A9,+611+-+Perdizes,+S%C3%A3o+Paulo" }
  ],

  "Morumbi": [
    { nome: "Fundação Maria Luisa e Oscar Americano", endereco: "Av. Morumbi, 4077 - Morumbi", link: "https://www.google.com/maps/dir/?api=1&destination=Av.+Morumbi,+4077+-+Morumbi,+S%C3%A3o+Paulo" },
    { nome: "Palácio dos Bandeirantes", endereco: "Av. Morumbi, 4500 - Morumbi", link: "https://www.google.com/maps/dir/?api=1&destination=Av.+Morumbi,+4500+-+Morumbi,+S%C3%A3o+Paulo" },
    { nome: "Parque Burle Marx", endereco: "Av. Dona Helena Pereira de Morais, 200 - Panamby", link: "https://www.google.com/maps/dir/?api=1&destination=Av.+Dona+Helena+Pereira+de+Morais,+200+-+Panamby,+S%C3%A3o+Paulo" },
    { nome: "Shopping Jardim Sul (área cultural)", endereco: "Av. Giovanni Gronchi, 5819 - Vila Andrade", link: "https://www.google.com/maps/dir/?api=1&destination=Av.+Giovanni+Gronchi,+5819+-+Vila+Andrade,+S%C3%A3o+Paulo" },
    { nome: "Museu do Futebol (próximo)", endereco: "Praça Charles Miller, s/n - Pacaembu", link: "https://www.google.com/maps/dir/?api=1&destination=Pra%C3%A7a+Charles+Miller,+s%2Fn+-+Pacaembu,+S%C3%A3o+Paulo" },
    { nome: "Teatro CIEE", endereco: "R. Tabapuã, 445 - Itaim Bibi", link: "https://www.google.com/maps/dir/?api=1&destination=R.+Tabapu%C3%A3,+445+-+Itaim+Bibi,+S%C3%A3o+Paulo" },
    { nome: "Templo de Salomão (visitação gratuita)", endereco: "Av. Celso Garcia, 605 - Brás", link: "https://www.google.com/maps/dir/?api=1&destination=Av.+Celso+Garcia,+605+-+Br%C3%A1s,+S%C3%A3o+Paulo" },
    { nome: "Praça Vinícius de Moraes", endereco: "Av. Giovanni Gronchi, 3377 - Morumbi", link: "https://www.google.com/maps/dir/?api=1&destination=Av.+Giovanni+Gronchi,+3377+-+Morumbi,+S%C3%A3o+Paulo" },
    { nome: "Praça Roberto Gomes Pedrosa", endereco: "Av. Jules Rimet - Morumbi", link: "https://www.google.com/maps/dir/?api=1&destination=Av.+Jules+Rimet+-+Morumbi,+S%C3%A3o+Paulo" },
    { nome: "Biblioteca Paulo Duarte", endereco: "Av. Cantagalo, 504 - Morumbi", link: "https://www.google.com/maps/dir/?api=1&destination=Av.+Cantagalo,+504+-+Morumbi,+S%C3%A3o+Paulo" }
  ],
"Campo Limpo": [
  { nome: "Sesc Campo Limpo", endereco: "Rua Nossa Sra. do Bom Conselho, 120 - Campo Limpo", link: "https://www.google.com/maps/dir/?api=1&destination=Rua+Nossa+Senhora+do+Bom+Conselho,+120+-+Campo+Limpo,+São+Paulo" },
  { nome: "Fábrica de Cultura Capão Redondo", endereco: "Rua Bacia de São Francisco, 79 - Capão Redondo", link: "https://www.google.com/maps/dir/?api=1&destination=Rua+Bacia+de+São+Francisco,+79+-+Capão+Redondo,+São+Paulo" },
  { nome: "Casa de Cultura Campo Limpo", endereco: "Rua Aroldo de Azevedo, 100 - Campo Limpo", link: "https://www.google.com/maps/dir/?api=1&destination=Rua+Aroldo+de+Azevedo,+100+-+Campo+Limpo,+São+Paulo" }
],
"Itaquera": [
  { nome: "Sesc Itaquera", endereco: "Av. Fernando do Espírito Santo Alves de Mattos, 1000 - Itaquera", link: "https://www.google.com/maps/dir/?api=1&destination=Av.+Fernando+do+Espírito+Santo+Alves+de+Mattos,+1000+-+Itaquera,+São+Paulo" },
  { nome: "Parque do Carmo (eventos culturais)", endereco: "Av. Afonso de Sampaio e Souza, 951 - Itaquera", link: "https://www.google.com/maps/dir/?api=1&destination=Av.+Afonso+de+Sampaio+e+Souza,+951+-+Itaquera,+São+Paulo" },
  { nome: "Biblioteca Pública Itaquera", endereco: "R. Romão Puigari, 82 - Itaquera", link: "https://www.google.com/maps/dir/?api=1&destination=Rua+Romão+Puigari,+82+-+Itaquera,+São+Paulo" }
],
"São Mateus": [
  { nome: "Fábrica de Cultura São Mateus", endereco: "Av. Arquiteto Vilanova Artigas, 1250 - São Mateus", link: "https://www.google.com/maps/dir/?api=1&destination=Av.+Arquiteto+Vilanova+Artigas,+1250+-+São+Mateus,+São+Paulo" },
  { nome: "Centro Cultural Arte em Construção", endereco: "Av. Adélia Chohfi, 100 - São Mateus", link: "https://www.google.com/maps/dir/?api=1&destination=Av.+Adélia+Chohfi,+100+-+São+Mateus,+São+Paulo" },
  { nome: "Parque São Rafael (eventos culturais)", endereco: "Av. Professor Mário Werneck, 1000 - São Rafael", link: "https://www.google.com/maps/dir/?api=1&destination=Av.+Professor+Mário+Werneck,+1000+-+São+Rafael,+São+Paulo" }
],
"Guaianases": [
  { nome: "Fábrica de Cultura Guaianases", endereco: "R. Castelo de Leça, 60 - Guaianases", link: "https://www.google.com/maps/dir/?api=1&destination=Rua+Castelo+de+Leça,+60+-+Guaianases,+São+Paulo" },
  { nome: "Casa de Cultura Guaianases", endereco: "R. Hipólito Camargo, 173 - Guaianases", link: "https://www.google.com/maps/dir/?api=1&destination=Rua+Hipólito+Camargo,+173+-+Guaianases,+São+Paulo" },
  { nome: "Biblioteca Guaianases", endereco: "R. Castelo de Leça, 62 - Guaianases", link: "https://www.google.com/maps/dir/?api=1&destination=Rua+Castelo+de+Leça,+62+-+Guaianases,+São+Paulo" }
]

};


  return (
    <div className="containerPesquisa">
      <section className="pesquisaCep">
        <form onSubmit={handleSubmit} className="searchForm">
          <input
            type="text"
            placeholder="Digite o CEP (ex: 01001000)"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            className="searchInput"
          />
          <button type="submit" className="searchButton">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>

     {endereco && !erro && (
  <div className="locaisProximos">
    <h4>Locais culturais próximos de {endereco.bairro || "sua região"}:</h4>

    {endereco.localidade === "São Paulo" ? (
      (() => {
        const locais =
          locaisPorBairro[endereco.bairro] ||
          locaisPorBairro[
            bairrosPorPrefixo.find((b) =>
              cep.startsWith(b.prefixo)
            )?.bairro
          ] ||
          [];

        return locais.length > 0 ? (
          <div className="cards-container">
            {locais.map((local, index) => (
              <a
                key={index}
                href={local.link}
                target="_blank"
                rel="noopener noreferrer"
                className="local-card"
              >
                <h5>{local.nome}</h5>
                <p>{local.endereco}</p>
              </a>
            ))}
          </div>
        ) : (
          <p className="nenhumLocal">
            Nenhum local cultural cadastrado no bairro{" "}
            <strong>{endereco.bairro}</strong>.
          </p>
        );
      })()
    ) : (
      <p className="nenhumLocal">
        O CEP informado pertence à cidade de{" "}
        <strong>{endereco.localidade}</strong>.<br />
        Este serviço é válido apenas para endereços de São Paulo (SP).
      </p>
    )}
  </div>
)}

      </section>
    </div>
  );
}
