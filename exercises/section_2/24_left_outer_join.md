# LEFT OUTER JOIN... (Slide 24)

---

## 1.
Q: Apart from Amelie M.W.H how many other customers are yet to make a transaction?

A: 3 
- Arlo W.U.Z
- Hugo C.A.R
- Jude U.D.Y

```
SELECT *
FROM "sequel-mart-schema"."Customers" AS cu
LEFT OUTER JOIN "sequel-mart-schema"."Sales_Header" AS sh 
    ON cu.customer_id = sh.customer_id
WHERE sh.sale_id IS NULL;
```