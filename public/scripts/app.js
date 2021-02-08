$(() => {
<<<<<<< HEAD
  console.log(" JQ loaded ");
=======
  //TODO - fix asynchronous issue with ajax call so i can access the object globally
  //and pass it into an .on "click" function
  let globalArray = [];

  //POPULATE FEATURED ITEMS WITH RANDOM IMGS FROM DATABASE
>>>>>>> 9276224514763000e83619b06c5218a2bd9a80ac
  $.ajax({
    method: "GET",
    url: "/api/products",
    success: function (Obj) {
      //Pick 3 different random products from DB
      let images = Obj.products;
      let objArray = [];
      let x = 0;
      //to compare previous values, to avoid picking the same number twice
      let compare = 0;
      let compare2 = 0;
      let random = 0;

      while (x < 3) {
        if (x === 0) {
          random = Math.floor(Math.random() * 9);
          compare = random;
        } else if (x === 1) {
          while (compare === random) {
            random = Math.floor(Math.random() * 9);
          }
          compare2 = random;
        } else if (x === 2) {
          while (compare2 === random || compare === random) {
            random = Math.floor(Math.random() * 9);
          }
        }
        objArray[x] = images[random];

        x += 1;
      }

      //Populate featured items with product images
      let y = 1;
      for (let obj of objArray) {
        $(`.featureitem-${y}`).empty();
        $(`.featureitem-${y}`).html(`<img src="${obj.picture_url}">`);
        y += 1;
      }
      //let a = $(`.featureitem-1`);

//let textLength = $("textarea")
//let textLength = $("textarea").val().length;

      //console.log(a);
      $(".featureitem-1").on("click", function () {
        window.location.href = "/singleproduct";
        console.log(a);
        $(".product-Image").empty();
        $(".product-Image").html(`<img src="${objArray[0]["picture_url"]}">`);
      });

    }


  });

  //FEATURE ITEMS REDIRECT


  $(".featureitem-2").on("click", function () {
    window.location.href = "/singleproduct";
  });

  $(".featureitem-3").on("click", function () {
    window.location.href = "/singleproduct";
  });
});
