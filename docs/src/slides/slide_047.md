---
layout: 'base.njk'
slide_number: 47
slide_prev: 'slide_046/'
slide_next: 'slide_048/'
section_title: 'Sequel-Mart'
slide_title: 'Building Sequel-Mart'
theme: 'theme_005'
slide_layout: 'grid-1'
---

<section class="slide__text">

###### Separating the concerns
Our project is built using:
- A **frontend**
    - The Sequel-Mart web page
    - Built to manage user experience
- A **backend**
    - Our database
    - Built to store data

<hr />

###### When a user loads the page
- The front-end loads the basic structure and styling of the page
- It then needs to make a request to the backend to provide the data
- Once the frontend receives the data it can display it on the web page

###### How does the frontend and the backend communicate?
- The backend provides one or more **routes**
- The frontend makes a request for this data
- The backend can either respond to or reject the request

If it responds successfully:
- It provides the result of the query to a URL
- These can be presented in any form of consumable data (JSON, CSV, Parquet etc.)
- The frontend then accesses this URL

<hr />

###### The files in the Frontend and Backend of our project

<img class="bg-hidden img-large" src="{{ '../../images/005_Sequel_Mart_File_Structure.png' | url }}" />


</section>

<section class="slide__images">



</section>
