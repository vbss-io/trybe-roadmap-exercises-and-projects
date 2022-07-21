-- Fixando GROUP BY e HAVING

-- 1) Monte uma query que exiba a quantidade de clientes cadastrados na tabela sakila.customer que estão ativos e a quantidade que estão inativos.
SELECT IF(active = 1, 'Ativo', 'Inativo'), COUNT(*) FROM sakila.customer
GROUP BY active;

-- 2) Monte uma query para a tabela sakila.customer que exiba a quantidade de clientes ativos e inativos por loja. Os resultados devem conter o ID da loja,
-- o status dos clientes (ativos ou inativos) e a quantidade de clientes por status.
SELECT store_id, IF(active = 1, 'Ativo', 'Inativo') AS status, COUNT(*) FROM sakila.customer
GROUP BY store_id, active
ORDER BY store_id, status;

-- 3) Monte uma query que exiba a média de duração de locação por classificação indicativa (rating) dos filmes cadastrados na tabela sakila.film.
-- Os resultados devem ser agrupados pela classificação indicativa e ordenados da maior média para a menor.
SELECT rating, AVG(rental_duration) As rental_duration_avg FROM sakila.film
GROUP BY rating
ORDER BY rental_duration_avg DESC;

-- 4) Monte uma query para a tabela sakila.address que exiba o nome do distrito e a quantidade de endereços registrados nele.
-- Os resultados devem ser ordenados da maior quantidade para a menor.
SELECT * FROM sakila.address;
SELECT district, COUNT(*) AS Total FROM sakila.address
GROUP BY district
ORDER BY Total DESC;

-- 5) Usando a query a seguir, modifique-a de forma que exiba apenas as durações médias que estão entre 115.0 a 121.50. Além disso, dê um alias (apelido) à coluna
-- gerada por AVG(length), de forma que deixe a query mais legível. Finalize ordenando os resultados de forma decrescente.
SELECT rating, AVG(length)
FROM sakila.film
GROUP BY rating;

SELECT rating, AVG(length) AS length_AVG
FROM sakila.film
GROUP BY rating
HAVING length_AVG BETWEEN 115.0 AND 121.50
ORDER BY length_AVG DESC;
    
-- 6) Usando a query a seguir, exiba apenas os valores de total do custo de substituição que estão acima de $3950.50.
-- Dê um alias que faça sentido para SUM(replacement_cost), de forma que deixe a query mais legível. Finalize ordenando os resultados de forma crescente.
SELECT rating, SUM(replacement_cost)
FROM sakila.film
GROUP by rating;

SELECT rating, SUM(replacement_cost) AS replacement_cost_SUM
FROM sakila.film
GROUP by rating
HAVING replacement_cost_SUM > 3950.50
ORDER BY replacement_cost_SUM DESC;
