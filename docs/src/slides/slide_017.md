---
layout: 'base.njk'
slide_number: 17
slide_prev: 'slide_016/'
slide_next: 'slide_018/'
section_title: 'How do we query a relational database?'
slide_title: Nested Statements
theme: 'theme_002'
slide_layout: 'grid-2'
---

<section class="slide__text">

##### Nesting

```
SELECT <field1>, <field2>
FROM
    (SELECT <field1>, <field2>
     FROM <schema_name>.<table_name>
    ) AS <alias1>
```

SQL statements can be nested inside one another

The result of the inner statement forms the data set which is fed to the outer table

Sub-queries can appear inside a SELECT, FROM or WHERE clause

They are similar to a function calling another function

For example:
```
SELECT 'Summary' AS Title
	, sub_query.*
	, popularity + 5 AS popularity_plus
FROM
(
	SELECT product_id, product_item, popularity
	FROM "sequel-mart-schema"."Products"
	WHERE popularity > 80
) AS sub_query
WHERE popularity + 5 > 90;
```

###### Sub query (executed first)

```
...
(
	SELECT product_id, product_item, popularity
	FROM "sequel-mart-schema"."Products"
	WHERE popularity > 80
)
...
```

- We are extracting 3 columns from the `Products` table
- We are applying a filter on `popularity`
- This sub query **must be aliased** (`AS sub_query` in this case)
- We get a 3 column/12 row result
- This forms the `FROM` clause for the main query

###### Main query (executed last)

The outer `SELECT` demonstrates:
- Passing in a static value ('Summary')
- Returning all columns in the sub-query (`, sub_query.*`)
- Applying an arithmetic operation `popularity + 5`
- Applying a further `WHERE` comparison operator to the main query (`popularity + 5 > 90`)

</section>

<section class="slide__images">
<caption>1. Nested SELECT (Sub Query)</caption>
<img src="{{ '../../images/002_Nested_SELECT_Sub_Query_Example.png' | url }}" />
<caption>1. Nested SELECT (Main Query)</caption>
<img src="{{ '../../images/002_Nested_SELECT_Example.png' | url }}" />


</section>