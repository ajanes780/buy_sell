SELECT products.id, products.name, products.price, products.picture_url, products.description
FROM products JOIN favorites ON product_id = products.id
GROUP BY products.id;
