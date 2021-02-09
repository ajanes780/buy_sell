// const express = require("express");
// const router = express.Router();

$(() => {
  let $form = [];
  $(".search-form").submit(function (event) {
    event.preventDefault();
    const formdata = $(this).serialize();
    $form = $("#text-aera").val();
    console.log($form);
    // res.redirect("singleproductpage.ejs");
  });
});
