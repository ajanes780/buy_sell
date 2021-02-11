$(() => {
  $(".create-listing").on("click", function () {
    $(".descriptionandlogo").empty();
    const markup = `<div class="create-listing-markup">

    <h3> Create Your Listing  </h3>
    <form method="post" action="/api/createlisting" class="listing-form">
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
