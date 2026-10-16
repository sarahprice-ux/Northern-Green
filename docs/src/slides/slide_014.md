---
layout: 'base.njk'
slide_number: 14
slide_prev: 'slide_013/'
slide_next: 'slide_015/'
section_title: 'How do we query a relational database?'
slide_title: 'FROM...'
theme: 'theme_002'
slide_layout: 'grid-2'
---

<section class="slide__text">

#### Tell the server where to look for the data

```
SELECT * | <value1>, <value2>
FROM <table_name>;
```

It's like saying: <span> "Hey, PostgreSQL; please can you find this information for me?  It's in this table in this schema.  When you find this information, please read it back to me" </span>

##### For example:
Return a list of all 129 products and all of their attributes to the results panel
```
SELECT *
FROM "sequel-mart-schema"."Products";
```
Return a list of all products and some of their attributes to the results panel
```
SELECT product_id, product_category, product_item, popularity
FROM "sequel-mart-schema"."Products";
```

##### Notes:
- You can drag the table from the browser into the Query Tool panel
- `SELECT *` is short-hand for 'include every column in the table'
  - This is good for profiling data in a test environment
  - However it is considered 'lazy' and can be problematic if columns are changed
  - For a production environment it is better to only use the columns you need
- The column names which were previously `?column?` are replaced with the name in the table
- The data type of the column is included
  - e.g. `product_item` only accepts varying character strings of no more than 50 characters

<hr />

#### Distinct
When we have a list of values in a column with a lot of duplicates it can be useful to get a unique list

If we say
```
SELECT product_category
FROM "sequel-mart-schema"."Products";
```
we will just get the categories of all 129 rows.

There are a lot of repeated values which makes it hard to tell how many categories there are

However if we were to say:
```
SELECT DISTINCT product_category
FROM "sequel-mart-schema"."Products";
```

We would get the 4 unique (`DISTINCT`) product categories we sell

</section>


<section class="slide__images">
    <caption>1. Product table (all columns)</caption>
    <img src="{{ '../../images/002_FROM_Products_All.png' | url }}" />
    <caption>2. Product table (some of the columns)</caption>
    <img src="{{ '../../images/002_FROM_Products_Some.png' | url }}" />
    <caption>3. Product table (distinct list of product categories)</caption>
    <img src="{{ '../../images/002_FROM_Products_Distinct.png' | url }}" />

</section>


<section class="slide__exercises">

---

  #### Exercises:
1. Run SELECT * from each of the other 5 tables
2. Familiarise yourself with the structure, and how it relates to the Entity Relationship diagram on the previous slide
3. How many unique `pack_size` values are there in which a product can be sold?

</section>