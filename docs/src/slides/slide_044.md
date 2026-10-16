---
layout: 'base.njk'
slide_number: 44
slide_prev: 'slide_043/'
slide_next: 'slide_045/'
section_title: 'How do we change content?'
slide_title: SQL Injection
theme: 'theme_004'
slide_layout: 'grid-2'
---

<section class="slide__text">

#### One of the most common types of hacking attack for SQL
- Used by hackers to establish what is there (e.g. by reading system tables)
- Used to modify and/or delete data or execute administration operations to an Operating System

###### This can be used to:
- Read unauthorised data <span>- Information Disclosure</span>
- Modify a system to a criminal’s advantage <span>- Authentication Bypass</span>
- Delete tables, databases or servers <span>- Compromise Availability</span>
- Take control of a system and use it for criminal activity <span>- Remote Command Execution</span>

##### Motivations for trying to hack a company's data
- Personal Gain
- Damage a Competitor
- Revenge
- Challenge or 'thrill' of doing so

##### Risks of falling foul of this
- Reputation <span>- Company and Individual</span>
- Financial Loss <span>- Company and Individual</span>
- Breaches of Conduct
    - <span>General Data Protection Regulation (GDPR)</span>
    - <span>Concent for Collecting Personal Data (CCPA)</span>
- Security Risk <span>- Company, Individual, Customers and Clients</span>

<hr />

##### An example of SQL Injection syntax
If our website had the option of user input and we wrote a search box
Let's say we wanted to return a list of varieties of products

If we were careless and added an input parameter like this:
```
SELECT product_variety
FROM "sequel-mart-schema"."Products"
WHERE product_item = '<User Parameter>'
```

If someone entered `apples`, the query would read:
```
SELECT product_item
FROM "sequel-mart-schema"."Products"
WHERE product_item = 'apples'
```

All would be good, the user would see all types of apples

<hr />

###### Hacking example 1
Howver, a hacker could enter `'apples'; SELECT * from pg_tables;--`

This would turn the query into 
```
SELECT product_variety
FROM "sequel-mart-schema"."Products"
WHERE product_item = 'apples'; SELECT * from pg_tables;--
```

- The first semi-colon terminates the first query
- The second one is executed and returned to the screen.
- The `--` at the end are comments and make it unlikely that any further code is considered

The result is that our application could suddenly expose our entire database structure

This could be used to:
- Change things (e.g. add extra digits to a bank balance)
- Delete things (e.g. remove tables, schemas, databases
- Control things (e.g. take control of servers)

###### Hacking example 2
<div class="warning">Don't test these queries on other tables your database!  You'll need them for the exercises!</div>

Even worse would be `'apples'; DROP TABLE "sequel-mart-schema"."aaa_Dummy_Table";--`

This would turn the query into 
```
SELECT product_variety
FROM "sequel-mart-schema"."Products"
WHERE product_item = 'apples'; DROP TABLE "sequel-mart-schema"."aaa_Dummy_Table";--
```

and our `aaa_Dummy_Table` table would be gone.

<hr />

#### Protecting Against SQL Injection

##### Network
- Use HTTPS End-to-end encryption
- Use IPS Signitures & keep them updated to detect threats
    - Regex signitures that detect whether a script is vulnerable to known attacking techniques

##### Application (Frontend)
- Assume code is malicious unless proven not to be
- Validate user input (e.g. must be an email format, a number between 0 and 9 where possible)
- Validate all input strings (e.g. apply escape characters to known Injection patterns)

##### Application (Backend)
- Use command parameters (put the values from an input into separate parameters & use dynamically)
- Cast input types for fields and reject if it doesn't match
- Minimise user privileges
- Minimise user's access to IP address ranges & open ports
- Use a 'staging' database to triage new data before committing to the ‘live’ database
- Encrypt sensitive data (e.g. SHA-2 for passwords, one-way hash for other data)
- Remove unneeded data

<hr />

#### Final Thoughts
- Bear in mind all frontend and backend developers are jointly responsible for following GDPR guidelines
- Make sure data sanitisation is a key part of designing a project
- Breaches by criminals can be very costly financially, legally, and through lost reputation

</section>

<section class="slide__images">



</section>
