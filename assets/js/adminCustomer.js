document.querySelector('.search-btn').addEventListener('click', function () {
	this.parentElement.classList.toggle('open')
	this.previousElementSibling.focus()
})
let allProducts = getProductsFromLocal();

// Hàm tìm kiếm và lọc kết hợp
function filterAndSearchProducts() {
    let products = getProductsFromLocal();
    const searchInput = document.querySelector('.search-input').value.trim().toLowerCase();
    const selectedType = document.getElementById('Product').value.trim();
    const selectedMonth = parseInt(document.getElementById('CreateAt').value);
    const selectedQuality = document.getElementById('Quality').value.trim();
    const selectedPrice = document.getElementById('Price').value.trim();

    const filteredProducts = products.filter(product => {
        let isValid = true;

        // Lọc theo tên sản phẩm
        if (searchInput && !product.name.toLowerCase().includes(searchInput)) {
            isValid = false;
        }

        // Lọc theo loại sản phẩm
        if (selectedType !== '---' && selectedType !== '') {
            if (product.nature.type !== selectedType) {
                isValid = false;
            }
        }


        // Lọc theo tháng nhập hàng
        if (!isNaN(selectedMonth) && selectedMonth !== 0) {
            const productMonth = new Date(product.createdAt).getMonth() + 1;
            if (productMonth !== selectedMonth) {
                isValid = false;
            }
        }

        // Lọc theo số lượng
        const quantity = product.quantity;
        if (selectedQuality !== '---') {
            if (selectedQuality === 'Less 10' && quantity >= 10) return false;
            if (selectedQuality === 'More 10' && quantity < 10) return false;
            if (selectedQuality === 'More 20' && quantity < 20) return false;
            if (selectedQuality === 'More 30' && quantity < 30) return false;
            if (selectedQuality === 'More 40' && quantity < 40) return false;
            if (selectedQuality === 'More 50' && quantity < 50) return false;
        }

        // Lọc theo giá
        const price = product.price;
        if (selectedPrice !== '---') {
            if (selectedPrice === 'Less 100000' && price >= 100000) return false;
            if (selectedPrice === 'More 100000' && price < 100000) return false;
            if (selectedPrice === 'More 200000' && price < 200000) return false;
            if (selectedPrice === 'More 300000' && price < 300000) return false;
            if (selectedPrice === 'More 400000' && price < 400000) return false;
        }

        return isValid;
    });

    if (filteredProducts.length > 0) {
        displayProducts(filteredProducts);
    } else {
        displayNoResult();
    }
}

// Hàm hiển thị thông báo "No result"
function displayNoResult() {
    const productContainer = document.querySelector('.product-list');
    productContainer.innerHTML = '<div class="container-result" style="display: flex;justify-content: center; align-items: center;"><p>No result</p></div>';
}
// Sự kiện nhấn Enter trong ô tìm kiếm
document.querySelector('.search-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        filterAndSearchProducts();
    }
});
// Sự kiện khi thay đổi bộ lọc hoặc tìm kiếm
document.getElementById('Product').addEventListener('change', filterAndSearchProducts);
document.getElementById('CreateAt').addEventListener('change', filterAndSearchProducts);
document.getElementById('Quality').addEventListener('change', filterAndSearchProducts);
document.getElementById('Price').addEventListener('change', filterAndSearchProducts);




// Sự kiện cho nút Clear (Reset bộ lọc và tìm kiếm)
document.querySelector('.reLoad').addEventListener('click', () => {
    document.querySelector('.search-input').value = ''; // Xóa ô tìm kiếm
    document.getElementById('Product').value = '---'; // Reset lọc theo loại
    document.getElementById('CreateAt').value = '---'; // Reset lọc theo tháng
    document.getElementById('Quality').value = '---'; // Reset lọc theo số lượng
    document.getElementById('Price').value = '---'; // Reset lọc theo giá
    const allProducts = getProductsFromLocal();
    displayProducts(allProducts); // Hiển thị tất cả sản phẩm
});

