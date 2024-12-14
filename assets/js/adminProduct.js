// adminProduct.js
const allTypesList = [];

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
    console.error(
      "Error: .product-row element not found within .product-list."
    );
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
function populateProductSelect(selectId) {
  const productSelect = document.getElementById(selectId);
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
  const productContainer = document.querySelector(".product-list");

  if (products.length === 0) {
    productContainer.innerHTML = `<p>Không có sản phẩm</p>`;
  } else {
    productContainer.innerHTML = products
      .map(
        (product) => `
      <div class="product-row" data-id="${product.id}">
        <div class="checkbox">
          <input type="checkbox">
        </div>
          <img src="${product.image}" alt="Product Image">
          <p class="product-name">${product.name}</p>
        <p class="product-type">${product.nature.type}</p>
        <p class="product-date">${new Date(
          product.date
        ).toLocaleDateString()}<br>${new Date(
          product.date
        ).toLocaleTimeString()}</p>
        <p class="product-quantity" >${product.quantity}</p>
        <p class="product-price">${product.price} VND</p>
        <div class="product-actions" onclick="editProduct(${
          product.id
        })"><i class="fa-regular fa-address-card"></i></i></div>
        <!-- Thêm các phần tử khác nếu cần -->
      </div>
    `
      )
      .join("");
  }
}

// Hàm chọn size
let selectedSizes = [];
// Hàm xử lý click cho size buttons
function toggleSize(button) {
  const size = button.dataset.size;

  if (button.classList.contains("selected")) {
    // Bỏ chọn
    button.classList.remove("selected");
    selectedSizes = selectedSizes.filter(s => s !== size);
  } else {
    // Chọn
    button.classList.add("selected");
    if (!selectedSizes.includes(size)) {
      selectedSizes.push(size);
    }
  }
}

// Thêm biến để lưu màu được chọn
let selectedColors = [];
// Hàm xử lý click cho color buttons
function toggleColor(button) {
  const colorName = button.dataset.color;

  if (button.classList.contains("selected")) {
    // Bỏ chọn
    button.classList.remove("selected");
    selectedColors = selectedColors.filter(c => c !== colorName); // Sửa lại logic filter
  } else {
    // Chọn
    button.classList.add("selected");
    selectedColors.push(colorName);
  }
  console.log("Selected colors:", selectedColors); // Debug
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

// NHÓM HÀM THÊM SỬA XÓA

function displayModal(modalId) {
  document.getElementById(modalId).classList.add("show");
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.remove("show");
}

// Khởi tạo hàm xem ảnh khi được tải lên
function initializeImagePreview() {
  const imgInput = document.getElementById("input-img");

  imgInput.onchange = function () {
    const file = this.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
      document.querySelector(".preview").innerHTML = `
          <img src="${e.target.result}" alt="Preview Image">
      `;
      // Lưu base64 tạm thời
      document.getElementById("input-img").dataset.base64 = e.target.result;
    };
    reader.readAsDataURL(file);
  };
}

function addProductForm () {
  displayModal('add-product-modal');
  populateProductSelect("product-type");
}

