---
layout: 'base.njk'
slide_number: 29
slide_prev: 'slide_028/'
slide_next: 'slide_030/'
section_title: 'How do we change content?'
slide_title: INSERT INTO... (Multiple row)
theme: 'theme_003'
slide_layout: 'grid-2'
---

<section class="slide__text">

##### Tell the server that we want to add new rows (records) to a table

If we want to bulk insert data, we can reference it from another table

```
INSERT INTO "<schema_name>"."<table_name>" (<field_name1>, <field_name2>)
SELECT <value1>, <value2>
FROM <table> | <view>;
```

###### Product Offers
We have received a bulk of new planned offers in a CSV file
- CSV = Comma Separated Values
- It's a bit like a table where:
    - Columns are separated by commas 
    - Rows are separated by new lines

###### Loading this into a staging table
- When we receive data from an external source like this it is a **good idea not to put it into our production database immediately**
- It is best to create a 'staging' table so we can triage it before we bulk insert
- Let's call our staging table `stage_Product_Offers`
- It will be the same as `Product_Offers` except:
    - We're including the word `stage_` in the table name
    - We're not including the `offer_id` because this will be generated automatically

```
CREATE TABLE "sequel-mart-schema"."stage_Product_Offers" (
	offer_name VARCHAR(50) NOT NULL,
	product_id INT NOT NULL DEFAULT 0,
	offer_discount_percentage NUMERIC(4,2),
	offer_start_date DATE,
	offer_end_date DATE
);
```

Make sure the schema is included in the name

<hr />

###### Import the CSV data to this table
Because we are using a Docker image we can't just pull the data straight from our hard-drive.

- Right-click on the `stage_Product_Offers` table (screenshot 3)
- Click 'Import/Export Data...' and fill the form out:
    ###### Options Tab
    - **Import/Export** = Import
    - **Filename**
        - Click on the file icon on the right
        - Click the up-arrow icon on the left of the new pop-up until you get to the root folder ('/') (screenshot 5)
        - You should see a long list of folders
        - Select the 'tmp' file (this is the only one not locked)
        - Click the 'Upload file' icon (screenshot 6)
        - Locate the CSV file from *(your project folder)\apprentice-boot-camp-databases\backend\imports\Product_Offers_Data.csv*
        - Drag and drop the CSV file into the grey area below
        - Click the x on the top-right of the pop-up.  The file should now be in the /tmp/ folder (screenshot 7)
        - Click 'Select' in the bottom-right and the file should appear as /tmp/Product_Offers_Data.xls
    - **Format** = csv
    - **Encoding** = SQL_ASCII
    - **Header** = Set the toggle on
    - **Delimiter** = , (comma)

    ###### Columns tab
    - **Columns to Import** = Select all 5 columns in the order they are in the table from the dropdown (screenshot 9). They may already be pre-populated
- Click **OK** on the bottom-right of the import/export wizard to start the import

All being well the data should now be in the staging table

```
SELECT *
FROM "sequel-mart-schema"."stage_Product_Offers";
```

<img src="{{ '../../images/003_INSERT_Stage_Product_Offer_Data.png' | url }}" />

<hr />

###### INSERT INTO Product_Offers

Now if we run the following:

```
INSERT INTO "sequel-mart-schema"."Product_Offers"
	(offer_name, product_id, offer_discount_percentage, offer_start_date, offer_end_date)
SELECT offer_name
	, product_id
	, offer_discount_percentage
	, offer_start_date
	, offer_end_date
FROM "sequel-mart-schema"."stage_Product_Offers";
```
we should find the 19 new offers have been inserted into the `Product_Offers` table

<img src="{{ '../../images/003_INSERT_Multi_Product_Offers.png' | url }}" />

and if we query the table we can see the new offers:

```
SELECT *
FROM "sequel-mart-schema"."Product_Offers";
```
<img src="{{ '../../images/003_INSERT_Product_Offers_20_Offers.png' | url }}" />




</section>

<section class="slide__images">
<caption>1. External Product_Offers CSV Location</caption>
<img src="{{ '../../images/003_INSERT_Product_Offer_CSV_Location.png' | url }}" />
<caption>2. Create stage_Product_Offer</caption>
<img src="{{ '../../images/003_INSERT_Stage_Product_Offer_CREATE.png' | url }}" />
<caption>3. Find the menu to import into stage_Product_Offer</caption>
<img src="{{ '../../images/003_INSERT_Stage_Product_Offer_Import_Route.png' | url }}" />
<caption>4. Menu to import into stage_Product_Offer (Start)</caption>
<img src="{{ '../../images/003_INSERT_Stage_Product_Offer_Import_Menu_Before.png' | url }}" />
<caption>5. Menu to import into stage_Product_Offer (Files)</caption>
<img src="{{ '../../images/003_INSERT_Stage_Product_Offer_Import_Menu_File_01.png' | url }}" />
<caption>6. Menu to import into stage_Product_Offer (Upload File)</caption>
<img src="{{ '../../images/003_INSERT_Stage_Product_Offer_Import_Menu_Upload_File.png' | url }}" />
<caption>7. Menu to import into stage_Product_Offer (Uploaded File)</caption>
<img src="{{ '../../images/003_INSERT_Stage_Product_Offer_Import_Menu_File_02.png' | url }}" />
<caption>8. Menu to import into stage_Product_Offer (End)</caption>
<img src="{{ '../../images/003_INSERT_Stage_Product_Offer_Import_Menu_After.png' | url }}" />
<caption>9. Menu to import into stage_Product_Offer (Columns)</caption>
<img src="{{ '../../images/003_INSERT_Stage_Product_Offer_Import_Menu_Columns.png' | url }}" />
<caption>10. CSV Imported to stage_Product_Offer</caption>
<img src="{{ '../../images/003_INSERT_Stage_Product_Offer_Import_Ok_Message.png' | url }}" />


</section>