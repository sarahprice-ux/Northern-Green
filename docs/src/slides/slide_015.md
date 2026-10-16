---
layout: 'base.njk'
slide_number: 15
slide_prev: 'slide_014/'
slide_next: 'slide_016/'
section_title: 'How do we query a relational database?'
slide_title: 'WHERE... (comparison filters)'
theme: 'theme_002'
slide_layout: 'grid-2'
---

<section class="slide__text">

#### Filter the data, return only the rows we need

```
SELECT * | <value1>, <value2>
FROM <table_name>
WHERE <field1> = 'abc';
```

It's like saying: <span> "Hey, PostgreSQL; please can you find this information for me?  It's in this table in this schema.  When you find it, please **only read back the records that match my criteria**" </span>

##### For example:
Return a list of all products and all attributes but only if `popularity` is more than 80
```
SELECT product_id, product_category, product_item, product_variety, popularity
FROM "sequel-mart-schema"."Products"
WHERE popularity > 80;
```

You should see a much smaller set of results, each with a popularity of more than 80

In this case, we are viewing the 12 most popular products out of our inventory of 129

<hr />

##### Comparison Operators 
We've used **arithmetic operators** (`+`, `-`, `*`, `/` and `%`) already to do maths on static numbers

Just like in programming languages, we can use **comparison operators** to filter results

These include:
- `=` - <span>Equal to</span>
- `>` - <span>Greater than</span>
- `>=` - <span>Greater than or equal to</span>
- `<` - <span>Less than</span>
- `<=` - <span>Less than or equal to</span>
- `<>` or `!=` - <span>Not equal to</span>

<hr />

##### Multiple clauses
We can combine filters together using the following keywords:
- `AND` - <span>Both statements have to be true</span>
- `OR` - <span>One of the statements has to be true</span>

For example:
```
SELECT product_id, product_category, product_item, product_variety, popularity
FROM "sequel-mart-schema"."Products"
WHERE product_category = 'cut_flowers' AND popularity > 70;
```
Returns:
- All cut flowers that also have a popularity of more than 70

Whereas:
```
SELECT product_id, product_category, product_item, product_variety, popularity
FROM "sequel-mart-schema"."Products"
WHERE product_category = 'cut_flowers' OR popularity > 85;
```
Returns:
- All cut flowers regardless of popularity
- Any other product with a popularity of more than 85
  - In this case, raspberries and strawberries qualify because while they are not cut flowers, their popularity is above 85

</section>


<section class="slide__images">
    <caption>1. Product table Popularity more than 80</caption>
    <img src="{{ '../../images/002_WHERE_Products_Pop_80.png' | url }}" />
    <caption>2. Product table Popularity more than 70 AND product is cut flowers</caption>
    <img src="{{ '../../images/002_WHERE_Products_Pop_70_Flowers.png' | url }}" />
    <caption>3. Product table Popularity more than 85 OR product is cut flowers</caption>
    <img src="{{ '../../images/002_WHERE_Products_Pop_85_OR_Flowers.png' | url }}" />

</section>


<section class="slide__exercises">

---

  #### Exercises:
1. How many customers joined Sequel-Mart before 1st February 2021?
2. How many products are sold by the unit (e.g. in pack_sizes of 'unit')?
3. How many products are not sold by the kilogram (kg)?
4. How many times did customer 100 shop in our stores (from Sales_Header)?
5. How many sales transactions (Sales_Header) had a feedback score of 2?

</section>