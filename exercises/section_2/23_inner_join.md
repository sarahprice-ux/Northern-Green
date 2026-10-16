# INNER JOIN... (Slide 23)

---

## 1.
Q: Join `Sales_Header` (alias sh) to `Stores` (alias st).  Bring back the first 20 rows.

A:
```
SELECT *
FROM "sequel-mart-schema"."Sales_Header" AS sh 
INNER JOIN "sequel-mart-schema"."Stores" AS st
    ON st.store_id = sh.store_id
LIMIT 20;
```
---

## 2.
Q: Join `Sales_Header` (alias sh) to `Dates` (alias dt).  Bring back the first 20 rows.

A:
```
SELECT *
FROM "sequel-mart-schema"."Sales_Header" AS sh 
INNER JOIN "sequel-mart-schema"."Dates" AS dt
    ON dt.date_id = sh.date_id
LIMIT 20;
```
---

## 3.
Q: Join `Sales_Header` (alias sh) to `Sales_Detail` (alias sd).  Bring back the first 20 rows.

A:
```
SELECT *
FROM "sequel-mart-schema"."Sales_Header" AS sh 
INNER JOIN "sequel-mart-schema"."Sales_Detail" AS sd
    ON sd.sale_id = sh.sale_id
LIMIT 20;
```
---

## 4.
Q: Join `Sales_Detail` (alias sd) to `Products` (alias pr).  Bring back the first 20 rows.

A:
```
SELECT *
FROM "sequel-mart-schema"."Sales_Detail" AS sd 
INNER JOIN "sequel-mart-schema"."Products" AS pr
    ON sd.product_id = pr.product_id
LIMIT 20;
```