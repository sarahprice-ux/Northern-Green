---
layout: 'base.njk'
slide_number: 16
slide_prev: 'slide_015/'
slide_next: 'slide_017/'
section_title: 'How do we query a relational database?'
slide_title: 'WHERE... (logical filters)'
theme: 'theme_002'
slide_layout: 'grid-2'
---

<section class="slide__text">

##### Logical Operators
- `IN` - <span>Operand must be in a list of expressions</span>
```
SELECT * | <value1>, <value2>
FROM <table_name>
WHERE <field1> IN ('abc', def', 'ghi');
```

For example, if we wanted to return all the types of apples and pears we stock:
```
SELECT *
FROM "sequel-mart-schema"."Products"
WHERE product_item IN ('apples', 'pears');
```

This is a short-hand equivalent of:
```
SELECT *
FROM "sequel-mart-schema"."Products"
WHERE product_item = 'apples' OR  product_item = 'pears';
```
<br />
<hr />

- `BETWEEN` - <span>Operand must fall between a range of inputs</span>
```
SELECT * | <value1>, <value2>
FROM <table_name>
WHERE <field1> BETWEEN <input1> AND <input2>;
```

For example, let's see 'mid-popularity' products with scores between 50 and 55:
```
SELECT product_id, product_category, product_item, product_variety, popularity
FROM "sequel-mart-schema"."Products"
WHERE Popularity BETWEEN 50 AND 55;
```

This is a short-hand equivalent of:
```
SELECT product_id, product_category, product_item, product_variety, popularity
FROM "sequel-mart-schema"."Products"
WHERE Popularity >= 50 AND Popularity <= 55;
```


This works for text as well.  For example,
```
SELECT product_id, product_category, product_item, product_variety, popularity
FROM "sequel-mart-schema"."Products"
WHERE product_item BETWEEN 'gl' AND 'les';
```
This returns 'gladioli' and 'leeks' as they are greater than `'gl'` alphabetically.  It doesn't include 'lettuce' as that is greater then `'les'`

<br />
<hr />

- `LIKE` - <span>Operand must match a pattern of input</span>
```
SELECT * | <value1>, <value2>
FROM <table_name>
WHERE <field1> LIKE 'abc%' | '%abc' | '%abc%';
```

For example, if we wanted to see all customers whose name starts with Jack we could:
```
SELECT *
FROM "sequel-mart-schema"."Customers"
WHERE customer_name LIKE ('Jack%');
```
Notice that this also returns someone called Jackson as it starts with Jack

Some of our products have varieties with a season at the end.  If we wanted to see these we could query:
```
SELECT *
FROM "sequel-mart-schema"."Products"
WHERE product_variety LIKE ('%season');
```

<br />
<hr />

- `NOT` - <span>Operand must **NOT** match a pattern of input</span>

This can be placed in front of any of the above `NOT IN`, `NOT BETWEEN` and `NOT LIKE`

When used, this will flip the logic around.
```
SELECT product_id, product_category, product_item, product_variety, popularity
FROM "sequel-mart-schema"."Products"
WHERE Popularity NOT BETWEEN 50 AND 55;
```
Would return any product that did not have a popularity between 50 and 55

</section>


<section class="slide__images">
    <caption>1. List of apples and pears</caption>
    <img src="{{ '../../images/002_WHERE_Products_Apples_Pears.png' | url }}" />
    <caption>2. List of products with popularity between 50 and 55</caption>
    <img src="{{ '../../images/002_WHERE_Products_Pop_50_55.png' | url }}" />
    <caption>3. List of products with items between gl and les alphabetically</caption>
    <img src="{{ '../../images/002_WHERE_Products_Item_gl_les.png' | url }}" />
    <caption>4. List of customers starting with Jack</caption>
    <img src="{{ '../../images/002_WHERE_Customers_LIKE_Jack.png' | url }}" />
    <caption>5. List of products ending with 'season'</caption>
    <img src="{{ '../../images/002_WHERE_Products_LIKE_Season.png' | url }}" />


</section>


<section class="slide__exercises">

---

  #### Exercises:
1. How many customers joined Sequel-Mart between 1st February 2021 and 28th February 2021?
2. How many products are sold in pack_sizes of unit, bunch or head?
3. How many products are not sold by the kilogram (kg), unit, bunch or head?
4. How many times did customers between 100 and 105 shop in our stores (from Sales_Header)?
5. How many customers names end with the initials L.K?

</section>