// Hàm lưu sản phẩm vào Local Storage
function saveProductsToLocal(products) {
    localStorage.setItem('productList', JSON.stringify(products));
}

// Hàm lấy sản phẩm từ Local Storage
function getProductsFromLocal() {
    return JSON.parse(localStorage.getItem('productList')) || [];
}

// Hàm khởi tạo dữ liệu mẫu nếu chưa có trong Local Storage
function initializeSampleProducts() {
    const productsInLocal = getProductsFromLocal();
    if (productsInLocal.length === 0) {
        const allProducts = [
            {
                id: 1,
                name: 'Name product white-black',
                price: 205600,
                quantity: 0,
                image: 'assets/img/product/img1.jpg',
                nature: { color: ['white', 'black'], size: ['S', 'M', 'L'], type: 'T-shirt' },
                date: '2024-01-15'
            },
            {
                id: 2,
                name: 'Name product white-black-grey',
                price: 300000,
                quantity: 30,
                image: 'assets/img/product/img2.jpg',
                nature: { color: ['white', 'black', 'grey'], size: ['S', 'M', 'L'], type: 'Polo' },
                date: '2024-02-10'
            },
            {
                id: 3,
                name: 'Name product black',
                price: 200000,
                quantity: 30,
                image: 'assets/img/product/img3.jpg',
                nature: { color: ['black'], size: ['S', 'M', 'L'], type: 'T-shirt' },
                date: '2024-03-25'
            },
            {
                id: 4,
                name: 'Name product blue-black',
                price: 400000,
                quantity: 30,
                image: 'assets/img/product/img4.jpg',
                nature: { color: ['black', 'blue'], size: ['S', 'M', 'L'], type: 'T-shirt' },
                date: '2024-04-20'
            },
            {
                id: 5,
                name: 'Name product brown',
                price: 320000,
                quantity: 5,
                image: 'assets/img/product/img5.jpg',
                nature: { color: ['brown'], size: ['S', 'M', 'L'], type: 'Polo' },
                date: '2024-05-05'
            },
            {
                id: 6,
                name: 'Name product white-black',
                price: 100000,
                quantity: 50,
                image: 'assets/img/product/img6.jpg',
                nature: { color: ['white', 'black'], size: ['S', 'M', 'L'], type: 'Shirt' },
                date: '2024-06-15'
            },
            {
                id: 7,
                name: 'Black Shorts',
                price: 233000,
                quantity: 50,
                image: 'assets/img/product/quan12.png',
                nature: { color: [ 'black'], size: ['S', 'M', 'L'], type: 'Sort' },
                date: '2024-06-15'
            },
            {
                id: 8,
                name: 'White Shorts',
                price: 233000,
                quantity: 50,
                image: 'assets/img/product/quan11.png',
                nature: { color: ['white'], size: ['S', 'M', 'L'], type: 'Sort' },
                date: '2024-06-15'
            },
            {
                id: 9,
                name: 'Yellow Shorts',
                price: 233000,
                quantity: 50,
                image: 'assets/img/product/quan13.png',
                nature: { color: ['Yellow'], size: ['S', 'M', 'L'], type: 'Sort' },
                date: '2024-06-15'
            },
            {
                id: 10,
                name: 'Pink Shorts',
                price: 233000,
                quantity: 50,
                image: 'assets/img/product/quan14.png',
                nature: { color: ['Pink'], size: ['S', 'M', 'L'], type: 'Sort' },
                date: '2024-06-15'
            },
            {
                id: 11,
                name: 'Blue Shorts',
                price: 233000,
                quantity: 50,
                image: 'assets/img/product/quan15.png',
                nature: { color: ['Blue'], size: ['S', 'M', 'L'], type: 'Sort' },
                date: '2024-06-15'
            },
            {
                id: 12,
                name: 'Wide-leg Brown pants',
                price: 233000,
                quantity: 50,
                image: 'assets/img/product/quan1.jpg',
                nature: { color: ['Brown'], size: ['S', 'M', 'L'], type: 'Kaki' },
                date: '2024-06-15'
            },
            {
                id: 13,
                name: 'Wide-leg White pants',
                price: 233000,
                quantity: 50,
                image: 'assets/img/product/quan7.jpg',
                nature: { color: ['White'], size: ['S', 'M', 'L'], type: 'Kaki' },
                date: '2024-06-15'
            },
            {
                id: 14,
                name: 'Wide-leg Black pants',
                price: 233000,
                quantity: 50,
                image: 'assets/img/product/quan3.jpg',
                nature: { color: ['Black'], size: ['S', 'M', 'L'], type: 'Kaki' },
                date: '2024-06-15'
            },
            {
                id: 15,
                name: 'Wide-leg Cream pants',
                price: 233000,
                quantity: 50,
                image: 'assets/img/product/quan2.jpg',
                nature: { color: ['Cream'], size: ['S', 'M', 'L'], type: 'Kaki' },
                date: '2024-06-15'
            },
            {
                id: 16,
                name: 'Wide-leg Cream pants',
                price: 233000,
                quantity: 50,
                image: 'assets/img/product/quan9.jpg',
                nature: { color: ['Cream'], size: ['S', 'M', 'L'], type: 'Kaki' },
                date: '2024-06-15'
            },
            {
                id: 17,
                name: 'Wide-leg Grey pants',
                price: 233000,
                quantity: 50,
                image: 'assets/img/product/quan10.jpg',
                nature: { color: ['Grey'], size: ['S', 'M', 'L'], type: 'Kaki' },
                date: '2024-06-15'
            },
            {
                id: 18,
                name: 'Green Shirt',
                price: 233000,
                quantity: 50,
                image: 'assets/img/product/somi1.jpg',
                nature: { color: ['Green'], size: ['S', 'M', 'L'], type: 'Shirt' },
                date: '2024-06-15'
            },
            {
                id: 19,
                name: 'Blue Shirt',
                price: 233000,
                quantity: 50,
                image: 'assets/img/product/somi2.jpg',
                nature: { color: ['Blue'], size: ['S', 'M', 'L'], type: 'Shirt' },
                date: '2024-06-15'
            },
            {
                id: 20,
                name: 'Light Blue Shirt',
                price: 233000,
                quantity: 50,
                image: 'assets/img/product/aoxanh2.jpg',
                nature: { color: ['Blue'], size: ['S', 'M', 'L'], type: 'Shirt' },
                date: '2024-06-15'
            },
            {
                id: 21,
                name: 'Purple Shirt',
                price: 233000,
                quantity: 50,
                image: 'assets/img/product/aotim1.jpg',
                nature: { color: ['Purple'], size: ['S', 'M', 'L'], type: 'Shirt' },
                date: '2024-06-15'
            },
            {
                id: 22,
                name: 'Blue Jacket',
                price: 233000,
                quantity: 50,
                image: 'assets/img/product/aotim1.jpg',
                nature: { color: ['Blue'], size: ['S', 'M', 'L'], type: 'Shirt' },
                date: '2024-06-15'
            },
            {
                id: 23,
                name: 'Yellow Jacket',
                price: 233000,
                quantity: 50,
                image: 'assets/img/product/aovang1.jpg',
                nature: { color: ['Yellow'], size: ['S', 'M', 'L'], type: 'Shirt' },
                date: '2024-06-15'
            },
            {
                id: 24,
                name: 'Yellow Blazer',
                price: 233000,
                quantity: 50,
                image: 'assets/img/product/aovest2.png',
                nature: { color: ['Yellow'], size: ['S', 'M', 'L'], type: 'Blazer' },
                date: '2024-06-15'
            },
            {
                id: 25,
                name: 'Grey Blazer',
                price: 233000,
                quantity: 50,
                image: 'assets/img/product/aovest1.png',
                nature: { color: ['Grey'], size: ['S', 'M', 'L'], type: 'Blazer' },
                date: '2024-06-15'
            },
            {
                id: 26,
                name: 'White Blazer',
                price: 233000,
                quantity: 50,
                image: 'assets/img/product/aovest3.png',
                nature: { color: ['White'], size: ['S', 'M', 'L'], type: 'Blazer' },
                date: '2024-06-15'
            },
            {
                id: 27,
                name: 'Pink Sweater',
                price: 233000,
                quantity: 50,
                image: 'assets/img/product/aolen2.jpg',
                nature: { color: ['Pink'], size: ['S', 'M', 'L'], type: 'Sweater' },
                date: '2024-06-15'
            },
            {
                id: 28,
                name: 'Black Sweater',
                price: 233000,
                quantity: 50,
                image: 'assets/img/product/aolen1.jpg',
                nature: { color: ['Black'], size: ['S', 'M', 'L'], type: 'Sweater' },
                date: '2024-06-15'
            },
            {
                id: 29,
                name: 'White Sweater',
                price: 233000,
                quantity: 50,
                image: 'assets/img/product/aolen3.jpg',
                nature: { color: ['White'], size: ['S', 'M', 'L'], type: 'Sweater' },
                date: '2024-06-15'
            },
            {
                id: 30,
                name: 'Cream Sweater',
                price: 233000,
                quantity: 50,
                image: 'assets/img/product/aolen4.jpg',
                nature: { color: ['Cream'], size: ['S', 'M', 'L'], type: 'Sweater' },
                date: '2024-06-15'
            },
            {
                id: 31,
                name: 'Cream T-Shirt',
                price: 233000,
                quantity: 50,
                image: 'assets/img/product/aothun3.jpg',
                nature: { color: ['Cream'], size: ['S', 'M', 'L'], type: 'T-Shirt' },
                date: '2024-06-15'
            },
            {
                id: 32,
                name: 'Black T-Shirt',
                price: 233000,
                quantity: 50,
                image: 'assets/img/product/aothun1.jpg',
                nature: { color: ['Black'], size: ['S', 'M', 'L'], type: 'T-Shirt' },
                date: '2024-06-15'
            },
            {
                id: 33,
                name: 'White T-Shirt',
                price: 233000,
                quantity: 50,
                image: 'assets/img/product/aothun2.jpg',
                nature: { color: ['White'], size: ['S', 'M', 'L'], type: 'T-Shirt' },
                date: '2024-06-15'
            },
            {
                id: 34,
                name: 'White Collection',
                price: 233000,
                quantity: 50,
                image: 'assets/img/product/co1.png',
                nature: { color: ['White'], size: ['S', 'M', 'L'], type: 'Collection' },
                date: '2024-06-15'
            },
            {
                id: 36,
                name: 'White Collection',
                price: 233000,
                quantity: 50,
                image: 'assets/img/product/co3.jpg',
                nature: { color: ['White'], size: ['S', 'M', 'L'], type: 'Collection' },
                date: '2024-06-15'
            },
            {
                id: 37,
                name: 'White Collection',
                price: 233000,
                quantity: 50,
                image: 'assets/img/product/co4.jpg',
                nature: { color: ['White'], size: ['S', 'M', 'L'], type: 'Collection' },
                date: '2024-06-15'
            },
            {
                id: 35,
                name: 'Black Collection',
                price: 233000,
                quantity: 50,
                image: 'assets/img/product/co2.jpg',
                nature: { color: ['Black'], size: ['S', 'M', 'L'], type: 'Collection' },
                date: '2024-06-15'
            }
        ];
        saveProductsToLocal(allProducts);
    }
}


