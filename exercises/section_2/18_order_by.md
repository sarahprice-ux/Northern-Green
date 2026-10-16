# ORDER BY... (Slide 18)

---

## 1.
Q: When did the first customer and last customer join us?

A: The first customer joined on 5th Jan 2021 and the last customer joined on 19th August 2021
```
SELECT *
FROM "sequel-mart-schema"."Customers"
ORDER BY date_joined;
```
```
SELECT *
FROM "sequel-mart-schema"."Customers"
ORDER BY date_joined DESC;
```
---

## 2.
Q: What is the most expensive `wholesale_price` for products that are not sold by the kg?

A: The most expensive wholesale_price for products that are not sold by the kg is £2.00 for Poinsettias
```
SELECT *
FROM "sequel-mart-schema"."Products"
WHERE pack_size <> 'kg'
ORDER BY wholesale_price DESC;
```
---

## 3.
Q: What is the most expensive `unit_sales_price` for products that have a `popularity` below 65?

A: The most expensive unit_sales_price for products that have a popularity below 65 is £15.63 for red currants
```
SELECT *
FROM "sequel-mart-schema"."Products"
WHERE popularity < 65
ORDER BY unit_sales_price DESC;
```
---

## 4.
Q: What is the lowest `revenue` for a sale (`Sales_Detail`) where there were more than 6 `items_sold` AND the `cost_of_sales` was more than 10?

A: £14.04 was the lowest revenue for a sale (Sales_Detail) where there were more than 6 items_sold AND the cost_of_sales was more than 10
```
SELECT *
FROM "sequel-mart-schema"."Sales_Detail"
WHERE items_sold > 6 AND cost_of_sales > 10
ORDER BY revenue;
```