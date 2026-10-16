---
layout: 'base.njk'
slide_number: 31
slide_prev: 'slide_030/'
slide_next: 'slide_032/'
section_title: 'How do we change content?'
slide_title: UPDATE... (Multiple tables)
theme: 'theme_003'
slide_layout: 'grid-2'
---

<section class="slide__text">

##### We're ready to apply the discounts to our Sales_Detail table

If we have a look at our `Sales_Detail` table there are columns for:
- `discount`
- `revenue_net`

```
SELECT *
FROM "sequel-mart-schema"."Sales_Detail"
LIMIT 50;
```

We need to update these columns to reflect offers that applied to them.

<div class="warning">Obviously in the real world, this would be applied at the time of sale</div>

###### How do we do that?
We need to:
- Identify the products:
    - The offers apply to
    - When the offers applied (the date range)
- Find the transactions where an offer was active for that product
- Apply the discount for those transactions as specified in `Product_Offers`

###### Where do we find this information?

Four tables each hold pieces to this puzzle so let's go through the requirements slowly.

If we start with the Entity Relationship Diagram updated to include:
- The `Product_Offers` table
- Ability to join to `Products` and `Sales_Detail` on their `product_id` columns
<caption>Updated ERD, including the Product_Offers table</caption>
<img src="{{ '../../images/002_Sequel_Mart_Schema_Inc_Product_Offers.png' | url }}" />

<br />
<hr />

###### We'll definitely need to know information about:

1. Products
    - How much revenue was made in the transaction? (`Sales_Detail`.`revenue`)
    - What was the discount on offer? (`Product_Offers`.`offer_discount_percentage`)

If we join `Sales_Detail`, `Products` and `Product_Offers` we get a query like this:

```
SELECT sd.sale_detail_id, sd.revenue
	, po.offer_name, po.offer_discount_percentage
FROM "sequel-mart-schema"."Sales_Detail" AS sd
INNER JOIN "sequel-mart-schema"."Product_Offers" AS po ON sd.product_id = po.product_id
LIMIT 50;
```

<hr />

2. Dates
    - When did the transaction happen? (`Sales_Header`.`date_id`)
    - What was the calendar date? (`Dates`.`date_alt`)
    - Was the transaction date and product discounted? (`Product_Offers`.`offer_start_date`)

If we add `Sales_Header` and `Dates` to our query it should look something like this:

```
SELECT sd.sale_detail_id, sd.revenue
	, po.offer_name, po.offer_discount_percentage
	, sh.date_id
	, dt.date_alt
FROM "sequel-mart-schema"."Sales_Detail" AS sd
INNER JOIN "sequel-mart-schema"."Product_Offers" AS po ON sd.product_id = po.product_id
INNER JOIN "sequel-mart-schema"."Sales_Header" AS sh ON sh.sale_id = sd.sale_id
INNER JOIN "sequel-mart-schema"."Dates" AS dt ON dt.date_id = sh.date_id
LIMIT 50;
```

<hr />

We're getting there.  The final problem is to solve is:
- Ensuring that discounts are only applied between their start and end dates

We can solve that by adding a `WHERE` clause that only includes rows if:
- The sales date falls `BETWEEN` the offer start and end date

<span>We can remove: </span>
- <span>`sh.date_id` (This was only there to prove the join worked between `Sales_Header` and `Dates`)</span>

This gives us a final list of 142 transactions that are valid for applying a discount

```
SELECT sd.sale_detail_id, sd.revenue
	, po.offer_name, po.offer_discount_percentage
	, dt.date_alt
FROM "sequel-mart-schema"."Sales_Detail" AS sd
INNER JOIN "sequel-mart-schema"."Product_Offers" AS po ON sd.product_id = po.product_id
INNER JOIN "sequel-mart-schema"."Sales_Header" AS sh ON sh.sale_id = sd.sale_id
INNER JOIN "sequel-mart-schema"."Dates" AS dt ON dt.date_id = sh.date_id
WHERE dt.date_alt BETWEEN po.offer_start_date AND po.offer_end_date;
```

###### Calculating the discount
If we take `sale_detail_id` of 60 as an example:
- `revenue` = £2.28 <span>(£0.76 unit_sales_price * 3 items_sold)<span>
- `offer_discount_percentage` = 7.00% <span>(divide by 100 to get the calculation value 0.07)</span>

