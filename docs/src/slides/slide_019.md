---
layout: 'base.njk'
slide_number: 19
slide_prev: 'slide_018/'
slide_next: 'slide_020/'
section_title: 'How do we query a relational database?'
slide_title: 'LIMIT...'
theme: 'theme_002'
slide_layout: 'grid-2'
---

<section class="slide__text">

#### Return only the first *x* rows we need

```
SELECT * | <value1>, <value2>
FROM <table_name>
LIMIT <n>;
```

It's like saying: <span> "Hey, PostgreSQL; please can you find this information for me?  It's in this table in this schema.  When you find it, please **only read back the first few records that match my criteria**" </span>

For example, if we wanted to return the first 5 customers in the table:
```
SELECT *
FROM "sequel-mart-schema"."Customers"
LIMIT 5;
```

We can combine this with the `WHERE` clause to return a sample of matching data
```
SELECT *
FROM "sequel-mart-schema"."Customers"
WHERE date_joined >= '2021-08-01'
LIMIT 5;
```
Returns the first 5 customers in the table who joined after 1st August 2021


We can also combine this with the `ORDER BY` clause to return the 5 most recent customers
```
SELECT *
FROM "sequel-mart-schema"."Customers"
WHERE date_joined >= '2021-08-01'
ORDER BY date_joined DESC
LIMIT 5;
```

##### Notes:
- This dramatically reduces the time it takes to return results from a large table
- It also consumes fewer resources



</section>


<section class="slide__images">
    <caption>1. List of first 5 customers</caption>
    <img src="{{ '../../images/002_LIMIT_Customers_5.png' | url }}" />
    <caption>2. List of first 5 customers who joined after 1st August 2021</caption>
    <img src="{{ '../../images/002_LIMIT_Customers_5_Date_Joined.png' | url }}" />
    <caption>3. List of first 5 customers who joined after 1st August 2021 ordered by recency</caption>
    <img src="{{ '../../images/002_LIMIT_Customers_5_Date_Joined_DESC.png' | url }}" />

</section>
