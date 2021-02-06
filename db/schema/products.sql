
DROP TABLE IF EXISTS products CASCADE;
CREATE TABLE products (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR (255),
  price INTEGER,
  picture_url VARCHAR(255),
  description VARCHAR(255),
  catagory VARCHAR(255),
  stock INTEGER
);