// Hàm xác nhận thêm sản phẩm
function addNewProduct() {
  const nameInput = document.getElementById("product-name");
  const typeInput = document.getElementById("product-type");
  const imgInput = document.getElementById("input-img");
  const quantityInput = document.getElementById("product-quantity");
  const priceInput = document.getElementById("product-price");
  const date = new Date();

  // Get values
  const nameProduct = nameInput.value.trim();
  const typeProduct = typeInput.value.trim();
  const quantity = parseInt(quantityInput.value, 10) || 0;
  const price = parseFloat(priceInput.value) || 0;

  // Kiểm tra số lượng
  if (isNaN(quantity) || quantity < 0) {
    alert("Quantity not negative.");
    quantityInput.focus();
    return;
  }

  // Kiểm tra giá
  if (isNaN(price) || price < 0) {
    alert("Price not negative.");
    priceInput.focus();
    return;
  }

  if (selectedColors.length === 0) {
    alert("Please select at least one color for the product. ");
    return;
  }

  // Kiểm tra kích thước
  if (selectedSizes.length === 0) {
    alert("Please select at least one size for the product. ");
    return;
  }

  // Kiểm tra các trường khác
  const image = imgInput.dataset.base64 || "";
  if (!nameProduct || !typeProduct || !image) {
    alert("Please filled image value");
    return;
  }

  const newProduct = {
    id: productList.length + 1,
    name: nameProduct,
    price: price,
    quantity: quantity,
    image: image, // Store base64 string
    nature: {
      color: selectedColors,
      size: selectedSizes,
      type: typeProduct,
    },
    date: date,
    detail: "",
  };

  // Add and save
  productList.push(newProduct);
  localStorage.setItem(config.productKey, JSON.stringify(productList));

  // Reset form
  nameInput.value = "";
  typeInput.value = "";
  imgInput.value = "";
  quantityInput.value = "";
  priceInput.value = "";
  selectedColors = [];
  selectedSizes = [];
  document.querySelector(".preview").innerHTML = "";
  document
    .querySelectorAll(".color-btn, .size-btn")
    .forEach((btn) => btn.classList.remove("selected"));

  // Close modal
  document.getElementById("add-product-modal").classList.remove("show");

  // Refresh display
  displayProductListProcessing(productList);
  alert("Product added successfully!");
}

// Hàm xử lý chỉnh sửa sản phẩm
function editProduct(productId) {
  // Reset mảng colors và sizes
  selectedColors = [];
  selectedSizes = [];

  displayModal("edit-product-modal");
  populateProductSelect("edit-product-type");
  const product = productList.find((p) => p.id === productId);
  if (!product) {
    alert("Không tìm thấy sản phẩm!");
    return;
  }

  // Fill dữ liệu vào form
  document.getElementById("edit-product-id").value = product.id;
  document.getElementById("edit-product-name").value = product.name;
  document.getElementById("edit-product-type").value = product.nature.type;
  document.getElementById("edit-product-quantity").value = product.quantity;
  document.getElementById("edit-product-price").value = product.price;
  document.getElementById("edit-product-date").value = new Date(product.date)
    .toISOString()
    .split("T")[0];

  // Hiển thị preview ảnh
  const previewContainer = document.querySelector(".edit-preview");
  if (previewContainer) {
    previewContainer.innerHTML = `
      <img src="${product.image}" 
           style="max-width: 200px; max-height: 200px; object-fit: cover;">
    `;
  }

  // Reset và fill các size buttons
  const sizeButtons = document.querySelectorAll("#edit-product-modal .size-btn");
  sizeButtons.forEach(btn => {
    const size = btn.dataset.size;
    if (product.nature.size.includes(size)) {
      btn.classList.add("selected");
      selectedSizes.push(size);
    } else {
      btn.classList.remove("selected");
    }
  });

  // Reset và fill các color buttons
  const colorButtons = document.querySelectorAll("#edit-product-modal .color-btn");
  colorButtons.forEach(btn => {
    const color = btn.dataset.color;
    if (product.nature.color.includes(color)) {
      btn.classList.add("selected");
      selectedColors.push(color);
    } else {
      btn.classList.remove("selected");
    }
  });
}

