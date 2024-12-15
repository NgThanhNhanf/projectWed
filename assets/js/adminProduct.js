// adminProduct.js
const allTypesList = [];

// Initialize sample products
function initializeSampleProducts() {
    return [
        {
            id: 1,
            name: "Sample Product 1",
            nature: { type: "Type A" },
            image: "path/to/image1.jpg",
            date: "2023-10-01T10:00:00",
            quantity: 100,
            price: 150
        },
        // Add more sample products as needed
    ];
}

// Hàm xử lí nhóm sự kiện ở thẻ tool-bar
function toolBarProductProcessing() {}
// Hàm xử lí nhóm sự kiện ở thẻ filter Section
// Khởi tạo phần tử trong DOM
let productContainer = null;
let productTemplate = null;

const filterState = {
  type: null,
  date: null,
  quality: null,
  price: null,
};
// Khởi tạo phần tử trong DOM

// Format lại form product-list
function initializeElements() {
  productContainer = document.querySelector(".product-list");
  if (!productContainer) {
    console.error("Error: .product-list element not found in the DOM.");
    return false;
  }

  const productRow = productContainer.querySelector(".product-row");
  if (!productRow) {
    console.error("Error: .product-row element not found within .product-list.");
    return false;
  }

  productTemplate = productRow.cloneNode(true);
  productRow.style.display = "none";
  return true;
}

// Khởi tạo các loại sản phẩm sau đó đưa vào allTypeList
function countingTypeProduct() {
  allTypesList.length = 0;
  const typesSet = new Set();
  productList.forEach((product) => {
    typesSet.add(product.nature.type);
  });
  allTypesList.push(...typesSet);
}

// Fill giá trị trong AllTypeList cho hộp chọn
function populateProductSelect() {
  const productSelect = document.getElementById("Product");
  while (productSelect.options.length > 1) {
    productSelect.remove(1);
  }

  allTypesList.forEach((type) => {
    const option = document.createElement("option");
    option.value = type;
    option.textContent = type;
    productSelect.appendChild(option);
  });
}

// Lọc theo loại
function typeFilter() {
  const productSelect = document.getElementById("Product");

  productSelect.addEventListener("change", function () {
    filterState.type = this.value === "---" ? null : this.value;
    applyAllFilters();
  });
}

// Lọc sản phẩm theo thời gian
function createAtFilter() {
  const createAtInput = document.getElementById("CreateAt");
  createAtInput.addEventListener("change", function () {
    filterState.date = this.value || null;
    applyAllFilters();
  });
}

// Lọc theo số lượng
function quantityFilter() {
  const qualitySelect = document.getElementById("Quality");

  qualitySelect.addEventListener("change", function () {
    filterState.quality = this.value === "---" ? null : this.value;
    applyAllFilters();
  });
}

// Theo Giá
function priceFilter() {
  const priceSelect = document.getElementById("Price");

  priceSelect.addEventListener("change", function () {
    filterState.price = this.value === "---" ? null : this.value;
    applyAllFilters();
  });
}

// Lọc
function applyAllFilters() {
  let filteredProducts = [...productList];

  if (filterState.type) {
    filteredProducts = filteredProducts.filter(
      (product) => product.nature.type === filterState.type
    );
  }

  if (filterState.date) {
    filteredProducts = filteredProducts.filter((product) => {
      const productDate = product.date.substring(0, 7);
      return productDate === filterState.date;
    });
  }

  if (filterState.quality) {
    if (filterState.quality === "0") {
      filteredProducts = filteredProducts.filter(
        (product) => product.quantity === 0
      );
    } else if (filterState.quality === "1-50") {
      filteredProducts = filteredProducts.filter(
        (product) => product.quantity >= 1 && product.quantity < 50
      );
    } else if (filterState.quality === ">=50") {
      filteredProducts = filteredProducts.filter(
        (product) => product.quantity >= 50
      );
    }
  }

  if (filterState.price) {
    if (filterState.price === "Less 100000") {
      filteredProducts = filteredProducts.filter(
        (product) => product.price < 100000
      );
    } else if (filterState.price === "More 100000") {
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= 100000 && product.price < 200000
      );
    } else if (filterState.price === "More 200000") {
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= 200000 && product.price < 300000
      );
    } else if (filterState.price === "More 300000") {
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= 300000 && product.price < 400000
      );
    } else if (filterState.price === "More 400000") {
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= 400000
      );
    }
  }

  displayProductListProcessing(filteredProducts);
}

// Hàm hiển thị sản phẩm
function displayProductListProcessing(products = []) {
  const productContainer = document.querySelector('.product-list');

  if (products.length === 0) {
    productContainer.innerHTML = `<p>Không có sản phẩm</p>`;
  } else {
    productContainer.innerHTML = products.map(product => `
      <div class="product-row">
        <div class="checkbox">
          <input type="checkbox">
        </div>
          <img src="${product.image}" alt="Product Image">
          <p class="product-name">${product.name}</p>
        <p class="product-type">${product.nature.type}</p>
        <p class="product-date">${new Date(product.date).toLocaleDateString()}<br>${new Date(product.date).toLocaleTimeString()}</p>
        <p class="product-quantity">${product.quantity}</p>
        <p class="product-price">${product.price} VND</p>
        <div class="product-actions"><i class="fa-regular fa-address-card"></i></i></div>
        <!-- Thêm các phần tử khác nếu cần -->
      </div>
    `).join('');
  }
}

// Xóa lọc
function resetFilter() {
  document.getElementById("Product").value = "---";
  document.getElementById("CreateAt").value = "";
  document.getElementById("Quality").value = "---";
  document.getElementById("Price").value = "---";
  filterState.type = null;
  filterState.date = null;
  filterState.quality = null;
  filterState.price = null;
  applyAllFilters();
}



function filterSectionProductProcessing() {
  typeFilter();
  createAtFilter();
  quantityFilter();
  priceFilter();
}

// Hàm xử lí nhóm sự kiện ở thẻ filter Section

function productsProcessing() {
  toolBarProductProcessing();
  
  if (!initializeElements()) {
    console.error("Initialization failed. Products will not be displayed.");
    return;
  }
  
  countingTypeProduct();
  populateProductSelect();
  displayProductListProcessing(productList);
  console.log("Products page handler loaded");
  filterSectionProductProcessing(); 

}