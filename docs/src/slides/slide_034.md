---
layout: 'base.njk'
slide_number: 34
slide_prev: 'slide_033/'
slide_next: 'slide_035/'
section_title: 'How do we change content?'
slide_title: DROP...
theme: 'theme_003'
slide_layout: 'grid-2'
---

<section class="slide__text">

##### Delete an object from a database
Tell the server that you want to: 

- Delete a table
```
DROP TABLE <schema_name>.<table_name>;
```

- Delete a schema
```
DROP SCHEMA <schema_name>;
```

<div class="warning">IMPORTANT:</div>
<div class="warning">- Dropping something will remove it from the database server!</div>
<div class="warning">- Sometimes this command can fail if something else in the database depends on it existing</div>



###### Example table

To practice, let's create a new table called `aaa_Dummy_Table` on our `sequel-mart-schema` and drop it: 

```
CREATE TABLE "sequel-mart-schema"."aaa_Dummy_Table" (
	column_001 INT,
	column_002 VARCHAR(10),
	column_003 TIMESTAMP,
	column_004 NUMERIC(9,2)
);
```

This creates our table.  We can query it:
```
SELECT *
FROM "sequel-mart-schema"."aaa_Dummy_Table";
```

Now let's remove (or `DROP`) it:
```
DROP TABLE "sequel-mart-schema"."aaa_Dummy_Table";
```
NOTE:
- Because this statement can be applied to many other object types we cannot use the a shorthand


</section>

<section class="slide__images">
<caption>1. CREATE aaa_Dummy_Table</caption>
<img src="{{ '../../images/003_DROP_Dummy_Table_CREATE.png' | url }}" />
<caption>2. aaa_Dummy_Table included in database schema</caption>
<img src="{{ '../../images/003_DROP_Dummy_Table_List.png' | url }}" />
<caption>3. SELECT FROM aaa_Dummy_Table</caption>
<img src="{{ '../../images/003_DROP_Dummy_Table_SELECT.png' | url }}" />
<caption>4. DROP aaa_Dummy_Table</caption>
<img src="{{ '../../images/003_DROP_Dummy_Table_DROP.png' | url }}" />
<caption>5. aaa_Dummy_Table no longer in database schema</caption>
<img src="{{ '../../images/003_DROP_Dummy_Table_List_After.png' | url }}" />



</section>
