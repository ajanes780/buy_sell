
DROP TABLE IF EXISTS feature_items CASCADE;
CREATE TABLE feature_items (
  id SERIAL PRIMARY KEY NOT NULL,
  product_id INTEGER REFERENCES products(id)
);
