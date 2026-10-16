# GROUP BY... (Slide 20)

---

## 1.
Q: How many customer transactions in the Sales_Header table had a feedback_score of 4 and 5?

A: 128 transactions had a feedback_score of 4 and 583 had a score of 5
```
SELECT feedback_score, COUNT(customer_id) AS count_customer_id
FROM "sequel-mart-schema"."Sales_Header"
WHERE feedback_score >= 4
GROUP BY feedback_score;
```
---

## 2.
Q: In the Sales_Detail table, which product_id generated the highest revenue?
- Limit the result result to show only the top result.
- What was the average revenue for the product in question 2?

A: product_id 55 was the highest with £21,173.60
    - The average revenue for this product was £60.84
```
SELECT product_id, SUM(revenue) AS sum_revenue, AVG(revenue) AS avg_revenue
FROM "sequel-mart-schema"."Sales_Detail"
GROUP BY product_id
ORDER BY sum_revenue DESC
LIMIT 1;
```