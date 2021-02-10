$(() => {
  $.ajax({
    method: "GET",
    url: "/api/favorites",
  }).then((response) => {
    console.log(" this is response", response);
    let images = response.products;
    let x = 1;

    for (let obj in images) {
      $(`.favitem-${x}`).empty();
      $(`.favitem-${x}`).html(`<img src="${obj.picture_url}">`);
      $(`.favitem-${x}`).click(function () {
        $(".fav-container").empty();
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
        $(".fav-container").prepend(markup);
        $(".email").on("click", function () {
          window.location.href =
            "mailto:user@example.com?subject= I would like to buy your item &body=how low will you go ? ";
          console.log(obj.name);
        });
        $(".textme").on("click", function () {
          etPhoneHome();
          console.log(" you clicked me");
        });
      });
      x++;
    }
  });
});
