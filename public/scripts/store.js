// store ajax api requests
$(() => {
  console.log(" JQ loaded ");
  // make a request to the api for info  and return a promise called response
  $.ajax({
    method: "GET",
    url: "/api/products",
  }).then((response) => {
    // create a loop that goes through the images variable and emptys each container and then adds new
    // html and a on click listener
    let images = response.products;
    let y = 1;
    for (let obj of images) {
      $(`#item-${y}`).empty();
      $(`#item-${y}`).html(` <img src="${obj.picture_url}"> </a>`);
      // on click of a store item we empty the container and reload with our single product markup variable
      $(`#item-${y}`).click(function () {
        $(".saleitem-title").empty();
        const markup = `<div class="single-product-markup">
    <div>
      <h2>${obj.name}</h2>
      <div>
          <h4> Product Description </h4>
          <h3>
          ${obj.description}
          </h3>
    </div>

    <img
      src=${obj.picture_url}
    />
    </div>
    <div class= "icongroup">
<<<<<<< HEAD
    <button class="email" > Email Me </button>
    <button class="textme" > Text Me </button>
    <button class="fav" > Favorite </button>
    <i class="far fa-envelope"></i>
    <i class="fas fa-sms"></i>
    <i class="fas fa-heart"></i>
=======
    <i class="far fa-envelope fa-lg"></i>
    <i class="fas fa-heart fa-lg"></i>
>>>>>>> 4c2b5f06e6f3a7e560da5c2fc65bcaa5ede5bb93
    </div>
    </div>

    `;
        // this will add the mark up to the sale item container
        $(".saleitem-title").prepend(markup);
        $(".email").on("click", function () {
          window.location.href =
            "mailto:user@example.com?subject= I would like to buy your item &body=how low will you go ? ";
          console.log(" you clicked me");
        });
        $(".textme").on("click", function () {
          window.location.href =
            "mailto:user@example.com?subject= I would like to buy your item &body=how low will you go ? ";
          console.log(" you clicked me");
        });
        $(".textme").on("click", function () {
          window.location.href =
            "mailto:user@example.com?subject= I would like to buy your item &body=how low will you go ? ";
          console.log(" you clicked me");
        });
      });
      y += 1;
    }
  });
});
