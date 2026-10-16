# Exercises
## 6.3 Products - (Slide 52)
```
CREATE VIEW "sequel-mart-schema".v_Top_Products
AS
SELECT pr.product_item
	, pr.product_variety
	, pr.pack_size
	, pr.unit_sales_price AS unit_price
	, pr.inventory
	, SUM(sd.items_sold) AS items_sold
FROM "sequel-mart-schema"."Products" AS pr
INNER JOIN "sequel-mart-schema"."Sales_Detail" AS sd ON pr.product_id = sd.product_id
GROUP BY pr.product_item
	, pr.product_variety
	, pr.pack_size
	, pr.unit_sales_price
	, pr.inventory
ORDER BY SUM(sd.items_sold) DESC
LIMIT 10;
```

- Open `./backend/routes/products.js`
- Replace the commented text on line 13 with:

```
SELECT * FROM "sequel-mart-schema".v_Top_Products;
```