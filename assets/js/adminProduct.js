// adminProduct.js
const allTypesList = [];  
let productList = []; // Define productList

// Load products from localStorage or initialize with sample data
function loadProducts() {
    const storedProducts = JSON.parse(localStorage.getItem('productList'));
    if (storedProducts && Array.isArray(storedProducts)) {
        productList = storedProducts;
    } else {
        productList = initializeSampleProducts(); // Function to initialize sample products
        saveProductsToLocal(productList);
    }
}

// Save products to localStorage
function saveProductsToLocal(products) {
    localStorage.setItem('productList', JSON.stringify(products));
}

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
        (product) => product.price < 100
      );
    } else if (filterState.price === "More 100000") {
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= 100 && product.price < 200
      );
    } else if (filterState.price === "More 200000") {
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= 200 && product.price < 300
      );
    } else if (filterState.price === "More 300000") {
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= 300 && product.price < 400
      );
    } else if (filterState.price === "More 400000") {
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= 400
      );
    }
  }

  displayProductListProcessing(filteredProducts);
}

// Hàm hiển thị sản phẩm
function displayProductListProcessing(products = []) {
  // Clear existing products
  while (productContainer.children.length > 1) {
    productContainer.lastChild.remove();
  }

  products.forEach((product) => {
    const productRow = productTemplate.cloneNode(true);
    productRow.style.display = "";

    productRow.querySelector(".checkbox input").checked = false;
    productRow.querySelector(".product-info img").src = product.image;
    productRow.querySelector(".product-info img").alt = "Product Image";
    productRow.querySelector(".product-name").textContent = product.name;
    productRow.querySelector(".product-type").textContent = product.nature.type;

    const dateObj = new Date(product.date);
    productRow.querySelector(
      ".product-date"
    ).innerHTML = `${dateObj.toLocaleDateString()}<br>${dateObj.toLocaleTimeString()}`;

    productRow.querySelector(".product-quantity").textContent =
      product.quantity;
    productRow.querySelector(
      ".product-price"
    ).textContent = `${product.price} VND`;

    productContainer.appendChild(productRow);
  });
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
  
  loadProducts(); // Load products from localStorage or initialize sample data
  
  if (!initializeElements()) {
    console.error("Initialization failed. Products will not be displayed.");
    return;
  }
  
  countingTypeProduct();
  populateProductSelect();
  displayProductListProcessing(productList);
  filterSectionProductProcessing(); 
}