-- 21 - Adicione com um único INSERT, duas linhas à tabela order_details com os mesmos dados do requisito 20.

INSERT INTO northwind.order_details
	(order_id, product_id, quantity, unit_price, discount, status_id, inventory_id)
VALUES
	(69, 80, 15.0000, 15.0000, 0, 2, 129),
  (69, 80, 15.0000, 15.0000, 0, 2, 129);