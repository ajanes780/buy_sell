// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "development";
const express = require("express");
const bodyParser = require("body-parser");
const sass = require("node-sass-middleware");
const app = express();
const morgan = require("morgan");
// const etPhoneHome = require("../buy_sell/public/scripts/send_sms");

// set up messageing with twilio

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  "/styles",
  sass({
    src: __dirname + "/styles",
    dest: __dirname + "/public/styles",
    debug: true,
    outputStyle: "expanded",
  })
);
app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const usersRoutes = require("./routes/users");
const widgetsRoutes = require("./routes/widgets");
const homeRoutes = require("./routes/home");
const productRoutes = require("./routes/products");
const insertfav = require("./routes/insertfav");
const favoriteRoutes = require("./routes/favorites");
const twilloRoute = require("./routes/twillo");
const createlisting = require("./routes/createlistingroute");
const search = require("./routes/searchrouteapi");

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/api/users", usersRoutes(db));
app.use("/api/widgets", widgetsRoutes(db));
app.use("/api/home", homeRoutes(db));
app.use("/api/products", productRoutes(db));
app.use("/api/insertfav", insertfav(db));
app.use("/api/favorites", favoriteRoutes(db));
app.use("/api/twillo", twilloRoute(db));
app.use("/api/createlisting", createlisting(db));
app.use("/api/search", search(db));
//api for favorites

// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/loggedin", (req, res) => {
  res.render("loggedin.ejs");
});
app.get("/singleproduct", (req, res) => {
  res.render("singleproductpage.ejs");
});
app.get("/products/:id", (req, res) => {
  res.send(req.query.id);
});
app.get("/products/:name", (req, res) => {
  res.render("singleproductpage.ejs");
});

app.get("/search", (req, res) => {
  res.render("search.ejs");
});
app.get("/favourites", (req, res) => {
  res.render("favourites.ejs");
});
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
