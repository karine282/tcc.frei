drop database Tcc;

create database Tcc;

use Tcc;

create table tb_cadastro(
id_usuario INT PRIMARY KEY AUTO_INCREMENT,
nm_usuario varchar(200),
email_usuario varchar(200),
ds_genero varchar(50),
ds_cep varchar(9),
senha varchar(500),
ds_adm boolean
);

insert into tb_cadastro(nm_usuario, email_usuario, ds_genero, ds_cep, senha, ds_adm) values
("geovanna cristina", "ra55241809830@gmail.com", "feminino", "010010000", "$2b$10$ydauH6/ttbtXVXqz9qUA5eaIlbNmsGXduT4LG9U2VwwdM72pM4nES", true);


SELECT id_usuario, email_usuario, senha, ds_adm FROM tb_cadastro WHERE email_usuario = 'ra55241809830@gmail.com';
CREATE TABLE contatos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100),
  email VARCHAR(100),
  mensagem TEXT
);


select * from tb_cadastro;

CREATE TABLE  locais_culturais (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    endereco VARCHAR(255) NOT NULL,
    bairro VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO locais_culturais (nome, endereco, bairro) VALUES
('Museu de Arte de São Paulo (MASP)', 'Av. Paulista, 1578', 'Bela Vista'),
('Pinacoteca do Estado de São Paulo', 'Praça da Luz, 2', 'Luz'),
('Museu da Imagem e do Som (MIS)', 'Av. Europa, 158', 'Jardim Europa'),
('Museu Afro Brasil', 'Av. Pedro Álvares Cabral, s/n - Parque Ibirapuera', 'Vila Mariana'),
('Theatro Municipal de São Paulo', 'Praça Ramos de Azevedo, s/n', 'República'),
('Instituto Tomie Ohtake', 'Rua Coropés, 88', 'Pinheiros'),
('Sesc Pompeia', 'Rua Clélia, 93', 'Pompeia'),
('Museu Catavento', 'Av. Mercúrio, s/n - Parque Dom Pedro II', 'Brás'),
('Centro Cultural Banco do Brasil (CCBB)', 'Rua Álvares Penteado, 112', 'Centro'),
('Japan House São Paulo', 'Av. Paulista, 52', 'Bela Vista'),
('Farol Santander', 'Rua João Brícola, 24', 'Centro'),
('Museu da Língua Portuguesa', 'Praça da Luz, s/n', 'Luz'),
('Centro Cultural FIESP', 'Av. Paulista, 1313', 'Bela Vista'),
('Auditório Ibirapuera - Oscar Niemeyer', 'Av. Pedro Álvares Cabral, s/n - Parque Ibirapuera', 'Vila Mariana'),
('Museu do Futebol', 'Praça Charles Miller, s/n - Estádio do Pacaembu', 'Pacaembu'),
('Museu Histórico da Imigração Japonesa no Brasil', 'Rua São Joaquim, 381', 'Liberdade'),
('Templo Busshinji', 'Rua São Joaquim, 285', 'Liberdade'),
('Feira da Liberdade', 'Praça da Liberdade, s/n', 'Liberdade'),
('Associação Cultural e Assistencial da Liberdade (ACAL)', 'Rua Galvão Bueno, 596', 'Liberdade'),
('Espaço Cultural Bunkyo', 'Rua São Joaquim, 381', 'Liberdade');


CREATE TABLE  locais_esportivos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    endereco VARCHAR(255) NOT NULL,
    bairro VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO locais_esportivos (nome, endereco, bairro) VALUES
('Estádio do Morumbi', 'Praça Roberto Gomes Pedrosa, 1', 'Morumbi'),
('Allianz Parque', 'Av. Francisco Matarazzo, 1705', 'Perdizes'),
('Neo Química Arena', 'Av. Miguel Ignácio Curi, 111', 'Itaquera'),
('Ginásio do Ibirapuera', 'Rua Manoel da Nóbrega, 1361', 'Paraíso'),
('Centro Olímpico de Treinamento e Pesquisa', 'Rua Pedro de Toledo, 1651', 'Vila Clementino'),
('Clube Pinheiros', 'Rua Angelina Maffei Vita, 493', 'Jardim Europa'),
('Clube Paineiras do Morumby', 'Av. Dr. Alberto Penteado, 605', 'Morumbi'),
('Clube Hebraica', 'Rua Hungria, 1000', 'Pinheiros'),
('Clube Esperia', 'Av. Santos Dumont, 1313', 'Santana'),
('Parque Villa-Lobos', 'Av. Prof. Fonseca Rodrigues, 2001', 'Alto de Pinheiros'),
('Parque Ibirapuera', 'Av. Pedro Álvares Cabral, s/n', 'Vila Mariana'),
('Sesc Pompeia', 'Rua Clélia, 93', 'Pompeia'),
('Sesc Itaquera', 'Av. Fernando do Espírito Santo Alves de Mattos, 1000', 'Itaquera'),
('Sesc Vila Mariana', 'Rua Pelotas, 141', 'Vila Mariana'),
('Parque do Carmo', 'Av. Afonso de Sampaio e Souza, 951', 'Itaquera'),
('Autódromo de Interlagos', 'Av. Sen. Teotônio Vilela, 261', 'Interlagos'),
('Centro Esportivo Tietê', 'Av. Santos Dumont, 843', 'Luz'),
('Centro Esportivo da Mooca', 'Rua Taquari, 549', 'Mooca'),
('Centro Esportivo Barra Funda', 'Av. Auro Soares de Moura Andrade, 664', 'Barra Funda'),
('Centro Esportivo Santana', 'Rua São José dos Campos, 25', 'Santana'),
('Parque da Juventude', 'Av. Cruzeiro do Sul, 2630', 'Santana'),
('Clube Atlético Juventus', 'Rua Javari, 117', 'Mooca'),
('Clube Atlético São Paulo (SPAC)', 'Rua Visconde de Ouro Preto, 119', 'Consolação'),
('Clube Sírio', 'Av. Indianópolis, 1192', 'Indianópolis'),
('Clube de Regatas Tietê', 'Av. Santos Dumont, 843', 'Luz'),
('Ginásio Poliesportivo José Corrêa', 'Av. Guilherme Perereca Guglielmo, 1000', 'Barueri'),
('Centro Esportivo José Bonifácio', 'Av. São Miguel, 5550', 'São Miguel Paulista'),
('Centro Esportivo Santo Amaro', 'Rua São Benedito, 455', 'Santo Amaro'),
('Campo de Marte', 'Av. Santos Dumont, 2241', 'Santana'),
('Estádio Nicolau Alayon', 'Rua Comendador Souza, 348', 'Barra Funda');

CREATE TABLE  locais_lazer (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    endereco VARCHAR(255) NOT NULL,
    bairro VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO locais_lazer (nome, endereco, bairro) VALUES
('Parque do Ibirapuera', 'Av. Pedro Álvares Cabral s/n', 'Vila Mariana'), 
('Parque Burle Marx', 'Av. Dona Helena Pereira de Moraes s/n', 'Vila Andrade'), 
('Parque da Independência', 'Av. Nazareth s/n', 'Ipiranga'), 
('Parque da Água Branca', 'Av. Francisco Matarazzo 455', 'Água Branca'), 
('Aquário de São Paulo', 'R. Huet Bacelar 407', 'Ipiranga'), 
('Catavento Cultural e Educacional', 'Av. Mercúrio s/n, Parque Dom Pedro II', 'Brás'), 
('Galeria do Rock', 'Av. São João 439', 'República'), 
('Avenida Paulista', 'Av. Paulista', 'Bela Vista / Consolação'), 
('Praça da República', 'Rua Pedro Américo / Rua 24 de Maio / Av. Ipiranga / Av. São João', 'República'), 
('Parque Villa Lobos', 'Av. Prof. Fonseca Rodrigues 2001', 'Alto de Pinheiros'), 
('Parque Horto Florestal', 'Av. Miguel Estefano s/n', 'Jardim Guilherme / Zona Norte'), 
('Parque Lina e Paulo Raia', 'Av. Jabaquara – est. Conceição (aproximadamente)', 'Jabaquara'), 
('Museu do Futebol', 'Praça Charles Miller s/n (Pacaembu)', 'Pacaembu'), 
('Museu de Arte de São Paulo (MASP)', 'Av. Paulista 1578', 'Bela Vista'), 
('Pinacoteca do Estado de São Paulo', 'Praça da Luz 2', 'Luz'), 
('Jardim Botânico de São Paulo', 'Av. Miguel Stéfano s/n', 'Alto de Pinheiros'), 
('Parque Cantareira – Nucleo Pedra Grande', 'Estrada do Horto 1792', 'Santana / Cantareira'), 
('Parque do Carmo', 'Av. Afonso de Sampaio e Sousa 951', 'Itaquera'), 
('Jardim da Luz', 'Praça da Luz / Rua Galvão Bueno', 'Luz'), 
('Beco do Batman (Vila Madalena)', 'Rua Gonçalo Afonso / Rua Medeiros de Albuquerque', 'Vila Madalena'), 
('Parque Guanhembu', 'Divisa Cidade Dutra / Grajaú', 'Cidade Dutra / Grajaú'), 
('Zoo Safári São Paulo', 'Av. do Cursino 6338', 'Vila Moraes'), 
('Shopping Plaza Sul', 'Praça Leonor Kaupa 100', 'Jardim da Saúde'), 
('Autódromo de Interlagos', 'Av. Sen. Teotônio Vilela 261', 'Interlagos'), 
('Clube Hípico de São Paulo', 'R. Visconde de Taunay 508', 'Vila Cruzeiro'), 
('Museu Afro Brasil', 'Av. Pedro Álvares Cabral s/n (Parque Ibirapuera)', 'Vila Mariana'), 
('Casa das Rosas', 'Av. Paulista 37', 'Bela Vista'), 
('SESC Paulista (cobertura)', 'Av. Paulista 119', 'Bela Vista'), 
('Theatro Municipal de São Paulo', 'Praça Ramos de Azevedo s/n', 'Centro'), 
('Pátio do Colégio', 'Largo Pateo do Collegio 2', 'Centro');

CREATE TABLE ceus (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  bairro VARCHAR(100) NOT NULL,
  endereco VARCHAR(200) NOT NULL,
  imagem VARCHAR(300)
);


INSERT INTO ceus (nome, bairro, endereco, imagem) VALUES
('CEU Jaçanã', 'Jardim Guapira', 'R. Francisca Espósito Tonetti, 105, São Paulo', 'https://www.google.com/maps/search/?api=1&query=R.+Francisca+Esp%C3%B3sito+Tonetti+105+S%C3%A3o+Paulo'),
('CEU Capão Redondo', 'Capão Redondo', 'Rua Daniel Gran, s/nº, São Paulo', 'https://www.google.com/maps/search/?api=1&query=Rua+Daniel+Gran+Cap%C3%A3o+Redondo+S%C3%A3o+Paulo'),
('CEU Formosa', 'Vila Formosa / Parque Santo Antônio', 'Rua Sargento Claudiner Evaristo Dias, 10, São Paulo', 'https://www.google.com/maps/search/?api=1&query=Rua+Sargento+Claudiner+Evaristo+Dias+10+S%C3%A3o+Paulo'),
('CEU Guarapiranga', 'Jardim Kagohara', 'Estrada da Baronesa, 1.120, São Paulo', 'https://www.google.com/maps/search/?api=1&query=Estrada+da+Baronesa+1120+S%C3%A3o+Paulo'),
('CEU Heliópolis', 'São João Clímaco', 'Estrada da L%C3%A1grimas, 2385, São Paulo', 'https://www.google.com/maps/search/?api=1&query=Estrada+da+L%C3%A1grimas+2385+S%C3%A3o+Paulo'),
('CEU São Miguel – Luiz Melodia', 'Jardim São Vicente', 'R. José Ferreira Crespo, 475, São Paulo', 'https://www.google.com/maps/search/?api=1&query=Rua+Jos%C3%A9+Ferreira+Crespo+475+S%C3%A3o+Paulo'),
('CEU Vila Alpina – Virgínia Leone Bicudo', 'Vila Prudente', 'Rua João Pedro Lecor, 141, São Paulo', 'https://www.google.com/maps/search/?api=1&query=Rua+Jo%C3%A3o+Pedro+Lecor+141+S%C3%A3o+Paulo'),
('CEU Rei Pelé', 'Cidade Líder', 'Avenida Francisco Falconi, 83, São Paulo', 'https://www.google.com/maps/search/?api=1&query=Avenida+Francisco+Falconi+83+S%C3%A3o+Paulo'),
('CEU Água Azul', 'Cidade Tiradentes', 'Av. dos Metalúrgicos, 1.262, São Paulo', 'https://www.google.com/maps/search/?api=1&query=Av.+dos+Metal%C3%BArgicos+1262+S%C3%A3o+Paulo'),
('CEU Alto Alegre', 'Jardim Laranjeira ‒ Iguatemi', 'Rua Bento Guelfi, 1802, São Paulo', 'https://www.google.com/maps/search/?api=1&query=Rua+Bento+Guelfi+1802+S%C3%A3o+Paulo'),
('CEU Alvarenga', 'Pedreira', 'Estrada do Alvarenga, 3.752, São Paulo', 'https://www.google.com/maps/search/?api=1&query=Estrada+do+Alvarenga+3752+S%C3%A3o+Paulo'),
('CEU Aricanduva', 'Jardim Santa Terezinha', 'Rua Olga Fadel Abarca, s/n, São Paulo', 'https://www.google.com/maps/search/?api=1&query=Rua+Olga+Fadel+Abarca+S%C3%A3o+Paulo'),
('CEU Azul da Cor do Mar', 'Cidade AE Carvalho', 'Av. Ernesto de Souza Cruz, 2.171, São Paulo', 'https://www.google.com/maps/search/?api=1&query=Av.+Ernesto+de+Souza+Cruz+2171+S%C3%A3o+Paulo');


select * from tb_cadastro;

select * from tb_ceps;

select * from locais_esportivos;


