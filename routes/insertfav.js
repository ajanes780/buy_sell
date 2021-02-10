const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.post("/", (req, res) => {
    console.log("this is req body", req.body.id);
    // insert item to favorites data
    db.query(`INSERT INTO favourites (product_id) VALUES (${req.body.id});`)
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
