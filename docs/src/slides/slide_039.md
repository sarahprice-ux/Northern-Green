---
layout: 'base.njk'
slide_number: 39
slide_prev: 'slide_038/'
slide_next: 'slide_040/'
section_title: 'How do we change content?'
slide_title: Execution Plans
theme: 'theme_004'
slide_layout: 'grid-2'
---

<section class="slide__text">

#### How Postgresql plans and executes a query

<div class="warning">This is usually optimised by a Database Administrator (DBA)</div>
<div class="warning">It is still beneficial to have at least a basic understanding of how this tool works though</div>

- PostgreSQL offers a tool to help work out:
    - How PostgreSQL is planning to execute a query
    - How it's joining the tables
    - If it's blocking any other queries
    - How many resources a query is using
    - Were the planned resources similar to what those it actually used?

- Tuning these queries can help:
    - Speed them up 
    - Free up resources for other queries

<hr />

###### How do we access it?
- On the second panel down, next to the play button is an icon that when pressed 'Explains' a query (`F7` is the shortcut key)
- There are various options that give you more information but can increase the time it takes to run.

##### An example
Let's highlight the folowing SQL but run 'Explain' rather than 'Execute':
```
SELECT *
FROM "sequel-mart-schema"."Sales_Header" AS sh
INNER JOIN "sequel-mart-schema"."Sales_Detail" AS sd 
	ON sh.sale_id = sd.sale_id;
```

This reads left-to-right, bottom-to-top
- Scan `Sales_Header`
- Write the joining column(s) to a 'hash table' in memory
- Scan `Sales_Detail`
- Match it with data in the hashed table

If the checkboxes in screenshot 1 are ticked, we can click on any node to view more details about:
- **Node Type** - What the node is expected to do
- **Relation Name/Schema** - The table and schema name
- **Node Cost** - A number that gives a rough indication of the resource intensity
- **Plan Rows** - How many rows Postgres expects at this point in the query
- **Plan Width** - The expected number of bytes of data in all columns added together
- **Output** - Columns expected after this point of the query
- **Filter** - Application of any `WHERE` clauses
- **Loops** - Number of iterations through a table expected to find all of the data

##### Adding to our example (1)
If we were to add a `WHERE`, `ORDER BY` AND `LIMIT` to our query
```
SELECT *
FROM "sequel-mart-schema"."Sales_Header" AS sh
INNER JOIN "sequel-mart-schema"."Sales_Detail" AS sd 
	ON sh.sale_id = sd.sale_id
WHERE sh.date_sale >= '2021-08-01'
ORDER BY sd.revenue desc
LIMIT 50;
```
Our plan (screenshot 4) includes extra nodes showing how Postgres plans to deal with:
- The `SORT` (once the tables have been joined)
- The `LIMIT` (once the sort has been applied)

It also adds a 'Filter' section to the `Sales_Header` node to handle the `WHERE`

##### Adding to our example (2)
If we wrote a query to get the average number of items sold by day after 1st August:

```
SELECT sh.date_id, AVG(sd.items_sold)
FROM "sequel-mart-schema"."Sales_Header" AS sh
INNER JOIN "sequel-mart-schema"."Sales_Detail" AS sd 
	ON sh.sale_id = sd.sale_id
WHERE sh.date_sale >= '2021-08-01'
GROUP BY sh.date_id
ORDER BY sh.date_id;
```

Our plan would include:
- An 'Aggregate' component to deal with the `AVG` and `GROUP BY`


<hr />

##### Shorthands
We can also add `EXPLAIN` before our query.

```
EXPLAIN SELECT sh.date_id, AVG(sd.items_sold)
FROM "sequel-mart-schema"."Sales_Header" AS sh
INNER JOIN "sequel-mart-schema"."Sales_Detail" AS sd 
	ON sh.sale_id = sd.sale_id
WHERE sh.date_sale >= '2021-08-01'
GROUP BY sh.date_id
ORDER BY sh.date_id;
```

This give us a list of the commands and costs associated with building a query

We can get further detail by adding `EXPLAIN ANALYZE`
```
EXPLAIN ANALYZE SELECT sh.date_id, AVG(sd.items_sold)
FROM "sequel-mart-schema"."Sales_Header" AS sh
INNER JOIN "sequel-mart-schema"."Sales_Detail" AS sd 
	ON sh.sale_id = sd.sale_id
WHERE sh.date_sale >= '2021-08-01'
GROUP BY sh.date_id
ORDER BY sh.date_id;
```

This gives us even more information about memory allocations and timings

<hr />

##### What can help performance?
- Adding/Tuning indexes (next slide)
- Tuning the query
    - Remove unneeded columns from the `SELECT`
    - Adding a `LIMIT` to reduce the rows returned
    - Removing `ORDER BY` if they are not needed
- Adding memory and/or CPU to the server
- Tuning the storage to make it faster (e.g. faster SSDs)

</section>

<section class="slide__images">
<caption>1. Execution Plan on Taskbar</caption>
<img src="{{ '../../images/004_Execution_Plan_Location.png' | url }}" />
<caption>2. Execution Plan Results</caption>
<img src="{{ '../../images/004_Execution_Plan_Basic_Output.png' | url }}" />
<caption>3. Execution Plan Statistics</caption>
<img src="{{ '../../images/004_Execution_Plan_Stats.png' | url }}" />
<caption>4. Execution Plan Statistics Filters</caption>
<img src="{{ '../../images/004_Execution_Plan_Stats_WHERE_ORDER_LIMIT.png' | url }}" />
<caption>5. Execution Plan Statistics Aggregating</caption>
<img src="{{ '../../images/004_Execution_Plan_Stats_GROUP.png' | url }}" />
<caption>6. Execution Plan EXPLAIN</caption>
<img src="{{ '../../images/004_Execution_Plan_EXPLAIN.png' | url }}" />
<caption>7. Execution Plan EXPLAIN ANALYZE</caption>
<img src="{{ '../../images/004_Execution_Plan_EXPLAIN_ANALYZE.png' | url }}" />


</section>
