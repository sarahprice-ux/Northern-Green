---
layout: 'base.njk'
slide_number: 30
slide_prev: 'slide_029/'
slide_next: 'slide_031/'
section_title: 'How do we change content?'
slide_title: UPDATE... (Single table)
theme: 'theme_003'
slide_layout: 'grid-2'
---

<section class="slide__text">

##### Tell the server that you want to change existing record(s) in a table

```
UPDATE <schema_name>.<table_name>
SET <field_name1> = <new_value>, <field_name2> = <new_value>
WHERE <field_name3> = <filter>;
```

- `UPDATE` - Specify the table we want to update 
- `SET` - What we want the value of each column to be
- If more than one column should be changed, separate them with commas

<div class="warning">If you don't include a WHERE clause, every row in the table will be updated!</div>

###### Product Offers (Single Row and Column)
We have been informed that the 4.85% discount for 'Gooseberry Seasonal Saver' should actually be 5.25%.

Running:

```
UPDATE "sequel-mart-schema"."Product_Offers"
SET offer_discount_percentage = 5.25
WHERE offer_name = 'Gooseberry Seasonal Saver';
```
will make that change.  We could also have said:

```
UPDATE "sequel-mart-schema"."Product_Offers"
SET offer_discount_percentage = 5.25
WHERE offer_id = 2;
```

Now if we check our table, we'll see `offer_discount_percentage` for this offer has changed to 5.25.  All other records are unaffected.

```
SELECT *
FROM "sequel-mart-schema"."Product_Offers"
ORDER BY offer_id;
```

###### Product Offers (Single Row, Multiple Column)
Next we have been informed of some inaccuracies with our Introductory Offer:
- Rename it 'Broad Bean Counter'
- Change the discount percentage to 6.50%
- Change the offer start and end dates to '2021-03-01' and '2021-03-30'

The SQL for this can include multiple values for `SET`, separated by commas

```
UPDATE "sequel-mart-schema"."Product_Offers"
SET offer_name = 'Broad Bean Counter'
	, offer_discount_percentage = 6.50
	, offer_start_date = '2021-03-01'
	, offer_end_date = '2021-03-30'
WHERE offer_id = 1;
```

###### Product Offers (Multiple Row, Single Column)
A further change request has been issued to us:
- We can increase the discount on offers 3, 4, 6 and 8 by a further 5%

To do this we can:
- Use the `offer_discount_percentage` in the `SET` statement
    - This will effectively treat every `offer_discount_percentage` as a local variable
    - e.g. Offer 3 will substitute `offer_discount_percentage` for 11.95
    - We can multiply that by 1.05 to get 12.55
- Use the `IN` operator to list the offers we want to include in the `WHERE` clause

```
UPDATE "sequel-mart-schema"."Product_Offers"
SET offer_discount_percentage = offer_discount_percentage * 1.05
WHERE offer_id IN (3, 4, 6, 8);
```

After we have done this, offers 3, 4, 6 and 8 are 5% more than they were before.

The datatype `numeric(4,2)` ensures they are rounded to 2 decimal places

</section>

<section class="slide__images">
<caption>1. UPDATE the Gooseberry discount from 4.85% to 5.25%</caption>
<img src="{{ '../../images/003_UPDATE_Product_Offers_Gooseberry_525.png' | url }}" />
<caption>2. Gooseberry discount updated to 5.25%</caption>
<img src="{{ '../../images/003_UPDATE_Product_Offers_Gooseberry_525_After.png' | url }}" />
<caption>3. Offer ID 1 Multiple Changes</caption>
<img src="{{ '../../images/003_UPDATE_Product_Offers_Introductory_to_Bean.png' | url }}" />
<caption>4. Offer ID 1 After Multiple Changes</caption>
<img src="{{ '../../images/003_UPDATE_Product_Offers_Introductory_to_Bean_After.png' | url }}" />
<caption>5. Offer IDs 3,4,6,8 discount increased by a further 5%</caption>
<img src="{{ '../../images/003_UPDATE_Product_Offers_Multple_Row_Discounts.png' | url }}" />
<caption>6. Offer IDs 3,4,6,8 discount increased by a further 5%</caption>
<img src="{{ '../../images/003_UPDATE_Product_Offers_Multple_Row_Discounts_After.png' | url }}" />


</section>

<section class="slide__exercises">

#### Exercises:
We have received more instructions:
1. Increase the offer_discount_percentage by 10% on any offer_ids between 12 and 16
    - HINT: You can use the `BETWEEN` operator to get the IDs if they are consecutive
2. Reduce the offer_discount_percentage by 5% on any offer_name that ends with the word 'deal' 
    - HINT: Use the `LIKE` operator to get the deals

</section>