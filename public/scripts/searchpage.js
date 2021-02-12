$(() => {
  // access search form data results
  let $form = "";
  $(".search-form").submit(function (event) {
    event.preventDefault();

    const formdata = $(this).serialize();
    $form = $("#text-aera").val().trim();
    console.log($form);
    let myObj = { key: $form };
    // querry the api for the search request
    $.ajax({
      method: "POST",
      url: "/api/search",
      datatype: "string",
      data: myObj,
    })
      // check the response from our search againts database/response
      .then((response) => {
        let x = 0;
        let items = [];
        console.log(" this is search response", response.products);
        while (x < response.products.length) {
          if (response.products[x].price <= $form) {
            console.log("this ", response.products[x].name);
            items.push(response.products[x]);
          }
          x += 1;
        }
        return items;
      })
      .then((response) => {
        console.log("this is items", response);
        let x = 0;
        // $(`.search-results`).empty();
        while (x < response.length) {
          $(".search-results").append(
            `<div class='items'><a href="/products/:${response[x].name} "> <img src="${response[x].picture_url}"> </a></div>`
          );
          x++;
        }
        console.log("after the loop");
      });

    // push our response from the search results to the DOM container search- results

    // // this is a onclick function which just logs the objec atm
    // $(`.search-results`).click(function () {
    //   console.log(obj);
    // });
  });
});
