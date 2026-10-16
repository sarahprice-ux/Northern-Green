# SQL FUNCTIONS - (Slide 12)

---

## 1.
Consider the text 'Manchester Digital Database Bootcamp'

Q: How long is this text in characters?

A: 36 characters
```
SELECT LENGTH('Manchester Digital Database Bootcamp');
```

---

Q: Extract the word 'Bootcamp' from the text

A: (`RIGHT` or `SUBSTRING` would work here)
```
SELECT RIGHT('Manchester Digital Database Bootcamp', 8);
```

---

Q: Extract the word 'Database' from the text

A: 'Database' starts at character 20 and is 8 characters long
```
SELECT SUBSTRING('Manchester Digital Database Bootcamp', 20, 8);
```

---

## 2.
Using the CURRENT_TIMESTAMP

Q: Return a timestamp from 6 weeks ago
```
SELECT CURRENT_TIMESTAMP - INTERVAL '6 weeks';
```

---

Q: Return a timestamp 2 years into the future
```
SELECT CURRENT_TIMESTAMP + INTERVAL '2 years';
```