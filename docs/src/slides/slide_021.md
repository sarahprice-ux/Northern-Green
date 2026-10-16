---
layout: 'base.njk'
slide_number: 21
slide_prev: 'slide_020/'
slide_next: 'slide_022/'
section_title: 'How do we query a relational database?'
slide_title: HAVING...
theme: 'theme_002'
slide_layout: 'grid-2'
---

<section class="slide__text">

#### Filter aggregated results from a GROUP BY...

```
SELECT    <field1>, SUM | COUNT | AVG(<field2>) AS SumField2
FROM      <schema_name>.<table_name> | <view_name>
GROUP BY  <field1>
HAVING    SUM(<field2>) > <value>;
```

It's like saying: <span> "Hey, PostgreSQL; please can you find this information for me?  It's in this table in this schema.  When you find it, please **aggregate it together and read back only the results that match this criteria**" </span>

###### *"HAVING is to a GROUP BY as WHERE is to a SELECT"*

<hr />

For example, if we wanted to `COUNT`:
- How many products we sell by `product_category`
- But only if there are **more than 10 products in a category**

We can add a `HAVING` clause to the `COUNT(product_category)` as follows:
```
SELECT product_category, COUNT(product_category)
FROM "sequel-mart-schema"."Products"
GROUP BY product_category
HAVING COUNT(product_category) > 10;
```
We can see that because there are only 6 pot_plants they are not returned

</section>

<section class="slide__images">
<caption>1. HAVING Example - Products - distinct list of categories and their count when more than 10 products in a category</caption>
<img src="{{ '../../images/002_HAVING_Product_Category.png' | url }}" />

</section>

<section class="slide__exercises">

---

#### Exercises:
1. How many product pack_sizes have an average popularity of 71 or more?
2. In the Sales_Header table, which individual feedback_scores (1, 2, 3, 4 and/or 5) were used in more than 100 transactions (e.g. if 101 transactions had a feedback of 3 then 3 would count)?

</section>