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
        { prefixo: "080", bairro: "Itaquera" },
        { prefixo: "082", bairro: "São Mateus" },
        { prefixo: "084", bairro: "Guaianases" },
      
        { prefixo: "050", bairro: "Perdizes" },
        { prefixo: "054", bairro: "Pinheiros" },
      
        { prefixo: "040", bairro: "Vila Mariana" },
        { prefixo: "043", bairro: "Jabaquara" },
        { prefixo: "045", bairro: "Itaim Bibi" },
        { prefixo: "056", bairro: "Morumbi" },
        { prefixo: "058", bairro: "Campo Limpo" },
      
        { prefixo: "046", bairro: "Interlagos" },
        { prefixo: "047", bairro: "Santo Amaro" },
        { prefixo: "048", bairro: "Grajaú" },
        { prefixo: "048", bairro: "Varginha" },
        { prefixo: "048", bairro: "Jardim Apurá" },
        { prefixo: "048", bairro: "Vila Natal" },
      
        { prefixo: "049", bairro: "Jardim Eliana" },
        { prefixo: "049", bairro: "Jardim Noronha" },
        { prefixo: "049", bairro: "Jardim Gaivotas" },
        { prefixo: "049", bairro: "Jardim Cocaia" },
        { prefixo: "049", bairro: "Jardim Lucélia" },
        { prefixo: "049", bairro: "Horizonte Azul" },
        { prefixo: "049", bairro: "Parque Residencial dos Lagos" },
        { prefixo: "049", bairro: "Jardim Shangrilá" }
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
    "Interlagos": [
      {
        nome: "Parque Comandante Jacques Cousteau (Laguinho)",
        endereco: "R. Catanumi, 60 - Interlagos, SP",
        link: "https://www.google.com/maps/dir/?api=1&destination=R.+Catanumi,+60+-+Interlagos,+São+Paulo"
      },
      {
        nome: "Bosque do Parque Jacques Cousteau",
        endereco: "Raul Tabajara, Interlagos, SP",
        link: "https://www.google.com/maps/dir/?api=1&destination=Raul+Tabajara,+São+Paulo"
      },
      {
        nome: "Trilha da Mata no Parque Jacques Cousteau",
        endereco: "R. Norman Prochet / R. Catanumi – Interlagos, SP",
        link: "https://www.google.com/maps/dir/?api=1&destination=R.+Norman+Prochet,+São+Paulo"
      },
      {
        nome: "Parque Ecológico do Guarapiranga",
        endereco: "Estrada de Guarapiranga, 575 - M’Boi Mirim (próximo a Interlagos), SP",
        link: "https://www.google.com/maps/dir/?api=1&destination=Estrada+de+Guarapiranga,+575,+São+Paulo"
      },
      {
        nome: "Lagoa Interlagos (trilha ao redor)",
        endereco: "Lagoa de Interlagos, Interlagos, SP",
        link: "https://www.google.com/maps/dir/?api=1&destination=Lagoa+de+Interlagos,+São+Paulo"
      }
    ], "Grajaú": [
      {
        nome: "Parque Linear Cantinho do Céu",
        endereco: "R. Nossa Sra. de Fátima, 405 – Jardim Gaivotas, Grajaú, SP",
        link: "https://www.google.com/maps/dir/?api=1&destination=R.+Nossa+Sra.+de+F%C3%A1tima,+405+-+Jardim+Gaivotas,+S%C3%A3o+Paulo"
      },
      {
        nome: "Decks e áreas de contemplação do Cantinho do Céu",
        endereco: "Rua das Andorinhas Brasileiras, Grajaú, SP",
        link: "https://www.google.com/maps/dir/?api=1&destination=R.+das+Andorinhas+Brasileiras,+S%C3%A3o+Paulo"
      },
      {
        nome: "Teia Grajaú (espaço cultural comunitário)",
        endereco: "R. Maria Moassab Barbour, Grajaú, SP",
        link: "https://www.google.com/maps/dir/?api=1&destination=R.+Maria+Moassab+Barbour,+S%C3%A3o+Paulo"
      },
      {
        nome: "CEU Três Lagos",
        endereco: "R. Nereu Bertini Magalhães, 302 – Jardim Três Corações, Grajaú, SP",
        link: "https://www.google.com/maps/dir/?api=1&destination=R.+Nereu+Bertini+Magalh%C3%A3es,+302,+S%C3%A3o+Paulo"
      },
      {
        nome: "Parque Linear Aristocrata",
        endereco: "Rua Pamela Barton x Rua Cultura Popular, altura Av. Dona Belmira Marin, Grajaú, SP",
        link: "https://www.google.com/maps/dir/?api=1&destination=Rua+Pamela+Barton,+%26+Cultura+Popular,+Graja%C3%BA,+S%C3%A3o+Paulo"
      },
      {
        nome: "Calçadão Cultural do Grajaú",
        endereco: "Travessa de ruas públicas que interliga a comunidade (Grajaú, SP)",
        link: "https://www.google.com/maps/dir/?api=1&destination=Graja%C3%BA,+S%C3%A3o+Paulo"
      },
      {
        nome: "Pista de Skate – Parque Linear Cantinho do Céu (Lago Azul)",
        endereco: "R. João Bernardo Mendonça, 222 – Grajaú, SP",
        link: "https://www.google.com/maps/dir/?api=1&destination=R.+Jo%C3%A3o+Bernardo+Mendon%C3%A7a,+222,+S%C3%A3o+Paulo"
      }
    ],
    "Varginha": [
      {
        nome: "Parque Linear Varginha (Área Verde do Terminal)",
        endereco: "Terminal Varginha – Av. Paulo Guilguer Reimberg, 200 – Varginha, SP",
        link: "https://www.google.com/maps/dir/?api=1&destination=Av.+Paulo+Guilguer+Reimberg,+200,+São+Paulo"
      },
      {
        nome: "Praça da Paz – Varginha",
        endereco: "R. José da Silva Monteiro – Varginha, SP",
        link: "https://www.google.com/maps/dir/?api=1&destination=R.+José+da+Silva+Monteiro,+São+Paulo"
      },
      {
        nome: "Área de Lazer do CDC Unidos do Varginha",
        endereco: "R. Antônio Teixeira de Carvalho – Varginha, SP",
        link: "https://www.google.com/maps/dir/?api=1&destination=R.+Antônio+Teixeira+de+Carvalho,+São+Paulo"
      },
      {
        nome: "Decks e Mirantes da Represa Billings (Varginha)",
        endereco: "Av. Paulo Guilguer Reimberg – acesso à orla, Varginha, SP",
        link: "https://www.google.com/maps/dir/?api=1&destination=Av.+Paulo+Guilguer+Reimberg,+São+Paulo"
      },
      {
        nome: "CEU Varginha — Atividades Gratuitas (próximo)",
        endereco: "Av. Paulo Guilguer Reimberg, 55 – Jardim Apurá (região de Varginha)",
        link: "https://www.google.com/maps/dir/?api=1&destination=Av.+Paulo+Guilguer+Reimberg,+55,+São+Paulo"
      },
      {
        nome: "Bosque Urbano do Varginha",
        endereco: "R. Rodolfo – Varginha, SP",
        link: "https://www.google.com/maps/dir/?api=1&destination=R.+Rodolfo,+São+Paulo"
      }
    ],

    "Jardim Apurá": [
      {
        nome: "CEU Vila Rubi / Apurá (atividades gratuitas)",
        endereco: "Av. Ragueb Chohfi, 5.171 – Jardim Apurá, SP",
        link: "https://www.google.com/maps/dir/?api=1&destination=Av.+Ragueb+Chohfi,+5171,+São+Paulo"
      },
      {
        nome: "Praça João Rodrigues",
        endereco: "R. Giovanni Carnovali – Jardim Apurá, SP",
        link: "https://www.google.com/maps/dir/?api=1&destination=R.+Giovanni+Carnovali,+São+Paulo"
      },
      {
        nome: "Parque Linear Ribeirão Cocaia (trecho Apurá)",
        endereco: "Av. Paulo Guilguer Reimberg – Jardim Apurá, SP",
        link: "https://www.google.com/maps/dir/?api=1&destination=Av.+Paulo+Guilguer+Reimberg,+São+Paulo"
      }
    ],
    "Jardim Gaivotas": [
      {
        nome: "Praça das Gaivotas",
        endereco: "R. Benedito Alves de Almeida – Gaivotas, SP",
        link: "https://www.google.com/maps/dir/?api=1&destination=R.+Benedito+Alves+de+Almeida,+São+Paulo"
      },
      {
        nome: "Área Verde da Represa Billings (Gaivotas)",
        endereco: "Rua Avaré – Jardim Gaivotas, SP",
        link: "https://www.google.com/maps/dir/?api=1&destination=Rua+Avaré,+São+Paulo"
      }
    ],
    "Jardim Eliana": [
      {
        nome: "Praça Deputado Emílio Carlos",
        endereco: "R. Pedro Escobar – Jardim Eliana, SP",
        link: "https://www.google.com/maps/dir/?api=1&destination=R.+Pedro+Escobar,+São+Paulo"
      },
      {
        nome: "Campo Comunitário Jardim Eliana",
        endereco: "R. Elias da Silva – Jardim Eliana, SP",
        link: "https://www.google.com/maps/dir/?api=1&destination=R.+Elias+da+Silva,+São+Paulo"
      }
    ], "Jardim Noronha": [
      {
        nome: "Parque Linear Cantinho do Céu (trecho Noronha)",
        endereco: "Av. Senador Teotônio Vilela – Noronha, SP",
        link: "https://www.google.com/maps/dir/?api=1&destination=Av.+Senador+Teotônio+Vilela,+São+Paulo"
      },
      {
        nome: "Orla da Represa Billings – Noronha",
        endereco: "Rua Agú – Jardim Noronha, SP",
        link: "https://www.google.com/maps/dir/?api=1&destination=Rua+Agú,+São+Paulo"
      }
    ],
    "Jardim Cocaia": [
      {
        nome: "Parque Linear do Ribeirão Cocaia",
        endereco: "Av. Paulo Guilguer Reimberg – Cocaia, SP",
        link: "https://www.google.com/maps/dir/?api=1&destination=Av.+Paulo+Guilguer+Reimberg,+São+Paulo"
      },
      {
        nome: "Praça Anália Maria Weber",
        endereco: "R. José Daís – Jardim Cocaia, SP",
        link: "https://www.google.com/maps/dir/?api=1&destination=R.+José+Daís,+São+Paulo"
      }
    ], "Jardim Lucélia": [
      {
        nome: "Praça do Jardim Lucélia",
        endereco: "R. Arnaldo Simões Pinto – Jardim Lucélia, SP",
        link: "https://www.google.com/maps/dir/?api=1&destination=R.+Arnaldo+Simões+Pinto,+São+Paulo"
      },
      {
        nome: "Campo Comunitário Lucélia",
        endereco: "Rua Edmundo Cavinato – Lucélia, SP",
        link: "https://www.google.com/maps/dir/?api=1&destination=Rua+Edmundo+Cavinato,+São+Paulo"
      }
    ], "Vila Natal": [
      {
        nome: "Parque Linear Cantinho do Céu – Vila Natal",
        endereco: "Av. Senador Teotônio Vilela – Vila Natal, SP",
        link: "https://www.google.com/maps/dir/?api=1&destination=Av.+Senador+Teotônio+Vilela,+São+Paulo"
      },
      {
        nome: "Mirante da Vila Natal (Billings)",
        endereco: "R. Inácio Monteiro – Vila Natal, SP",
        link: "https://www.google.com/maps/dir/?api=1&destination=R.+Inácio+Monteiro,+São+Paulo"
      }
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
    "Capão Redondo": [
      { nome: "Parque Santo Dias", endereco: "Av. Carlos Caldeira Filho, 301 - Capão Redondo, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Av.+Carlos+Caldeira+Filho,+301+-+Capão+Redondo,+São+Paulo" },
      { nome: "Fábrica de Cultura Capão Redondo", endereco: "R. Bacia de São Francisco, 79 - Capão Redondo, SP", link: "https://www.google.com/maps/dir/?api=1&destination=R.+Bacia+de+São+Francisco,+79+-+Capão+Redondo,+São+Paulo" },
      { nome: "Praça do Campo Limpo", endereco: "Praça do Campo Limpo - Capão Redondo, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Praça+do+Campo+Limpo,+São+Paulo" },
      { nome: "CEU Capão Redondo", endereco: "Av. Comendador Sant’Anna, 3225 - Capão Redondo, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Av.+Comendador+Sant%E2%80%99Anna,+3225+-+Capão+Redondo,+São+Paulo" },
      { nome: "Praça Ênio Francisco da Silva", endereco: "Capão Redondo - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Capão+Redondo,+São+Paulo" }
    ],

    "Grajaú": [
      { nome: "Parque Linear Cantinho do Céu", endereco: "R. Maria Moassab Barbour - Grajaú, SP", link: "https://www.google.com/maps/dir/?api=1&destination=R.+Maria+Moassab+Barbour,+São+Paulo" },
      { nome: "Calçadão do Lago Azul", endereco: "Estr. do Jaceguava - Grajaú, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Estrada+do+Jaceguava,+São+Paulo" },
      { nome: "Terminal Grajaú (área de convivência externa)", endereco: "Av. Belmira Marin - Grajaú, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Av.+Belmira+Marin,+São+Paulo" },
      { nome: "CEU Três Lagos", endereco: "Av. Eng. de Carvalho, 150 - Grajaú, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Av.+Engenheiro+de+Carvalho,+150,+São+Paulo" },
      { nome: "Praça da Paz", endereco: "Grajaú - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Grajaú,+São+Paulo" }
    ],

    "São Mateus": [
      { nome: "Parque Linear do Jardim Tietê", endereco: "Av. Mateo Bei - São Mateus, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Av.+Mateo+Bei,+São+Mateus,+São+Paulo" },
      { nome: "Casa de Cultura São Mateus", endereco: "Av. Mateo Bei, 2785 - São Mateus, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Av.+Mateo+Bei,+2785+-+São+Mateus,+São+Paulo" },
      { nome: "Praça Felisberto Fernandes da Silva", endereco: "São Mateus - SP", link: "https://www.google.com/maps/dir/?api=1&destination=São+Mateus,+São+Paulo" },
      { nome: "Parque Jardim Sapopemba", endereco: "R. Augusto Ferreira de Morais - São Mateus, SP", link: "https://www.google.com/maps/dir/?api=1&destination=R.+Augusto+Ferreira+de+Morais,+São+Paulo" },
      { nome: "Feira Livre São Mateus", endereco: "São Mateus - SP", link: "https://www.google.com/maps/dir/?api=1&destination=São+Mateus,+São+Paulo" }
    ],

    "Jabaquara": [
      { nome: "Parque Nabuco", endereco: "R. Frederico Albuquerque, 170 - Jabaquara, SP", link: "https://www.google.com/maps/dir/?api=1&destination=R.+Frederico+Albuquerque,+170+-+Jabaquara,+São+Paulo" },
      { nome: "Museu da Imigração Japonesa (área externa)", endereco: "Jabaquara - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Jabaquara,+São+Paulo" },
      { nome: "Biblioteca Paulo Duarte", endereco: "Av. Eng. Armando de Arruda Pereira, 524 - Jabaquara, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Av.+Eng.+Armando+de+Arruda+Pereira,+524,+São+Paulo" },
      { nome: "Centro Cultural Jabaquara", endereco: "R. Arsênio Tavolieri, 45 - Jabaquara, SP", link: "https://www.google.com/maps/dir/?api=1&destination=R.+Ars%C3%AAnio+Tavolieri,+45,+São+Paulo" },
      { nome: "Praça Baronesa de Porto Carreiro", endereco: "Jabaquara, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Jabaquara,+São+Paulo" }
    ],

    "Pari": [
      { nome: "Praça Padre Bento", endereco: "R. Hannemann - Pari, SP", link: "https://www.google.com/maps/dir/?api=1&destination=R.+Hannemann,+São+Paulo" },
      { nome: "Largo do Pari", endereco: "Pari - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Pari,+São+Paulo" },
      { nome: "Centro Cultural Pari", endereco: "Pari - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Pari,+São+Paulo" },
      { nome: "Biblioteca Comunitária do Pari", endereco: "Pari - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Pari,+São+Paulo" },
      { nome: "Feira Livre do Pari", endereco: "Pari - SP", link: "https://www.google.com/maps/dir/?api=1&destination=Pari,+São+Paulo" }
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
