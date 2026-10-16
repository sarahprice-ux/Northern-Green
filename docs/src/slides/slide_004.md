---
layout: 'base.njk'
slide_number: 4
slide_prev: 'slide_003/'
slide_next: 'slide_005/'
section_title: 'Where do databases fit in the development model?'
slide_title: 'Database Types'
theme: 'theme_001'
slide_layout: 'grid-2'
---

<section class="slide__text">

#### Relational - *(PostgreSQL, MySQL, SQL Server, Oracle)*
- Tabular - <span>(like an Excel spreadsheet)</span>
- Structured - <span>(rows and columns)</span>
- Consistency - <span>(datatypes & constraints.  Limit allowed input to improve quality)</span>

<span>Best when</span>
- <span>Clearly defined data structures & relationships.  Can be easily Normalised</span>
- <span>Data quality matters or needs constraining</span>

---

#### Non-Relational - *(MongoDB, Cassandra, Redis, Couchbase, DynamoDB)*
- Less structured - <span>(flexibility for inconsistent keys or arrays)</span>
- Data largely unrelated - <span>(no schemas, tables cannot be reliably joined)</span>

<span>Best when</span>
- <span>The data structure cannot be clearly defined</span>
- <span>If data inputs are variant and flexibility matters</span>

---

#### Graph Database - *(AWS Neptune, Neo4J, HyperGraphDB, ArangoDB)*
- Nodes & Edges - <span>(every node is related to other nodes via edges)</span>
- No structure - <span>(relationships at record level)</span>

<span>Best when</span>
- <span> Everything is related to everything else</span>
- <span> Deep-dive network analysis is required (e.g. fraud detection)</span>

</section>

<section class="slide__images">
<caption>1. Relational Database (example from the Product table in our SQL-Mart database)</caption>
<img src="{{ '../../images/001_Database_Types_Relational.png' | url }}" />
<caption>2. Non-Relational Database (objects and arrays. Various attributes of a test person)</caption>
<img src="{{ '../../images/001_Database_Types_Non_Relational.png' | url }}" />
<caption>3. Graph Database (example design of a 'friendship network' between people)</caption>
<img src="{{ '../../images/001_Database_Types_Graph.png' | url }}" />
</section>

