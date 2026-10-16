---
layout: 'base.njk'
slide_number: 28
slide_prev: 'slide_027/'
slide_next: 'slide_029/'
section_title: 'How do we change content?'
slide_title: INSERT INTO... (Single row)
theme: 'theme_003'
slide_layout: 'grid-2'
---

<section class="slide__text">

##### Tell the server that we want to add a new row (records) to a table

```
INSERT INTO "<schema_name>"."<table_name>" (<field_name1>, <field_name2>)
VALUES (<value1>, <value2>;
```

`INSERT INTO` - Specify the table and then each column in the order you want to insert the data
`VALUES` - What you want to put into these columns as part of a new row

###### Product Offers
Let's add that new offer into the table we've just created

(Hint: You can drag the column headers from the browser section rather than typing them out)

```
INSERT INTO "sequel-mart-schema"."Product_Offers"
	(offer_name, product_id, offer_discount_percentage, offer_start_date, offer_end_date)
VALUES ('Introductory Discount', 65, 5.5, '2021-09-01', '2021-09-30');
```

Make sure the schema is included in the name

If we run this script in a Query Tool Window, we should get:
- A message logging that an INSERT script was run with the number of rows (1)
    - The rows is the last number on the message.  The 0 is a legacy value that can be ignored
- A message logging whether it was successful
- How long it took to create if it was successful

###### Checking the table
Now if we query the table we should find our record has been added

```
SELECT *
FROM "sequel-mart-schema"."Product_Offers";
```

</section>

<section class="slide__images">
<caption>1. INSERT new Product Offer example</caption>
<img src="{{ '../../images/003_INSERT_Product_Offer_01.png' | url }}" />
<caption>1. Product Offer table with first offer added</caption>
<img src="{{ '../../images/003_INSERT_Product_Offer_SELECT.png' | url }}" />


</section>

<section class="slide__exercises">

#### Exercises:
1. Add yourself as a customer in the `Customers` table, with a `date_joined` of today
    - Remember `customer_id` is automatically generated so should not be included

</section>