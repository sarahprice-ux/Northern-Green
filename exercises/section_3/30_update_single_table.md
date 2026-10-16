# UPDATE... (Single Table) (Slide 30)

---

## 1.
Q: Increase the offer_discount_percentage by 10% on any offer_ids between 12 and 16
- HINT: You can use the `BETWEEN` operator to get the IDs if they are consecutive

A: The discounts should be 5.34, 2.62, 12.38, 8.42 and 2.19 respectively
```
UPDATE "sequel-mart-schema"."Product_Offers"
SET offer_discount_percentage = offer_discount_percentage * 1.1
WHERE offer_id BETWEEN 12 AND 16;
```
---

## 2.
Q: Reduce the offer_discount_percentage by 5% on any offer_name that ends with the word 'deal' 
- HINT: Use the `LIKE` operator to get the deals

A: This should change offers 'A Plum deal' and 'Discovery of a deal' to 7.08 and 6.50 respectively
```
UPDATE "sequel-mart-schema"."Product_Offers"
SET offer_discount_percentage = offer_discount_percentage * 0.95
WHERE offer_name LIKE '%deal';
```