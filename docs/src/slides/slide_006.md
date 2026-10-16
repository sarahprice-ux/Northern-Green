---
layout: 'base.njk'
slide_number: 6
slide_prev: 'slide_005/'
slide_next: 'slide_007/'
section_title: 'Setting Up'
slide_title: 'Access a Query Tool Window Session'
theme: 'theme_001'
slide_layout: 'grid-2'
---

<section class="slide__text">

##### To access a query window in pg-admin:
  - Left-click the `Tools` menu at the top and click `Query Tool`
  - or Right-click `Tables` and click `Query Tool`

A new editing window should appear in the canvas on the right

To close the window
- Right-click on the tab containing the Query Tool
- Click `Remove Panel`

<hr />

##### Commenting lines of SQL
We can add comments to our code when developing script

These will be ignored by the query engine and are designed as a prompt for a developer

Some like including it, others don't but it can be useful in the right context

A comment for a single line of SQL only starts with two dashes `--`

e.g. `--This is a comment on a single line`

Comments can go over multiple lines when enclosed between `/*` and `*/`

```
/*
This is a comment
on multiple lines
*/
```

</section>


<section class="slide__images">
    <caption>1. Access the Query Tool Window</caption>
    <img src="{{ '../../images/002_SELECT_Query_Tool.png' | url }}" />
    <caption>2. Close the Query Tool Window</caption>
    <img src="{{ '../../images/002_SELECT_Query_Tool_Close.png' | url }}" />
    <caption>3. Comments in the Query Tool</caption>
    <img src="{{ '../../images/002_SELECT_Query_Tool_Comments.png' | url }}" />
</section>