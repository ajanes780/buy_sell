$(() => {
  // access search form data results
  let $form = "";
  $(".search-form").submit(function (event) {
    event.preventDefault();
    const formdata = $(this).serialize();
    $form = $("#text-aera").val();
    // querry the api for the search request
    $.ajax({
      method: "get",
      url: "/api/products",
      data: $form,
    })
      // check the response from our search againts database/response
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
      // push our response from the search results to the DOM container search- results
      .then((response) => {
        $(`.search-results`).empty();
        $(`.search-results`).html(
          `<a href="/products/:${response.name} "> <img src="${response.picture_url}"> </a>`
        );

        // this is a onclick function which just logs the objec atm
        $(`.search-results`).click(function () {
          console.log(obj);
        });
      });
  });
});
