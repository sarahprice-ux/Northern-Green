# Exercises
## 6.1 Transactions - (Slide 50)
```
CREATE VIEW "sequel-mart-schema".v_Top_Transactions
AS
SELECT sh.sale_id AS Transaction
	, cu.customer_name AS Customer
	, sh.date_sale AS Date
	, sh.feedback_score AS Feedback
	, SUM(sd.revenue) AS Amount
	, SUM(sd.items_sold) AS Items
FROM "sequel-mart-schema"."Sales_Header" AS sh
INNER JOIN "sequel-mart-schema"."Customers" AS cu ON cu.customer_id = sh.customer_id
INNER JOIN "sequel-mart-schema"."Sales_Detail" AS sd ON sh.sale_id = sd.sale_id
GROUP BY sh.sale_id
	, cu.customer_name
	, sh.date_sale
	, sh.feedback_score
ORDER BY date_sale DESC
LIMIT 10;
```

- Open `./backend/routes/transactions.js`
- Replace the commented text on line 13 with:

```
SELECT * FROM "sequel-mart-schema".v_Top_Transactions;
```