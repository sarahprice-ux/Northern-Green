# Exercises
## 6.4 Summary - (Slide 53)
```
CREATE VIEW "sequel-mart-schema".v_Summary
AS
SELECT COUNT(DISTINCT sh.sale_id) AS total_transactions
	, SUM(sd.items_sold) AS total_products_sold
	, ROUND(AVG(sh.feedback_score),1) AS avg_feedback
	, SUM(sd.revenue_net) AS revenue
	, SUM(sd.cost_of_sales) AS cost_of_sales
	, SUM(sd.revenue_net) - SUM(sd.cost_of_sales) AS gross_profit
FROM "sequel-mart-schema"."Sales_Header" AS sh
INNER JOIN "sequel-mart-schema"."Sales_Detail" AS sd ON sh.sale_id = sd.sale_id;
;
```

- Open `./backend/routes/summary.js`
- Replace the commented text on line 13 with:

```
SELECT * FROM "sequel-mart-schema".v_Summary;
```