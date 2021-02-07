$(() => {
  function getproductlsiting(product, agr1) {
    return `

  <div class="main-product-container">
      <div class="product-Image">
      <img src="${product.picture.url}" alt="product">
      </div>

      <div class="product-description">
        <h2> ${product.name}</h4>
      <h4>${product.description}</h4>
      </div>
`;
  }
});
