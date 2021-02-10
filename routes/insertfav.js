const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.post("/", (req, res) => {
    console.log("this is req body", req.body);
    // insert item to favorites data
    let query = `INSERT INTO favorites (product_id) VALUES (${req.body.id}); `;
    db.query(query)
      .then((data) => {
        const widgets = data.rows;
        res.json({ widgets });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};
