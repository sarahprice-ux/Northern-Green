---
layout: 'base.njk'
slide_number: 9
slide_prev: 'slide_008/'
slide_next: 'slide_010/'
section_title: 'How do we query a relational database?'
slide_title: 'SELECT ...'
theme: 'theme_002'
slide_layout: 'grid-2'
---

<section class="slide__text">

#### Requesting some information

```
SELECT <value1>, <value2>;
```

It's like saying: <span> "Hey, PostgreSQL; please can I have this returned to me?" </span>

##### For example:
- `SELECT 123;` returns the number 123 in the results panel
- `SELECT 'Hello World';` returns the text 'Hello'

##### Notes:
- We can execute the SQL by:
  - Clicking the play button on the toolbar at the top
  - Using the shortcut `F5`
- Note the **semi-colons** at the end of each query:
  - This tells PostgreSQL they are two separate queries
  - If these are removed and both queries are run, we would get a syntax error
  - If multiple queries are in the same session only the last query will return a result
  - To run a specific query, highlight it before executing it
- **Text and Dates** need to be surrounded by **single-quotes** (not double-quotes)
  - e.g. `SELECT 'Hello World';`
- **Integers and Numerics** can be put in as they are
  - e.g. `SELECT 123;`
- **Multiple columns** can be added by separating with commas
  - e.g. `SELECT 'foo', 'bar', 42, 2.73;` returns 4 columns

<hr />

We can use `SELECT` to perform calculations with **arithmetic operators**

- `SELECT 12 + 23;` returns the number 35 <span> "Hey, PostgreSQL; what is 12 + 23?"</span>
- `SELECT 10 * 8;` returns the number 80<span> "Hey, PostgreSQL; what is 10 x 8?"</span>
- `SELECT 3.14 + 2.73;` returns the decimal 5.87<span> "Hey, PostgreSQL; what is 3.14 + 2.73?"</span>
- `SELECT 56 - 23 + 12.3;` returns the decimal 45.3
- `SELECT 56 - (23 + 12.3);` returns the decimal 20.7 (following [BODMAS](https://en.wikipedia.org/wiki/Order_of_operations))

###### Booleans (A data type that returns `true` or `false`)
- `SELECT true` returns a boolean true, `SELECT false` returns a boolean false

###### Aliasing
- At the moment the column header is `?column?`
- If we include the `AS` keyword, we can give the column a name
  - e.g. `SELECT 123 AS my_number` replaces `?column?` with `my_number` (screenshot 5)
- When we query the database the column name of the table will be used by default
  - That behaviour can also be overwritten by the `AS` keyword

</section>


<section class="slide__images">
    <caption>1. Return some text</caption>
    <img src="{{ '../../images/002_SELECT_Text.png' | url }}" />
    <caption>2. Example of a syntax error, missed semicolon</caption>
    <img src="{{ '../../images/002_SELECT_Error.png' | url }}" />
    <caption>3. Example of a multi-line select, only returns the last statement</caption>
    <img src="{{ '../../images/002_SELECT_Multi_Line.png' | url }}" />
    <caption>4. Example of a multi-line select, running highlighted statement</caption>
    <img src="{{ '../../images/002_SELECT_Highlighted.png' | url }}" />
    <caption>5. Example of a column name being assigned</caption>
    <img src="{{ '../../images/002_SELECT_As_Alias.png' | url }}" />
</section>


<section class="slide__exercises">

---

  #### Exercises:
- Practice some more sums
  - Include minus (-), divide (/) or modulus (%) and combine numbers and/or decimals

</section>