---
layout: 'base.njk'
slide_number: 13
slide_prev: 'slide_012/'
slide_next: 'slide_014/'
section_title: 'How do we query a relational database?'
slide_title: 'Sequel-Mart database'
theme: 'theme_002'
slide_layout: 'grid-2'
---

<section class="slide__text">

Now that we have a better idea of data types and how to use `SELECT`, it's time to query some stored data!

##### Introducing our Sequel-Mart database
This database stores information about our business in the following 6 tables:
- Customers - <span>One row per registered customer who has made a purchase</span>
- Dates - <span>One row per day. Various attributes about each date from 01/01/2020 to 31/12/2023 </span>
- Products - <span>One row per product available for sale by Sequel-Mart</span>
- Sales_Detail - <span>One row per basket of products bought per transaction</span>
- Sales_Head - <span>One row per transaction completed by a customer in a store</span>
- Stores - <span>One row per store in which a customer can make a transaction</span>

The columns in each table can be found by:
  - On the Browser panel on the left, find `Tables`
  - Expand this and expand a table to see the list of columns

##### Entity Relationship
- It's common to map out how the tables in a database **relate** to each others
- This will help later on when we want to return information stored in multiple tables in one query

<caption>1. Sequel-Mart's database schema</caption>
<img src="{{ '../../images/002_Sequel_Mart_Schema.png' | url }}" />

##### Design considerations
- Relational tables tend to be designed to store **attributes relating to one distinct category**
- **Keys or IDs** are made available so we can **relate or join** these tables together
  - Each product is given an ID of `product_id` (e.g. Alstromeria is given an ID of 1)
  - This `product_id` is referenced by the `product_id` column in the `Sales_Detail` table
  - The product only appears once in the `Products` table
  - However it can appear many times in the `Sales_Detail` table
  - Therefore it makes sense to only store the ID of the product in `Sales_Detail`
    - It will take up less storage space
    - Any changes to a product's attributes only need to take in the `Products` table
    - It will eliminate potential inconsistencies from product data repeated in `Sales_Detail`

</section>


<section class="slide__images">
<caption>2. PostgreSQL's table and column list (Products table)</caption>
<img src="{{ '../../images/002_DESIGN_Table_List.png' | url }}" />

</section>