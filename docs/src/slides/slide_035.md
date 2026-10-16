---
layout: 'base.njk'
slide_number: 35
slide_prev: 'slide_034/'
slide_next: 'slide_036/'
section_title: 'How do we change content?'
slide_title: ALTER COLUMN...
theme: 'theme_003'
slide_layout: 'grid-2'
---

<section class="slide__text">

##### Tell the server that you want to change a column attribute

We can change a lot of things about a table. The most common are:

###### Data Type
```
ALTER TABLE <schema_name>.<table_name>
ALTER COLUMN <column_name> SET DATA TYPE  <data_type1>;
```
<div class="warning">- You will get an error if data in the table is outside of the proposed new data type</div>

###### Default value 
```
ALTER TABLE <schema_name>.<table_name>
ALTER COLUMN <column_name> SET DEFAULT <default_value> | DROP DEFAULT;
```

###### Nullability of a column
```
ALTER TABLE <schema_name>.<table_name>
ALTER COLUMN <column_name> SET NOT NULL | DROP NOT NULL;
```
<div class="warning">- You will get an error if you `SET NOT NULL` when the column already contains `NULL` rows</div>



###### Example table

To practice, let's recreate the `aaa_Dummy_Table` on our `sequel-mart-schema`: 

```
CREATE TABLE "sequel-mart-schema"."aaa_Dummy_Table" (
	column_001 INT,
	column_002 VARCHAR(10),
	column_003 TIMESTAMP,
	column_004 NUMERIC(9,2)
);
```

Let's change the data type of `column_001` from an `INT` to a `SMALLINT`

```
ALTER TABLE "sequel-mart-schema"."aaa_Dummy_Table"
ALTER COLUMN column_001 SET DATA TYPE SMALLINT;
```

Now let's force `column_002` and `column_004` to not accept `NULL` as an input
```
ALTER TABLE "sequel-mart-schema"."aaa_Dummy_Table"
ALTER COLUMN column_002 SET NOT NULL;

ALTER TABLE "sequel-mart-schema"."aaa_Dummy_Table"
ALTER COLUMN column_004 SET NOT NULL;
```

Finally let's set a default value for `column_002` of 'Unknown'
```
ALTER TABLE "sequel-mart-schema"."aaa_Dummy_Table"
ALTER COLUMN column_002 SET DEFAULT 'Unknown';
```

<hr/>

###### Testing our new constraints
If we insert the following record (notice we're not including `column_002` or `column_003`):
```
INSERT INTO "sequel-mart-schema"."aaa_Dummy_Table"
	(column_001, column_004)
VALUES (10, 89.56);
```

...and query our table:
```
SELECT *
FROM "sequel-mart-schema"."aaa_Dummy_Table";
```

We notice that (screenshot 6):
- `column_001` has changed datatype and is now `SMALLINT`
- `column_002` has used our default value of 'Unknown'
- `column_003` has no default value but can accept `NULL` so it uses that

<hr />

Now let's try to violate the constraints.

If we try to run:
```
INSERT INTO "sequel-mart-schema"."aaa_Dummy_Table"
	(column_001, column_003)
VALUES (10, '2021-09-01 15:02:55');
```

We get the following helpful message:
```
ERROR:  null value in column "column_004" of relation "aaa_Dummy_Table" violates not-null constraint
```

This tells us that `column_004` has a `NOT NULL` constraint but no `DEFAULT` value

We have to specify a value every time not to get an error

<hr/>

Setting up constraints is a way of:
- Adding an extra layer of quality control to the data we add to our tables
- Helping Postgresql to process queries faster because we're telling it what it doesn't have to look out for (`NULL` values in this case)

</section>

<section class="slide__images">
<caption>1. CREATE aaa_Dummy_Table</caption>
<img src="{{ '../../images/003_DROP_Dummy_Table_CREATE.png' | url }}" />
<caption>2. SELECT FROM aaa_Dummy_Table</caption>
<img src="{{ '../../images/003_DROP_Dummy_Table_SELECT.png' | url }}" />
<caption>3. DATA TYPE Change</caption>
<img src="{{ '../../images/003_ALTER_Dummy_Table_DATA_TYPE_SQL.png' | url }}" />
<caption>4. NOT NULL Change</caption>
<img src="{{ '../../images/003_ALTER_Dummy_Table_NOT_NULL_SQL.png' | url }}" />
<caption>5. DEFAULT Value Change</caption>
<img src="{{ '../../images/003_ALTER_Dummy_Table_DEFAULT_SQL.png' | url }}" />
<caption>6. First test of aaa_Dummy_Table constraints</caption>
<img src="{{ '../../images/003_ALTER_Dummy_Table_Test_1.png' | url }}" />
<caption>7. Error test of aaa_Dummy_Table constraints</caption>
<img src="{{ '../../images/003_ALTER_Dummy_Table_Test_2.png' | url }}" />



</section>

<section class="slide__exercises">

---

#### Exercises:
1. Add a few more constraints to the `aaa_Dummy_Table` and `INSERT` some more records.
    - Debug any errors with your mentor and share with the group


</section>