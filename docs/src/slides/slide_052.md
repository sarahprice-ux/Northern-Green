---
layout: 'base.njk'
slide_number: 52
slide_prev: 'slide_051/'
slide_next: 'slide_053/'
section_title: 'Exercises'
slide_title: 'Product View'
theme: 'theme_006'
slide_layout: 'grid-2'
---

<section class="slide__text">

#### Exercise 6.3 - Products:

In pg-admin, create a SQL script that does the following:

Tables:
- `Products`.  Alias as `pr`
- `Sales_Detail`.  Alias as `sd`

Attributes:
- `product_item`. Alias as `product_item`
- `product_variety`. Alias as `product_variety`
- `pack_size`. Alias as `pack_size`
- `unit_sales_price`. Alias as `unit_price`
- Total number of `items_sold`. Alias as `items_sold`
- `inventory`. Alias as `in inventory`

Other considerations:
- Order by total number of `items_sold` with the highest value first
- Limit the output to the first 10 rows only

<hr />

- Test this script in PostgreSQL
    - The names and data should match the screenshot

- Convert this SQL script into a `VIEW` called `v_Top_Products`
- Append SQL to `SELECT * FROM` this `VIEW` into the space provided in line 13 of **backend/routes/products.js**
- Save and close **backend/routes/products.js**

<div class="warning">You may need to close and re-run your Docker session for this to take effect</div>

<hr />

- In a new browser tab, [preview the transactions route (http://localhost:5001/products)](http://localhost:5001/products)
    - This should be populated with an array of 10 objects for each product

<caption>1. Expected call to transactions route http://localhost:5001/products</caption>
<img src="{{ '../../images/006_003_Products_Route.png' | url }}" />

- This is the data that our front-end will use to populate the Products table on the web page

<hr />

- In the main [Sequel-Mark website (http://localhost:5001)](http://localhost:5001), check the Products table has been populated

<caption>2. Expected products Table View</caption>
<img src="{{ '../../images/006_003_Products.png' | url }}" />


</section>

<section class="slide__images">



</section>
