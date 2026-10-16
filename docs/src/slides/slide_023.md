---
layout: 'base.njk'
slide_number: 23
slide_prev: 'slide_022/'
slide_next: 'slide_024/'
section_title: 'How do we query a relational database?'
slide_title: INNER JOIN...
theme: 'theme_002'
slide_layout: 'grid-2'
---

<section class="slide__text">

##### Join 2 tables on matching columns

- Until now we've been querying a single table at a time
- One of the main strengths of a relational database is the ability to join tables together
- This enables us to piece data together from different places to answer a question

Think of a join as a left and right table:
- **Left** - The first table in the join (on the `FROM` line)
- **Right** - The second table in the join (on the `INNER JOIN` line)

```
SELECT      l.<field1>, l.<field2>, l.<field3>, r.<field1>, r.<field2>, r.<field3>
FROM        <schema_name>.<table_name> | <view_name> AS l
INNER JOIN  <schema_name>.<table_name> | <view_name> AS r
            ON l.<field1> = r.<field1> AND l.<field2> = r.<field2>;
```

###### Terms
- `INNER JOIN` = Combines rows that have **matching values** in two or more tables
- `ON` = The columns on which you want to join the tables
    - They must have compatable data and data types to get a meaningful result

<hr />

##### Entity Relationship Diagram (ERD) Revisited

So how do we know what columns are joinable to which other table?

Let's look at the ERD:

<caption>1. Sequel-Mart's database schema</caption>
<img src="{{ '../../images/002_Sequel_Mart_Schema.png' | url }}" />

- As an example, we can join `Sales_Header` to `Customers`.
    - This can be done by joining a column on each table called `customer_id`
    - Good naming conventions on tables often makes this job a lot easier

```
SELECT *
FROM "sequel-mart-schema"."Sales_Header" AS sh 
INNER JOIN "sequel-mart-schema"."Customers" AS cu
    ON sh.customer_id = cu.customer_id;
```

- This returns transactions from the `Sales_Header` and more detailed information about each customer from `Customers`
- Other possible joins include:
    - `Sales_Header` to `Stores`
    - `Sales_Header` to `Dates`
    - `Sales_Header` to `Sales_Detail`
    - `Sales_Detail` to `Products`


##### Notes:
- `INNER JOIN` is the longer form of this type of join.
- We can just use `JOIN` and the queries would run in the same way
- Beware that `INNER JOIN` only returns where records exist in **both** tables
    - If something is in one table and not the other it will not be returned

</section>

<section class="slide__images">
<caption>1. INNER JOIN returns matches found in BOTH tables only</caption>
<img src="{{ '../../images/002_INNER_JOIN_Venn.png' | url }}" />
<caption>2. Joining Customers to Sales Header</caption>
<img src="{{ '../../images/002_INNER_JOIN_cu_sh.png' | url }}" />

</section>

<section class="slide__exercises">

---

#### Exercises:
1. Join Sales_Header (alias sh) to Stores (alias st).  Bring back the first 20 rows.
2. Join Sales_Header (alias sh) to Dates (alias dt).  Bring back the first 20 rows.
3. Join Sales_Header (alias sh) to Sales_Detail (alias sd).  Bring back the first 20 rows.
4. Join Sales_Detail (alias sd) to Products (alias pr).  Bring back the first 20 rows.

</section>