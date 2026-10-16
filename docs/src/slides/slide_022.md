---
layout: 'base.njk'
slide_number: 22
slide_prev: 'slide_021/'
slide_next: 'slide_023/'
section_title: 'How do we query a relational database?'
slide_title: Aliasing Revisited
theme: 'theme_002'
slide_layout: 'grid-2'
---

<section class="slide__text">

#### Table aliasing

Earlier on we discussed the idea of assigning a column with an alias

e.g. `SELECT 123 AS my_number` replaces `?column?` with `my_number`

The same logic can be applied to tables:

Take the Customers table:

```
SELECT customer_id, customer_name, date_joined
FROM "sequel-mart-schema"."Customers";
```

Because we have only been using one table we've not had to reference the table name in the `SELECT`.  The above is implicitly:
```
SELECT "Customers".customer_id, "Customers".customer_name, "Customers".date_joined
FROM "sequel-mart-schema"."Customers";
```


##### Aliasing with AS...

When we start to join multiple tables, we should alias the table names.

Just like when we alias a column, the `AS` keyword can alias a table

The `Customers` table could be aliased as `cu` and be re-written as
```
SELECT cu.customer_id, cu.customer_name, cu.date_joined
FROM "sequel-mart-schema"."Customers" AS cu;
```

This is for the following reasons:
- It makes the SQL shorter and more concise
- It makes it easier to follow the path of table joins
- It helps the database engine to locate the data faster
- If the table name changes, we only have to change it in one place per query

</section>

<section class="slide__images">
<caption>1. Example of a column name being assigned</caption>
<img src="{{ '../../images/002_SELECT_As_Alias.png' | url }}" />
<caption>2. Customer table - no aliasing</caption>
<img src="{{ '../../images/002_Aliasing_Customers_1.png' | url }}" />
<caption>3. Customer table - with aliasing</caption>
<img src="{{ '../../images/002_Aliasing_Customers_2.png' | url }}" />
<caption>4. Customer table - with aliasing</caption>
<img src="{{ '../../images/002_Aliasing_Customers_3.png' | url }}" />

</section>
