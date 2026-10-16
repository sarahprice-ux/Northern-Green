---
layout: 'base.njk'
slide_number: 18
slide_prev: 'slide_017/'
slide_next: 'slide_019/'
section_title: 'How do we query a relational database?'
slide_title: 'ORDER BY...'
theme: 'theme_002'
slide_layout: 'grid-2'
---

<section class="slide__text">

#### Return the data in a specific order

```
SELECT * | <value1>, <value2>
FROM <table_name>
ORDER BY <field1> ASC | DESC;
```

It's like saying: <span> "Hey, PostgreSQL; please can you find this information for me?  It's in this table in this schema.  When you find it, please **sort it by something and read it back in that order**" </span>

For example, if we wanted to return all products and order by least popular:
```
SELECT product_id, product_category, product_item, product_variety, popularity
FROM "sequel-mart-schema"."Products"
ORDER BY popularity;
```

Or most popular:
```
SELECT product_id, product_category, product_item, product_variety, popularity
FROM "sequel-mart-schema"."Products"
ORDER BY popularity DESC;
```

Note the `DESC` on the end of the second statement.
  - `DESC` shows we are sorting by popularity in descending order.
  - We could add `ASC` at the end of the first statement but `ORDER BY` orders ascending by default so this is not required

##### Combining with WHERE...
If we want to know the highest and lowest values for a specific subset of the data we can combine them with the `WHERE` clause

##### Advice for usage
- While `ORDER BY` is useful, it is discouraged for large-scale production environments:
- Sorting tends to be resource intensive on very large tables
- It is a bottleneck in the execution plan
- Front-end systems are often better at sorting data once it's been pulled in

</section>


<section class="slide__images">
    <caption>1. List of products, least popular first</caption>
    <img src="{{ '../../images/002_ORDER_Products_Pop_Asc.png' | url }}" />
    <caption>2. List of products, most popular first</caption>
    <img src="{{ '../../images/002_ORDER_Products_Pop_Desc.png' | url }}" />

</section>


<section class="slide__exercises">

---

  #### Exercises:
1. When did the first customer and last customer join us?
2. What is the most expensive wholesale_price for products that are not sold by the kg?
3. What is the most expensive unit_sales_price for products that have a popularity below 65?
4. What is the lowest revenue for a sale (Sales_Detail) where there were more than 6 items_sold AND the cost_of_sales was more than 10?

</section>