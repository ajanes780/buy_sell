const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.post("/", (req, res) => {
    let a = Object.values(req.body);
    let message = a;
    console.log("this is req body create listing", message);
    // console.log("this is req body ", req.body);
    // insert item to favorites data
    let query = `INSERT INTO products (name, price, picture_url, description) VALUES ('${message[0]}', ${message[1]}, '${message[3]}', '${message[2]}');`;
    db.query(query)
      .then((data) => {
        const listing = data.rows;
        res.json({ listing });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};
