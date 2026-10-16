# INSERT INTO ... Single Row (Slide 28)

---

## 1.
Q: Add yourself as a customer in the `Customers` table, with a `date_joined` of today
- Remember `customer_id` is automatically generated so should not be included

A: 
```
INSERT INTO "sequel-mart-schema"."Customers"
	(customer_name, date_joined)
VALUES
	('Me', CURRENT_DATE);
```