import React, { useState } from "react";

export default function BuscaCEPLazer() {
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
  "Vila Madalena": [
    { nome: "Beco do Batman", endereco: "R. Gonçalo Afonso - Vila Madalena, SP", link: "https://www.google.com/maps/dir/?api=1&destination=R.+Gonçalo+Afonso+-+Vila+Madalena,+São+Paulo" },
    { nome: "Praça Pôr do Sol", endereco: "R. Desembargador Ferreira França - Alto de Pinheiros, SP", link: "https://www.google.com/maps/dir/?api=1&destination=R.+Desembargador+Ferreira+França+-+Alto+de+Pinheiros,+São+Paulo" },
    { nome: "Galeria de Grafite Vila Madalena", endereco: "Vila Madalena - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Vila+Madalena,+São+Paulo" },
    { nome: "Praça Atílio Innocenti", endereco: "R. Wisard, s/n - Vila Madalena, SP", link: "https://www.google.com/maps/dir/?api=1&destination=R.+Wisard,+Vila+Madalena,+São+Paulo" },
    { nome: "Espaço Cultural Vila Madalena (arte de rua)", endereco: "Vila Madalena - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Vila+Madalena,+São+Paulo" }
  ],

  "Alto de Pinheiros": [
    { nome: "Parque Villa‑Lobos", endereco: "Av. Prof. Fonseca Rodrigues, 2001 - Alto de Pinheiros, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Av.+Prof.+Fonseca+Rodrigues,+2001+-+Alto+de+Pinheiros,+São+Paulo" },
    { nome: "Ciclovia Marginal Pinheiros (trecho parque)", endereco: "Marginal Pinheiros, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Marginal+Pinheiros,+São+Paulo" },
    { nome: "Praça Pôr do Sol (vista panorâmica)", endereco: "R. Desembargador Ferreira França - Alto de Pinheiros, SP", link: "https://www.google.com/maps/dir/?api=1&destination=R.+Desembargador+Ferreira+França+-+Alto+de+Pinheiros,+São+Paulo" },
    { nome: "Museu da Casa Brasileira (área externa gratuita)", endereco: "Av. Brigadeiro Faria Lima, 2705 - Jardim Paulistano/Alto de Pinheiros, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Av.+Brigadeiro+Faria+Lima,+2705+-+Jardim+Paulistano,+São+Paulo" },
    { nome: "Praça Cornélia", endereco: "R. Cornélia, s/n - Alto de Pinheiros, SP", link: "https://www.google.com/maps/dir/?api=1&destination=R.+Cornélia,+Alto+de+Pinheiros,+São+Paulo" }
  ],

  "Itaquera": [
    { nome: "Parque do Carmo", endereco: "Av. Afonso de Sampaio e Souza, 951 - Itaquera, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Av.+Afonso+de+Sampaio+e+Souza,+951+-+Itaquera,+São+Paulo" },
    { nome: "Biblioteca Pública Itaquera", endereco: "R. Romão Puigari, 82 - Itaquera, SP", link: "https://www.google.com/maps/dir/?api=1&destination=R.+Romão+Puigari,+82+-+Itaquera,+São+Paulo" },
    { nome: "Shopping Metrô Itaquera (área de convivência gratuita)", endereco: "Av. Dr. Francisco Mesquita, 1800 - Itaquera, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Av.+Dr.+Francisco+Mesquita,+1800+-+Itaquera,+São+Paulo" },
    { nome: "Centro Cultural Itaquera", endereco: "Av. Governador Carvalho Pinto, s/n - Itaquera, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Av.+Governador+Carvalho+Pinto,+s%2Fn+-+Itaquera,+São+Paulo" },
    { nome: "Praça de Eventos Itaquera (uso comunitário gratuito)", endereco: "Itaquera, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Itaquera,+São+Paulo" }
  ],

  "Pinheiros": [
    { nome: "Praça dos Omaguás", endereco: "R. dos Omaguás, s/n - Pinheiros, SP", link: "https://www.google.com/maps/dir/?api=1&destination=R.+dos+Omaguás,+Pinheiros,+São+Paulo" },
    { nome: "Instituto Tomie Ohtake (área externa)", endereco: "R. Coropés, 88 - Pinheiros, SP", link: "https://www.google.com/maps/dir/?api=1&destination=R.+Coropés,+88+-+Pinheiros,+São+Paulo" },
    { nome: "Praça do Pôr do Sol Pinheiros", endereco: "R. dos Pinheiros, SP", link: "https://www.google.com/maps/dir/?api=1&destination=R.+dos+Pinheiros,+São+Paulo" },
    { nome: "Praça Benedito Calixto", endereco: "R. Coropés, 88 - Pinheiros, SP", link: "https://www.google.com/maps/dir/?api=1&destination=R.+Coropés,+88+-+Pinheiros,+São+Paulo" },
    { nome: "Feira de Antiguidades da Benedito Calixto", endereco: "R. dos Pinheiros, SP", link: "https://www.google.com/maps/dir/?api=1&destination=R.+dos+Pinheiros,+São+Paulo" }
  ],

  "Liberdade": [
    { nome: "Praça da Liberdade", endereco: "R. Galvão Bueno, SP", link: "https://www.google.com/maps/dir/?api=1&destination=R.+Galvão+Bueno,+São+Paulo" },
    { nome: "Feira de Artesanato da Liberdade", endereco: "Praça da Liberdade - Liberdade, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Praça+da+Liberdade,+São+Paulo" },
    { nome: "Museu Histórico da Imigração Japonesa (área externa)", endereco: "R. São Joaquim, 381 - Liberdade, SP", link: "https://www.google.com/maps/dir/?api=1&destination=R.+São+Joaquim,+381+-+Liberdade,+São+Paulo" },
    { nome: "Galerias de Arte da Liberdade", endereco: "Liberdade - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Liberdade,+São+Paulo" },
    { nome: "Templos Budistas e Shintoístas (visitação externa)", endereco: "Liberdade - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Liberdade,+São+Paulo" }
  ],

  "Sé": [
    { nome: "Catedral da Sé (entrada gratuita)", endereco: "Praça da Sé, s/n - Sé, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Praça+da+Sé,+São+Paulo" },
    { nome: "Pátio do Colégio", endereco: "Pateo do Collegio, 2 - Sé, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Pateo+do+Collegio,+2+-+Sé,+São+Paulo" },
    { nome: "Centro Cultural Banco do Brasil (área externa)", endereco: "R. Álvares Penteado, 112 - Sé, SP", link: "https://www.google.com/maps/dir/?api=1&destination=R.+Álvares+Penteado,+112+-+Sé,+São+Paulo" },
    { nome: "Praça da Sé", endereco: "Sé, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Sé,+São+Paulo" },
    { nome: "Galerias de Arte e Museus Públicos próximos (entrada gratuita)", endereco: "Sé - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Sé,+São+Paulo" }
  ],

  "Moema": [
    { nome: "Parque Ibirapuera (Moema / portão próximo)", endereco: "Av. Pedro Álvares Cabral, 200 - Moema, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Av.+Pedro+Álvares+Cabral,+200+-+Moema,+São+Paulo" },
    { nome: "Praça Líbano", endereco: "R. Canário, s/n - Moema, SP", link: "https://www.google.com/maps/dir/?api=1&destination=R.+Canário,+Moema,+São+Paulo" },
    { nome: "Biblioteca Moema", endereco: "R. Canário, 27 - Moema, SP", link: "https://www.google.com/maps/dir/?api=1&destination=R.+Canário,+27+-+Moema,+São+Paulo" },
    { nome: "Ciclovias do bairro Moema", endereco: "Moema - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Moema,+São+Paulo" },
    { nome: "Praça Visconde de Taunay", endereco: "R. Visconde de Taunay - Moema, SP", link: "https://www.google.com/maps/dir/?api=1&destination=R.+Visconde+de+Taunay,+Moema,+São+Paulo" }
  ],

  "Vila Mariana": [
    { nome: "Parque da Aclimação", endereco: "R. Juquiá, 169 - Vila Mariana, SP", link: "https://www.google.com/maps/dir/?api=1&destination=R.+Juquiá,+169+-+Vila+Mariana,+São+Paulo" },
    { nome: "Museu Lasar Segall (área externa)", endereco: "R. Berta, 111 - Vila Mariana, SP", link: "https://www.google.com/maps/dir/?api=1&destination=R.+Berta,+111+-+Vila+Mariana,+São+Paulo" },
    { nome: "Praça Pereira Coutinho", endereco: "R. Joaquim Távora, 250 - Vila Mariana, SP", link: "https://www.google.com/maps/dir/?api=1&destination=R.+Joaquim+Távora,+250+-+Vila+Mariana,+São+Paulo" },
    { nome: "Biblioteca Monteiro Lobato", endereco: "R. Sena Madureira, 420 - Vila Mariana, SP", link: "https://www.google.com/maps/dir/?api=1&destination=R.+Sena+Madureira,+420+-+Vila+Mariana,+São+Paulo" },
    { nome: "Praça Pereira Coutinho", endereco: "Vila Mariana - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Vila+Mariana,+São+Paulo" }
  ],

  "Tatuapé": [
    { nome: "Parque Ceret", endereco: "R. Taquari, 1843 - Tatuapé, SP", link: "https://www.google.com/maps/dir/?api=1&destination=R.+Taquari,+1843+-+Tatuapé,+São+Paulo" },
    { nome: "Biblioteca Tatuapé", endereco: "Av. Salim Farah Maluf, 775 - Tatuapé, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Av.+Salim+Farah+Maluf,+775+-+Tatuapé,+São+Paulo" },
    { nome: "Praça Silvio Romero", endereco: "Tatuapé, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Tatuapé,+São+Paulo" },
    { nome: "Centro Cultural Tatuapé", endereco: "R. Dr. César, 340 - Tatuapé, SP", link: "https://www.google.com/maps/dir/?api=1&destination=R.+Dr.+César,+340+-+Tatuapé,+São+Paulo" },
    { nome: "Feira Livre do Tatuapé", endereco: "Tatuapé, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Tatuapé,+São+Paulo" }
  ],
   "Butantã": [
    { nome: "Parque da Água Branca", endereco: "Av. Francisco Matarazzo, 455 - Butantã, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Av.+Francisco+Matarazzo,+455+-+Butantã,+São+Paulo" },
    { nome: "Museu da Escola Paulista (área externa)", endereco: "Butantã, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Butantã,+São+Paulo" },
    { nome: "Praça Panamericana", endereco: "Butantã, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Butantã,+São+Paulo" },
    { nome: "Centro Cultural Butantã", endereco: "Butantã - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Butantã,+São+Paulo" },
    { nome: "Ciclovia Butantã / USP (trecho aberto ao público)", endereco: "Butantã, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Butantã,+São+Paulo" }
  ],

  "Santana": [
    { nome: "Parque da Juventude", endereco: "Av. Zaki Narchi, 1300 - Santana, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Av.+Zaki+Narchi,+1300+-+Santana,+São+Paulo" },
    { nome: "Centro Cultural Santana", endereco: "R. Conselheiro Moreira de Barros, 2780 - Santana, SP", link: "https://www.google.com/maps/dir/?api=1&destination=R.+Conselheiro+Moreira+de+Barros,+2780+-+Santana,+São+Paulo" },
    { nome: "Praça Alfredo Issa", endereco: "Santana, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Santana,+São+Paulo" },
    { nome: "Biblioteca de Santana", endereco: "Av. Luiz Dumont Villares, 550 - Santana, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Av.+Luiz+Dumont+Villares,+550+-+Santana,+São+Paulo" },
    { nome: "Feira Livre de Santana", endereco: "Santana, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Santana,+São+Paulo" }
  ],

  "Brooklin": [
    { nome: "Parque da Chácara do Jockey", endereco: "Av. Lineu de Paula Machado, 1263 - Brooklin, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Av.+Lineu+de+Paula+Machado,+1263+-+Brooklin,+São+Paulo" },
    { nome: "Praça Santo Amaro (Brooklin próximo)", endereco: "Brooklin, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Brooklin,+São+Paulo" },
    { nome: "Biblioteca Brooklin", endereco: "R. Roque Petroni Jr, 1089 - Brooklin, SP", link: "https://www.google.com/maps/dir/?api=1&destination=R.+Roque+Petroni+Jr,+1089+-+Brooklin,+São+Paulo" },
    { nome: "Centro Cultural Brooklin", endereco: "Brooklin, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Brooklin,+São+Paulo" },
    { nome: "Ciclovias Brooklin", endereco: "Brooklin, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Brooklin,+São+Paulo" }
  ],

  "Jardins": [
    { nome: "Praça Pereira Coutinho (Jardins)", endereco: "R. Joaquim Antunes, SP", link: "https://www.google.com/maps/dir/?api=1&destination=R.+Joaquim+Antunes,+São+Paulo" },
    { nome: "Parque Trianon", endereco: "Av. Paulista, 1000 - Jardins, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Av.+Paulista,+1000+-+Jardins,+São+Paulo" },
    { nome: "Museu de Arte de São Paulo - MASP (área externa)", endereco: "Av. Paulista, 1578 - Jardins, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Av.+Paulista,+1578+-+Jardins,+São+Paulo" },
    { nome: "Praça Alfred Nobel", endereco: "Jardins, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Jardins,+São+Paulo" },
    { nome: "Galerias de Arte do Jardins", endereco: "Jardins, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Jardins,+São+Paulo" }
  ],
   "Vila Madalena": [
    { nome: "Beco do Batman", endereco: "R. Gonçalo Afonso, 200 - Vila Madalena, SP", link: "https://www.google.com/maps/dir/?api=1&destination=R.+Gonçalo+Afonso,+200+-+Vila+Madalena,+São+Paulo" },
    { nome: "Praça do Pôr do Sol", endereco: "Vila Madalena - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Vila+Madalena,+São+Paulo" },
    { nome: "Centro Cultural Vila Madalena", endereco: "Vila Madalena - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Vila+Madalena,+São+Paulo" },
    { nome: "Feira de Artes e Artesanato", endereco: "Vila Madalena - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Vila+Madalena,+São+Paulo" },
    { nome: "Galerias de Arte de Rua", endereco: "Vila Madalena - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Vila+Madalena,+São+Paulo" }
  ],

  "Mooca": [
    { nome: "Museu da Mooca (área externa)", endereco: "R. da Mooca, 100 - Mooca, SP", link: "https://www.google.com/maps/dir/?api=1&destination=R.+da+Mooca,+100+-+Mooca,+São+Paulo" },
    { nome: "Parque da Mooca", endereco: "Mooca - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Mooca,+São+Paulo" },
    { nome: "Praça Visconde de Souza Fontes", endereco: "Mooca - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Mooca,+São+Paulo" },
    { nome: "Biblioteca Mooca", endereco: "R. Cap. Pacheco e Chaves, SP", link: "https://www.google.com/maps/dir/?api=1&destination=R.+Cap.+Pacheco+e+Chaves,+São+Paulo" },
    { nome: "Feira Livre da Mooca", endereco: "Mooca - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Mooca,+São+Paulo" }
  ],

  "Itaim Bibi": [
    { nome: "Parque do Povo", endereco: "Av. Henrique Chaves, s/n - Itaim Bibi, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Av.+Henrique+Chaves,+Itaim+Bibi,+São+Paulo" },
    { nome: "Praça Vinicius de Moraes", endereco: "Itaim Bibi - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Itaim+Bibi,+São+Paulo" },
    { nome: "Centro Cultural Itaim", endereco: "Itaim Bibi - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Itaim+Bibi,+São+Paulo" },
    { nome: "Galerias de Arte do Itaim", endereco: "Itaim Bibi - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Itaim+Bibi,+São+Paulo" },
    { nome: "Feira de Rua do Itaim", endereco: "Itaim Bibi - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Itaim+Bibi,+São+Paulo" }
  ],

  "Lapa": [
    { nome: "Praça Cornélia", endereco: "Lapa - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Lapa,+São+Paulo" },
    { nome: "Parque da Água Branca (próximo Lapa)", endereco: "Av. Francisco Matarazzo, 455 - Lapa, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Av.+Francisco+Matarazzo,+455+-+Lapa,+São+Paulo" },
    { nome: "Centro Cultural Lapa", endereco: "Lapa - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Lapa,+São+Paulo" },
    { nome: "Feira de Artes da Lapa", endereco: "Lapa - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Lapa,+São+Paulo" },
    { nome: "Galerias de Arte da Lapa", endereco: "Lapa - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Lapa,+São+Paulo" }
  ],

  "Campo Belo": [
    { nome: "Praça Campo Belo", endereco: "Campo Belo - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Campo+Belo,+São+Paulo" },
    { nome: "Biblioteca Campo Belo", endereco: "Campo Belo - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Campo+Belo,+São+Paulo" },
    { nome: "Centro Cultural Campo Belo", endereco: "Campo Belo - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Campo+Belo,+São+Paulo" },
    { nome: "Praça Vinicius de Moraes (Campo Belo)", endereco: "Campo Belo - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Campo+Belo,+São+Paulo" },
    { nome: "Feira Livre Campo Belo", endereco: "Campo Belo - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Campo+Belo,+São+Paulo" }
  ],

  "Penha": [
    { nome: "Parque Linear da Penha", endereco: "Penha - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Penha,+São+Paulo" },
    { nome: "Praça da Penha", endereco: "Penha - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Penha,+São+Paulo" },
    { nome: "Centro Cultural Penha", endereco: "Penha - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Penha,+São+Paulo" },
    { nome: "Biblioteca Penha", endereco: "Penha - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Penha,+São+Paulo" },
    { nome: "Feira Livre Penha", endereco: "Penha - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Penha,+São+Paulo" }
  ],

  "Vila Prudente": [
    { nome: "Parque Ecológico Vila Prudente", endereco: "Vila Prudente - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Vila+Prudente,+São+Paulo" },
    { nome: "Praça Santa Clara", endereco: "Vila Prudente - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Vila+Prudente,+São+Paulo" },
    { nome: "Centro Cultural Vila Prudente", endereco: "Vila Prudente - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Vila+Prudente,+São+Paulo" },
    { nome: "Biblioteca Vila Prudente", endereco: "Vila Prudente - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Vila+Prudente,+São+Paulo" },
    { nome: "Feira Livre Vila Prudente", endereco: "Vila Prudente - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Vila+Prudente,+São+Paulo" }
  ],

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
    <h4>Locais de lazer próximos de {endereco.bairro || "sua região"}:</h4>

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
