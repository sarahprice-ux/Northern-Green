# WHERE... (Logfical Filters) - (Slide 16)

---

## 1.
Q: How many customers joined Sequel-Mart between 1st February 2021 and 28th February 2021?

A: 26 customers joined between 1st February 2021 and 28th February 2021
```
SELECT *
FROM "sequel-mart-schema"."Customers"
WHERE date_joined BETWEEN '2021-02-01' AND '2021-02-28';
```
---

## 2.
Q: How many products are sold in pack_sizes of unit, bunch or head?

A: 17 products were sold by the unit, bunch or head
```
SELECT *
FROM "sequel-mart-schema"."Products"
WHERE pack_size IN ('unit', 'bunch', 'head');
```
---

## 3.
Q: How many products are not sold by the kilogram (kg), unit, bunch or head?

A: 16 products were not sold by the kg, unit, bunch or head
```
SELECT *
FROM "sequel-mart-schema"."Products"
WHERE pack_size NOT IN ('kg', 'unit', 'bunch', 'head');
```
---

## 4.
Q: How many times did customers between 100 and 105 shop in our stores (from `Sales_Header`)?

A: Customer IDs 100-105 shopped in our stores 28 times
```
SELECT *
FROM "sequel-mart-schema"."Sales_Header"
WHERE customer_id BETWEEN 100 AND 105;
```
---

## 5.
Q: How many customers names end with the initials L.K?

A: 3 Customer IDs names end with L.K
```
SELECT *
FROM "sequel-mart-schema"."Customers"
WHERE customer_name LIKE '%L.K';
```