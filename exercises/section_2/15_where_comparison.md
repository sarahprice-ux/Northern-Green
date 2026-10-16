# WHERE... (Comparison Filters) - (Slide 15)

---

## 1. 
Q: How many customers joined Sequel-Mart before 1st February 2021?

A: 20 customers joined before 1st February 2021
```
SELECT *
FROM "sequel-mart-schema"."Customers"
WHERE date_joined < '2021-02-01';
```
---

## 2.
Q: How many products are sold by the unit (e.g. in pack_sizes of 'unit')?

A: 4 products were sold by the unit
```
SELECT *
FROM "sequel-mart-schema"."Products"
WHERE pack_size = 'unit';
```
---

## 3.
Q: How many products are not sold by the kilogram (kg)?

A: 33 products were not sold by kg
```
SELECT *
FROM "sequel-mart-schema"."Products"
WHERE pack_size <> 'kg';
```
---

## 4.
Q: How many times did customer 100 shop in our stores (from Sales_Header)?

A: Customer ID 100 shopped in our stores 6 times
```
SELECT *
FROM "sequel-mart-schema"."Sales_Header"
WHERE customer_id = 100;
```
---
## 5.
Q: How many sales transactions (Sales_Header) had a feedback score of 2?

A: 36 transactions had a feedback score of 2
```
SELECT *
FROM "sequel-mart-schema"."Sales_Header"
WHERE feedback_score = 2;
```