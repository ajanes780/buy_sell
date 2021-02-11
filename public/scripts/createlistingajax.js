$(() => {
  console.log(" Yo is this even on !!!");
  let $form = "";
  let $form2 = "";
  let $form3 = "";
  let $form4 = "";
  $(".descriptionandlogo").submit(function (event) {
    $(".descriptionandlogo").attr("href", "http://localhost:8080/loggedin");

    event.preventDefault();
    $form = $("#name").val().trim();
    $form2 = $("#price").val().trim();
    $form3 = $("#description").val().trim();
    $form4 = $("#url").val().trim();

    let myobj = {
      name: $form,
      price: $form2,
      description: $form3,
      url: $form4,
    };
    $.ajax({
      method: "POST",
      url: "/api/createlisting",
      datetype: "string",
      data: myobj,
    }).then((response) => {
      console.log(" this is my response", response);
    });
  });
});