function updateProduct() {
  const productId = document.getElementById("edit-product-id").value;
  const product = productList.find((p) => p.id === parseInt(productId));

  if (!product) {
    alert("Không tìm thấy sản phẩm!");
    return;
  }

  // Lấy giá trị mới
  const newName = document.getElementById("edit-product-name").value;
  const newType = document.getElementById("edit-product-type").value;
  const newQuantity = parseInt(document.getElementById("edit-product-quantity").value);
  const newPrice = parseFloat(document.getElementById("edit-product-price").value);
  const newDate = document.getElementById("edit-product-date").value;
  
  // Kiểm tra dữ liệu đầu vào
  if (!newName || isNaN(newQuantity) || isNaN(newPrice)) {
    alert("Vui lòng nhập đầy đủ thông tin!");
    return;
  }

  // Kiểm tra size và color
  if (selectedSizes.length === 0) {
    alert("Vui lòng chọn ít nhất một size!");
    return;
  }

  if (selectedColors.length === 0) {
    alert("Vui lòng chọn ít nhất một màu!");
    return;
  }

  // Lấy ảnh mới nếu có
  const editImgInput = document.getElementById("edit-input-img");
  const newImage = editImgInput.dataset.base64;

  // Lấy ngày từ form và giờ hiện tại
  const formDate = new Date(newDate);
  const currentTime = new Date();

  // Kết hợp ngày từ form với giờ hiện tại
  const combinedDate = new Date(
    formDate.getFullYear(),
    formDate.getMonth(),
    formDate.getDate(),
    currentTime.getHours(),
    currentTime.getMinutes(),
    currentTime.getSeconds()
  );

  // Cập nhật thông tin
  product.name = newName;
  product.nature.type = newType;
  product.quantity = newQuantity;
  product.price = newPrice;
  product.date = combinedDate.toISOString();
  product.nature.size = selectedSizes;
  product.nature.color = selectedColors;
  
  // Cập nhật ảnh nếu có ảnh mới
  if (newImage) {
    product.image = newImage;
  }

  // Lưu vào localStorage
  localStorage.setItem(config.productKey, JSON.stringify(productList));

  // Reset các mảng
  selectedColors = [];
  selectedSizes = [];
  
  // Đóng modal và refresh danh sách
  closeModal("edit-product-modal");
  displayProductListProcessing(productList);
  alert("Cập nhật sản phẩm thành công!");
}

// Xử lý preview ảnh trong form chỉnh sửa sản phẩm
document.getElementById("edit-input-img").onchange = function () {
  const file = this.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    document.querySelector(".edit-preview").innerHTML = `
          <img src="${e.target.result}" alt="Preview Image">
      `;
    // Lưu base64 tạm thời
    document.getElementById("edit-input-img").dataset.base64 = e.target.result;
  };
  reader.readAsDataURL(file);
};

// Mảng lưu trữ sản phẩm được chọn để xóa
let selectedProductsToDelete = [];

// Khởi tạo các event handler cho checkbox trong product list
function initializeDeleteFeature() {
  // Event handler cho "select all" checkbox
  const selectAllCheckbox = document.querySelector('.product-list .checkbox input[type="checkbox"]');
  if (selectAllCheckbox) {
    selectAllCheckbox.addEventListener('change', function() {
      const checkboxes = document.querySelectorAll('.product-row .checkbox input[type="checkbox"]');
      checkboxes.forEach(checkbox => {
        checkbox.checked = this.checked;
        const productRow = checkbox.closest('.product-row');
        if (productRow) {
          handleProductSelection(checkbox, productRow);
        }
      });
    });
  }

  // Event handler cho từng checkbox trong product rows
  document.querySelector('.product-list').addEventListener('change', function(e) {
    if (e.target.type === 'checkbox' && e.target.closest('.product-row')) {
      const productRow = e.target.closest('.product-row');
      handleProductSelection(e.target, productRow);
    }
  });

  // Event handler cho nút confirm delete
  document.querySelector('.confirm-delete-btn').addEventListener('click', removeSelectedProducts);
}

// Xử lý khi chọn/bỏ chọn sản phẩm
function handleProductSelection(checkbox, productRow) {
  const productId = parseInt(productRow.dataset.id);
  const productName = productRow.querySelector('.product-name').textContent;
  
  if (checkbox.checked) {
    // Thêm vào danh sách nếu chưa có
    if (!selectedProductsToDelete.find(p => p.id === productId)) {
      selectedProductsToDelete.push({
        id: productId,
        name: productName
      });
    }
  } else {
    // Xóa khỏi danh sách nếu bỏ chọn
    selectedProductsToDelete = selectedProductsToDelete.filter(p => p.id !== productId);
  }
}

