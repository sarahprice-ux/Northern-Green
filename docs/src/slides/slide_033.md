---
layout: 'base.njk'
slide_number: 33
slide_prev: 'slide_032/'
slide_next: 'slide_034/'
section_title: 'How do we change content?'
slide_title: TRUNCATE TABLE...
theme: 'theme_003'
slide_layout: 'grid-2'
---

<section class="slide__text">

##### Clear a table
Tell the server that you want to: 
- Remove all existing record(s) in a table
- Reset it’s cache (reset any incrementing keys, indexes, data space)

```
TRUNCATE TABLE <schema_name>.<table_name>;
```

<div class="warning">IMPORTANT:</div>
<div class="warning">- Truncating will remove ALL existing data from a table. Check before committing!</div>
<div class="warning">- Not a pleasant feeling if done unintentionally!</div>

###### stage_Product_Offers

Let's clear the `stage_Product_Offers` in readiness for more CSV files in the future: 

```
TRUNCATE TABLE "sequel-mart-schema"."stage_Product_Offers";
```

This removes every record from this table.  All other tables are unaffected.

NOTE:
- We could use the shorthand `TRUNCATE` instead of `TRUNCATE TABLE`

    ```
    TRUNCATE "sequel-mart-schema"."stage_Product_Offers";
    ```

</section>

<section class="slide__images">
<caption>1. All columns of the stage_Product_Offers table</caption>
<img src="{{ '../../images/003_DELETE_stage_Product_Offers_Before_May_2021_After.png' | url }}" />
<caption>2. Truncate stage_Product_Offers</caption>
<img src="{{ '../../images/003_TRUNCATE_stage_Product_Offers.png' | url }}" />
<caption>3. stage_Product_Offers is empty once truncated</caption>
<img src="{{ '../../images/003_TRUNCATE_stage_Product_Offers_After.png' | url }}" />



</section>
