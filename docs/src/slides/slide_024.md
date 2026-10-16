---
layout: 'base.njk'
slide_number: 24
slide_prev: 'slide_023/'
slide_next: 'slide_025/'
section_title: 'How do we query a relational database?'
slide_title: LEFT OUTER JOIN...
theme: 'theme_002'
slide_layout: 'grid-2'
---

<section class="slide__text">

##### Join 2 tables, all values from 1 table, matches only from the other

```
SELECT           l.<field1>, l.<field2>, r.<field1>, r.<field2>
FROM             <schema_name>.<table_name> | <view_name> AS l
LEFT OUTER JOIN  <schema_name>.<table_name> | <view_name> AS r
            ON l.<field1> = r.<field1> AND l.<field2> = r.<field2>;
```

###### Terms
- `LEFT OUTER JOIN` = Returns all rows from the left table, and the matching rows from the right table

<hr />

##### INNER JOIN vs LEFT OUTER JOIN

Let's join `Sales_Header` to `Customers` again but this time:
- We'll put the `Customer` table first
- We'll filter for customers with the first name Amelie

```
SELECT *
FROM "sequel-mart-schema"."Customers" AS cu
INNER JOIN "sequel-mart-schema"."Sales_Header" AS sh 
    ON cu.customer_id = sh.customer_id
WHERE cu.customer_name LIKE 'Amelie%';
```

This returns 5 transactions
- All for 'Amelie R.D.S'.

Now let's apply a `LEFT OUTER JOIN` to this query:
```
SELECT *
FROM "sequel-mart-schema"."Customers" AS cu
LEFT OUTER JOIN "sequel-mart-schema"."Sales_Header" AS sh 
    ON cu.customer_id = sh.customer_id
WHERE cu.customer_name LIKE 'Amelie%';
```

This time we get 6 transactions
- 5 for 'Amelie R.D.S'
- 1 for 'Amelie M.W.H' with `NULL` for the columns in `Sales_Header`

###### What's going on?
- Amelie M.W.H is a registered customer but has not had a transaction yet
- An `INNER JOIN` only returns records if they are in both tables
- A `LEFT OUTER JOIN` forces the query to return all records from the left-hand table
- The left table is the first in the join (`Customers` in this case)
- So we get one dummy record to acknowledge the record in `Customers` with `NULL`s in the right-hand table

Make sure we're using the right join type to get the result we're expecting

###### Notes:
- `NULL` is a special placeholder to say the data doesn't exist or is unknown
    - You can query for the existence of `NULL`s with the `IS NULL` syntax
    - For example `WHERE sh.sale_id IS NULL`
- `LEFT OUTER JOIN` is the longer form of this type of join
- We can just use `LEFT JOIN` and the queries would run in the same way
- `RIGHT OUTER JOIN` or `RIGHT JOIN` returns everything from table `b` and matches from table `a`

</section>

<section class="slide__images">
<caption>1. LEFT OUTER JOIN returns matches found in BOTH tables only</caption>
<img src="{{ '../../images/002_LEFT_JOIN_Venn.png' | url }}" />
<caption>2. Inner Joining Customers to Sales Header for customers called Amelie</caption>
<img src="{{ '../../images/002_INNER_JOIN_cu_sh_amelie.png' | url }}" />
<caption>3. Outer Joining Customers to Sales Header for customers called Amelie</caption>
<img src="{{ '../../images/002_LEFT_JOIN_cu_sh_amelie.png' | url }}" />

</section>

<section class="slide__exercises">

---

#### Exercises:
1. Apart from Amelie M.W.H how many other customers are yet to make a transaction?
    - HINT: Add `WHERE sh.sale_id IS NULL` after your join


</section>