// Hiển thị danh sách sản phẩm sẽ xóa trong modal
function displaydeleteProducts(products = []) {
  const deleteProductContainer = document.querySelector(".remove-product-list");
  
  if (products.length === 0) {
    deleteProductContainer.innerHTML = `<p>Không có sản phẩm cần xóa</p>`;
    return;
  }

  deleteProductContainer.innerHTML = products.map(product => `
    <div class="remove-product-item" data-id="${product.id}">
      <input type="checkbox" checked onchange="toggleDeleteProduct(${product.id}, this)">
      <div class="product-row-box">
        <p>${product.name}</p>
        <p>${calculateRevenue(product.name).toLocaleString()} VNĐ</p>
      </div>
    </div>
  `).join('');
}

// Toggle sản phẩm trong modal xóa
function toggleDeleteProduct(productId, checkbox) {
  if (!checkbox.checked) {
    selectedProductsToDelete = selectedProductsToDelete.filter(p => p.id !== productId);
    
    // Bỏ check trong product list
    const productCheckbox = document.querySelector(`.product-row[data-id="${productId}"] input[type="checkbox"]`);
    if (productCheckbox) {
      productCheckbox.checked = false;
    }

    // Nếu không còn sản phẩm nào được chọn, đóng modal
    if (selectedProductsToDelete.length === 0) {
      closeModal('delete-confirmation-modal');
    } else {
      // Cập nhật lại danh sách trong modal
      displaydeleteProducts(selectedProductsToDelete);
    }
  }
}

// Xóa các sản phẩm đã chọn
function removeSelectedProducts() {
  if (selectedProductsToDelete.length === 0) {
    alert('Vui lòng chọn ít nhất một sản phẩm để xóa!');
    return;
  }

  if (confirm('Bạn có chắc chắn muốn xóa các sản phẩm đã chọn?')) {
    // Lấy ID của các sản phẩm cần xóa
    const idsToDelete = selectedProductsToDelete.map(p => p.id);
    
    // Lọc ra sản phẩm không bị xóa
    const updatedProductList = productList.filter(product => 
      !idsToDelete.includes(product.id)
    );

    // Cập nhật localStorage
    localStorage.setItem(config.productKey, JSON.stringify(updatedProductList));
    
    // Cập nhật biến productList
    productList.length = 0;
    productList.push(...updatedProductList);

    // Reset trạng thái
    selectedProductsToDelete = [];
    
    // Đóng modal
    closeModal('delete-confirmation-modal');
    
    // Cập nhật UI
    displayProductListProcessing(productList);
    
    // Thông báo thành công
    alert('Xóa sản phẩm thành công!');
  }
}

// Hàm xử lý khi click nút Remove
function deleteForm() {
  if (selectedProductsToDelete.length === 0) {
    alert('Vui lòng chọn ít nhất một sản phẩm để xóa!');
    return;
  }

  displayModal('delete-confirmation-modal');
  displaydeleteProducts(selectedProductsToDelete);
}

// NHÓM HÀM THÊM SỬA XÓA

// NHÓM HÀM ĐẾM
// Hàm đếm tổng danh thu của từng sản phẩm theo tên
function calculateRevenue(productName) {
  // Kiểm tra đầu vào
  if (!productName) {
    console.error("Vui lòng cung cấp tên sản phẩm.");
    return 0;
  }

  let totalRevenue = 0;

  // Duyệt qua từng đơn hàng trong orderList
  orderList.forEach((order) => {
    if (order.status === "Giao hàng thành công") {
      order.cart.forEach((item) => {
        if (item.name.toLowerCase() === productName.toLowerCase()) {
          totalRevenue += item.price * item.quantity;
        }
      });
    }
  });

  return totalRevenue;
}

// NHÓM HÀM ĐẾM

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
  initializeImagePreview();
  countingTypeProduct();
  populateProductSelect("Product");
  initializeDeleteFeature();
  displayProductListProcessing(productList);
  filterSectionProductProcessing();
}
