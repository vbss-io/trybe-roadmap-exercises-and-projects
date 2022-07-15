-- Fixando o DELETE e TRUNCATE
SET SQL_SAFE_UPDATES = 0;

-- 1) Exclua do banco de dados o ator com o nome de "KARL".
DELETE FROM sakila.film_actor
WHERE actor_id =(
	SELECT actor_id FROM sakila.actor
	WHERE first_name = 'KARL'
);
DELETE FROM sakila.actor
WHERE first_name = 'KARL';

-- 2) Exclua do banco de dados os atores com o nome de "MATTHEW".
DELETE FROM sakila.film_actor
WHERE actor_id IN (
	SELECT actor_id FROM sakila.actor
	WHERE first_name = 'MATTHEW'
);
DELETE FROM sakila.actor
WHERE first_name = 'MATTHEW';

-- 3) Exclua da tabela film_text todos os registros que possuem a palavra "saga" em suas descrições.
SELECT * FROM sakila.film_text
WHERE description LIKE '%saga%';

-- 4) Apague da maneira mais performática possível todos os registros das tabelas film_actor e film_category.
TRUNCATE sakila.film_actor;
TRUNCATE sakila.film_category;
