import { useEffect, useState } from "react";
import "./Ceus.scss";

export default function UnidadesCeus() {
  const [buscar, setBuscar] = useState("");
  const [lista, setLista] = useState([
  {
    nome: "CEU Azul da Cor do Mar",
    endereco: "Rua das Flores, 125 – São Paulo, SP",
    bairro: "Penha",
    imagem: "https://educacao.sme.prefeitura.sp.gov.br/wp-content/uploads/2023/08/tamanho-site-6.png",
    linkMapa: "https://www.google.com/maps/place/CEU+Azul+da+Cor+do+Mar/@-23.5214366,-46.4593951,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce614bcb1997a5:0x98c8cb387e0ad8a9!8m2!3d-23.5214415!4d-46.4568202!16s%2Fg%2F1ts1nsch?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    nome: "CEU Caminho do Mar",
    endereco: "Av. Atlântica, 900 – Jabaquara, SP",
    bairro: "Jabaquara",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzK3VxahI5KQJMNqOOtuW3PZm31Hvdmu6YDQ103MQOhAnbq48bNye3Ld-C-_gfJoBiyeA&usqp=CAU",
    linkMapa: "https://www.google.com/maps/place/CEU+Caminho+do+mar/@-23.6680217,-46.6379491,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce45bbe58dd78d:0xe8da33bb7a71a3ac!8m2!3d-23.6680266!4d-46.6353742!16s%2Fg%2F11klsqfntr?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    nome: "CEU Paz",
    endereco: "Rua da União, 450 — Brasilândia, SP",
    bairro: "Brasilândia",
    imagem: "https://ceu.sme.prefeitura.sp.gov.br/wp-content/uploads/2023/05/Foto-fachada-CEU-Paz-640x350.jpg",
    linkMapa: "https://www.google.com/maps/place/CEU+Paz/@-23.44805,-46.691427,17z/data=!3m1!4b1!4m6!3m5!1s0x94cefa18b655be6b:0x3a32a2da5e575af!8m2!3d-23.4480549!4d-46.6888521!16s%2Fg%2F1pp2xbmgn?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    nome: "CEU Aricanduva",
    endereco: "Rua Olga Fadel Abarca, 225 – Aricanduva, SP",
    bairro: "Aricanduva",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmXyBuNeADvOsRnmf8I9aMZ8CNMWCz9CsxUA&s",
    linkMapa: "https://www.google.com/maps/place/CEU+Aricanduva/@-23.5699084,-46.5060815,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce677144243115:0x80fd851af19f3f49!8m2!3d-23.5699133!4d-46.5035066!16s%2Fg%2F11c3x9sk_f?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    nome: "CEU Rosa da China",
    endereco: "Rua Rosa da China, 45 – São Miguel Paulista, SP",
    bairro: "São Miguel Paulista",
    imagem: "https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/106/2024/10/Foto-fachada-CEU-Rosa-da-China-640x350-1.jpg",
    linkMapa: "https://www.google.com/maps/place/CEU+ROSA+DA+CHINA/@-23.6220809,-46.5035562,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce680c0eff2d31:0x782dea373777c9d2!8m2!3d-23.6220858!4d-46.5009813!16s%2Fg%2F1td9x81d?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    nome: "CEU Parque Bristol",
    endereco: "Rua Domingos Fernandes Nobre, 250 – Jardim Clímax, SP",
    bairro: "Jabaquara",
    imagem: "https://ceu.sme.prefeitura.sp.gov.br/wp-content/uploads/2021/09/Captura-de-pantalla-2025-09-09-093535-640x350.png",
    linkMapa: "https://www.google.com/maps/place/CEU+Parque+Bristol/@-23.6437624,-46.6111658,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce5be77ab5fbcf:0x958cbc730dbe493a!8m2!3d-23.6437673!4d-46.6085909!16s%2Fg%2F11t4yj9llk?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D"

  },

  {
    nome: "CEU Pera Marmelo",
    endereco: "Rua Pêra-Marmelo, 26 – Jaraguá, SP",
    bairro: "Jaraguá",
    imagem: "https://ceu.sme.prefeitura.sp.gov.br/wp-content/uploads/2023/05/Foto-fachada-CEU-Pera-Marmelo-640x350.jpg",
    linkMapa: "https://www.google.com/maps/place/CEU+P%C3%AAra+Marmelo/@-23.4365859,-46.75297,17z/data=!3m1!4b1!4m6!3m5!1s0x94cefc7e484632e5:0x31047dddb64f238!8m2!3d-23.4365908!4d-46.7503951!16s%2Fg%2F1ydkd1qgz?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    nome: "CEU Jaçanã",
    endereco: "Avenida Antônio César Neto, 1050 – Jaçanã, SP",
    bairro: "Jaçanã",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcFkzNgnLFhKeRMpUKt7ndOpRPvfUk7t9bVg&s",
    linkMapa: "https://www.google.com/maps/search/CEU+Ja%C3%A7an%C3%A3/@-23.4604218,-46.5888509,16z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    nome: "CEU Parque Veredas",
    endereco: "Rua Daniel Filho, 260 – São Mateus, SP",
    bairro: "São Mateus",
    imagem: "https://ceu.sme.prefeitura.sp.gov.br/wp-content/uploads/2021/09/WhatsApp-Image-2023-04-28-at-15.41.58-640x350.jpeg",
    linkMapa: "https://www.google.com/maps/place/CEU+PARQUE+VEREDAS/@-23.5132808,-46.3924707,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce6491b0ce838b:0xe2e87bfab1269436!8m2!3d-23.5132857!4d-46.3898958!16s%2Fg%2F1td4fpfc?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    nome: "CEU São Rafael",
    endereco: "Rua Cinira Polônio, 100 – São Rafael, SP",
    bairro: "São Rafael",
    imagem: "https://educacao.sme.prefeitura.sp.gov.br/wp-content/uploads/Portals/1/Images/CEUs_fachadas/1138.jpg",
    linkMapa: "https://www.google.com/maps/place/CEU+S%C3%A3o+Rafael/@-23.6203314,-46.459316,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce68c0619b89d5:0x2580955c6b5b756f!8m2!3d-23.6203363!4d-46.4567411!16s%2Fg%2F1tfxz4zt?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D"
  },

  {
    nome: "CEU Butantã",
    endereco: "Rua Eng. Heitor Antônio Eiras Garcia, 1700/1870 – Jardim Esmeralda, SP",
    bairro: "Butantã",
    imagem: "https://ceu.sme.prefeitura.sp.gov.br/wp-content/uploads/2021/11/CEU-PINTURA-1-1.png",
    linkMapa: "https://www.google.com/maps/place/CEU+Butant%C3%A3+-+Elizabeth+Gaspar+Tunala/@-23.5828274,-46.7525977,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce55d65a6088ab:0xf6e3eff0052da2c1!8m2!3d-23.5828323!4d-46.7500228!16s%2Fg%2F11b7w6x505?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    nome: "CEU Campo Limpo",
    endereco: "Av. Carlos Lacerda, 678 – Campo Limpo, SP",
    bairro: "Campo Limpo",
    imagem: "https://vault.pulsarimagens.com.br/file/thumb/01FK048.jpg",
    linkMapa: "https://www.google.com/maps/place/CEU+Campo+Limpo/@-23.6369841,-46.7820944,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce53c701719ecf:0xadda1124451624f9!8m2!3d-23.636989!4d-46.7795195!16s%2Fg%2F11v77q4bp4?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    nome: "CEU Cantos do Amanhecer",
    endereco: "Avenida Cantos do Amanhecer, s/n – Jardim Eledy, SP",
    bairro: "Jardim Eledy",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNphIfSPFxiDivZmFKzcL_mBuDN5KhSM17nzCGint6TykRsQuunioHWcc98cVJoqzXRJo&usqp=CAU",
    linkMapa: "https://www.google.com/maps/place/Gest%C3%A3o+CEU+Cantos+do+Amanhecer/@-23.649463,-46.7879292,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce53d464ee7ddf:0x4e33750453924a9d!8m2!3d-23.6494679!4d-46.7853543!16s%2Fg%2F1tl0ygg8?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D"
  },

  {
    nome: "CEU Inácio Monteiro",
    endereco: "Rua Barão Barroso do Amazonas, s/n – Conjunto Inácio Monteiro, SP",
    bairro: "Inácio Monteiro",
    imagem: "https://ceu.sme.prefeitura.sp.gov.br/wp-content/uploads/2023/05/Foto-fachada-CEU-Inacio-Monteiro-640x350.jpg",
    linkMapa: "https://www.google.com/maps/place/CEU+In%C3%A1cio+Monteiro/@-23.5696863,-46.4138677,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce659765bb4539:0x1d689ef1e8ad7182!8m2!3d-23.5696912!4d-46.4112928!16s%2Fg%2F1tx8vbmz?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    nome: "CEU Sapopemba",
    endereco: "Rua Manuel Quirino de Mattos, s/n – Jardim Sapopemba, SP",
    bairro: "Sapopemba",
    imagem: "https://expresso.estadao.com.br/sao-paulo/wp-content/uploads/2025/07/20250704_Ceu_Papa_Francisco_Gerais_Drone_SB-2.jpg",
    linkMapa: "https://www.google.com/maps/place/CEU+Sapopemba/@-23.6095215,-46.4985783,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce6738e7399c6b:0xaba04c543e4ea259!8m2!3d-23.6095265!4d-46.4939649!16s%2Fg%2F1tdbm3wz?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    nome: "CEU Tiquatira",
    endereco: "Av. Condessa Elisabeth de Robiano, s/n – Penha, SP",
    bairro: "Penha",
    imagem: "https://ceu.sme.prefeitura.sp.gov.br/wp-content/uploads/2021/09/ceu-3-640x350.jpg",
    linkMapa: "https://www.google.com/maps/place/CEU+Tiquatira/@-23.5175397,-46.5569663,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce5fabab9ac2b5:0xe6faa13307e6676f!8m2!3d-23.5175446!4d-46.5543914!16s%2Fg%2F1tg_y6pr?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D"
  },

  {
    nome: "CEU Vila Rubi",
    endereco: "Rua Domingos Tarroso, 101 – Vila Rubi, SP",
    bairro: "Vila Rubi",
    imagem: "https://ceu.sme.prefeitura.sp.gov.br/wp-content/uploads/2023/05/Foto-fachada-CEU-Vila-Rubi-640x350.jpg",
    linkMapa: "https://www.google.com/maps/place/CEU+Vila+Rubi/@-23.7279082,-46.6996861,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce4f0f27dae0cd:0xb49b71b88336cd46!8m2!3d-23.7279131!4d-46.6971112!16s%2Fg%2F1tqg1g3d?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    nome: "CEU Jardim Paulistano",
    endereco: "Rua Aparecida do Taboado, s/n – Jardim Paulistano, SP",
    bairro: "Jardim Paulistano",
    imagem: "https://ceu.sme.prefeitura.sp.gov.br/wp-content/uploads/2023/05/Foto-fachada-CEU-Jardim-Paulistano-640x350.jpg",
    linkMapa: "https://www.google.com/maps/place/CEU+Jardim+Paulistano/@-23.4620511,-46.7143059,17z/data=!3m1!4b1!4m6!3m5!1s0x94cef9b59849e7eb:0x8ed4ff2ad74f4e9d!8m2!3d-23.462056!4d-46.711731!16s%2Fg%2F11f7b59sg0?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    nome: "CEU Perus",
    endereco: "R. Bernardo José de Lorena, S/N - Vila Fanton, São Paulo - SP",
    bairro: "Perus",
    imagem: "https://ceu.sme.prefeitura.sp.gov.br/wp-content/uploads/2023/05/Foto-fachada-CEU-Perus-640x350.jpg",
    linkMapa: "https://www.google.com/maps/place/CEU+EMEF+Perus/@-23.4063471,-46.7545388,17z/data=!3m1!4b1!4m6!3m5!1s0x94cefca8e9bee337:0x45ab8c2d2b17a57d!8m2!3d-23.406352!4d-46.7519639!16s%2Fg%2F1tfgkz42?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D"
  },

  {
    nome: "CEU Feitiço da Vila",
    endereco: "Rua Feitiço da Vila, 399 – Chácara Santa Maria, SP",
    bairro: "Chácara Santa Maria",
    imagem: "https://ceu.sme.prefeitura.sp.gov.br/wp-content/uploads/2021/09/CEU-Feitico-640x350.jpg",
    linkMapa: "https://www.google.com/maps/place/CEU+Feiti%C3%A7o+da+Vila/@-23.6862664,-46.7964156,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce52fb22b70fa7:0x5cf6f4aa2715595d!8m2!3d-23.6862713!4d-46.7938407!16s%2Fg%2F1tf4g4j0?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    nome: "CEU Três Lagos",
    endereco: "Rua Maria Moura da Conceição, s/n – Jardim Três Corações, SP",
    bairro: "Jardim Três Corações",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq177Z74gYmKCeHUgwyqr_rpgXbpXTrR2CGQ&s",
    linkMapa: "https://www.google.com/maps/place/CEU+-+TR%C3%8AS+LAGOS/@-23.7671455,-46.683069,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce491cc813b8c5:0x25d1f2c9be31a58f!8m2!3d-23.7671504!4d-46.6804941!16s%2Fg%2F11ckvgbvfp?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    nome: "CEU Três Pontes",
    endereco: "Rua Capachós, 400 – Jardim Célia, SP",
    bairro: "Jardim Célia",
    imagem: "https://f.i.uol.com.br/fotografia/2021/08/12/16288097946115aa4299622_1628809794_3x2_md.jpg",
    linkMapa: "https://www.google.com/maps/place/CEU+TR%C3%8AS+PONTES+-+Nilzete+Leticia+Bispo+Dos+Santos+Lima,+Profa./@-23.4781154,-46.3837257,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce630ec585331d:0x6bb48fb47a39a680!8m2!3d-23.4781203!4d-46.3811508!16s%2Fg%2F1tfp3lj9?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    nome: "CEU Uirapuru",
    endereco: "Rua Nazir Miguel, 849 – Jardim Paulo VI, SP",
    bairro: "Jardim Paulo VI",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFQ6db5sABoJDjk91NdomudmpOEuB8TQ9iEw&s",
    linkMapa: "https://www.google.com/maps/place/CEU+Uirapuru/@-23.6003499,-46.7921126,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce54e2acd16be7:0xf2e0ac03867fef1a!8m2!3d-23.6003548!4d-46.7895377!16s%2Fg%2F11h0wnjyn?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    nome: "CEU Vila Atlântica",
    endereco: "Rua Coronel José Venâncio Dias, 840 – Jardim Nardini, SP",
    bairro: "Jardim Nardini",
    imagem: "https://ceu.sme.prefeitura.sp.gov.br/wp-content/uploads/2023/05/Foto-fachada-CEU-Vila-Atlantica-640x350.jpg",
    linkMapa: "https://www.google.com/maps/place/CEU+Vila+Atl%C3%A2ntica/@-23.4817058,-46.7628829,17z/data=!4m10!1m2!2m1!1sCEU+Vila+Atl%C3%A2ntica!3m6!1s0x94cefea1369af48d:0x7d0faad95f11a75f!8m2!3d-23.481663!4d-46.7627713!15sChNDRVUgVmlsYSBBdGzDom50aWNhWhUiE2NldSB2aWxhIGF0bMOibnRpY2GSARBlZHVjYXRpb25fY2VudGVymgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVIxZHpSNVVIRlJSUkFCqgE8EAEyHxABIhtcRi9cvF7kbPv3pN98kWg5EGhYiwwOmnlzKggyFxACIhNjZXUgdmlsYSBhdGzDom50aWNh4AEA-gEECAAQQA!16s%2Fg%2F1yfj765w5?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    nome: "CEU Vila Curuçá",
    endereco: "Av. Marechal Tito, 3.400 – Vila Miragaia, SP",
    bairro: "Vila Miragaia",
    imagem: "https://ceu.sme.prefeitura.sp.gov.br/wp-content/uploads/2021/09/WhatsApp-Image-2023-05-09-at-11.58.35-640x350.jpeg",
    linkMapa: "https://www.google.com/maps/place/CEU+Vila+Curu%C3%A7a+-+Irene+Ramalho/@-23.4950574,-46.4148727,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce6390cd608e5b:0x6978552d586c5d15!8m2!3d-23.4950623!4d-46.4122978!16s%2Fg%2F1tcyglps?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    nome: "CEU Vila do Sol",
    endereco: "Av. dos Funcionários Públicos, 369 – Jardim Ângela / Vila do Sol, SP",
    bairro: "Jardim Ângela",
    imagem: "https://ceu.sme.prefeitura.sp.gov.br/wp-content/uploads/2023/05/Foto-fachada-CEU-Vila-do-Sol-640x350.jpg",
    linkMapa: "https://www.google.com/maps/place/CEU+Vila+do+Sol/@-23.7347539,-46.7822407,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce4da1deeca593:0x22bab51a141b6b01!8m2!3d-23.7347588!4d-46.7796658!16s%2Fg%2F1tfm7s85?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D"
  },

  {
    nome: "CEU Parque do Carmo",
    endereco: "Av. Afonso Sampaio e Souza, 2001 – Parque do Carmo, SP",
    bairro: "Parque do Carmo",
    imagem: "https://baccarelli.org.br/wp-content/uploads/2024/10/ceu-pq-carmo-480x360.png",
    linkMapa: "https://www.google.com/maps/place/CEU+Parque+do+Carmo/@-23.5749155,-46.4798269,3a,75y,90t/data=!3m8!1e2!3m6!1sCIHM0ogKEICAgICpieWRVQ!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAG0ilSxjcd87d_0vqYnK1ggdHx1vK3R6N_CnjxtceLwPZDUF5Bo84NxkQc7315GsSKRaQRbHxaJHumEzxqWtvgVN2yisuKQyO7754cj5VKO50OV2jzKNNKdKTMr3HeHY3PCkGbkcUIpT%3Dw128-h86-k-no!7i2400!8i1602!4m11!1m2!2m1!1sCEU+Parque+do+Carmo!3m7!1s0x94ce67ab6505e90b:0x470aa4ac4d042744!8m2!3d-23.5748584!4d-46.4794442!10e5!15sChNDRVUgUGFycXVlIGRvIENhcm1vkgEQZWR1Y2F0aW9uX2NlbnRlcqoBPBABMh8QASIbd7xU0Ki4MkOSy4KJcyoYT6vDRqgheL-Ow3PJMhcQAiITY2V1IHBhcnF1ZSBkbyBjYXJtb-ABAA!16s%2Fg%2F11fx9m157k?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    nome: "CEU Freguesia do Ó",
    endereco: "Rua Jacutiba, 167 – Freguesia do Ó, SP",
    bairro: "Freguesia do Ó",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKxPONaCo02d63VbZUR4KGO3kwwjaxh8lxag&s",
    linkMapa: "https://www.google.com/maps/place/CEU+Freguesia+do+%C3%93+-+Esperan%C3%A7a+Garcia/@-23.4825752,-46.6960589,17z/data=!3m1!4b1!4m6!3m5!1s0x94cef9e7a4cf289d:0x52198019f2e8ae16!8m2!3d-23.4825801!4d-46.693484!16s%2Fg%2F11qs4fs28r?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    nome: "CEU Carrão / Tatuapé",
    endereco: "Rua Monte Serrat, 230 – Tatuapé / Carrão, SP",
    bairro: "Tatuapé",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA9NY7VLHZPRlL2Ce_7A0nm0YbyNP79_B8qdIZva6xpl0_p9FfbnhY1vCe8Efiow59QNA&usqp=CAU",
    linkMapa: "https://www.google.com/maps/place/CEU+Carr%C3%A3o+%2F+Tatuap%C3%A9+-+Carolina+Maria+de+Jesus/@-23.5404546,-46.5650793,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce5f575d63ec85:0xe3c0fd1c56c93da6!8m2!3d-23.5404595!4d-46.5625044!16s%2Fg%2F11rz2m5d54?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D"
  }



  ]);

  const filtrados = lista.filter((i) =>
    i.nome.toLowerCase().includes(buscar.toLowerCase()) ||
    i.bairro.toLowerCase().includes(buscar.toLowerCase())
  );

  return (
    <section className="pagina-ceus">
      <h1>Unidades dos CEUs</h1>
      <p className="subtitulo">
        <br />
        Encontre unidades dos CEUS mais próximas de você.
        <br />
       <p> Onde <span>você</span> e sua <span>familia</span> encontraram diversas atividades <span>culturais</span>,<span>esportivas</span> e de <span>lazer</span>.</p>
      </p>

     <br />
     <br />

      <div className="lista-ceus">
  {filtrados.map((item, index) => (
    <div className="card-ceu" key={index}>
      <img src={item.imagem} alt={item.nome} />
      <div className="info">
        <h3>{item.nome}</h3>
        <p><b>Bairro:</b> {item.bairro}</p>
        <p><b>Endereço:</b> {item.endereco}</p>
        <a
          href={item.linkMapa}  
          target="_blank"
          className="btn-mapa"
        >
          Ver no mapa
        </a>
      </div>
    </div>
  ))}
</div>

     
    </section>
  );
}
