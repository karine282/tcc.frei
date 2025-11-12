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
    { nome: "Praça da Sé - Corrida e alongamento", endereco: "Praça da Sé, s/n - Sé, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Praça+da+Sé,+São+Paulo+-+SP" },
    { nome: "Ginásio Poliesportivo Dom Pedro", endereco: "R. Direita, s/n - Sé, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Ginásio+Poliesportivo+Dom+Pedro,+SP" },
    { nome: "Praça Princesa Isabel - Quadra e exercícios", endereco: "Praça Princesa Isabel, s/n - Sé, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Praça+Princesa+Isabel,+SP" }
  ],

  "Bela Vista": [
    { nome: "Ginásio Poliesportivo Wlamir Marques", endereco: "R. Comendador Elias Zarzur, 30 - Bela Vista, SP", link: "https://www.google.com/maps/dir/?api=1&destination=R.+Comendador+Elias+Zarzur,+30+-+Bela+Vista,+SP" },
    { nome: "Praça Rotary - Quadra poliesportiva", endereco: "R. Rui Barbosa, 200 - Bela Vista, SP", link: "https://www.google.com/maps/dir/?api=1&destination=R.+Rui+Barbosa,+200+-+Bela+Vista,+SP" },
    { nome: "Parque Minhocão - Corrida e exercícios", endereco: "Av. São João, s/n - Bela Vista, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Parque+Minhocão,+SP" }
  ],

  "Santana": [
    { nome: "Parque da Juventude - Pista e quadras", endereco: "Av. Zaki Narchi, 1300 - Santana, SP", link: "https://www.google.com/maps/dir/?api=1&destination=Parque+da+Juventude,+SP" },
    { nome: "Ginásio Poliesportivo de Santana", endereco: "R. Dr. Cesar, 150 - Santana, SP", link: "https://www.google.com/maps/dir/?api=1&destination=R.+Dr.+Cesar,+150+-+Santana,+SP" },
    { nome: "Praça Doutor João Mendes - Quadra", endereco: "R. Voluntários da Pátria, 1000 - Santana, SP", link: "https://www.google.com/maps/dir/?api=1&destination=R.+Voluntários+da+Pátria,+1000+-+Santana,+SP" }
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
