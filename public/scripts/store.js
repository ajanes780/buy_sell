$(() => {
  $.ajax({
    method: "GET",
    url: "/api/products",
  }).then((response) => {
    let images = response.products;
    let y = 1;
    let productId = [];
    let objArray = [];
    let saved = false;

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
              <h3>
              ${obj.description}
              </h3>
              <h3> $${obj.price}</h3>
        </div>

        <img
          src=${obj.picture_url}
        />
        </div>
        <div class= "icongroup">
        <button class="email" > Email Me <i class="far fa-envelope"></i></button>
        <button class="textme" > Text Me <i class="fas fa-sms"></i></button>
        <button class="fav" > Favorite <i class="fas fa-heart"></i></button>
        <button class="save" > Sold <i class="fas fa-handshake"></i></button>
        </div>
        <div id="saved" align="center"></div>
        `;
        $(".saleitem-title").prepend(markup);
        $(".email").on("click", function () {
          window.location.href =
            "mailto:user@example.com?subject= I would like to buy your item &body=how low will you go ? ";
          console.log(obj.name);
        });
        //STORE ITEMS TEXT ME OPTION FROM MAIN PAGE
        $(".textme").on("click", function (event) {
            event.preventDefault();
            let $form = "Hello! I would like to Inquire about your hat for sale :)"
            let form = $form;
            $.ajax({
              method: "post",
              url: "/api/twillo",
              datatype: "string",
              data: form,
            }).then(() => {
              alert("SMS Sent!");
            });
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
        $(".save").on("click", function () {
          console.log(saved);
          $("#saved").empty();
          if (saved === false) {
            $("#saved").empty();
            $("#saved").append(`<i class="fas fa-hand-holding-usd"> Sold!</i>`);
            // $("#saved").css("color", "red");
            saved = true;
          } else {
            $("#saved").empty();
            saved = false;
          }
        });
      });

      y++;
    }
  });
});
