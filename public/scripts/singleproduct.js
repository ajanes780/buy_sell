$(() => {
  console.log(" JQ loaded ");

  $.ajax({
    method: "GET",
    url: "/api/products",
    success: (response) => {
      // console.log(response.products[0]);
      return response.products[0];
    },
  }).then((response) => {
    $("h6").html(response.products[0].description);
    $("#product-name").html(response.products[0].name);
    $("#23").html(response.products[0].url);
    // console.log("this is response 1", response.products[0].name);
  });
});
