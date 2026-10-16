---
layout: 'base.njk'
slide_number: 37
slide_prev: 'slide_036/'
slide_next: 'slide_038/'
section_title: 'How do we change content?'
slide_title: System Tables
theme: 'theme_004'
slide_layout: 'grid-2'
---

<section class="slide__text">

#### Shows 'metadata' (data about data)
Postgresql has a hidden `pg_catalog` schema. This keeps track of:
- System-designed components needed to keep the database server functioning
- User-designed components (tables, views, indexes etc)
    - Concepts like Views and Indexes will be introduced later in this section

We can access this schema with normal SQL:
```
SELECT *
FROM pg_tables;
```

We do not need to include the `pg_catalog` schema name. Postgres knows where this is

Notice we can see:
- All the tables in our `sequel-mart-schema` schema
- Tables in the `table-load-base` schema (more to follow in this section)
- Tables in the `pg_catalog` schema

All these tables can be viewed with a `SELECT ... FROM`

Examples of other tables in the `pg_catalog` schema are:

<table>
  <tr>
    <th>System Table</th>
    <th>Description</th>
  </tr>

  <tr>
    <th>...</th>
    <th>...</th>
  </tr>
  <tr>
    <td>pg_database</td>
    <td>details of every database on the server</td>
  </tr>
  <tr>
    <td>pg_tables</td>
    <td>details of tables on the server</td>
  </tr>
  <tr>
    <td>pg_stats</td>
    <td>contents of every column in a table larger than 8KB</td>
  </tr>
  <tr>
    <td>pg_stat_user_tables</td>
    <td>details of every user table inc. row counts and usage stats</td>
  </tr>

  <tr>
    <th>...</th>
    <th>...</th>
  </tr>

  <tr>
    <td>pg_views</td>
    <td>views in the database, including system views</td>
  </tr>
  <tr>
    <td>pg_indexes</td>
    <td>indexes on tables in the server</td>
  </tr>
  <tr>
    <td>pg_user</td>
    <td>user accounts on the server</td>
  </tr>
  <tr>
    <td>pg_locks</td>
    <td>locks taken in a transaction</td>
  </tr>
</table>

<hr />


</section>

<section class="slide__images">
<caption>1. pg_tables example</caption>
<img src="{{ '../../images/004_System_Tables_pg_tables.png' | url }}" />
<caption>2. pg_stat_user_tables example</caption>
<img src="{{ '../../images/004_System_Tables_pg_tables_stat_user.png' | url }}" />


</section>
