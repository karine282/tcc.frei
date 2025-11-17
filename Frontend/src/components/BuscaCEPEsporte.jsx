import React, { useState } from "react";

export default function BuscaCEPEsporte() {
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
    { prefixo: "048", bairro: "Grajaú" },
    { prefixo: "048", bairro: "Cidade Dutra" }
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

 const locaisEsporteSP = {
  "Sé": [
    { nome: "Praça da Sé – Corrida e alongamento", endereco: "Praça da Sé, s/n – Sé, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Praça+da+Sé,+São+Paulo" },
    { nome: "Praça Princesa Isabel – Quadra e exercícios", endereco: "Praça Princesa Isabel, s/n – Sé, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Praça+Princesa+Isabel,+São+Paulo" },
    { nome: "Praça do Patriarca – Quadras e alongamento", endereco: "Praça do Patriarca, s/n – Sé, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Praça+do+Patriarca,+São+Paulo" },
    { nome: "Praça Antônio Prado – Academia a céu aberto", endereco: "Praça Antônio Prado, s/n – Sé, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Praça+Antônio+Prado,+São+Paulo" },
    { nome: "Ginásio Poliesportivo Dom Pedro II", endereco: "R. Direita, s/n – Sé, SP", link: "https://www.google.com/maps/dir/?api=1&destination=R.+Direita,+São+Paulo" }
  ],

  "Grajaú": [
    { "nome": "Parque Linear Cantinho do Céu", "endereco": "R. Maria Moassab Barbour - Grajaú, SP", "link": "https://www.google.com/maps/dir/?api=1&destination=R.+Maria+Moassab+Barbour,+São+Paulo" },
    { "nome": "Campo de Futebol Comunitário Grajaú", "endereco": "04890-000 - Grajaú, SP", "link": "https://www.google.com/maps/dir/?api=1&destination=04890-000,+São+Paulo" },
    { "nome": "Praça Professora Guiomar de Freitas", "endereco": "R. M. F. de Oliveira - Grajaú, SP", "link": "https://www.google.com/maps/dir/?api=1&destination=R.+M.+F.+de+Oliveira,+São+Paulo" },
    { "nome": "Centro Esportivo Grajaú", "endereco": "R. Antônio de Barros - Grajaú, SP", "link": "https://www.google.com/maps/dir/?api=1&destination=R.+Antônio+de+Barros,+São+Paulo" },
    { "nome": "Quadra Poliesportiva Praça da Bíblia", "endereco": "R. José de Anchieta - Grajaú, SP", "link": "https://www.google.com/maps/dir/?api=1&destination=R.+José+de+Anchieta,+São+Paulo" }
  ],
  "Jardim Apurá": [
    { "nome": "Parque Linear Ribeirão Cocaia", "endereco": "Av. Paulo Guilguer Reimberg – Jardim Apurá, SP", "link": "https://www.google.com/maps/dir/?api=1&destination=Av.+Paulo+Guilguer+Reimberg,+São+Paulo" },
    { "nome": "Praça João Rodrigues", "endereco": "R. Giovanni Carnovali – Jardim Apurá, SP", "link": "https://www.google.com/maps/dir/?api=1&destination=R.+Giovanni+Carnovali,+São+Paulo" },
    { "nome": "CEU Vila Rubi / Apurá", "endereco": "Av. Ragueb Chohfi, 5.171 – Jardim Apurá, SP", "link": "https://www.google.com/maps/dir/?api=1&destination=Av.+Ragueb+Chohfi,+5171,+São+Paulo" },
    { "nome": "Campo Comunitário Apurá", "endereco": "R. Paulo de Tarso – Jardim Apurá, SP", "link": "https://www.google.com/maps/dir/?api=1&destination=R.+Paulo+de+Tarso,+São+Paulo" },
    { "nome": "Praça Central Apurá", "endereco": "R. José Augusto da Silva – Jardim Apurá, SP", "link": "https://www.google.com/maps/dir/?api=1&destination=R.+José+Augusto+da+Silva,+São+Paulo" }
  ],
  "Jardim Noronha": [
    { "nome": "Parque Linear Cantinho do Céu (trecho Noronha)", "endereco": "Av. Senador Teotônio Vilela – Noronha, SP", "link": "https://www.google.com/maps/dir/?api=1&destination=Av.+Senador+Teotônio+Vilela,+São+Paulo" },
    { "nome": "Orla da Represa Billings – Noronha", "endereco": "Rua Agú – Jardim Noronha, SP", "link": "https://www.google.com/maps/dir/?api=1&destination=Rua+Agú,+São+Paulo" },
    { "nome": "Quadra Poliesportiva Noronha", "endereco": "R. Noronha – Jardim Noronha, SP", "link": "https://www.google.com/maps/dir/?api=1&destination=R.+Noronha,+São+Paulo" },
    { "nome": "Praça do Bosque Noronha", "endereco": "R. José Martins – Jardim Noronha, SP", "link": "https://www.google.com/maps/dir/?api=1&destination=R.+José+Martins,+São+Paulo" },
    { "nome": "Campo Comunitário Noronha", "endereco": "Av. Noronha – Jardim Noronha, SP", "link": "https://www.google.com/maps/dir/?api=1&destination=Av.+Noronha,+São+Paulo" }
  ],
  "Parque Residencial Cocaia": [
    { "nome": "Parque Linear do Ribeirão Cocaia", "endereco": "Av. Paulo Guilguer Reimberg – Cocaia, SP", "link": "https://www.google.com/maps/dir/?api=1&destination=Av.+Paulo+Guilguer+Reimberg,+São+Paulo" },
    { "nome": "Praça Anália Maria Weber", "endereco": "R. José Daís – Jardim Cocaia, SP", "link": "https://www.google.com/maps/dir/?api=1&destination=R.+José+Daís,+São+Paulo" },
    { "nome": "Campo Comunitário Cocaia", "endereco": "R. Paulo – Parque Residencial Cocaia, SP", "link": "https://www.google.com/maps/dir/?api=1&destination=R.+Paulo,+São+Paulo" },
    { "nome": "Quadra Poliesportiva Cocaia", "endereco": "R. Francisco – Parque Residencial Cocaia, SP", "link": "https://www.google.com/maps/dir/?api=1&destination=R.+Francisco,+São+Paulo" },
    { "nome": "Praça Recreativa Cocaia", "endereco": "Av. Cocaia – Parque Residencial Cocaia, SP", "link": "https://www.google.com/maps/dir/?api=1&destination=Av.+Cocaia,+São+Paulo" }
  ],
  "Jardim Gaivotas": [
    { "nome": "Praça das Gaivotas", "endereco": "R. Benedito Alves de Almeida – Gaivotas, SP", "link": "https://www.google.com/maps/dir/?api=1&destination=R.+Benedito+Alves+de+Almeida,+São+Paulo" },
    { "nome": "Área Verde da Represa Billings", "endereco": "Rua Avaré – Jardim Gaivotas, SP", "link": "https://www.google.com/maps/dir/?api=1&destination=Rua+Avaré,+São+Paulo" },
    { "nome": "Quadra Poliesportiva Gaivotas", "endereco": "R. Gaivotas – Jardim Gaivotas, SP", "link": "https://www.google.com/maps/dir/?api=1&destination=R.+Gaivotas,+São+Paulo" },
    { "nome": "Campo Comunitário Gaivotas", "endereco": "R. Maricá – Jardim Gaivotas, SP", "link": "https://www.google.com/maps/dir/?api=1&destination=R.+Maricá,+São+Paulo" },
    { "nome": "Praça Esportiva Gaivotas", "endereco": "Av. Gaivotas – Jardim Gaivotas, SP", "link": "https://www.google.com/maps/dir/?api=1&destination=Av.+Gaivotas,+São+Paulo" }
  ],
  "Interlagos": [
    { "nome": "Parque Comandante Jacques Cousteau", "endereco": "R. Catanumi, 60 - Interlagos, SP", "link": "https://www.google.com/maps/dir/?api=1&destination=R.+Catanumi,+60+-+Interlagos,+São+Paulo" },
    { "nome": "Trilha da Mata no Parque Jacques Cousteau", "endereco": "R. Norman Prochet / R. Catanumi – Interlagos, SP", "link": "https://www.google.com/maps/dir/?api=1&destination=R.+Norman+Prochet,+São+Paulo" },
    { "nome": "Parque Ecológico do Guarapiranga", "endereco": "Estrada de Guarapiranga, 575 - M’Boi Mirim, SP", "link": "https://www.google.com/maps/dir/?api=1&destination=Estrada+de+Guarapiranga,+575,+São+Paulo" },
    { "nome": "Lagoa Interlagos (trilha ao redor)", "endereco": "Lagoa de Interlagos, Interlagos, SP", "link": "https://www.google.com/maps/dir/?api=1&destination=Lagoa+de+Interlagos,+São+Paulo" },
    { "nome": "Campo de Futebol Comunitário Interlagos", "endereco": "R. Interlagos, SP", "link": "https://www.google.com/maps/dir/?api=1&destination=R.+Interlagos,+São+Paulo" }
  ],


  "Bela Vista": [
    { nome: "Parque Minhocão – Corrida e alongamento", endereco: "Av. São João, s/n – Bela Vista, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Av.+São+João,+São+Paulo" },
    { nome: "Ginásio Poliesportivo Wlamir Marques", endereco: "R. Comendador Elias Zarzur, 30 – Bela Vista, SP", link: "https://www.google.com/maps/dir/?api=1&destination=R.+Comendador+Elias+Zarzur,+30,+São+Paulo" },
    { nome: "Praça Rotary – Quadra poliesportiva", endereco: "R. Rui Barbosa, 200 – Bela Vista, SP", link: "https://www.google.com/maps/dir/?api=1&destination=R.+Rui+Barbosa,+200,+São+Paulo" },
    { nome: "Pista de corrida Av. Paulista (trecho Bela Vista)", endereco: "Av. Paulista, s/n – Bela Vista, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Av.+Paulista,+São+Paulo" },
    { nome: "Praça do Ciclista – Alongamento e exercícios", endereco: "Av. Paulista, s/n – Bela Vista, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Praça+do+Ciclista,+São+Paulo" }
  ],

  "Santana": [
    { nome: "Parque da Juventude – Pista e quadras", endereco: "Av. Cruzeiro do Sul, 2630 – Santana, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Av.+Cruzeiro+do+Sul,+2630,+São+Paulo" },
    { nome: "Ginásio Poliesportivo de Santana", endereco: "R. Dr. Cesar, 150 – Santana, SP", link: "https://www.google.com/maps/dir/?api=1&destination=R.+Dr.+Cesar,+150,+São+Paulo" },
    { nome: "Praça Doutor João Mendes – Quadra", endereco: "R. Voluntários da Pátria, 1000 – Santana, SP", link: "https://www.google.com/maps/dir/?api=1&destination=R.+Voluntários+da+Pátria,+1000,+São+Paulo" },
    { nome: "Parque Regional do Trote – Corrida/quadras", endereco: "R. Prof. Carlos de Carvalho, 2100 – Santana, SP", link: "https://www.google.com/maps/dir/?api=1&destination=R.+Prof.+Carlos+de+Carvalho,+2100,+São+Paulo" },
    { nome: "Praça Raul de Carvalho – Academia ao ar livre", endereco: "R. Conselheiro Moreira de Barros, s/n – Santana, SP", link: "https://www.google.com/maps/dir/?api=1&destination=R.+Conselheiro+Moreira+de+Barros,+São+Paulo" }
  ],

  "Vila Mariana": [
    { nome: "Parque Ibirapuera - Corrida, quadras e academia", endereco: "Av. Pedro Álvares Cabral, s/n - Vila Mariana, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Parque+Ibirapuera,+SP" },
    { nome: "Ginásio do Ibirapuera", endereco: "Av. Pedro Álvares Cabral, s/n - Vila Mariana, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Ginásio+do+Ibirapuera,+SP" },
    { nome: "Praça Pereira Coutinho - Quadra e caminhada", endereco: "R. Pereira Coutinho, s/n - Vila Mariana, SP", link: "https://www.google.com/maps/dir/?api=1&destination=R.+Pereira+Coutinho,+SP" }
  ],

  "Moema": [
    { nome: "Parque do Ibirapuera - Quadras externas", endereco: "Av. República do Líbano, s/n - Moema, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Parque+do+Ibirapuera,+Moema,+SP" },
    { nome: "Praça Gaivota - Academia ao ar livre", endereco: "R. Gaivota, s/n - Moema, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Praça+Gaivota,+Moema,+SP" },
    { nome: "Ginásio Municipal de Moema", endereco: "Av. Ibirapuera, 2500 - Moema, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Ginásio+Municipal+de+Moema,+SP" }
  ],
 "Cidade Dutra": [
    { "nome": "Praça Antonio Machado", "endereco": "R. Antonio Machado – Cidade Dutra, SP", "link": "https://www.google.com/maps/dir/?api=1&destination=R.+Antonio+Machado,+São+Paulo" },
    { "nome": "Quadra Poliesportiva Cidade Dutra", "endereco": "R. da Paz – Cidade Dutra, SP", "link": "https://www.google.com/maps/dir/?api=1&destination=R.+da+Paz,+São+Paulo" },
    { "nome": "Parque Ecológico Cidade Dutra", "endereco": "Av. das Nações Unidas – Cidade Dutra, SP", "link": "https://www.google.com/maps/dir/?api=1&destination=Av.+das+Nações+Unidas,+São+Paulo" },
    { "nome": "Campo Comunitário Cidade Dutra", "endereco": "R. Maracá – Cidade Dutra, SP", "link": "https://www.google.com/maps/dir/?api=1&destination=R.+Maracá,+São+Paulo" },
    { "nome": "Praça Esportiva Cidade Dutra", "endereco": "R. Joaquim Nabuco – Cidade Dutra, SP", "link": "https://www.google.com/maps/dir/?api=1&destination=R.+Joaquim+Nabuco,+São+Paulo" }
  ],
  "Pinheiros": [
    { nome: "Praça Panamericana - Quadra", endereco: "Av. Pedroso de Moraes, 1000 - Pinheiros, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Praça+Panamericana,+Pinheiros,+SP" },
    { nome: "Escola de Esportes Pinheiros - Pista e quadras", endereco: "R. Henrique Schaumann, 28 - Pinheiros, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Escola+de+Esportes+Pinheiros,+SP" },
    { nome: "Parque Villa-Lobos - Corrida e quadras", endereco: "Av. Prof. Fonseca Rodrigues, s/n - Pinheiros, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Parque+Villa-Lobos,+SP" }
  ],

  "Brooklin": [
    { nome: "Praça Luiz Gonzaga - Quadra e academia", endereco: "Av. Jornalista Roberto Marinho, s/n - Brooklin, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Praça+Luiz+Gonzaga,+SP" },
    { nome: "Ginásio Poliesportivo Brooklin", endereco: "R. Funchal, 200 - Brooklin, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Ginásio+Poliesportivo+Brooklin,+SP" },
    { nome: "Parque Severo Gomes - Corrida e quadras", endereco: "Av. Morumbi, s/n - Brooklin, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Parque+Severo+Gomes,+SP" }
  ],

  "Butantã": [
    { nome: "Parque Alfredo Volpi - Corrida e quadras", endereco: "Av. Corifeu de Azevedo Marques, 1980 - Butantã, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Parque+Alfredo+Volpi,+SP" },
    { nome: "Ginásio Poliesportivo Butantã", endereco: "R. Professor Manoel Ferreira, 85 - Butantã, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Ginásio+Poliesportivo+Butantã,+SP" },
    { nome: "Praça Panamericana - Quadras e academia", endereco: "R. Dep. Lacerda Franco, s/n - Butantã, SP", link: "https://www.google.com/maps/dir/?api=1&destination=R.+Dep.+Lacerda+Franco,+SP" }
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

  "Mooca": [
    { nome: "Parque da Mooca - Corrida e quadras", endereco: "Av. Paes de Barros, s/n - Mooca, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Parque+da+Mooca,+SP" },
    { nome: "Ginásio Poliesportivo Mooca", endereco: "R. Taquari, 1000 - Mooca, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Ginásio+Poliesportivo+Mooca,+SP" },
    { nome: "Praça Visconde de Souza Fontes - Quadra e pista", endereco: "R. da Mooca, s/n - Mooca, SP", link: "https://www.google.com/maps/dir/?api=1&destination=R.+da+Mooca,+SP" }
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
            placeholder="Digite o CEP (ex: 04119000)"
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
          locaisEsporteSP[endereco.bairro] ||
          locaisEsporteSP[
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
