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

      // Prefixos de bairros paulistanos aproximados
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
    { nome: "Centro Cultural Banco do Brasil", endereco: "R. Álvares Penteado, 112 - Sé", link: "https://goo.gl/maps/Qug8xCQcJm1R9k5q8" },
    { nome: "Pateo do Collegio", endereco: "Pça. Pateo do Collegio, 2 - Sé", link: "https://goo.gl/maps/7w4pEUSgLsu" },
    { nome: "Catedral da Sé", endereco: "Praça da Sé, s/n - Sé", link: "https://goo.gl/maps/xy2GqM2AYUq" }
  ],
  "Bela Vista": [
    { nome: "Teatro Sérgio Cardoso", endereco: "R. Rui Barbosa, 153 - Bela Vista", link: "https://goo.gl/maps/1Xf7FqzyxHu" },
    { nome: "Museu Judaico de São Paulo", endereco: "R. Martinho Prado, 128 - Bela Vista", link: "https://goo.gl/maps/1pG8KphRrsL2" },
    { nome: "Teatro Renault", endereco: "Av. Brigadeiro Luís Antônio, 411 - Bela Vista", link: "https://goo.gl/maps/7yE3LG2S6oQ2" }
  ],
  "Cambuci": [
    { nome: "Casa de Cultura do Cambuci", endereco: "Rua Lavapés, 340 - Cambuci", link: "https://goo.gl/maps/mnct9Gk7D9y" },
    { nome: "Museu do Ipiranga (próximo)", endereco: "Parque da Independência, s/n - Ipiranga", link: "https://goo.gl/maps/9u3nT9QHguo" },
    { nome: "Centro Cultural São Paulo (acesso próximo)", endereco: "Rua Vergueiro, 1000 - Liberdade", link: "https://goo.gl/maps/ku2b3MDCkyk" }
  ],
  "Santana": [
    { nome: "Biblioteca de São Paulo", endereco: "Parque da Juventude, Av. Cruzeiro do Sul, 2630 - Santana", link: "https://goo.gl/maps/X9rqN2GgTtQ2" },
    { nome: "Centro de Tradições Nordestinas", endereco: "R. Jacofer, 615 - Limão", link: "https://goo.gl/maps/V4dB2UUrPzz" },
    { nome: "Teatro Alfredo Mesquita", endereco: "Av. Santos Dumont, 1770 - Santana", link: "https://goo.gl/maps/1TQ8wT3m4rN2" }
  ],
  "Brás": [
    { nome: "Museu da Imigração", endereco: "R. Visc. de Parnaíba, 1316 - Mooca", link: "https://goo.gl/maps/k2t5q4yC4f92" },
    { nome: "Igreja de São Vito Mártir", endereco: "R. Polignano a Mare, 96 - Brás", link: "https://goo.gl/maps/zTnAqYvWwLs" },
    { nome: "Centro Cultural do Brás", endereco: "R. Piratininga, 55 - Brás", link: "https://goo.gl/maps/xGSLdQPRo9C2" }
  ],
  "Mooca": [
    { nome: "Museu da Imigração", endereco: "R. Visc. de Parnaíba, 1316 - Mooca", link: "https://goo.gl/maps/k2t5q4yC4f92" },
    { nome: "Teatro Municipal da Mooca Arthur Azevedo", endereco: "Av. Paes de Barros, 955 - Mooca", link: "https://goo.gl/maps/q9F3w2r9T2y" },
    { nome: "Clube Juventus (eventos culturais)", endereco: "R. Juventus, 690 - Mooca", link: "https://goo.gl/maps/GXbUPu6ZmCk" }
  ],
  "Tatuapé": [
    { nome: "Espaço Cultural Tatuapé", endereco: "R. Tuiuti, 515 - Tatuapé", link: "https://goo.gl/maps/4f7vW4E8w3M2" },
    { nome: "Teatro Eva Wilma", endereco: "R. Antônio de Lucena, 146 - Tatuapé", link: "https://goo.gl/maps/d5v6z2Qf6cP2" },
    { nome: "Praça Sílvio Romero (eventos culturais)", endereco: "Praça Sílvio Romero - Tatuapé", link: "https://goo.gl/maps/GmT9Tf7vS8v" }
  ],
  "Vila Matilde": [
    { nome: "Centro Cultural Vila Formosa (próximo)", endereco: "Av. Renata, 163 - Vila Formosa", link: "https://goo.gl/maps/jG4JgAebWwu" },
    { nome: "Teatro Arthur Azevedo (próximo)", endereco: "Av. Paes de Barros, 955 - Mooca", link: "https://goo.gl/maps/q9F3w2r9T2y" },
    { nome: "Praça da Toco (eventos culturais)", endereco: "R. Serra de Bragança, 1500 - Vila Gomes Cardim", link: "https://goo.gl/maps/Wz1sF8PvRu82" }
  ],
  "Vila Mariana": [
    { nome: "Museu de Arte Contemporânea (MAC USP)", endereco: "Av. Pedro Álvares Cabral, 1301 - Vila Mariana", link: "https://goo.gl/maps/BKu3ZzRJHkH2" },
    { nome: "Auditório Ibirapuera", endereco: "Parque Ibirapuera - Portão 2", link: "https://goo.gl/maps/4d8M6HDMrr52" },
    { nome: "Museu Afro Brasil", endereco: "Av. Pedro Álvares Cabral, s/n - Parque Ibirapuera", link: "https://goo.gl/maps/bpBbZ8ZxT2k" }
  ],
  "Jabaquara": [
    { nome: "Centro Cultural Jabaquara", endereco: "R. Arsênio Tavolieri, 45 - Jabaquara", link: "https://goo.gl/maps/xZmH7KzvJzF2" },
    { nome: "Museu de Arte Popular do Ipiranga (próximo)", endereco: "Parque da Independência, s/n", link: "https://goo.gl/maps/9u3nT9QHguo" },
    { nome: "Casa de Cultura do Jabaquara", endereco: "R. Arsênio Tavolieri, 45 - Jabaquara", link: "https://goo.gl/maps/bE9YyDgkGUs" }
  ],
  "Itaim Bibi": [
    { nome: "Teatro VIVO", endereco: "Av. Dr. Chucri Zaidan, 860 - Vila Cordeiro", link: "https://goo.gl/maps/B4rM5C6k5sH2" },
    { nome: "MuBE - Museu Brasileiro da Escultura", endereco: "Av. Europa, 218 - Jardim Europa", link: "https://goo.gl/maps/wBysBf4RzRk" },
    { nome: "Teatro Santander", endereco: "Av. Pres. Juscelino Kubitschek, 2041 - Itaim Bibi", link: "https://goo.gl/maps/hL5bDdm6HGC2" }
  ],
  "Perdizes": [
    { nome: "Sesc Pompeia", endereco: "R. Clélia, 93 - Pompeia", link: "https://goo.gl/maps/Lb7P3J5mu4t" },
    { nome: "Memorial da América Latina", endereco: "Av. Auro Soares de Moura Andrade, 664 - Barra Funda", link: "https://goo.gl/maps/rTkaoTHRTfB2" },
    { nome: "Teatro Bradesco", endereco: "Rua Palestra Itália, 500 - Perdizes", link: "https://goo.gl/maps/8RkU2P53ABo" }
  ],
  "Pinheiros": [
    { nome: "Instituto Tomie Ohtake", endereco: "Av. Faria Lima, 201 - Pinheiros", link: "https://goo.gl/maps/NyoCs8WvRBx" },
    { nome: "Beco do Batman", endereco: "R. Gonçalo Afonso - Vila Madalena", link: "https://goo.gl/maps/LxHUSum7Fq52" },
    { nome: "Centro Cultural Rio Verde", endereco: "R. Belmiro Braga, 119 - Vila Madalena", link: "https://goo.gl/maps/Wb8rHk3fyqS2" }
  ],
  "Morumbi": [
    { nome: "Fundação Maria Luisa e Oscar Americano", endereco: "Av. Morumbi, 4077 - Morumbi", link: "https://goo.gl/maps/KF4P2fMKhT32" },
    { nome: "Teatro CIEE", endereco: "R. Tabapuã, 445 - Itaim Bibi", link: "https://goo.gl/maps/JD6mU8rS8V52" },
    { nome: "Museu do Futebol (próximo)", endereco: "Praça Charles Miller, s/n - Pacaembu", link: "https://goo.gl/maps/4Kp8gY9Qf8z" }
  ],
  "Campo Limpo": [
    { nome: "Sesc Campo Limpo", endereco: "Rua Nossa Sra. do Bom Conselho, 120 - Campo Limpo", link: "https://goo.gl/maps/2oDPH7E3sFn" },
    { nome: "Fábrica de Cultura Capão Redondo", endereco: "Rua Bacia de São Francisco, 79 - Capão Redondo", link: "https://goo.gl/maps/hVgf2hE9syu" },
    { nome: "Casa de Cultura Campo Limpo", endereco: "Rua Aroldo de Azevedo, 100 - Campo Limpo", link: "https://goo.gl/maps/qDjxHPybLvN2" }
  ],
  "Itaquera": [
    { nome: "Sesc Itaquera", endereco: "Av. Fernando do Espírito Santo Alves de Mattos, 1000 - Itaquera", link: "https://goo.gl/maps/MTkGfXcH8P92" },
    { nome: "Parque do Carmo (eventos culturais)", endereco: "Av. Afonso de Sampaio e Souza, 951 - Itaquera", link: "https://goo.gl/maps/Dv8jvGvZ5fG2" },
    { nome: "Biblioteca Pública Itaquera", endereco: "R. Romão Puigari, 82 - Itaquera", link: "https://goo.gl/maps/Lw9VxQ2uhpQ2" }
  ],
  "São Mateus": [
    { nome: "Fábrica de Cultura São Mateus", endereco: "Av. Arquiteto Vilanova Artigas, 1250 - São Mateus", link: "https://goo.gl/maps/8P5zPfjYMcD2" },
    { nome: "Centro Cultural Arte em Construção", endereco: "Av. Adélia Chohfi, 100 - São Mateus", link: "https://goo.gl/maps/8v5oPyvHwc72" },
    { nome: "Parque São Rafael (eventos culturais)", endereco: "Av. Professor Mário Werneck, 1000 - São Rafael", link: "https://goo.gl/maps/W8fUMq8Y9tA2" }
  ],
  "Guaianases": [
    { nome: "Fábrica de Cultura Guaianases", endereco: "R. Castelo de Leça, 60 - Guaianases", link: "https://goo.gl/maps/qvW8M8nXqvo" },
    { nome: "Casa de Cultura Guaianases", endereco: "R. Hipólito Camargo, 173 - Guaianases", link: "https://goo.gl/maps/vR9xjzj3bWw" },
    { nome: "Biblioteca Guaianases", endereco: "R. Castelo de Leça, 62 - Guaianases", link: "https://goo.gl/maps/xdH1mFwP8Kt" }
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