// Hàm hiển thị sản phẩm
function displayProducts(products) {
    const productList = document.querySelector('.product-list');
    productList.innerHTML = '';

    // Kiểm tra nếu không có sản phẩm nào
    if (products.length === 0) {
        productList.innerHTML = `<div class="no-products">No products found</div>`;
        return;
    }

    // Duyệt qua danh sách sản phẩm và tạo các phần tử HTML tương ứng
    products.forEach(product => {
        const productRow = document.createElement('div');
        productRow.classList.add('product-row');
        productRow.dataset.id = product.id;

        // Xử lý định dạng ngày tháng (DD/MM/YYYY)
        let formattedDate = 'N/A';
        if (product.date) {
            const date = new Date(product.date);
        
            const day = String(date.getDate()).padStart(2, '0'); // Lấy ngày và thêm số 0 nếu nhỏ hơn 10
            const month = String(date.getMonth() + 1).padStart(2, '0'); // Lấy tháng và thêm số 0 nếu nhỏ hơn 10
            const year = date.getFullYear(); // Lấy năm
            formattedDate = `${day}/${month}/${year}`; // Định dạng ngày theo kiểu "DD/MM/YYYY"
            
        }

        // Đảm bảo giá trị product.image, product.nature.type, product.name có dữ liệu hợp lệ
        const productImage = product.image || 'assets/img/logo.png'; // Sử dụng hình mặc định nếu không có hình
        const productName = product.name || 'Unknown Product';
        const productType = product.nature?.type || 'No Type';
        const productQuantity = product.quantity || 0;
        const productPrice = product.price || 0;

        // Tạo nội dung HTML cho từng dòng sản phẩm
        productRow.innerHTML = `
            <div class="checkbox"><input type="checkbox" class="select-product"></div>
            <div class="product-info">
                <img src="${productImage}" alt="Product Image" />
                <div class="product-name">${productName}</div>
            </div>
            <div class="product-collection">${productType}</div>
            <div class="product-date">${formattedDate}</div>
            <div class="product-stock">${productQuantity}</div>
            <div class="product-price">${productPrice.toLocaleString()} VNĐ</div>
            <div class="product-actions">
                <i class="fa-solid fa-trash delete-product" title="Delete"></i>
            </div>
        `;

        // Thêm dòng sản phẩm vào danh sách
        productList.appendChild(productRow);
    });
}


