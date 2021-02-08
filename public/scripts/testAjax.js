

$(() => {
//AJAX for sinlge Products page
//needs database route
//Generate HTML INJECTION with PASSED DATA
/*
   const backgroundImage = function (dbImage) {
     let $tweet = `<img src="${dbImage.user.avatars}">`;
     return $tweet;
   };

*/

//we are not posting right now we are just rendering
//CALL THE PAGE, INSERT HTML TARGETING #Image

$('#1').on("click", function () {

  $.ajax({ method: "GET", url: "/singleproducts" });

  });

});



/*
      $.ajax(method: "/singleProduct", data: $("#form").serialize() }).then(
     function () {
      let html = backgroundImage(database);
      $("#Image").text(html);
     }
*/




