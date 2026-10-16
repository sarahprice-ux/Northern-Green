---
layout: 'base.njk'
slide_number: 40
slide_prev: 'slide_039/'
slide_next: 'slide_041/'
section_title: 'How do we change content?'
slide_title: CREATE INDEX...
theme: 'theme_004'
slide_layout: 'grid-2'
---

<section class="slide__text">

#### Create a (usually smaller) lookup 'copy' of the table

```
CREATE INDEX <index_name>
ON <table> USING btree | hash
(field_name1 ASC | DESC, field_name2) NULLS FIRST | LAST
INCLUDE (<field_name3>, <field_name4>);
```

##### Advantages of Indexes
- **Regular queries** can use this smaller copy. It can make **reads faster**
- **Cutting out unneeded columns**
    - Fewer pages for the engine to read
    - Uses less memory & CPU
- **Sorts** can be **pre-empted** speeding up the query
- **Indexes can be filtered** making them even faster when used

##### Disadvantages of Indexes
- Extra **overhead**. Data changes happen in multiple places (**slower writes**)
- More **storage** space is needed
- Inefficient when used on small tables
- Inefficient on tables with a lot of `NULL` values

<hr />

If we take our previous query and hit `F7`:
```
SELECT sh.date_id, AVG(sd.items_sold)
FROM "sequel-mart-schema"."Sales_Header" AS sh
INNER JOIN "sequel-mart-schema"."Sales_Detail" AS sd 
	ON sh.sale_id = sd.sale_id
WHERE sh.date_sale >= '2021-08-01'
GROUP BY sh.date_id
ORDER BY sh.date_id;
```

We'll get an Execution Plan that shows:
- `Sales_Head` and `Sales_Detail` being scanned and joining
- Aggregate (to cover the `AVG`)
- Sort (to cover the `ORDER BY`)

If we add `EXPLAIN ANALYZE` we'll get a summary of timings and costs

<hr />

##### Add an Index

Let's see if we can speed this query up by adding an index:

###### What do we choose?
It can involve trial and error but basic guidelines include columns involved in:
- Joins
- Ordering
- Filtering
- Select (more likely to be used in the `INCLUDE` section)

If we add an index to `Sales_Detail` we may want to:
- Put it on the `sale_id` column as this is involved in the `JOIN`
- Include the `items_sold` column as this is used in the `SELECT`

```
CREATE INDEX sales_detail_sale_id
  ON "sequel-mart-schema"."Sales_Detail" (sale_id)
  INCLUDE (items_sold);
```

###### Checking the Execution Plan

Let's have another look at our Execution Plan with `F7`:
```
SELECT sh.date_id, AVG(sd.items_sold)
FROM "sequel-mart-schema"."Sales_Header" AS sh
INNER JOIN "sequel-mart-schema"."Sales_Detail" AS sd 
	ON sh.sale_id = sd.sale_id
WHERE sh.date_sale >= '2021-08-01'
GROUP BY sh.date_id
ORDER BY sh.date_id;
```

We'll see the following differences:
- `Sales_Detail` scans the much smaller index instead
- The 'Hash Join' is now a 'Nested Loop Join'
    - Nested Loops are like an Excel 'VLOOKUP' function
    - They work best when one table or index is very small

Now if we add `EXPLAIN ANALYZE` we see the effect on the resources associated with `Sales_Detail`:

<table>
  <tr>
    <th>Measure</th>
    <th>Table Scan</th>
    <th>Index Scan</th>
  </tr>

  <tr>
    <th>...</th>
    <th>...</th>
    <th>...</th>
  </tr>
  <tr>
    <th>Preparation</th>
    <th></th>
    <th></th>
  </tr>
  <tr>
    <td>Planning Time</td>
    <td><strong>0.144ms</strong></td>
    <td>0.346ms</td>
  </tr>
  <tr>
    <th>...</th>
    <th>...</th>
    <th>...</th>
  </tr>
  <tr>
    <th>Table / Index</th>
    <th></th>
    <th></th>
  </tr>
  <tr>
    <td>Scan Cost (Total)</td>
    <td>20.50</td>
    <td><strong>1.83</strong></td>
  </tr>
  <tr>
    <td>Scan Time (Total)</td>
    <td>0.087ms</td>
    <td><strong>0.003ms</strong></td>
  </tr>
  <tr>
    <td>Width (Characters)</td>
    <td>6</td>
    <td><strong>4</strong></td>
  </tr>
  </tr>
  <tr>
    <th>...</th>
    <th>...</th>
    <th>...</th>
  </tr>
  <tr>
    <th>Hash Join / Nested Loop Join</th>
    <th></th>
    <th></th>
  </tr>
  <tr>
    <td>Scan Cost (Total)</td>
    <td>539.98</td>
    <td><strong>235.49</strong></td>
  </tr>
  <tr>
    <td>Scan Time (Total)</td>
    <td>1.966ms</td>
    <td><strong>0.653ms</strong></td>
  </tr>
  <tr>
  <tr>
    <th>...</th>
    <th>...</th>
    <th>...</th>
  </tr>
    <th>Execution</th>
    <th></th>
    <th></th>
  </tr>
  <tr>
    <td>Execution Time</td>
    <td>2.223ms</td>
    <td><strong>0.981ms</strong></td>
  </tr>
</table>

This index has made the query ~56% faster and uses fewer resources

<div class="warning">Your results may differ depending on your computer</div>

It may be worth keeping this index if:
- The extra 'copy' of the data doesn't slow down `INSERTS`, `UPDATES` and `DELETES` considerably
- The query is likely to be run a lot.  It's often not worth keeping indexes for infrequently run queries

**Notes:**
- These costings and times are small because the tables are small
  - They scale up and become noticable when a table contains millions or even billions of records
- There is usually more 
- 'Planning Time' is slowed because indexes give PostgreSQL more options to consider
  - Balance whether this extra Planning Time is more than made up for by a quicker 'Execution Time'

<hr />

##### Dropping an Index
You can use the `DROP INDEX` command to remove an index

```
DROP INDEX <schema_name>.<index_name>;
```

For example, to drop the index we've just created run:
```
DROP INDEX "sequel-mart-schema".sales_detail_sale_id;
```

</section>

<section class="slide__images">
<caption>1. Execution Plan (No Index)</caption>
<img src="{{ '../../images/004_Indexes_SELECT_NO_INDEX.png' | url }}" />
<caption>2. EXPLAIN ANALYZE (No Index)</caption>
<img src="{{ '../../images/004_Indexes_EXPLAIN_NO_INDEX.png' | url }}" />
<caption>3. CREATE INDEX ON Sale_Detail</caption>
<img src="{{ '../../images/004_Indexes_CREATE.png' | url }}" />
<caption>4. Execution Plan (Index Included)</caption>
<img src="{{ '../../images/004_Indexes_SELECT_INDEX.png' | url }}" />
<caption>5. EXPLAIN ANALYZE (Index Included)</caption>
<img src="{{ '../../images/004_Indexes_EXPLAIN_INDEX.png' | url }}" />
<caption>6. Drop Index</caption>
<img src="{{ '../../images/004_Indexes_DROP.png' | url }}" />


</section>
