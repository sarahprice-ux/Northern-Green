---
layout: 'base.njk'
slide_number: 11
slide_prev: 'slide_010/'
slide_next: 'slide_012/'
section_title: 'How do we query a relational database?'
slide_title: 'Data Types - Manipulating'
theme: 'theme_002'
slide_layout: 'grid-2'
---

<section class="slide__text">

##### We may find a value is not in the format we need
For example, `SELECT '42';` will return as text

Of course, we could just remove the quotes here. However, when we move to more complicated queries this will often not be an option

To convert this to an integer we can use either:
```
SELECT CAST('42' AS INT);
```
or the shorter
```
SELECT '42'::INT;
```

We can reverse the process should an integer need to be stored as a string
```
SELECT 42::VARCHAR(2);
```

You can combine these with other data manipulations
- e.g. `SELECT (42.5 + 20)::NUMERIC(3,1);` recognises 20 as 20.0 and returns 60.5

Or change between dates
- e.g. `SELECT '2021-08-02 10:05:12'::DATE;` removes the time and just returns the date

<hr />

##### Notes:
- You must `CAST` to a valid data type to avoid an error or results being truncated
  
###### Errors (examples)
  - `SELECT 40000::SMALLINT;` will return an 'out of range' error
    - The maximum value for a `SMALLINT` is 32767
  - `SELECT '42.5'::INT;` will return an 'invalid input syntax type' error
    - 42.5 as `TEXT` cannot be cast to an `INT`
    - Cast as at least `SELECT '42.5'::NUMERIC(3,1);` instead
    - `NUMERIC(3,1)` is valid for a number 3 digits in total with 1 of them a decimal place

###### Truncation changes (example)
  - `SELECT 42::VARCHAR(1);` will return 4
    - `VARCHAR(1)` can only store one character so PostgreSQL takes only the first digit
  - `SELECT 42.5::INT;` will return 43.  `SELECT 42.49::INT;` will return 42
    - The value is rounded to the nearest whole number so it can be a valid `INT`

</section>


<section class="slide__images">
    <caption>1. Convert a string to an integer (method 1)</caption>
    <img src="{{ '../../images/002_SELECT_Cast.png' | url }}" />
    <caption>2. Convert a string to an integer (method 2)</caption>
    <img src="{{ '../../images/002_SELECT_Cast_2.png' | url }}" />
    <caption>3. Convert an integer to a string</caption>
    <img src="{{ '../../images/002_SELECT_Cast_3.png' | url }}" />
    <caption>4. Casting Overflow Error</caption>
    <img src="{{ '../../images/002_SELECT_Cast_Error_1.png' | url }}" />
    <caption>5. Truncation Issue on Conversion</caption>
    <img src="{{ '../../images/002_SELECT_Cast_Error_2.png' | url }}" />

</section>


<section class="slide__exercises">

---

  #### Exercises:
- Practice casting some other text and numerical values as other data types
  - Make a note of any errors you come across and work through them with your mentor

</section>