// Lấy nút 'Add Product' và gán sự kiện click
const submitProductBtn = document.querySelector('.submit-product-btn');
if (submitProductBtn) {
    submitProductBtn.addEventListener('click', addNewProduct);
}

// Sửa lại hàm thêm sản phẩm mới
function addNewProduct() {
    const nameInput = document.getElementById('product-name');
    const typeInput = document.getElementById('product-type');
    const quantityInput = document.getElementById('product-quantity');
    const priceInput = document.getElementById('product-price');
    const imgInput = document.getElementById('input-img');

    const name = nameInput.value.trim();
    const type = typeInput.value.trim();
    const quantity = parseInt(quantityInput.value.trim());
    const price = parseInt(priceInput.value.trim());
    const file = imgInput.files[0];

    // Kiểm tra điều kiện nhập liệu
    if (!name || !type || isNaN(quantity) || quantity <= 0 || isNaN(price) || price <= 0 || !file) {
        alert('Vui lòng điền đầy đủ thông tin sản phẩm và chọn hình ảnh hợp lệ.');
        return;
    }

    // Đọc file hình ảnh và chuyển đổi sang base64
    const reader = new FileReader();
    reader.onload = () => {
        const base64Image = reader.result; // Lưu hình ảnh dưới dạng base64
        const products = getProductsFromLocal();
        const newProduct = {
            id: Date.now(),
            name,
            price,
            quantity,
            image: base64Image,
            nature: { type },
            date: new Date().toISOString().split('T')[0]
        };

        // Lưu sản phẩm mới vào Local Storage
        products.push(newProduct);
        saveProductsToLocal(products);

        // Hiển thị lại danh sách sản phẩm
        filterAndSearchProducts();

        // Reset form
        document.getElementById('add-customer-form').reset();
        previewContainer.innerHTML = '';
        document.getElementById('add-customer-modal').classList.remove('show');
    };
    reader.readAsDataURL(file);
}

