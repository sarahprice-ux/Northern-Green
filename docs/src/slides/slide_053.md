---
layout: 'base.njk'
slide_number: 53
slide_prev: 'slide_052/'
slide_next: 'slide_054/'
section_title: 'Exercises'
slide_title: 'Summary View'
theme: 'theme_006'
slide_layout: 'grid-2'
---

<section class="slide__text">

#### Exercise 6.4 - Summary:

In pg-admin, create a SQL script that does the following:

Tables:
- `Sales_Header`.  Alias as `sh`
- `Sales_Detail`.  Alias as `sd`

Attributes:
- Distinct Count of `sale_id`. Alias as `total_transactions`
- Sum of total `items_sold`. Alias as `total_products_sold`
- Average `feedback_score` rounded to 1 decimal place. Alias as `avg_feedback`
- Sum of total `revenue_net`. Alias as `revenue`
- Sum of total `cost_of_sales`. Alias as `cost_of_sales`
- Sum of total `revenue_net` minus sum of total `cost_of_sales`. Alias as `gross_profit`

<hr />

- Test this script in PostgreSQL
    - The names and data should match the screenshot

- Convert this SQL script into a `VIEW` called `v_Summary`
- Append SQL to `SELECT * FROM` this `VIEW` into the space provided in line 13 of **backend/routes/summary.js**
- Save and close **backend/routes/summary.js**

<div class="warning">You may need to close and re-run your Docker session for this to take effect</div>

<hr />

- In a new browser tab, [preview the transactions route (http://localhost:5001/summary)](http://localhost:5001/summary)
    - This should be populated with an array of a single object containing the 6 attributes

<caption>1. Expected call to summary route http://localhost:5001/summary</caption>
<img src="{{ '../../images/006_004_Summary_Route.png' | url }}" />

- This is the data that our front-end will use to populate the Summary cards on the web page

<hr />

- In the main [Sequel-Mark website (http://localhost:5001)](http://localhost:5001), check the Summary cards have been populated

<caption>2. Expected Summary Cards View</caption>
<img src="{{ '../../images/006_004_Summary.png' | url }}" />


</section>

<section class="slide__images">



</section>
