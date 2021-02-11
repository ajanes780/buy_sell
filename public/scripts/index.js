$(() => {
  $(".create-listing").on("click", function () {
    $(".descriptionandlogo").empty();
    const markup = `<div class="create-listing-markup">

    <h3> Create Your Listing  </h3>
    <form method="post" action="/api/newproduct" class="listing-form">
        <label for="name">Enter a name:</label>
          <textarea id="name" placeholder="name"> </textarea>
        <label for="price">Enter a price:</label>
          <textarea id="price" placeholder="price"> </textarea>
        <label for="description">Enter a description:</label>
          <textarea id="description" placeholder="description"> </textarea>
        <label for="photo">Enter a photo url:</label>
          <textarea id="url" placeholder="photo url"> </textarea>
          <button class="submit-listing" type="submit">Submit</button>
        </form>
      </div>`;
    $(".descriptionandlogo").prepend(markup);
  });
});

{
  /* <h1>The input placeholder attribute</h1>

<form action="/action_page.php">
  <label for="phone">Enter a phone number:</label><br><br>
  <input type="tel" id="phone" name="phone" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"><br><br>
  <small>Format: 123-45-678</small><br><br>
  <input type="submit">
</form>

</body>
</html> */
}