// Hiển thị xem trước hình ảnh khi chọn
const inputImg = document.querySelector('#input-img');
const previewContainer = document.querySelector('.preview');

if (inputImg) {
    inputImg.addEventListener('change', (e) => {
        const file = e.target.files[0];

        if (file) {
            const selectedImage = URL.createObjectURL(file);
            previewContainer.innerHTML = `<img src="${selectedImage}" alt="Product Image Preview">`;
        } else {
            previewContainer.innerHTML = ''; // Xóa xem trước nếu không có file
        }
    });
}



// XÓA
// Hiển thị modal xác nhận xóa
function showDeleteModal(message) {
    const modal = document.getElementById('delete-confirmation-modal');
    modal.querySelector('h2').textContent = message;
    modal.classList.remove('hidden'); // Đảm bảo modal không bị ẩn
    modal.classList.add('show'); // Hiển thị modal
}
// Ẩn modal xác nhận xóa
function hideDeleteModal() {
    const modal = document.getElementById('delete-confirmation-modal');
    modal.classList.remove('show'); // Ẩn modal
    modal.classList.add('hidden');
}

// Xóa sản phẩm đã chọn từ Local Storage
function deleteSelectedProduct(productId) {
    let products = getProductsFromLocal();
    const index = products.findIndex(product => product.id === productId);
    if (index !== -1) {
        products.splice(index, 1);
        saveProductsToLocal(products);
        displayProducts(products);
        hideDeleteModal();
    } else {
        console.error('Product not found:', productId);
    }
}

