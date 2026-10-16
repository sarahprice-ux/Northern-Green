# HAVING... (Slide 21)

---

## 1.
Q: How many product `pack_sizes` have an average popularity of 71 or more?

A: 4
- bunch (73)
- twin (73)
- spray (71)
- bloom (71)

```
SELECT pack_size, AVG(popularity) AS avg_popularity
FROM "sequel-mart-schema"."Products"
GROUP BY pack_size
HAVING AVG(popularity) >= 71;
```

---

## 2.
Q: In the `Sales_Header` table, which individual feedback_scores (1, 2, 3, 4 and/or 5) were used in more than 100 transactions (e.g. if 101 transactions had a feedback of 3 then 3 would count)?

A: 
- 1 *(166 transactions)*
- 4 *(128 transactions)*
- 5 *(583 transactions)*
```
SELECT feedback_score, COUNT(customer_id) AS count_customer_id
FROM "sequel-mart-schema"."Sales_Header"
GROUP BY feedback_score
HAVING COUNT(customer_id) > 100;
```