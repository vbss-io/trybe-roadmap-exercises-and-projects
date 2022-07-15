-- Fixando Inserção de dados

-- 1) Insira um novo funcionário na tabela sakila.staff.
DESCRIBE sakila.staff;
INSERT INTO sakila.staff
	(first_name, last_name, address_id, store_id, active, username)
VALUES
	('vitor', 'bastos', 1, 1, 1, 'vitinho');
SELECT * FROM sakila.staff;

-- 2) Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query.
INSERT INTO sakila.staff
	(first_name, last_name, address_id, store_id, active, username)
VALUES
	('vitor2', 'bastos2', 1, 1, 1, 'vitinho2'),
    ('vitor3', 'bastos3', 1, 1, 1, 'vitinho3');
SELECT * FROM sakila.staff;

-- 3) Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor.
DESCRIBE sakila.customer;
DESCRIBE sakila.actor;
INSERT INTO sakila.actor
	(first_name, last_name)
SELECT first_name, last_name FROM sakila.customer
ORDER BY first_name LIMIT 5;

-- 4) Cadastre três categorias de uma vez só na tabela sakila.category.
DESCRIBE sakila.category;
INSERT INTO sakila.category (name)
VALUES
	('categoria1'),
    ('categoria2'),
    ('categoria3');

-- 5) Cadastre uma nova loja na tabela sakila.store.
DESCRIBE sakila.store;
INSERT INTO sakila.store (manager_staff_id, address_id)
VALUES (3, 3);
