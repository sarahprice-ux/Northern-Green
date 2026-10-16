
const express = require('express');
const router = express.Router();
const db = require('../db');        
router.get('/', (req, res) => {
  db.any(
    `
    SELECT		DISTINCT pr.product_item AS product_item
    FROM 		"sequel-mart-schema"."Products" AS pr
    ORDER BY pr.product_item;
    `
  )
  .then(rows => {

    res.send(rows);
  })
  .catch(error => {
    console.log(error);
  })
})

module.exports = router;