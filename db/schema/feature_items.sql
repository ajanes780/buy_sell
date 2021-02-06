
DROP TABLE IF EXISTS features_items CASCADE;
CREATE TABLE features_items (
  id SERIAL PRIMARY KEY NOT NULL,
  product_id REFERENCES products(id)
);
