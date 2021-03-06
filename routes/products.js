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
    console.log("this is req.body serach request ", Object.keys(req.body));

    let query = `SELECT * FROM products`;
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