// Xóa các sản phẩm được chọn
function deleteCheckedProducts() {
    const selectedCheckboxes = document.querySelectorAll('.product-row .select-product:checked');
    
    if (selectedCheckboxes.length === 0) {
        alert("No products selected for deletion.");
        return;
    }

    // Xóa các sản phẩm đã được chọn
    selectedCheckboxes.forEach(checkbox => {
        const productRow = checkbox.closest('.product-row');
        const productId = parseInt(productRow.dataset.id);
        deleteSelectedProduct(productId);
    });

}
// Sự kiện cho nút xóa sản phẩm (nút trong danh sách sản phẩm)
document.querySelector('.product-list').addEventListener('click', function (e) {
    if (e.target.classList.contains('delete-product')) {
        const productRow = e.target.closest('.product-row');
        const productId = parseInt(productRow.dataset.id);

        // Lưu trữ ID sản phẩm cần xóa vào modal
        const modal = document.getElementById('delete-confirmation-modal');
        modal.dataset.productId = productId;

        // Hiển thị modal xác nhận xóa sản phẩm cụ thể
        showDeleteModal("Are you sure you want to delete this product?");
    }
});

// Xác nhận xóa một sản phẩm cụ thể
document.querySelector('.confirm-delete-btn').addEventListener('click', function () {
    const modal = document.getElementById('delete-confirmation-modal');

    // Kiểm tra xem có ID sản phẩm trong modal không
    const productId = parseInt(modal.dataset.productId);
    if (productId) {
        deleteSelectedProduct(productId);
    } else {
        deleteCheckedProducts();
    }

    // Ẩn modal sau khi xóa
    hideDeleteModal();
});

// Sự kiện hủy xóa (nút No trong modal)
document.querySelector('.cancel-delete-btn').addEventListener('click', hideDeleteModal);

// Sự kiện cho nút xóa nhiều sản phẩm (nút Clear trong .function)
document.querySelector('.remove-btn').addEventListener('click', function () {
    const selectedCheckboxes = document.querySelectorAll('.select-product:checked');
    if (selectedCheckboxes.length > 0) {
        showDeleteModal("Are you sure you want to delete selected products?");
    } else {
        alert("No products selected for deletion.");
    }
});

// Sự kiện mở/đóng modal thêm sản phẩm
document.querySelector('.add-customer-btn').addEventListener('click', () => {
    document.getElementById('add-customer-modal').classList.add('show');
});
document.querySelector('.close-modal').addEventListener('click', () => {
    document.getElementById('add-customer-modal').classList.remove('show');
});

// Khởi tạo dữ liệu mẫu và hiển thị sản phẩm khi tải trang
window.addEventListener('DOMContentLoaded', () => {
    initializeSampleProducts();
    document.querySelector('.search-input').value = '';
    const products = getProductsFromLocal();
    displayProducts(products);
});


