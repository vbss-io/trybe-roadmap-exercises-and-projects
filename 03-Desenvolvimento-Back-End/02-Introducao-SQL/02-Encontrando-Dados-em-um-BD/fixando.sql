-- Fixando SELECT
SELECT * FROM sakila.city;
SELECT first_name, last_name FROM sakila.customer;
SELECT * FROM sakila.rental;
SELECT * FROM sakila.film;
SELECT title, description, release_year FROM sakila.film;

-- Fixando CONCAT
SELECT CONCAT(first_name, ' ', last_name) AS 'Nome Completo' FROM sakila.actor;
SELECT CONCAT(title, ' - Lançamento: ', release_year) AS 'Lançamentos' FROM sakila.film;
SELECT CONCAT(title, ' - Classificação: ', rating) AS 'Classificações' FROM sakila.film;
SELECT CONCAT(address, ' - ', district) AS 'Endereço' FROM sakila.address;

-- Fixando DISTINCT
CREATE DATABASE Escola;
CREATE TABLE IF NOT EXISTS Escola.Estudantes (
	nome VARCHAR(7) CHARACTER SET utf8,
    idade INT
);
INSERT INTO Escola.Estudantes VALUES
    ('Rafael', 25),
    ('Amanda', 30),
    ('Roberto', 45),
    ('Carol', 19),
    ('Amanda', 25);
    
SELECT * FROM Escola.Estudantes;
SELECT DISTINCT nome, idade FROM Escola.Estudantes;
SELECT DISTINCT nome FROM Escola.Estudantes;
SELECT DISTINCT idade FROM Escola.Estudantes;

-- Fixando COUNT
SELECT * FROM sakila.staff;
SELECT COUNT(password) AS 'Total Senhas' FROM sakila.staff;
SELECT COUNT(staff_id) AS 'Total Funcionários' FROM sakila.staff;

-- Fixando LIMIT
SELECT COUNT(*) FROM sakila.rental;
SELECT * FROM sakila.rental LIMIT 10;

-- Fixando LIMIT OFFSET
SELECT * FROM sakila.rental LIMIT 10 OFFSET 3;

-- Fixando ORDER BY
SELECT * FROM sakila.address
ORDER BY district ASC, address DESC;