$(() => {


  $.ajax({
    method: "GET",
    url: "/api/products",
    success: function (Obj) {
      let images = Obj.products;
      console.log("this is ", images);
      let imgId = [];
      let objArray = [];
      let saved = false;
      let favorite = false;
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
            <h3> ${obj.description} </h3>
            <h3> $${obj.price} </h3>
            <img src=${obj.picture_url}/>
        </div>
        <div class= "icongroup">
        <button class="email"  >Email Me <i class="far fa-envelope"></i></button>
        <button class="textme" >Text Me  <i class="fas fa-sms"></i></button>
        <button class="fav"    >Favorite <i class="fas fa-heart"></i></button>
        <button class="save"   >Sold     <i class="fas fa-handshake"></i></button>
        </div>
        <div id="favnote" align=center"></div>
        <div id="saved" align="center"></div>
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
          $(".fav").on("click", function () {
            if (favorite === false) {
              $("#favnote").empty();
              $("#favnote").append(`<i class="fas fa-save"> Saved!</i>`);
              // $("#saved").css("color", "red");
              favorite = true;
            } else {
              $("#favnote").empty();
              favorite = false;
            }
            $.ajax({
              method: "post",
              url: "/api/insertfav ",
              dataType: "string",
              data: obj,
            }).then((response) => {
              console.log(response);
              // db.query(`INSERT INTO favourites (product_id) VALUES (${obj.id});`);
            });

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

        })

        });
        y++;
      }
    },
  });
});
