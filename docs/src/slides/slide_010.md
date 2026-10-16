---
layout: 'base.njk'
slide_number: 10
slide_prev: 'slide_009/'
slide_next: 'slide_011/'
section_title: 'How do we create and query a relational database?'
slide_title: 'Data Types'
theme: 'theme_002'
slide_layout: 'grid-2'
---

<section class="slide__text">

##### "Acceptable values that can be returned or stored"

Key points:
- Regulates input to ensure it’s acceptable
- The data type is included for each returned column in the Query Tool
- Helps to optimise the execution plan by assigning resources appropriately
  - e.g. Limiting to a smallint over an int saves 2 bytes per row
  - Over a 1 billion row table, that would save ~1GB in storage and memory to query

<hr />

<table>
  <tr>
    <th>Common Types</th>
    <th>Input Accepted</th>
    <th>Bytes Reserved</th>
  </tr>

  <tr>
    <th>...</th>
    <th>...</th>
    <th>...</th>
  </tr>
  <tr>
    <th>Text</th>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>VARCHAR(x)</td>
    <td>Text, number or other ascii character up to the number in brackets. <br />
    e.g. (varchar(10) would accept up to 10 characters)</td>
    <td>chars+1</td>
  </tr>
  <tr>
    <td>NVARCHAR(x)</td>
    <td>As above but also accepts foreign ascii characters (e.g. ä, é, ø, ü)</td>
    <td>2*chars+1</td>
  </tr>

  <tr>
    <th>...</th>
    <th>...</th>
    <th>...</th>
  </tr>
  <tr>
    <th>Integers</th>
    <th>(Whole Numbers)</th>
    <th></th>
  </tr>

  <tr>
    <td>BIT</td>
    <td>Either 0 or 1 (used for yes/no or true/false flags)</td>
    <td>1</td>
  </tr>
  <tr>
    <td>SMALLINT</td>
    <td>Any whole number between -32,767 and 32,767</td>
    <td>2</td>
  </tr>
  <tr>
    <td>INT</td>
    <td>Any whole number between -2,147,483,647 and 2,147,483,647</td>
    <td>4</td>
  </tr>
  <tr>
    <td>BIGINT</td>
    <td>-9,223,372,036,854,775,807 to 9,223,372,036,854,775,807</td>
    <td>8</td>
  </tr>

  <tr>
    <th>...</th>
    <th>...</th>
    <th>...</th>
  </tr>
  <tr>
    <th>Numeric</th>
    <th>(also known as Decimal)</th>
    <td></td>
  </tr>
  <tr>
    <td>NUMERIC(p, s)</td>
    <td>Any decimal up to the number of digits (precision) and decimal places (scale) <br /> e.g. (numeric(5,2) would accept a number up to 999.99)</td>
    <td>5-17</td>
  </tr>

  <tr>
    <th>...</th>
    <th>...</th>
    <th>...</th>
  </tr>
  <tr>
    <th>Dates & Times</th>
    <th></th>
    <th></th>
  </tr>
  <tr>
    <td>DATE</td>
    <td>A date based on the current locale in YYYY-MM-DD format</td>
    <td>3</td>
  </tr>
  <tr>
    <td>TIMESTAMP</td>
    <td>A date based on the current locale in YYYY-MM-DD HH:MM:SS.MS format</td>
    <td>5-8</td>
  </tr>
</table>

</section>


<section class="slide__images">
    <caption>1. Data Type = 'text'</caption>
    <img src="{{ '../../images/002_SELECT_Text.png' | url }}" />
    <caption>2. Data Type = 'integer'</caption>
    <img src="{{ '../../images/002_SELECT_Highlighted.png' | url }}" />
    <caption>3. Data Type = 'numeric'</caption>
    <img src="{{ '../../images/002_SELECT_Numeric.png' | url }}" />
    <caption>4. Data Type = 'timestamp'</caption>
    <img src="{{ '../../images/002_SELECT_Timestamp.png' | url }}" />

</section>
