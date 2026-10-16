---
layout: 'base.njk'
slide_number: 7
slide_prev: 'slide_006/'
slide_next: 'slide_008/'
section_title: 'Setting Up'
slide_title: 'Quick tour of pg-admin'
theme: 'theme_001'
slide_layout: 'grid-2'
---

<section class="slide__text">

#### <u>Features</u>

##### Server
- Store and manage databases
- Manages data access for authorised users

##### Database
- Collection of schemas containing tables of data

##### Schema
- Collection of tables sharing security credentials

##### Table
- Collection of data about a specific subject (e.g. Customers, Products, Sales) 

##### Column (or field)
- Named attribute about a subject (e.g. Product Item, Product Category)
- Goes horizontally across the table
- Constrained with a data type

##### Row
- An individual instance of event that produces data about the subject
- Mapped to the columns (e.g. Alstromeria is in the category of Cut Flowers)
- Builds vertically down the table as each event is added



</section>

<section class="slide__images">
    <caption>1. Return some text</caption>
    <img src="{{ '../../images/001_PostgreSQL_Frontend.png' | url }}" />
</section>