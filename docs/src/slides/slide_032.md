---
layout: 'base.njk'
slide_number: 32
slide_prev: 'slide_031/'
slide_next: 'slide_033/'
section_title: 'How do we change content?'
slide_title: DELETE...
theme: 'theme_003'
slide_layout: 'grid-2'
---

<section class="slide__text">

##### Hide records / Prepare for Removal
Tell the server that you want to: 
- Mark records in a table for deletion (soft-delete)
- Keep it’s cache (any incrementing keys, indexes, data space)
- Some Database Management Systems will remove them completely

```
DELETE
FROM <schema_name>.<table_name>
WHERE <field1> = <value1>;
```

<div class="warning">IMPORTANT:</div>
<div class="warning">- Deleting will remove existing data. Check before committing!</div>
<div class="warning">- If there is no WHERE clause, every row will be deleted.</div>
<div class="warning">- Not a pleasant feeling if done unintentionally!</div>

###### stage_Product_Offers

Let's remove any offers from the `stage_Product_Offers` table where:
- The offer started before 1st May 2021

```
DELETE
FROM "sequel-mart-schema"."stage_Product_Offers"
WHERE offer_start_date < '2021-05-01';
```

This removes the 3 offers from our table that started before 1st May 2021


</section>

<section class="slide__images">
<caption>1. All columns of the stage_Product_Offers table</caption>
<img src="{{ '../../images/003_DELETE_stage_Product_Offers_All.png' | url }}" />
<caption>2. Delete stage_Product_Offers that started before May 2021</caption>
<img src="{{ '../../images/003_DELETE_stage_Product_Offers_Before_May_2021.png' | url }}" />
<caption>3. Offers that started before May 2021 removed from stage_Product_Offers</caption>
<img src="{{ '../../images/003_DELETE_stage_Product_Offers_Before_May_2021_After.png' | url }}" />



</section>
