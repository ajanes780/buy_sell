$(() => {
  $.ajax({
    method: "GET",
    url: "/api/products",
  }).then((response) => {
    let images = response.products;
    let y = 1;
    let productId = [];
    let objArray = [];

    while (productId.length < 9) {
      let number = Math.floor(Math.random() * images.length);
      if (productId.indexOf(number) === -1) {
        productId.push(number) && objArray.push(images[number]);
      }
    }

    for (let obj of objArray) {
      $(`#item-${y}`).empty();
      $(`#item-${y}`).html(` <img src="${obj.picture_url}"> </a>`);
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
        <button class="email" > Email Me </button>
        <button class="textme" > Text Me </button>
        <button class="fav" > Favorite </button>
        <i class="far fa-envelope"></i>
        <i class="fas fa-sms"></i>
        <i class="fas fa-heart"></i>
        </div>
        `;
        $(".saleitem-title").prepend(markup);
        $(".email").on("click", function () {
          window.location.href =
            "mailto:user@example.com?subject= I would like to buy your item &body=how low will you go ? ";
          console.log(obj.name);
        });
        $(".textme").on("click", function () {
          etPhoneHome();
          console.log(" you clicked me");
        });
        $(".fav").on("click", function () {
          $.ajax({
            method: "post",
            url: "/api/insertfav ",
            dataType: "string",
            data: obj,
          }).then((response) => {
            console.log(response);
            // db.query(`INSERT INTO favourites (product_id) VALUES (${obj.id});`);
          });

          console.log(" you fav me");
        });
      });
      y++;
    }
  });
});
