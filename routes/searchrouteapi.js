/*
 * All routes for Widgets are defined here
 * Since this file is loaded in server.js into api/widgets,
 *   these routes are mounted onto /widgets
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.post("/", (req, res) => {
    console.log("this is req.body serach request ", Object.values(req.body));
    let a = Object.values(req.body);
    let value = a[0];

    let query = `SELECT name, picture_url, description, price
    FROM products
    WHERE price <= ${value} LIMIT 10 ;`;
    console.log(query);
    db.query(query)
      .then((data) => {
        const products = data.rows;
        res.json({ products });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};
