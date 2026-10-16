---
layout: 'base.njk'
slide_number: 20
slide_prev: 'slide_019/'
slide_next: 'slide_021/'
section_title: How do we query a relational database?
slide_title: GROUP BY...
theme: 'theme_002'
slide_layout: 'grid-2'
---

<section class="slide__text">

#### Aggregate some of the data by one or more categories

```
SELECT    <field1>, SUM | COUNT | AVG(<field2>) AS SumField2
FROM      <schema_name>.<table_name> | <view_name>
GROUP BY  <field1>;
```

It's like saying: <span> "Hey, PostgreSQL; please can you find this information for me?  It's in this table in this schema.  When you find it, please **aggregate it together and read it back to me**" </span>


For example, if we wanted to `COUNT` how many products we sell by `product_category`:
```
SELECT product_category, COUNT(product_category)
FROM "sequel-mart-schema"."Products"
GROUP BY product_category;
```

##### Functions

We have used `COUNT` in this example but there are others we can use:

Row-Based aggregations
- `COUNT` - <span>Number of rows that match columns in the `GROUP BY`</span>
- `MIN` - <span>Minimum value in the rows that match columns in the `GROUP BY`</span>
- `MAX` - <span>Maximum value in the rows that match columns in the `GROUP BY`</span>

Numeric aggregations
- `SUM` - <span>Sum of the numeric column in brackets</span>
- `AVG` - <span>Average of the numeric column in brackets</span>
- `STDDEV` - <span>Standard Deviation of the numeric column in brackets</span>

Below is an example of all 6 of these functions being used together:
```
SELECT product_category
	, COUNT(product_category), MIN(wholesale_price), MAX(wholesale_price)
	, SUM(inventory), AVG(inventory), STDDEV(inventory)
FROM "sequel-mart-schema"."Products"
GROUP BY product_category;
```

We could read it as the following for Vegetables:
- We sell 66 different types
- The wholesale_prices range from £0.24 to £10.14
- There are 5,448 products in our inventory
- That's an average of 82.5 products (5,448 / 66)
- The standard deviation of our products is 40.8

##### Aliasing the GROUP BY... column
When we use `GROUP BY` it no longer directly references the database table.

A dummy name is used to match the function name.

It is good practice to alias the columns returned by a `GROUP BY`:
```
SELECT product_category
	, COUNT(product_category) AS product_categories
	, MIN(wholesale_price) AS min_wholesale
	, MAX(wholesale_price) AS max_wholesale
	, SUM(inventory) AS sum_inv
	, AVG(inventory) AS avg_inv
	, STDDEV(inventory) AS stddev_inv
FROM "sequel-mart-schema"."Products"
GROUP BY product_category
```

##### Combining with WHERE..., ORDER BY... and LIMIT...
We can also combine `GROUP BY` with the other clauses we've learned so far.

For example if we wanted to know the same thing for products with a popularity over 65 and order it with the most products in that category first:
```
SELECT product_category
	, COUNT(product_category) AS product_categories
	, MIN(wholesale_price) AS min_wholesale
	, MAX(wholesale_price) AS max_wholesale
	, SUM(inventory) AS sum_inv
	, AVG(inventory) AS avg_inv
	, STDDEV(inventory) AS stddev_inv
FROM "sequel-mart-schema"."Products"
WHERE popularity > 65
GROUP BY product_category
ORDER BY COUNT(product_category) DESC;
```

This changes the results for Vegetables to:
- We sell 35 different types
- The wholesale_prices range from £0.27 to £5.05
- There are 3,129 products in our inventory
- That's an average of 89.4 products (3,129 / 35)
- The standard deviation of our products is 43.8

This kind of information could be used to:
- Make sure our popular items are stocked up
- See if we could remove product lines that are unpopular or unprofitable
- See which products are expensive to buy and could be replaced with a better alternative
- See if we could alter our pricing to maximise sales or revenue

</section>

<section class="slide__images">
<caption>1. GROUP BY Example - Products - distinct list of categories and their count</caption>
<img src="{{ '../../images/002_GROUP_BY_Product_Category.png' | url }}" />
<caption>2. Six GROUP BY function examples in the Products table</caption>
<img src="{{ '../../images/002_GROUP_BY_Product_Functions.png' | url }}" />
<caption>3. Six GROUP BY function examples in the Products table for highly popular products</caption>
<img src="{{ '../../images/002_GROUP_BY_Product_Functions_WHERE.png' | url }}" />
<caption>4. Six GROUP BY function examples in the Products table for highly popular products</caption>
<img src="{{ '../../images/002_GROUP_BY_Product_Functions_WHERE_ORDER.png' | url }}" />

</section>

<section class="slide__exercises">

---

#### Exercises:
1. How many customer transactions in the Sales_Header table had a feedback_score of 4 and 5?
2. In the Sales_Detail table, which product_id generated the highest revenue?
    - Limit the result result to show only the top result.
    - What was the average revenue for the product in question 2?

</section>