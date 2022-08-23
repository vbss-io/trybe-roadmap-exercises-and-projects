-- 14 - Mostre os resultados da coluna supplier_id da tabela purchase_orders em que o supplier_id seja maior ou igual a 1 e menor ou igual 3.

SELECT supplier_id FROM northwind.purchase_orders
WHERE supplier_id IN (1, 2, 3);