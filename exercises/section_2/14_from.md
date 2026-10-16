# FROM  - (Slide 14)

---

## 1.
Q: Run SELECT * from each of the other 5 tables

```
SELECT * FROM "sequel-mart-schema"."Customers";
```

```
SELECT * FROM "sequel-mart-schema"."Dates";
```

```
SELECT * FROM "sequel-mart-schema"."Sales_Header";
```

```
SELECT * FROM "sequel-mart-schema"."Sales_Detail";
```

```
SELECT * FROM "sequel-mart-schema"."Stores";
```

---

## 3.
Q: How many unique `pack_size` values are there in which a product can be sold?

A: There are 9 unique sizes
```
SELECT DISTINCT pack_size
FROM "sequel-mart-schema"."Products";
```