// Sửa sản phẩm
// Hiển thị modal chỉnh sửa sản phẩm
function showEditModal(product) {
    const editModal = document.getElementById('edit-product-modal');
    if (!editModal) return;

    // Điền dữ liệu sản phẩm vào form
    document.getElementById('edit-product-id').value = product.id;
    document.getElementById('edit-product-name').value = product.name;
    document.getElementById('edit-product-type').value = product.nature.type;
    document.getElementById('edit-product-quantity').value = product.quantity;
    document.getElementById('edit-product-price').value = product.price;

    // Điền ngày (nếu có)
    document.getElementById('edit-product-date').value = product.date || '';

    // Hiển thị hình ảnh hiện tại
    const previewContainer = document.querySelector('.edit-preview');
    if (previewContainer) {
        previewContainer.innerHTML = `<img src="${product.image}" alt="Current Product Image">`;
    }

    // Hiển thị modal
    editModal.classList.remove('hidden');
    editModal.classList.add('show');
}

// Xử lý sự kiện chỉnh sửa sản phẩm
document.querySelector('.product-list').addEventListener('click', function (e) {
    const productRow = e.target.closest('.product-row');
    if (!productRow) return;

    // Bỏ qua nếu click vào nút xóa hoặc checkbox
    if (e.target.classList.contains('delete-product') || e.target.classList.contains('select-product')) return;


    const productId = parseInt(productRow.dataset.id);
    if (isNaN(productId)) {
        console.error('Invalid product ID');
        return;
    }

    const products = getProductsFromLocal();
    const product = products.find(p => p.id === productId);

    if (product) {
        showEditModal(product);
    } else {
        console.error('Product not found');
    }
});

// Cập nhật xem trước ảnh trong modal chỉnh sửa
document.getElementById('edit-input-img').addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (event) {
            const previewContainer = document.querySelector('.edit-preview');
            if (previewContainer) {
                previewContainer.innerHTML = `<img src="${event.target.result}" alt="Preview">`;
            }
        };
        reader.readAsDataURL(file);
    }
});

// Cập nhật sản phẩm
document.querySelector('.update-product-btn').addEventListener('click', function () {
    const productId = parseInt(document.getElementById('edit-product-id').value);
    const name = document.getElementById('edit-product-name').value.trim();
    const type = document.getElementById('edit-product-type').value;
    const quantity = parseInt(document.getElementById('edit-product-quantity').value);
    const price = parseInt(document.getElementById('edit-product-price').value);
    const date = document.getElementById('edit-product-date').value;
    const imgInput = document.getElementById('edit-input-img');

    if (!name || !type || isNaN(quantity) || quantity < 0 || isNaN(price) || price <= 0 || !date) {
        alert('Please fill all fields with valid values.');
        return;
    }

    const products = getProductsFromLocal();
    const productIndex = products.findIndex(p => p.id === productId);

    if (productIndex !== -1) {
        products[productIndex].name = name;
        products[productIndex].nature.type = type;
        products[productIndex].quantity = quantity;
        products[productIndex].price = price;
        products[productIndex].date = date;

        if (imgInput.files[0]) {
            const reader = new FileReader();
            reader.onload = function () {
                products[productIndex].image = reader.result;
                saveProductsToLocal(products);
                displayProducts(products);
                closeEditModal();
            };
            reader.readAsDataURL(imgInput.files[0]);
        } else {
            saveProductsToLocal(products);
            displayProducts(products);
            closeEditModal();
        }
    }
});

// Đóng modal chỉnh sửa
function closeEditModal() {
    const editModal = document.getElementById('edit-product-modal');
    if (!editModal) return;

    editModal.classList.remove('show');
    editModal.classList.add('hidden');
    document.getElementById('edit-product-form').reset();

    const previewContainer = document.querySelector('.edit-preview');
    if (previewContainer) {
        previewContainer.innerHTML = '';
    }
}

// Xử lý sự kiện nút đóng modal
document.querySelector('.close-edit-modal')?.addEventListener('click', closeEditModal);

