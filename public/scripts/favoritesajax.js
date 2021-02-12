$(() => {
  $.ajax({
    method: "GET",
    url: "/api/favorites",
  }).then((response) => {
    console.log(" this is response", response.favorites);
    let images = response.favorites;
    let x = 1;

    for (let obj of images) {
      // console.log("this is obj", obj);
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
          <h3> $${obj.price}</h3>
    </div>

    <img
      src=${obj.picture_url}
    />
    </div>
    <form id="form" name="form" action="/api/twillo" method="POST">
          <label for="form">Are you interested in this item </label>
          <textarea name="text" id="text"></textarea>
          <button class="textme" type="submit"> Text Me <i class="fas fa-sms"></i></button>
        </form>
    <div class= "icongroup">
    <button class="email" > Email Me <i class="far fa-envelope"></i></button>
    </div>
    `;
        $(".fav-container").prepend(markup);
        $(".email").on("click", function () {
          window.location.href =
            "mailto:user@example.com?subject= I would like to buy your item &body=how low will you go ? ";
          console.log(obj.name);
        });
        //FAVORITE ITEMS TEXT ME OPTION FROM FAVORITES PAGE
        $("#form").submit(function (event) {
          event.preventDefault();
          let $form = $("#text").val();
          let form = $form;
          console.log(typeof $form);
          console.log(typeof form);
          $.ajax({
            method: "post",
            url: "/api/twillo",
            datatype: "string",
            data: form,
          }).then((response) => {
            alert("SMS Sent!");
          });
        });
      });
      x++;
    }
  });
});
