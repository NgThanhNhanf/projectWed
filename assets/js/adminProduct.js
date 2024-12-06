// Hàm xử lí nhóm sự kiện ở thẻ tool-bar
function toolBarProductProcessing() {}
// Hàm xử lí nhóm sự kiện ở thẻ filter Section
function filterSectionProductProcessing() {}

// Hàm xử lí nhóm sự kiện ở thẻ display product
function displayProductListProcessing() {
  const productRowTemplate = document.querySelector(".product-row");
  const productsContainer = productRowTemplate.parentElement;
  productsContainer.innerHTML = "";

  productList.forEach((product) => {
    const productRow = productRowTemplate.cloneNode(true);

    const checkbox = productRow.querySelector(".checkbox input");
    checkbox.checked = false;

    const img = productRow.querySelector(".product-info img");
    img.src = product.image;
    img.alt = "Product Image";

    const productName = productRow.querySelector(".product-name");
    productName.textContent = product.name;

    const productType = productRow.querySelector(".product-type");
    productType.textContent = product.nature.type;

    const productDate = productRow.querySelector(".product-date");
    const dateObj = new Date(product.date);
    productDate.innerHTML = `${dateObj.toLocaleDateString()}<br>${dateObj.toLocaleTimeString()}`;

    const productQuantity = productRow.querySelector(".product-quantity");
    productQuantity.textContent = product.quantity;

    const productPrice = productRow.querySelector(".product-price");
    productPrice.textContent = `${product.price} VND`;

    productsContainer.appendChild(productRow);
  });
}
// Hàm xử lí chính
function productsProcessing() {
  toolBarProductProcessing();
  filterSectionProductProcessing();
  displayProductListProcessing();
}
