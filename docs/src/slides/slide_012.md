---
layout: 'base.njk'
slide_number: 12
slide_prev: 'slide_011/'
slide_next: 'slide_013/'
section_title: 'How do we query a relational database?'
slide_title: 'SQL Functions'
theme: 'theme_002'
slide_layout: 'grid-2'
---

<section class="slide__text">

##### Change output with functions
We've already used **arithmetic operators** to perform calculations on numeric values 

There are also a lot of **baked-in functions** we can use to change the output of **string and date-based fields**

We'll only go through a few in this Bootcamp

The most common functions are listed below

###### ROUND()
Rounds a numeric value to a specific number of decimal places
```
SELECT ROUND(<number>, <decimal places>)
```

It will round up or down to the nearest decimal

For example:
- `SELECT ROUND(3.1415926535, 2);` returns 3.14;
- `SELECT ROUND(3.1415926535, 3);` returns 3.142;

###### CURRENT_DATE
Return the current date in 'YYYY-MM-DD' format
```
SELECT CURRENT_DATE;
```

###### CURRENT_TIMESTAMP
Return the current date and time to the millisecond ('YYYY-MM-DD HH:mm:ss.ms)
```
SELECT CURRENT_TIMESTAMP;
```

###### Date INTERVAL
Returns a date relative to the one you input
```
SELECT <date> + | - INTERVAL '<interval>';
```

The interval can be 'day', 'week', 'month', or 'year'

For example
- `SELECT CURRENT_TIMESTAMP + INTERVAL '1 day';` returns a tomorrow's date and time
- `SELECT '2022-03-27 10:15:54'::TIMESTAMP - INTERVAL '2 months';` returns a date and time exactly 2 months before the input (27th January 2022 @ 10:15:54 in this case)
  - Note that we have to convert the string date to a date or a timestamp for this function to work

###### LENGTH()
Counts the number of characters in an input
```
SELECT LENGTH(<input>);
```

For example, `SELECT LENGTH('abcdefgh');` is 8 characters long and so returns 8.

###### LEFT()
Return the start of a string
```
SELECT LEFT(<input>, <characters>);
```

For example `SELECT LEFT('abcdefgh', 3);` returns the first 3 characters 'abc'

###### RIGHT()
Return the end of a string
```
SELECT RIGHT(<input>, <characters>);
```

For example `SELECT RIGHT('abcdefgh', 3);` returns the last 3 characters 'fgh'

###### SUBSTRING()
Return part of a string
```
SELECT SUBSTRING(<input>, <start char>, <num of chars>);
```

For example `SELECT SUBSTRING('abcdefgh', 3, 4);`
  - Starts at the 3rd character
  - Returns 4 characters from there, so 3rd, 4th, 5th and 6th characters 'cdef'

###### CONCAT()
Merge different strings together
```
SELECT CONCAT(<input>, <start char>, <num of chars>);
```

For example, `SELECT CONCAT('abcdefgh', ' ijkl ', 'mnop');` returns 'abcdefgh ijkl mnop'



</section>


<section class="slide__images">
    <caption>1. ROUND function</caption>
    <img src="{{ '../../images/002_SELECT_Function_Round.png' | url }}" />
    <caption>2. Date Interval (Difference) function</caption>
    <img src="{{ '../../images/002_SELECT_Function_Date_Interval.png' | url }}" />
    <caption>3. LENGTH function</caption>
    <img src="{{ '../../images/002_SELECT_Function_Length.png' | url }}" />
    <caption>4. LEFT function</caption>
    <img src="{{ '../../images/002_SELECT_Function_Left.png' | url }}" />
    <caption>5. RIGHT function</caption>
    <img src="{{ '../../images/002_SELECT_Function_Right.png' | url }}" />
    <caption>6. SUBSTRING function</caption>
    <img src="{{ '../../images/002_SELECT_Function_Substring.png' | url }}" />
    <caption>7. CONCAT function</caption>
    <img src="{{ '../../images/002_SELECT_Function_Concat.png' | url }}" />


</section>


<section class="slide__exercises">

---

  #### Exercises:
1. Consider the text 'Manchester Digital Database Bootcamp'
  - How long is this text in characters?
  - Extract the word 'Bootcamp' from the text
  - Extract the word 'Database' from the text
2. Using the CURRENT_TIMESTAMP
  - Return a timestamp from 6 weeks ago
  - Return a timestamp 2 years into the future

</section>