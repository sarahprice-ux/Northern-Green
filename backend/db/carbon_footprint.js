const db = require('./index');

const initialiseCarbonFootprintTable = () => db.none(`
  CREATE TABLE IF NOT EXISTS "sequel-mart-schema"."carbonFootprint" (
    carbon_footprint_id SERIAL PRIMARY KEY,
    product_id INTEGER NOT NULL UNIQUE,
    carbon_footprint_score NUMERIC(10, 2) NOT NULL CHECK (carbon_footprint_score >= 0),
    sourcing_distance NUMERIC(10, 2) NOT NULL CHECK (sourcing_distance >= 0),
    product_weight NUMERIC(10, 2) NOT NULL CHECK (product_weight >= 0),
    footprint NUMERIC(18, 2) GENERATED ALWAYS AS (
      carbon_footprint_score * sourcing_distance * product_weight
    ) STORED,
    CONSTRAINT carbon_footprint_product_fk
      FOREIGN KEY (product_id)
      REFERENCES "sequel-mart-schema"."Products" (product_id)
      ON DELETE CASCADE
  );

  INSERT INTO "sequel-mart-schema"."carbonFootprint"
    (product_id, carbon_footprint_score, sourcing_distance, product_weight)
  SELECT
    product_id,
    1 + (product_id % 5),
    50 + ((product_id % 10) * 25),
    0.5 + ((product_id % 4) * 0.25)
  FROM "sequel-mart-schema"."Products"
  ON CONFLICT (product_id) DO NOTHING;
`);

module.exports = initialiseCarbonFootprintTable;