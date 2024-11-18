create database mybd;
use mybd;

CREATE TABLE usuario (
	id int(2),
    nome varchar(20),
    senha varchar(20)
);

insert into usuario (id, nome, senha) values (1, 'Bruno', '123');
