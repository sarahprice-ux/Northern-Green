---
layout: 'base.njk'
slide_number: 41
slide_prev: 'slide_040/'
slide_next: 'slide_042/'
section_title: 'How do we change content?'
slide_title: TRANSACTIONS
theme: 'theme_004'
slide_layout: 'grid-2'
---

<section class="slide__text">

#### Run many SQL queries together
- Only write the results from a series of SQL statements to the database (`COMMIT`) if they **all** succeed
- Do not write to the database (`ROLLBACK`) if one does not succeed

```
BEGIN;
    INSERT <SQL_Statement1>;
    UPDATE <SQL_Statement2>;
SAVEPOINT <savepoint1>;
    INSERT <SQL_Statement3>;
ROLLBACK TO <savepoint1>;
    UPDATE <SQL_Statement4>;
COMMIT; | ROLLBACK;
```

A transaction must have the following components:
- `BEGIN;` = Where a transaction starts

It must have at least one of the following components:
- `COMMIT;` = Where the transaction ends and:
    - Writes everything to the database tables affected
    - Frees any locks taken out
- `ROLLBACK;` = Ends the transaction and:
    - Does not write anything to the database tables affected
    - Frees any locks taken out

And it may have the following components:
-  `ROLLBACK TO;` = Ends the transaction and:
    - Does not write anything to the database tables affected
    - Frees any locks taken out
- `SAVEPOINT` = Allows us to:
    - Commit SQL statements before that point on an error (used with `ROLLBACK TO`)
    - Roll back SQL statements after that point on an error

<hr />

##### Other things to note:
- Make sure transactions are efficient and well tested before putting them into production
- <div class="warning">Transactions lock tables or rows that are being changed</div>
- <div class="warning">Other transactions wait until they have finished</div>
- <div class="warning">This can lead to **blocking** and **deadlocking** issues if slow</div>

<div class="warning">Make sure you don't start a transaction and leave it running without committing or rolling it back</div>

<hr />

###### Example
Let's query our `Product_Offers` table again for `offer_id`s 17, 19 and 20:
```
SELECT *
FROM "sequel-mart-schema"."Product_Offers"
WHERE offer_id IN (17,19,20);
```

The `offer_start_date`s are 28th August, 2nd September & 4th September respectively.

If we wanted to add a day to `offer_id` 20 (make it 5th September), we would:
- Use an `UPDATE`
- Make use of the `INTERVAL` function to add the day

```
UPDATE "sequel-mart-schema"."Product_Offers"
SET offer_start_date = offer_start_date + INTERVAL '1 day'
WHERE offer_id = 20;
```

This is a single statement transaction.  It's the equivalent of writing:
```
BEGIN;
	UPDATE "sequel-mart-schema"."Product_Offers"
	SET offer_start_date = offer_start_date + INTERVAL '1 day'
	WHERE offer_id = 20;
COMMIT;
```

However, if we were instead to write:

```
BEGIN;
	UPDATE "sequel-mart-schema"."Product_Offers"
	SET offer_start_date = offer_start_date + INTERVAL '1 day'
	WHERE offer_id = 20;
ROLLBACK;
```

The `offer_start_date` for this offer would not be written to the database. It would still be 4th September 2021.

##### Extending the example
Now let's add a `SAVEPOINT` and `ROLLBACK TO` that `SAVEPOINT`

```
BEGIN;
	UPDATE "sequel-mart-schema"."Product_Offers"
	SET offer_start_date = offer_start_date + INTERVAL '1 day'
	WHERE offer_id = 17;
SAVEPOINT product_offer_savepoint;
	UPDATE "sequel-mart-schema"."Product_Offers"
	SET offer_start_date = offer_start_date + INTERVAL '1 day'
	WHERE offer_id = 19;
ROLLBACK TO product_offer_savepoint;
	UPDATE "sequel-mart-schema"."Product_Offers"
	SET offer_start_date = offer_start_date + INTERVAL '1 day'
	WHERE offer_id = 20;
COMMIT;
```

This time the SQL transaction will:
- Note the `BEGIN`
- Add a day to `offer_id` 17 and accept as part of the transaction
- Note the `SAVEPOINT` called `product_offer_savepoint`
- Add a day to `offer_id` 19 and accept as part of the transaction

- Note the `ROLLBACK TO product_offer_savepoint`
- Reverse adding a day to `offer_id` 19 and remove it from the transaction

- Go back to the line below the `ROLLBACK TO`
- Add a day to `offer_id` 20 and accept as part of the transaction

- The transaction contains `UPDATE`s to `offer_id`s 17 and 20
- Note the `COMMIT` and makes these changes to the database

If we run:
```
SELECT *
FROM "sequel-mart-schema"."Product_Offers"
WHERE offer_id IN (17,19,20);
```
we see that IDs 17 and 20 have a modified `offer_start_date` but ID 19 has not changed


</section>

<section class="slide__images">
<caption>1. Product Offers table IDs 17, 19 & 20 (Before)</caption>
<img src="{{ '../../images/004_Transactions_SELECT_Product_Offer_20.png' | url }}" />
<caption>2. Location of VIEWs on the browser tab</caption>
<img src="{{ '../../images/004_Transactions_ROLLBACK_Only.png' | url }}" />
<caption>3. Product Offers table IDs 17, 19 & 20 (After)</caption>
<img src="{{ '../../images/004_Transactions_SELECT_Product_Offer_20_After_Changes.png' | url }}" />



</section>
