
DROP TABLE IF EXISTS products CASCADE;
CREATE TABLE products (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR (255),
  price INTEGER,
  picture_url text,
  description VARCHAR(255),
  category VARCHAR(255),
  stock INTEGER
);
