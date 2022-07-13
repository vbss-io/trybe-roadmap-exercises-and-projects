-- Criando tabela filme
USE sakila;
CREATE TABLE filme (
    film_id int AUTO_INCREMENT,
    descricao varchar(100) NOT NULL,
    ano_lancamento int NOT NULL,
    nota int,
    PRIMARY KEY (film_id)
);

INSERT INTO filme (descricao, ano_lancamento, nota)
VALUES ('testando', 1997, 8);

SELECT * FROM filme;

-- Deletando tabela filme
USE sakila;
DROP TABLE filme;