Therefore:
- `discount` = £0.16 <span>(should be £2.28 * 0.07 (7.00% / 100))</span>
	- `sd.revenue * (po.offer_discount_percentage / 100) AS discount`
- `revenue_net` = £2.12 <span>(£2.28 - £0.16)</span>
	- `sd.revenue - (sd.revenue * (po.offer_discount_percentage / 100)) AS revenue_net`

<span>We can add those two columns and we can remove: </span>
- <span>`po.offer_name` (Not needed in the final calculation)</span>
- <span>`po.offer_discount_percentage` (Not needed in the final calculation)</span>
- <span>`dt.date_alt` (Not needed in the final calculation)</span>

<hr />

###### Writing the UPDATE statement
There is a lot to unpack in the final statement:

```
UPDATE "sequel-mart-schema"."Sales_Detail" AS sd
SET discount = disc.discount
	, revenue_net = disc.revenue_net
FROM
(
	SELECT sd.sale_detail_id
		, sd.revenue * (po.offer_discount_percentage / 100) AS discount
		, sd.revenue - (sd.revenue * (po.offer_discount_percentage / 100)) AS revenue_net
	FROM "sequel-mart-schema"."Sales_Detail" AS sd
	INNER JOIN "sequel-mart-schema"."Product_Offers" AS po ON sd.product_id = po.product_id
	INNER JOIN "sequel-mart-schema"."Sales_Header" AS sh ON sh.sale_id = sd.sale_id
	INNER JOIN "sequel-mart-schema"."Dates" AS dt ON dt.date_id = sh.date_id
	WHERE dt.date_alt BETWEEN po.offer_start_date AND po.offer_end_date
) AS disc
WHERE sd.sale_detail_id = disc.sale_detail_id;
```

Let's go through each section:

`UPDATE`
- The table we want to update (`"sequel-mart-schema"."Sales_Detail"`)
- Aliased `sd` to shorten the reference in the `WHERE` clause

`SET`
- Apply the calculations above for `discount` and `revenue_net`
- We are using the calculations in the sub-query (aliased `disc`)

`FROM`
- Earlier we looked at sub-queries.
- We can package our final `SELECT` between brackets and alias it as another `FROM`
- This separates the table we want to `UPDATE` from the logic we want to apply
- We don't need to reference any columns other than:
    - `sale_detail_id` for joining to the `Sale_Detail` table we're updating
    - `discount` and `revenue_net` as these are the columns we're updating
- The 5 tables and joins are the same as the final query we worked out


<hr />

```
SELECT *
FROM "sequel-mart-schema"."Sales_Detail"
ORDER BY sale_detail_id;
```

Now if we query `Sales_Detail` and scroll down, the first discounts are:
- `sale_detail_id` 60
    - Sale date = 29th May 2021
    - Product = 76 (Savoy Cabbage)
    - Offer ID = 7 (Valid on product id 76 between 4th May and 1st July 2021)
    - Discount = 7.00% (£2.28 * 0.07 = £0.16)
- `sale_detail_id` 73
    - Sale date = 13th July 2021
    - Product = 51 (Victoria Plums)
    - Offer ID = 11 (Valid on product id 51 between 4th May and 1st July 2021)
    - Discount = 7.08% (£15.84 * 0.0708 = £1.12)

<hr />

This section brings together some of the concepts we've learned so far

It is complicated at first so please feel free to come back here later on and practice further

</section>

<section class="slide__images">
<caption>1. All columns of the Sales_Detail table</caption>
<img src="{{ '../../images/003_UPDATE_Sales_Detail_Product_Offers_Sales_Details_All.png' | url }}" />
<caption>2. Sales_Detail joined to Products and Discounts (Green line = table separation)</caption>
<img src="{{ '../../images/003_UPDATE_Sales_Detail_Product_Offers_Step_1.png' | url }}" />
<caption>3. Date information added to the above query</caption>
<img src="{{ '../../images/003_UPDATE_Sales_Detail_Product_Offers_Step_2.png' | url }}" />
<caption>4. UPDATE query executed</caption>
<img src="{{ '../../images/003_UPDATE_Sales_Detail_Product_Offers_Step_3.png' | url }}" />
<caption>5. Sales_Detail with discounts applied</caption>
<img src="{{ '../../images/003_UPDATE_Sales_Detail_Product_Offers_Finished.png' | url }}" />



</section>
