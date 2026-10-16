---
layout: 'base.njk'
slide_number: 38
slide_prev: 'slide_037/'
slide_next: 'slide_039/'
section_title: 'How do we change content?'
slide_title: Pages
theme: 'theme_004'
slide_layout: 'grid-2'
---

<section class="slide__text">

#### How data is stored in a database
- Split into chunks or 'pages' of 8KB in size
- When a page is filled with 8KB of data, another is created for new data

##### Like scanning a reference book
- A query instructs the database engine to read `FROM` a 
set of pages (which we see as a table)
- It scans the columns we've chosen in the `SELECT` 
- It marks the rows that fulfil any `WHERE` or `HAVING` clause
for returning as a result
- The engine can `LIMIT` and/or `ORDER` the results read back

For example:
```
SELECT product_id, product_category, product_item, product_variety, popularity
FROM "sequel-mart-schema"."Products"
WHERE product_category = 'vegetable'
	AND popularity >= 80;
```

Postgresql will think:
- `FROM` = 'Ok, let me go and find all the pages from that table'
- `SELECT` = 'I'll scan down this list of records and prepare to read them back to you'
- `WHERE` = 'But I'll only read them back if they are a vegetable and have a high enough popularity'

<hr />

##### Problems of scale
- Our database is small so it will be able to read and return quickly
- However, some companies process TBs or PBs of data a day.
- SLOW unless streamlined

<hr />

##### Trivia
Let's see how big our `Sales_Detail` table is.  We can run:

```
SELECT *
FROM pg_stats AS st
WHERE st.schemaname = 'sequel-mart-schema'
	AND tablename = 'Sales_Detail';
```

This shows a wealth of information (metadata) about every column.

If we refine this query to:
```
SELECT SUM(st.avg_width) AS avg_width
FROM pg_stats AS st
WHERE st.schemaname = 'sequel-mart-schema'
	AND tablename = 'Sales_Detail';
```

We find this table averages 35 bytes per row

- Our `Sales_Detail` table has 35 bytes per row
    - Therefore 234 rows (8,192 / 35) can fit on a page
- The table has 11,245 rows
    - Therefore we need 48 pages (11,245 / 234) to fit this data

Scaling it up
- If we generated 702M Sales_Details that would generate over 3M pages
- Stacked on top of each other, that would be taller than The Shard in London!!
- A lot for a database engine to sift through.  The smaller we make that stack, the faster it makes querying for us
- Changing `BIGINT` to `INT` saves 4 bytes per row
    - On a 702M row equivalent of `Sales_Detail` that's ~2.5GB of space!
    - It's also ~335,000 fewer pages!

</section>

<section class="slide__images">
<caption>1. Products table arranged in pages</caption>
<img src="{{ '../../images/004_Pages_Example.png' | url }}" />
<caption>2. pg_stats for Sales_Detail</caption>
<img src="{{ '../../images/004_Pages_pg_stats.png' | url }}" />
<caption>3. pg_stats for Sales_Detail - average row size in bytes</caption>
<img src="{{ '../../images/004_Pages_pg_stats_SUM.png' | url }}" />


</section>
