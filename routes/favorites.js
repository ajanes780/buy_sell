/*
 * All routes for Widgets are defined here
 * Since this file is loaded in server.js into api/widgets,
 *   these routes are mounted onto /widgets
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    let query = `SELECT products.id, products.name, products.price, products.picture_url, products.description
    FROM products JOIN favorites ON product_id = products.id
    GROUP BY products.id
    ORDER BY products.id DESC
    LIMIT 5;`;
    console.log(query);
    db.query(query)
      .then((data) => {
        const favorites = data.rows;
        res.json({ favorites });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};
