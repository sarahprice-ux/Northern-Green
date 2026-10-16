---
layout: 'base.njk'
slide_number: 42
slide_prev: 'slide_041/'
slide_next: 'slide_043/'
section_title: 'How do we change content?'
slide_title: CREATE VIEW...
theme: 'theme_004'
slide_layout: 'grid-2'
---

<section class="slide__text">

#### Create a 'copy' of another SQL query

```
CREATE VIEW <schema_name>.v_<view_name>
AS
SELECT <field1>, <field2>
FROM <table1>;
```

The view can then be used in the `FROM` statement of an SQL query

Prefixing a view with `v_` makes it clear that it is a view rather than a permanent table

###### Example
If we want to know more about the products on offer and their popularity, we could run the following query:
```
SELECT po.offer_id, po.offer_name, po.offer_discount_percentage
    , po.offer_start_date, po.offer_end_date
	, pr.product_id, pr.product_category, pr.product_item
    , pr.product_variety, pr.popularity
FROM "sequel-mart-schema"."Product_Offers" AS po
INNER JOIN "sequel-mart-schema"."Products" AS pr
	ON pr.product_id = po.product_id;
```

If we found we wanted this information in many different places in a project, we could save the script as a View called `v_Product_Offers_And_Products` in our schema as follows:

```
CREATE VIEW "sequel-mart-schema".v_Product_Offers_And_Products
AS
SELECT po.offer_id, po.offer_name, po.offer_discount_percentage, po.offer_start_date, po.offer_end_date
	, pr.product_id, pr.product_category, pr.product_item, pr.product_variety, pr.popularity
FROM "sequel-mart-schema"."Product_Offers" AS po
INNER JOIN "sequel-mart-schema"."Products" AS pr
	ON pr.product_id = po.product_id;
```

We can now query this `VIEW` as though it was just another table:
```
SELECT *
FROM "sequel-mart-schema".v_Product_Offers_And_Products;
```

<hr />

##### Reasons to use Views
- Shortens code for frequently used queries
- Promotes consistently used code between developers
- Views can be given different security policies, so it can be a safer approach
- Hides more of the inner workings of the database from the frontend

<hr />

##### Source SQL code for a VIEW
If we want to go back to a `VIEW` later and remind ourselves how it was created we can:
- Right-click on the `VIEW` name in the Browser tab
- Click 'Properties...'
- Click the 'Code' tab on the pop-up that appears

We can make a change to the `VIEW` in this Code pop-up and save it.

For example, let's
    - Add the `unit_sales_price` column to the `VIEW`
    - Remove any offers that ended before 1st August 2021

Our SQL script now looks like this in the window:

```
 SELECT po.offer_id,
    po.offer_name,
    po.offer_discount_percentage,
    po.offer_start_date,
    po.offer_end_date,
    pr.product_id,
    pr.product_category,
    pr.product_item,
    pr.product_variety,
    pr.popularity,
    pr.unit_sales_price
   FROM "sequel-mart-schema"."Product_Offers" po
     JOIN "sequel-mart-schema"."Products" pr ON pr.product_id = po.product_id
   WHERE po.offer_end_date > '2021-08-01';
```
- Click 'Save'
- We may get a message warning us that the `VIEW` will be dropped and recreated
    - If we have other objects in our database dependent on this `VIEW`, they may need to be dropped first and re-added
    - Click 'Yes' if this message appears
- If we query our `VIEW` again, the changes have been applied:
    - The `unit_sales_price` column has been added
    - We are only seeing the 8 offers since 1st August 2021

```
SELECT *
FROM "sequel-mart-schema".v_Product_Offers_And_Products;
```

<hr />

##### Dropping a VIEW
We can remove a `VIEW` using the `DROP` syntax.

If we wanted to remove our view we could say:
```
DROP VIEW "sequel-mart-schema".v_Product_Offers_And_Products;
```

<div class="warning">Views depend on their tables. If you want to drop a table, any view that references that table will need to be dropped first</div>

</section>

<section class="slide__images">
<caption>1. Location of VIEWs on the browser tab</caption>
<img src="{{ '../../images/004_Views_Location_Browser.png' | url }}" />
<caption>2. Query we want to save as a VIEW</caption>
<img src="{{ '../../images/004_Views_SELECT.png' | url }}" />
<caption>3. Scripting the query as a CREATE VIEW</caption>
<img src="{{ '../../images/004_Views_CREATE_VIEW.png' | url }}" />
<caption>4. The new VIEW is in the browser tab</caption>
<img src="{{ '../../images/004_Views_Location_Browser_After.png' | url }}" />
<caption>5. Query the VIEW directly</caption>
<img src="{{ '../../images/004_Views_VIEW_SELECT.png' | url }}" />
<caption>6. Accessing the Properties...</caption>
<img src="{{ '../../images/004_Views_Properties.png' | url }}" />
<caption>7. Source SQL Code in Properties... > Code</caption>
<img src="{{ '../../images/004_Views_Properties_Code.png' | url }}" />
<caption>8. Source SQL Code with changes</caption>
<img src="{{ '../../images/004_Views_Properties_Code_Changes.png' | url }}" />
<caption>9. Source SQL Code changed, warning message</caption>
<img src="{{ '../../images/004_Views_Properties_Code_Warning.png' | url }}" />
<caption>10. Querying the changed VIEW directly</caption>
<img src="{{ '../../images/004_Views_SELECT_After_Changes.png' | url }}" />



</section>
