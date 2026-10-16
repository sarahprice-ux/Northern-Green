
const express = require('express');
const router = express.Router();
const db = require('../db');        
router.get('/', (req, res) => {
  db.any(
    `
    SELECT		DISTINCT cu.customer_name AS customer
    FROM 		"sequel-mart-schema"."Customers" AS cu
    ORDER BY cu.customer_name;
    `
  )
  .then(rows => {

    res.send(rows);
  })
  .catch(error => {
    console.log(error);
    res.status(500).send({ error: 'Unable to retrieve customers' });
  });
});

module.exports = router;