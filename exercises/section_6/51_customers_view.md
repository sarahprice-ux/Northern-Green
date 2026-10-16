# Exercises
## 6.2 Customers - (Slide 51)
```
CREATE VIEW "sequel-mart-schema".v_Top_Customers
AS
SELECT cu.customer_name AS customer
	, MIN(sh.date_sale) AS most_recent
	, COUNT(sh.sale_id) AS transactions
	, ROUND(AVG(sd.revenue),2) AS avg_spend
	, ROUND(AVG(items_sold),2) AS avg_items
	, ROUND(AVG(sh.feedback_score),1) AS avg_feedback
FROM "sequel-mart-schema"."Customers" AS cu
INNER JOIN "sequel-mart-schema"."Sales_Header" AS sh ON cu.customer_id = sh.customer_id
INNER JOIN "sequel-mart-schema"."Sales_Detail" AS sd ON sh.sale_id = sd.sale_id
GROUP BY cu.customer_name
ORDER BY AVG(sd.revenue) DESC
LIMIT 10;
```

- Open `./backend/routes/customers.js`
- Replace the commented text on line 13 with:

```
SELECT * FROM "sequel-mart-schema".v_Top_Customers;
```