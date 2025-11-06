drop database Tcc;

create database Tcc;

use Tcc;

create table tb_cadastro(
id_usuario INT PRIMARY KEY AUTO_INCREMENT,
nm_usuario varchar(200),
email_usuario varchar(200),
ds_genero varchar(50),
ds_cep varchar(9),
senha varchar(500)
);

CREATE TABLE contatos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100),
  email VARCHAR(100),
  mensagem TEXT
);

select * from tb_cadastro;
