$(() => {
  $.ajax({
    method: "GET",
    url: "/api/products",
    success: function (Obj) {
      let images = Obj.products;
      console.log("this is ", images);
      let imgId = [];
      let objArray = [];

      //PICK 3 RANDOM PRODUCTS FROM DB
      while (imgId.length < 3) {
        let number = Math.floor(Math.random() * images.length);
        if (imgId.indexOf(number) === -1) {
          imgId.push(number) && objArray.push(images[number]);
        }
      }

      //POPULATE FEATURED ITEMS

      let y = 1;
      for (let obj of objArray) {
        $(`.featureitem-${y}`).empty();
        $(`.featureitem-${y}`).html(`<img src="${obj.picture_url}"> </a>`);
        $(`.featureitem-${y}`).click(function () {
          $(".saleitem-title").empty();
          const markup = `<div class="single-product-markup">
        <div>
        <h2>${obj.name}</h2>
        <div>
            <h4> Product Description </h4>
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
        </div>

        `;
          $(".saleitem-title").prepend(markup);
          $(".email").on("click", function () {
            window.location.href =
              "mailto:user@example.com?subject= I would like to buy your item &body=how low will you go ? ";
            console.log(obj.name);
          });
          //FEATURED ITEMS TEXT ME OPTION
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
          $(".textme").on("click", function () {
            window.location.href =
              "mailto:user@example.com?subject= I would like to buy your item &body=how low will you go? ";
            console.log(" you clicked me");
          });
        });
        y++;
      }
    },
  });
});
