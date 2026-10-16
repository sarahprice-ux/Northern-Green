---
layout: 'base.njk'
slide_number: 51
slide_prev: 'slide_050/'
slide_next: 'slide_052/'
section_title: 'Exercises'
slide_title: 'Customer View'
theme: 'theme_006'
slide_layout: 'grid-2'
---

<section class="slide__text">

#### Exercise 6.2 - Customers:

In pg-admin, create a SQL script that does the following:

Tables:
- `Customers`.  Alias as `cu`
- `Sales_Header`.  Alias as `sh`
- `Sales_Detail`.  Alias as `sd`

Attributes:
- `customer_name`. Alias as `customer`
- Most recent `date_sale`. Alias as `most_recent`
    - HINT: Use the `MAX` aggregator for this
- Count the number of `sale_id`s for that customer. Alias as `transactions`
- Average `revenue` for that customer rounded to 1 decimal place. Alias as `avg_spend`
- Average number of `items_sold` rounded to 1 decimal place. Alias as `avg_items`
- Average `feedback_score` rounded to 1 decimal place. Alias as `avg_feedback`

Other considerations:
- Order by `average revenue` with the highest value first
- Limit the output to the first 10 rows only

<hr />

- Test this script in PostgreSQL
    - The names and data should match the screenshot

- Convert this SQL script into a `VIEW` called `v_Top_Customers`
- Append SQL to `SELECT * FROM` this `VIEW` into the space provided in line 13 of **backend/routes/customers.js**
- Save and close **backend/routes/customers.js**

<div class="warning">You may need to close and re-run your Docker session for this to take effect</div>

<hr />

- In a new browser tab, [preview the transactions route (http://localhost:5001/customers)](http://localhost:5001/customers)
    - This should be populated with an array of 10 objects for each customer

<caption>1. Expected call to transactions route http://localhost:5001/customers</caption>
<img src="{{ '../../images/006_002_Customers_Route.png' | url }}" />

- This is the data that our front-end will use to populate the Customers table on the web page

<hr />

- In the main [Sequel-Mark website (http://localhost:5001)](http://localhost:5001), check the Customers table has been populated

<caption>2. Expected Customer Table View</caption>
<img src="{{ '../../images/006_002_Customers.png' | url }}" />


</section>