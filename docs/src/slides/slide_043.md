---
layout: 'base.njk'
slide_number: 43
slide_prev: 'slide_042/'
slide_next: 'slide_044/'
section_title: 'How do we change content?'
slide_title: CREATE PROCEDURE...
theme: 'theme_004'
slide_layout: 'grid-2'
---

<section class="slide__text">

##### A set of often parametised SQL queries

A `VIEW` can execute a single SQL statement

A `PROCEDURE` can:
- Chain and execute multiple SQL statements
- Accept input parameters to influence the result
- Accept output parameters

<div class="warning">These are complicated to write at first but it has similarities with functions in coding languages</div>

```
CREATE OR REPLACE PROCEDURE <schema_name>.<proc_name>(
<input_param_1>, <input_param_2>)
LANGUAGE 'plpgsql' | 'sql'
AS $BODY$
DECLARE <variable_name> <data_type>
BEGIN
        <SQL_Statement_1>
        <SQL_Statement_2>
        COMMIT;
END;
$BODY$;
```

- `CREATE OR REPLACE PROCEDURE` = The name of the procedure and the schema it which it should be stored
- `<input_param_1>, <input_param_2>` = Any external input parameters (optional)
- `LANGUAGE` = PL/pgSQL is a procedural programming language supported by PostgreSQL
- `$BODY$` = A token in between two dollar signs to avoid having to stringify the whole procedure
  - Using 'BODY' is a convention but it could be any value (e.g. `$BOOTCAMP$`)
- `DECLARE` = Any internally declared variables we can use in our procedure
- `BEGIN ... END` = Area in which the SQL statements are batched as a `TRANSACTION`

##### Example - Generating Sales
Our `sequel-mart-schema` includes a procedure for generating randomised sales (`p_sales_generate`)

If we:
- Right-click on the procedure
- Click Properties...
- Click the Code tab

We access the PLPGSQL code between the `$BODY$` tags

This procedure:
- Accepts an `INTEGER` input field called 'sales'
  - This specifies how many sales you want to generate
- Counts the number of `customers` who could make a sale and stores it as 'customer_total'
- Iterates through the number of 'sales' we want to generate and assigns:

`Sales_Header`
  - A random `customer_id` using the 'customer_total' variable as a range
  - A random `sale_date`
  - A random `feedback_score`

`Sales_Detail`
  - A random number of products to include in this sale (between 1 and 20).  For each product we assign:
    - The number of items sold (between 1 and 10)
    - The product itself (weighted with a more popular product more likely to be chosen)
    - The product's `unit_sales_price` and `wholesale_price`

##### Calling a Procedure

A procedure can be executed using `CALL`

```
CALL <schema_name>.p_<proc_name>(<input_param_1>, <input_param_2>)
```

<div class="warning">If you run the 'p_sales_generate' procedure now, your results for the exercises in section 6 will be different from the screenshots</div>


For example if we were to run: 

```
CALL 'sequel-mart-schema'.'p_sales_generate'(100);
```

We would:
- Add 100 new randomly generated sales transactions to our `Sales_Header` table
- Add about 1,000 new product purchases to our `Sales_Detail` table


</section>

<section class="slide__images">
<caption>1. Procedures (Location in Browser Tab)</caption>
<img src="{{ '../../images/004_Procedure_Location.png' | url }}" />
<caption>2. Procedures (Navigate to the code)</caption>
<img src="{{ '../../images/004_Procedure_Properties.png' | url }}" />
<caption>3. Procedures (Navigate to the code)</caption>
<img src="{{ '../../images/004_Procedure_Code.png' | url }}" />


</section>
