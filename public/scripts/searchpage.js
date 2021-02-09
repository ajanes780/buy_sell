// const { response } = require("express");

$(() => {
  let $form = "";
  $(".search-form").submit(function (event) {
    event.preventDefault();
    const formdata = $(this).serialize();
    $form = $("#text-aera").val();
    $.ajax({
      method: "get",
      url: "/api/products",
      data: $form,
    })
      .then((response) => {
        console.log("yooooooo");
        let x = 0;
        while (x < response.products.length) {
          if (response.products[x].name === $form) {
            console.log("this ", response.products[x].name);
            return response.products[x];
          }
          x += 1;
        }
      })
      .then((response) => {
        // $.ajax({
        //   method: "get",
        //   url: `/products/:${response}`,
        $(`.search-results`).empty();
        $(`.search-results`).html(
          `<a href="/products/:${response.name} "> <img src="${response.picture_url}"> </a>`
        );
        $(`.search-results`).click(function () {
          console.log(obj);
        });
      });
  });
});
// });
