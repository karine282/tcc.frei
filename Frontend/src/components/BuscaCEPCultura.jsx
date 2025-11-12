import React, { useState } from "react";

export default function BuscaCEPCultura() {
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

 const locaisCulturaSP = {
  
  "Sé": [
    { nome: "Centro Cultural Banco do Brasil (CCBB)", endereco: "R. Álvares Penteado, 112 - Sé, São Paulo - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Centro+Cultural+Banco+do+Brasil,+São+Paulo" },
    { nome: "Pateo do Collegio", endereco: "Pateo do Collegio, 2 - Sé, São Paulo - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Pateo+do+Collegio,+São+Paulo" },
    { nome: "Centro Cultural Caixa", endereco: "Praça da Sé, 111 - Sé, São Paulo - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Praça+da+Sé,+111,+São+Paulo" },
    { nome: "Solar da Marquesa de Santos", endereco: "R. Roberto Simonsen, 136 - Sé, São Paulo - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Solar+da+Marquesa+de+Santos,+São+Paulo" },
    { nome: "Museu Anchieta", endereco: "Pateo do Collegio, 2 - Sé, São Paulo - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Museu+Anchieta,+São+Paulo" },
    { nome: "Centro Cultural São Paulo (CCSP)", endereco: "R. Vergueiro, 1000 - Liberdade, São Paulo - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Centro+Cultural+São+Paulo" },
    { nome: "Praça da Sé - Eventos culturais", endereco: "Praça da Sé, s/n - Sé, São Paulo - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Praça+da+Sé,+São+Paulo" },
    { nome: "Casa da Imagem", endereco: "R. Roberto Simonsen, 136 - Sé, São Paulo - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Casa+da+Imagem,+São+Paulo" }
  ],

  "Bela Vista": [
    { nome: "Museu de Arte de São Paulo (MASP)", endereco: "Av. Paulista, 1578 - Bela Vista, São Paulo - SP", link: "https://www.google.com/maps/dir/?api=1&destination=MASP,+São+Paulo" },
    { nome: "Casa das Rosas", endereco: "Av. Paulista, 37 - Bela Vista, São Paulo - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Casa+das+Rosas,+São+Paulo" },
    { nome: "Japan House São Paulo", endereco: "Av. Paulista, 52 - Bela Vista, São Paulo - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Japan+House,+São+Paulo" },
    { nome: "Instituto Moreira Salles", endereco: "Av. Paulista, 2424 - Bela Vista, São Paulo - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Instituto+Moreira+Salles,+São+Paulo" },
    { nome: "Itaú Cultural", endereco: "Av. Paulista, 149 - Bela Vista, São Paulo - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Itaú+Cultural,+São+Paulo" },
    { nome: "Centro Cultural FIESP", endereco: "Av. Paulista, 1313 - Bela Vista, São Paulo - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Centro+Cultural+FIESP,+São+Paulo" },
    { nome: "Parque Trianon", endereco: "R. Peixoto Gomide, 949 - Bela Vista, São Paulo - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Parque+Trianon,+São+Paulo" },
    { nome: "Praça do Ciclista - Feiras e eventos", endereco: "Av. Paulista, s/n - Bela Vista, São Paulo - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Praça+do+Ciclista,+São+Paulo" }
  ],

  "Liberdade": [
    { nome: "Museu Histórico da Imigração Japonesa", endereco: "R. São Joaquim, 381 - Liberdade, São Paulo - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Museu+da+Imigração+Japonesa,+São+Paulo" },
    { nome: "Casa de Cultura Japonesa", endereco: "R. Galvão Bueno, 596 - Liberdade, São Paulo - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Casa+de+Cultura+Japonesa,+São+Paulo" },
    { nome: "Templo Busshinji", endereco: "R. São Joaquim, 285 - Liberdade, São Paulo - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Templo+Busshinji,+São+Paulo" },
    { nome: "Praça da Liberdade - Feirinha cultural", endereco: "Praça da Liberdade, s/n - Liberdade, São Paulo - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Praça+da+Liberdade,+São+Paulo" },
    { nome: "Centro Cultural São Paulo", endereco: "R. Vergueiro, 1000 - Liberdade, São Paulo - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Centro+Cultural+São+Paulo" },
    { nome: "Museu da Imigração Coreana", endereco: "R. da Glória, 734 - Liberdade, São Paulo - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Museu+da+Imigração+Coreana,+São+Paulo" },
    { nome: "Espaço Cultural Bunkyo", endereco: "R. São Joaquim, 381 - Liberdade, São Paulo - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Bunkyo,+São+Paulo" },
    { nome: "Galeria Sato", endereco: "R. Galvão Bueno, 451 - Liberdade, São Paulo - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Galeria+Sato,+São+Paulo" }
  ],

  "Vila Mariana": [
    { nome: "Museu Afro Brasil", endereco: "Av. Pedro Álvares Cabral, s/n - Parque Ibirapuera, São Paulo - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Museu+Afro+Brasil,+São+Paulo" },
    { nome: "Museu de Arte Contemporânea (MAC-USP)", endereco: "Av. Pedro Álvares Cabral, 1301 - Ibirapuera, São Paulo - SP", link: "https://www.google.com/maps/dir/?api=1&destination=MAC+USP,+São+Paulo" },
    { nome: "Auditório Ibirapuera - Oscar Niemeyer", endereco: "Av. Pedro Álvares Cabral, s/n - Ibirapuera, São Paulo - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Auditório+Ibirapuera,+São+Paulo" },
    { nome: "Museu Lasar Segall", endereco: "R. Berta, 111 - Vila Mariana, São Paulo - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Museu+Lasar+Segall,+São+Paulo" },
    { nome: "Casa Modernista", endereco: "R. Santa Cruz, 325 - Vila Mariana, São Paulo - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Casa+Modernista,+São+Paulo" },
    { nome: "Parque Ibirapuera - Exposições e feiras", endereco: "Av. Pedro Álvares Cabral, s/n - Vila Mariana, São Paulo - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Parque+Ibirapuera,+São+Paulo" },
    { nome: "Casa de Cultura Vila Mariana", endereco: "R. José Antônio Coelho, 554 - Vila Mariana, São Paulo - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Casa+de+Cultura+Vila+Mariana,+São+Paulo" },
    { nome: "Galeria Quarta Parede", endereco: "R. França Pinto, 97 - Vila Mariana, São Paulo - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Galeria+Quarta+Parede,+São+Paulo" }
  ],

  "Pinheiros": [
    { nome: "Instituto Tomie Ohtake", endereco: "R. Coropés, 88 - Pinheiros, São Paulo - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Instituto+Tomie+Ohtake,+São+Paulo" },
    { nome: "Museu da Casa Brasileira", endereco: "Av. Brigadeiro Faria Lima, 2705 - Pinheiros, São Paulo - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Museu+da+Casa+Brasileira,+São+Paulo" },
    { nome: "Centro Cultural Rio Verde", endereco: "R. Belmiro Braga, 119 - Pinheiros, São Paulo - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Centro+Cultural+Rio+Verde,+São+Paulo" },
    { nome: "Praça Benedito Calixto - Feirarte", endereco: "Praça Benedito Calixto, s/n - Pinheiros, São Paulo - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Praça+Benedito+Calixto,+São+Paulo" },
    { nome: "Casa de Cultura Pinheiros", endereco: "R. Paes Leme, 195 - Pinheiros, São Paulo - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Casa+de+Cultura+Pinheiros,+São+Paulo" },
    { nome: "Espaço Cultural Tapera Taperá", endereco: "R. Fradique Coutinho, 1399 - Pinheiros, São Paulo - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Tapera+Taperá,+São+Paulo" },
    { nome: "Sesc Pinheiros", endereco: "R. Paes Leme, 195 - Pinheiros, São Paulo - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Sesc+Pinheiros,+São+Paulo" },
    { nome: "Parque Villa-Lobos - Eventos culturais", endereco: "Av. Prof. Fonseca Rodrigues, 2001 - Pinheiros, São Paulo - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Parque+Villa+Lobos,+São+Paulo" }
  ],

  "Ipiranga": [
    { nome: "Museu do Ipiranga", endereco: "R. dos Patriotas, 100 - Ipiranga, São Paulo - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Museu+do+Ipiranga,+São+Paulo" },
    { nome: "Parque da Independência", endereco: "Av. Nazaré, s/n - Ipiranga, São Paulo - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Parque+da+Independência,+São+Paulo" },
    { nome: "Casa do Grito", endereco: "R. dos Patriotas, s/n - Ipiranga, São Paulo - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Casa+do+Grito,+São+Paulo" },
    { nome: "Museu de Zoologia da USP", endereco: "Av. Nazaré, 481 - Ipiranga, São Paulo - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Museu+de+Zoologia+USP,+São+Paulo" },
    { nome: "Casa de Cultura do Ipiranga", endereco: "R. Abagiba, 20 - Ipiranga, São Paulo - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Casa+de+Cultura+Ipiranga,+São+Paulo" },
    { nome: "Biblioteca Pública Roberto Santos", endereco: "R. Cisplatina, 505 - Ipiranga, São Paulo - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Biblioteca+Roberto+Santos,+São+Paulo" },
    { nome: "Praça do Monumento - Eventos culturais", endereco: "Praça do Monumento, s/n - Ipiranga, São Paulo - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Praça+do+Monumento,+São+Paulo" },
    { nome: "Casa do Povo do Ipiranga", endereco: "R. dos Patriotas, 95 - Ipiranga, São Paulo - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Casa+do+Povo+Ipiranga,+São+Paulo" }
  ],
  "Brooklin": [
    { nome: "Casa de Cultura do Brooklin", endereco: "R. Joaquim Nabuco, 210 - Brooklin, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Casa+de+Cultura+do+Brooklin,+São+Paulo" },
    { nome: "Parque do Cordeiro", endereco: "Av. Professor Vicente Rao, 1550 - Brooklin, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Parque+do+Cordeiro,+São+Paulo" },
    { nome: "Feira do Livro do Brooklin", endereco: "R. Joaquim Nabuco - Brooklin, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Feira+do+Livro+Brooklin,+São+Paulo" },
    { nome: "Festival de Cultura Alemã", endereco: "R. Joaquim Nabuco - Brooklin, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Festival+Brooklin,+São+Paulo" },
    { nome: "Praça Lions Club", endereco: "R. Laplace, 102 - Brooklin, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Praça+Lions+Club,+São+Paulo" },
    { nome: "Feira de Artes do Brooklin", endereco: "Av. Santo Amaro, 5500 - Brooklin, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Feira+de+Artes+Brooklin,+São+Paulo" },
    { nome: "Casa da Cultura do Campo Belo", endereco: "R. Otávio Tarquínio de Souza, 85 - Brooklin, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Casa+de+Cultura+Campo+Belo,+São+Paulo" },
    { nome: "Paróquia São João de Brito - Eventos Culturais", endereco: "R. Nebraska, 868 - Brooklin, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Paróquia+São+João+de+Brito,+São+Paulo" }
  ],

  "Butantã": [
    { nome: "Museu do Instituto Butantan", endereco: "Av. Vital Brasil, 1500 - Butantã, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Museu+do+Instituto+Butantan,+São+Paulo" },
    { nome: "Casa de Cultura do Butantã", endereco: "Av. Junta Mizumoto, 13 - Butantã, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Casa+de+Cultura+do+Butantã,+São+Paulo" },
    { nome: "Parque Previdência", endereco: "R. Pedro Peccinini, s/n - Butantã, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Parque+da+Previdência,+São+Paulo" },
    { nome: "Centro Cultural Butantã", endereco: "Av. Corifeu de Azevedo Marques, 3200 - Butantã, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Centro+Cultural+Butantã,+São+Paulo" },
    { nome: "Museu da Educação e do Brinquedo (USP)", endereco: "Av. da Universidade, 308 - Butantã, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Museu+da+Educação+e+do+Brinquedo,+São+Paulo" },
    { nome: "Feira de Artesanato da USP", endereco: "Cidade Universitária - Butantã, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Feira+de+Artesanato+USP,+São+Paulo" },
    { nome: "Centro de Visitantes do Instituto Butantan", endereco: "Av. Vital Brasil, 1500 - Butantã, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Instituto+Butantan,+São+Paulo" },
    { nome: "Parque Luís Carlos Prestes", endereco: "R. João Della Manna, 665 - Butantã, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Parque+Luís+Carlos+Prestes,+São+Paulo" }
  ],
"Santana": [
    { nome: "Biblioteca de São Paulo", endereco: "Av. Cruzeiro do Sul, 2630 - Santana, São Paulo - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Biblioteca+de+São+Paulo,+SP" },
    { nome: "Parque da Juventude", endereco: "Av. Cruzeiro do Sul, 2630 - Santana, São Paulo - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Parque+da+Juventude,+SP" },
    { nome: "Museu Aberto de Arte Urbana", endereco: "Av. Cruzeiro do Sul, Santana, São Paulo - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Museu+Aberto+de+Arte+Urbana,+SP" },
    { nome: "Casa de Cultura da Zona Norte", endereco: "Av. General Ataliba Leonel, 961 - Santana, São Paulo - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Casa+de+Cultura+da+Zona+Norte,+SP" },
    { nome: "Feira de Artesanato de Santana", endereco: "Praça Domingos Luís, s/n - Santana, São Paulo - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Praça+Domingos+Luís,+SP" },
    { nome: "Praça Campo de Bagatelle", endereco: "Av. Santos Dumont, s/n - Santana, São Paulo - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Praça+Campo+de+Bagatelle,+SP" },
    { nome: "Galeria de Arte do Metrô Santana", endereco: "Av. Cruzeiro do Sul, Santana, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Estação+Santana,+SP" },
    { nome: "Feira de Livros Parque da Juventude", endereco: "Av. Cruzeiro do Sul, 2630 - Santana, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Parque+da+Juventude,+SP" }
  ],

  "Vila Mariana": [
    { nome: "Museu de Arte Contemporânea (MAC-USP)", endereco: "Av. Pedro Álvares Cabral, 1301 - Vila Mariana, SP", link: "https://www.google.com/maps/dir/?api=1&destination=MAC+USP,+SP" },
    { nome: "Museu Afro Brasil", endereco: "Av. Pedro Álvares Cabral, s/n - Parque Ibirapuera, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Museu+Afro+Brasil,+SP" },
    { nome: "Pavilhão Japonês", endereco: "Av. Pedro Álvares Cabral, s/n - Ibirapuera, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Pavilhão+Japonês,+SP" },
    { nome: "Planetário do Ibirapuera", endereco: "Av. Pedro Álvares Cabral, s/n - Ibirapuera, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Planetário+do+Ibirapuera,+SP" },
    { nome: "Museu de Arte Moderna (MAM)", endereco: "Parque Ibirapuera, Portão 3 - SP", link: "https://www.google.com/maps/dir/?api=1&destination=MAM+SP" },
    { nome: "Museu Lasar Segall", endereco: "R. Berta, 111 - Vila Mariana, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Museu+Lasar+Segall,+SP" },
    { nome: "Casa Modernista", endereco: "R. Santa Cruz, 325 - Vila Mariana, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Casa+Modernista,+SP" },
    { nome: "Centro Cultural São Paulo (CCSP)", endereco: "R. Vergueiro, 1000 - Vila Mariana, SP", link: "https://www.google.com/maps/dir/?api=1&destination=CCSP,+SP" }
  ],

  "Liberdade": [
    { nome: "Praça da Liberdade - Corrida e alongamento", endereco: "Praça da Liberdade, s/n - Liberdade, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Praça+da+Liberdade,+SP" },
    { nome: "Ginásio Poliesportivo Liberdade", endereco: "R. Galvão Bueno, 50 - Liberdade, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Ginásio+Poliesportivo+Liberdade,+SP" },
    { nome: "Praça Japão - Quadra poliesportiva", endereco: "Praça Japão, s/n - Liberdade, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Praça+Japão,+SP" }
  ],

  "Vila Prudente": [
    { nome: "Parque Ecológico Vila Prudente - Corrida e quadras", endereco: "Av. Do Oratório, s/n - Vila Prudente, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Parque+Ecológico+Vila+Prudente,+SP" },
    { nome: "Ginásio Poliesportivo Vila Prudente", endereco: "R. Bom Pastor, 100 - Vila Prudente, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Ginásio+Poliesportivo+Vila+Prudente,+SP" },
    { nome: "Praça Dr. José Fernandes - Quadras e academia", endereco: "R. Taquari, s/n - Vila Prudente, SP", link: "https://www.google.com/maps/dir/?api=1&destination=R.+Taquari,+SP" }
  ],

  "Tatuapé": [
    { nome: "Parque Esportivo do Tatuapé - Quadras e corrida", endereco: "Av. Salim Farah Maluf, s/n - Tatuapé, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Parque+Esportivo+do+Tatuapé,+SP" },
    { nome: "Ginásio Poliesportivo Tatuapé", endereco: "R. Apucarana, 150 - Tatuapé, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Ginásio+Poliesportivo+Tatuapé,+SP" },
    { nome: "Praça Silvio Romero - Quadra e academia ao ar livre", endereco: "R. Silvio Romero, s/n - Tatuapé, SP", link: "https://www.google.com/maps/dir/?api=1&destination=R.+Silvio+Romero,+SP" }
  ],

   "Moema": [
    { nome: "Ibirapuera Park - Auditório Externo", endereco: "Av. Pedro Álvares Cabral, s/n - Moema, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Auditório+Ibirapuera,+São+Paulo" },
    { nome: "Museu de Arte Contemporânea (MAC-USP)", endereco: "Av. Pedro Álvares Cabral, 1301 - Moema, SP", link: "https://www.google.com/maps/dir/?api=1&destination=MAC+USP,+São+Paulo" },
    { nome: "Museu Afro Brasil", endereco: "Av. Pedro Álvares Cabral, s/n - Moema, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Museu+Afro+Brasil,+São+Paulo" },
    { nome: "Planetário do Ibirapuera", endereco: "Av. Pedro Álvares Cabral, s/n - Moema, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Planetário+do+Ibirapuera,+São+Paulo" },
    { nome: "Jardim Japonês do Ibirapuera", endereco: "Av. Pedro Álvares Cabral, s/n - Moema, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Jardim+Japonês+Ibirapuera,+São+Paulo" },
    { nome: "Parque das Bicicletas", endereco: "Al. Iraé, 35 - Moema, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Parque+das+Bicicletas,+São+Paulo" },
    { nome: "Casa de Cultura de Santo Amaro", endereco: "Praça Dr. Francisco Ferreira Lopes, 434 - Moema, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Casa+de+Cultura+de+Santo+Amaro,+São+Paulo" },
    { nome: "Feira de Artes e Antiguidades de Moema", endereco: "Al. dos Arapanés, 1200 - Moema, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Feira+de+Moema,+São+Paulo" }
  ],


  "Ipiranga": [
    { nome: "Parque da Independência - Corrida e quadras", endereco: "Av. Nazaré, s/n - Ipiranga, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Parque+da+Independência,+SP" },
    { nome: "Ginásio Poliesportivo Ipiranga", endereco: "R. Bom Pastor, 120 - Ipiranga, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Ginásio+Poliesportivo+Ipiranga,+SP" },
    { nome: "Praça Roberto Gomes - Quadra e academia", endereco: "R. Silva Bueno, s/n - Ipiranga, SP", link: "https://www.google.com/maps/dir/?api=1&destination=R.+Silva+Bueno,+SP" }
  ],

  "Perdizes": [
    { nome: "Parque da Água Branca - Corrida, quadras e exercícios", endereco: "Av. Francisco Matarazzo, 455 - Perdizes, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Parque+da+Água+Branca,+SP" },
    { nome: "Ginásio Poliesportivo Perdizes", endereco: "R. Cardoso de Almeida, 400 - Perdizes, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Ginásio+Poliesportivo+Perdizes,+SP" },
    { nome: "Praça Buenos Aires - Quadras e pista", endereco: "R. Dr. Homem de Melo, s/n - Perdizes, SP", link: "https://www.google.com/maps/dir/?api=1&destination=R.+Dr.+Homem+de+Melo,+SP" }
  ],

  "Vila Leopoldina": [
    { nome: "Parque Villa-Lobos - Corrida e quadras", endereco: "Av. Prof. Fonseca Rodrigues, s/n - Vila Leopoldina, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Parque+Villa-Lobos,+SP" },
    { nome: "Ginásio Poliesportivo Vila Leopoldina", endereco: "R. Francisco Pignatari, 300 - Vila Leopoldina, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Ginásio+Poliesportivo+Vila+Leopoldina,+SP" },
    { nome: "Praça da Vila - Quadra e academia", endereco: "R. Doutor Guilherme Cristoffel, s/n - Vila Leopoldina, SP", link: "https://www.google.com/maps/dir/?api=1&destination=R.+Doutor+Guilherme+Cristoffel,+SP" }
  ],

  "Campo Limpo": [
    { nome: "Parque Linear Campo Limpo - Corrida e quadras", endereco: "Av. Carlos Caldeira Filho, s/n - Campo Limpo, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Parque+Linear+Campo+Limpo,+SP" },
    { nome: "Ginásio Poliesportivo Campo Limpo", endereco: "R. Cap. João José, 150 - Campo Limpo, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Ginásio+Poliesportivo+Campo+Limpo,+SP" },
    { nome: "Praça do Esporte - Quadras e pista", endereco: "R. Conde de Itanhaém, s/n - Campo Limpo, SP", link: "https://www.google.com/maps/dir/?api=1&destination=R.+Conde+de+Itanhaém,+SP" }
  ],

  "Jabaquara": [
    { nome: "Parque Linear Jabaquara - Corrida e quadras", endereco: "Av. Eng. Armando de Arruda Pereira, s/n - Jabaquara, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Parque+Linear+Jabaquara,+SP" },
    { nome: "Ginásio Poliesportivo Jabaquara", endereco: "R. Mascarenhas de Morais, 500 - Jabaquara, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Ginásio+Poliesportivo+Jabaquara,+SP" },
    { nome: "Praça Jabaquara - Quadras e academia", endereco: "R. do Jabaquara, s/n - Jabaquara, SP", link: "https://www.google.com/maps/dir/?api=1&destination=R.+do+Jabaquara,+SP" }
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
    <h4>Locais esportivos próximos de {endereco.bairro || "sua região"}:</h4>

    {endereco.localidade === "São Paulo" ? (
      (() => {
        const locais =
          locaisCulturaSP [endereco.bairro] ||
          locaisCulturaSP [
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
