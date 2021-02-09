// const { response } = require("express");

// const { response } = require("express");

$(() => {
  console.log(" JQ loaded ");

  $.ajax({
    method: "GET",
    url: "/api/products",
  }).then((response) => {
    let images = response.products;
    console.log("this is images", images);
    let y = 1;
    for (let obj of images) {
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
    <i class="fas fa-flag"></i>
    <i class="fas fa-heart"></i>
     </div>
    </div>
    `;
        $(".saleitem-title").prepend(markup);
      });
      y += 1;
    }
  });
});

// function loadsingleproduct(obj){

// const markup = `<div class="single-product-markup">
// <div>
//   <h2>${obj.products.name}</h2>
//   <div>
//       <h4> Product Description </h4>
//       <h3>
//       ${obj.products.description}
//       </h3>
// </div>

// <img
//   src=${obj.products.picture_url}
// />
// </div>
// <footer>
//     <div class= "icongroup">
//     <i class="fas fa-flag"></i>
//     <i class="fas fa-retweet"></i>
//     <i class="fas fa-heart"></i>
//     </div>
//     </footer>
// </div>
// `
// return markup

// };
