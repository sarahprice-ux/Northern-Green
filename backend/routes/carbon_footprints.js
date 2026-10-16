const express = require('express');
const router = express.Router();
const db = require('../db');
const initialiseCarbonFootprintTable = require('../db/carbon_footprint');

router.get('/', (req, res) => {
  initialiseCarbonFootprintTable()
    .then(() => db.any(`
    SELECT
      cf.carbon_footprint_id,
      cf.product_id,
      p.product_item,
      p.product_variety,
      cf.carbon_footprint_score,
      cf.sourcing_distance,
      cf.product_weight,
      cf.footprint
    FROM "sequel-mart-schema"."carbonFootprint" cf
    INNER JOIN "sequel-mart-schema"."Products" p
      ON p.product_id = cf.product_id
    ORDER BY cf.footprint ASC, p.product_item ASC
    LIMIT 10;
  `))
    .then(rows => res.send(rows))
    .catch(error => {
      console.log(error);
      res.status(500).send({ error: 'Unable to retrieve carbon footprints' });
    });
});

module.exports = router;