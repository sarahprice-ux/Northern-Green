---
layout: 'base.njk'
slide_number: 50
slide_prev: 'slide_049/'
slide_next: 'slide_051/'
section_title: 'Exercises'
slide_title: 'Transactions View'
theme: 'theme_006'
slide_layout: 'grid-1'
---

<section class="slide__text">

#### Exercise 6.1 - Transactions:

In pg-admin, create a SQL script that does the following:

Tables:
- `Customers`.  Alias as `cu`
- `Sales_Header`.  Alias as `sh`
- `Sales_Detail`.  Alias as `sd`

Attributes:
- `sale_id`. Alias as `Transaction`
- `customer_name`. Alias as `Customer`
- `date_sale`. Alias as `Date`
- `feedback_score`. Alias as `Feedback`
- The total `revenue` for this transaction. Alias as `Amount`
- The total number of `items_sold`. Alias as `Items`

Other considerations:
- Order by `date_sale` with the most recent date first
- Limit the output to the first 10 rows only

<hr />

- Test this script in PostgreSQL
    - The names and data should match the screenshot

- Convert this SQL script into a `VIEW` called `v_Top_Transactions`
- Append SQL to `SELECT * FROM` this `VIEW` into the space provided in line 13 of **backend/routes/transactions.js**
- Save and close **backend/routes/transactions.js**

<div class="warning">You may need to close and re-run your Docker session for this to take effect</div>

<hr />

- In a new browser tab, [preview the transactions route (http://localhost:5001/transactions)](http://localhost:5001/transactions)
    - This should be populated with an array of 10 objects for each transaction

<caption>1. Expected call to transactions route http://localhost:5001/transactions</caption>
<img src="{{ '../../images/006_001_Transactions_Route.png' | url }}" />

- This is the data that our front-end will use to populate the Transactions table on the web page

<hr />

- In the main [Sequel-Mark website (http://localhost:5001)](http://localhost:5001), check the Transactions table has been populated

<caption>2. Expected Transactions Table View</caption>
<img src="{{ '../../images/006_001_Transactions.png' | url }}" />

</section>
