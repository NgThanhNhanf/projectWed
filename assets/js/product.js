//ALL PRODUCTS
let allProducts = [
    {
        id: 1,
        name: 'BinGo T-shirt',
        price: 205600,
        quantity: 0,
        image: 'assets/img/product/img1.jpg',
        nature: { color: ['White'], size: ['S', 'M', 'L'], type: 'T-shirt' },
        date: '2024-01-15'
    },
    {
        id: 2,
        name: 'Polo White',
        price: 300000,
        quantity: 30,
        image: 'assets/img/product/img2.jpg',
        nature: { color: ['white'], size: ['S', 'M', 'L'], type: 'Polo' },
        date: '2024-02-10'
    },
    {
        id: 3,
        name: 'AnuBis T-shirt',
        price: 200000,
        quantity: 30,
        image: 'assets/img/product/img3.jpg',
        nature: { color: ['Black'], size: ['S', 'M', 'L'], type: 'T-shirt' },
        date: '2024-03-25'
    },
    {
        id: 4,
        name: 'Alesia T-shirt',
        price: 400000,
        quantity: 30,
        image: 'assets/img/product/img4.jpg',
        nature: { color: ['Blue'], size: ['S', 'M', 'L'], type: 'T-shirt' },
        date: '2024-04-20'
    },
    {
        id: 5,
        name: 'Polo T-shirt',
        price: 320000,
        quantity: 5,
        image: 'assets/img/product/img5.jpg',
        nature: { color: ['Brown'], size: ['S', 'M', 'L'], type: 'Polo' },
        date: '2024-05-05'
    },
    {
        id: 6,
        name: 'White Shirt',
        price: 100000,
        quantity: 50,
        image: 'assets/img/product/img6.jpg',
        nature: { color: ['White'], size: ['S', 'M', 'L'], type: 'Shirt' },
        date: '2024-06-15'
    },
    {
        id: 7,
        name: 'Black Shorts',
        price: 233000,
        quantity: 50,
        image: 'assets/img/product/quan12.png',
        nature: { color: ['Black'], size: ['S', 'M', 'L'], type: 'Short' },
        date: '2024-06-15'
    },
    {
        id: 8,
        name: 'White Shorts',
        price: 233000,
        quantity: 50,
        image: 'assets/img/product/quan11.png',
        nature: { color: ['White'], size: ['S', 'M', 'L'], type: 'Short' },
        date: '2024-06-15'
    },
    {
        id: 9,
        name: 'Yellow Shorts',
        price: 233000,
        quantity: 50,
        image: 'assets/img/product/quan13.png',
        nature: { color: ['Yellow'], size: ['S', 'M', 'L'], type: 'Short' },
        date: '2024-06-15'
    },
    {
        id: 10,
        name: 'Pink Shorts',
        price: 233000,
        quantity: 50,
        image: 'assets/img/product/quan14.png',
        nature: { color: ['Pink'], size: ['S', 'M', 'L'], type: 'Short' },
        date: '2024-06-15'
    },
    {
        id: 11,
        name: 'Blue Shorts',
        price: 233000,
        quantity: 50,
        image: 'assets/img/product/quan15.png',
        nature: { color: ['Blue'], size: ['S', 'M', 'L'], type: 'Short' },
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
        nature: { color: ['Blue', 'Black'], size: ['S', 'M', 'L'], type: 'Shirt' },
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
        name: 'Blue Shirt',
        price: 233000,
        quantity: 50,
        image: 'assets/img/product/aotim1.jpg',
        nature: { color: ['Blue'], size: ['S', 'M', 'L'], type: 'Shirt' },
        date: '2024-06-15'
    },
    {
        id: 23,
        name: 'Yellow Shirt',
        price: 233000,
        quantity: 50,
        image: 'assets/img/product/aovang1.jpg',
        nature: { color: ['Yellow', 'Brown'], size: ['S', 'M', 'L'], type: 'Shirt' },
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
        name: 'Cream T-shirt',
        price: 233000,
        quantity: 50,
        image: 'assets/img/product/aothun3.jpg',
        nature: { color: ['Cream'], size: ['S', 'M', 'L'], type: 'T-shirt' },
        date: '2024-06-15'
    },
    {
        id: 32,
        name: 'Black T-shirt',
        price: 233000,
        quantity: 50,
        image: 'assets/img/product/aothun1.jpg',
        nature: { color: ['Black'], size: ['S', 'M', 'L'], type: 'T-shirt' },
        date: '2024-06-15'
    },
    {
        id: 33,
        name: 'White T-shirt',
        price: 233000,
        quantity: 50,
        image: 'assets/img/product/aothun2.jpg',
        nature: { color: ['White'], size: ['S', 'M', 'L'], type: 'T-shirt' },
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



//lưu AllProducts trong LocalStorage
function storeProductInLocalStorage() {
    localStorage.setItem('allProducts', JSON.stringify(allProducts));
}
// storeProductInLocalStorage();


//lấy AllProducts trong LocalStorage để dùng
function getProductFromLocalStorage() {
    const storeInLocalStorage = JSON.parse(localStorage.getItem('allProducts'));
    if (storeInLocalStorage) {
        return storeInLocalStorage;
    } else return allProducts;
}
var allProduct = getProductFromLocalStorage();

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

if (slides.length == 0) {
    console.log('no slides');
} else {
    function showSlides() {
        slideIndex = (slideIndex + 1) % slides.length;
        slides.forEach(slide => slide.classList.remove('active'));
        slides[slideIndex].classList.add('active');
    }
    setInterval(showSlides, 5000);
}

// fill
let count = document.getElementById('count');
let tags = [];
const ul = document.querySelector('.ct');

function createTag() {
    ul.innerHTML = '';
    tags.forEach((tag, index) => {
        let liTag = `
            <li>${tag}
            <i class="fa-solid fa-xmark" onclick="removeTag(${index})"></i>
            </li>
        `;
        ul.innerHTML += liTag;
    });
}
// XOA PHAN TU 
function removeTag(index) {
    const removedTag = tags[index];
    tags.splice(index, 1);
    createTag();

    const checkbox = document.querySelector(`input[type="checkbox"][value="${removedTag}"]`);
    if (checkbox) {
        checkbox.checked = false;
    }

    filterProducts();
}

function handleCheckboxClick(checkbox) {
    const target = checkbox.value;
    if (checkbox.checked && !tags.includes(target)) {
        tags.push(target);
    } else if (!checkbox.checked) {
        tags = tags.filter(tag => tag !== target);
    }
    createTag();
    filterProducts();
}

// LOC THEO GIA TIEN

function setDefaultPrice() {
    const minSelect = document.getElementById('min');
    const maxSelect = document.getElementById('max');

    minSelect.value = minSelect.options[0].value;
    maxSelect.value = maxSelect.options[maxSelect.options.length - 1].value;
}

function updateMaxOptions() {
    const minSelect = document.getElementById('min');
    const maxSelect = document.getElementById('max');
    const minValue = parseInt(minSelect.value);
    const currentMaxValue = parseInt(maxSelect.value);

    Array.from(maxSelect.options).forEach(option => {
        const value = parseInt(option.value);
        option.disabled = value < minValue;
    });

    if (currentMaxValue < minValue) {
        maxSelect.value = maxSelect.options[maxSelect.options.length - 1].value;
    }
}

function updateMinOptions() {
    const minSelect = document.getElementById('min');
    const maxSelect = document.getElementById('max');
    const maxValue = parseInt(maxSelect.value);
    const currentMinValue = parseInt(minSelect.value);

    Array.from(minSelect.options).forEach(option => {
        const value = parseInt(option.value);
        option.disabled = value > maxValue;
    });

    if (currentMinValue > maxValue) {
        minSelect.value = minSelect.options[0].value;
    }
}

document.getElementById('min').addEventListener('change', () => {
    updateMaxOptions();
    filterProducts();
});

document.getElementById('max').addEventListener('change', () => {
    updateMinOptions();
    filterProducts();
});

window.addEventListener('DOMContentLoaded', () => {
    setDefaultPrice();

});

// FILLTER
let filteredProducts = allProduct;
function arrayContainsArray(mainArray, subArray) {
    return subArray.every(element => mainArray.includes(element));
}

document.querySelector('.search-btn').addEventListener('click', function () {
	this.parentElement.classList.toggle('open')
	this.previousElementSibling.focus()
})
function filterProducts() {
    //lay ra cac loai type cua product de loc ra cho cac trang trong index.html
    const urlProduct = new URLSearchParams(window.location.search);
    const productType = urlProduct.get('type');
    let productTypeAlterFilter = allProduct
    if(productType && productType !== 'Allproduct') {
        productTypeAlterFilter = allProduct.filter(product => product.nature.type === productType);
    }
    const minPrice = parseInt(document.getElementById('min').value) || 0;
    const maxPrice = parseInt(document.getElementById('max').value) || Infinity;
    const searchInput = document.querySelector('.search-input').value.trim().toLowerCase();
    const allTypes = [...new Set(allProducts.map(product => product.nature.type))];
    console.log(allTypes);
    filteredProducts = productTypeAlterFilter.filter(product => {
        let isValid = true;

        // Lọc theo tên sản phẩm
        if (searchInput && !product.name.toLowerCase().includes(searchInput)) {
            isValid = false;
        }
        if (tags.length === 0) {
            return product.price >= minPrice && product.price <= maxPrice && isValid;

        }
        
        const typeTag = tags.filter(tag => allTypes.includes(tag));
        const colorTags = tags.filter(tag => !typeTag.includes(tag));
        const matchesType = typeTag.length > 0 ? typeTag.includes(product.nature.type) : true;
        const matchesColors = colorTags.length > 0 ?
            colorTags.every(tag => product.nature.color.includes(tag)) : true;
        const matchesPrice = product.price >= minPrice && product.price <= maxPrice;

        return matchesPrice && matchesColors && matchesType && isValid;
    });

    if (filteredProducts.length === 0) {
        displayNoResult();
    }
     
    displayProducts(currentPage);
    // storeProductInLocalStorage();   
}
// Sự kiện nhấn Enter trong ô tìm kiếm
document.querySelector('.search-box').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        filterProducts();
    }
});
function displayNoResult() {
    const productContainer = document.querySelector('.product');
    productContainer.innerHTML = `<p> Chưa có sản phẩm</p>`;
}
// Cập nhật sự kiện cho `select` giá
document.getElementById('min').addEventListener('change', filterProducts);
document.getElementById('max').addEventListener('change', filterProducts);


// HIEN THI SAN PHAM + PHAN TRANG
let currentPage = 1;
function displayProducts(page) {
    const itemInOnePage = 8;
    const start = (page - 1) * itemInOnePage;
    const end = start + itemInOnePage;
    const itemInPage = filteredProducts.slice(start, end);
    const productGrid = document.querySelector('.product-grid');
    productGrid.innerHTML = '';

    itemInPage.forEach(product => {
        const div = document.createElement('div');
        div.setAttribute('class', 'product');
        div.innerHTML = `
            <div class="ima">
                <img src="${product.image}" alt="">                 
            </div>
            <div class="product-detail">
                <h4>${product.name}</h4>
                <p>${product.price.toLocaleString()} đ</p>
            </div>
        `;
        productGrid.appendChild(div);
    });

    //update so trang
    updatePageNumber();
    addClickEventToProducts();
}
//nút quay lại trang trước
function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        displayProducts(currentPage);
    }
}

//nut tien toi trang truoc
function nextPage() {
    const numberOfPages = Math.ceil(filteredProducts.length / 8);
    if (currentPage < numberOfPages) {
        currentPage++;
        displayProducts(currentPage);
    }
}

//update so trang 
function updatePageNumber() {
    const numberOfPages = Math.ceil(filteredProducts.length / 8);
    const page = document.getElementById('pageNumber');
    page.textContent = `Page ${currentPage} to ${numberOfPages}`;
    // const previousButton = document.querySelector('.buttonPrevious');
    // const nextButton = document.querySelector('.nextButton');
    // previousButton.disabled = currentPage === 1;
    // nextButton.disabled = currentPage === numberOfPages;
}

//click r chuyen trang
document.querySelector('.buttonPrevious').addEventListener('click', previousPage);
document.querySelector('.buttonNext').addEventListener('click', nextPage);


document.querySelectorAll('.list input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('click', function () {
        handleCheckboxClick(this);
    });
});

// XOA ALL(REMOVE)
const removeBtn = document.querySelector('.btn-removeAll');
removeBtn.addEventListener('click', () => {
    tags.length = 0;
    createTag();
    document.querySelectorAll('.list input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });
    filterProducts();

});
//TRO VE DAU TRANG(TO TOP)
let toTop = document.getElementById('toTop');
toTop.style.display = 'none';
window.addEventListener('scroll', () => {
    if (this.scrollY > 500) {
        toTop.style.display = 'block';
    } else {
        toTop.style.display = 'none';
    }
})
toTop.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}
// Lấy danh sách sản phẩm từ HTML
const productGrid = document.querySelector('.product-grid');
const productModal = document.getElementById('productModal');
const modalImage = document.getElementById('modalImage');
const modalName = document.getElementById('modalName');
const modalPrice = document.getElementById('modalPrice');
const closeModal = document.querySelector('.close');
const quantily = document.getElementById('quantity');
const product = document.querySelectorAll('.product');

// Hàm mở modal và hiển thị thông tin sản phẩm
function openModal(product) {
    const productImage = product.querySelector('img').src;
    const productName = product.querySelector('h4').textContent;
    const productPrice = product.querySelector('p').textContent;

    modalImage.src = productImage;
    modalName.textContent = productName;
    modalPrice.textContent = productPrice;

    productModal.style.display = 'block';
}


window.onclick = (event) => {
    if (event.target === productModal) {
        productModal.style.display = 'none';
    }
};

function addClickEventToProducts() {
    const products = document.querySelectorAll('.product');
    products.forEach((product) => {
        product.addEventListener('click', () => {
            openModal(product);
        });
    });
}

//------------QUANTITY----------------
let quantityCount = 1;

document.querySelector('.quantity-btn:nth-child(3)').onclick = () => {
    quantityCount += 1;
    quantity.textContent = quantityCount;
};


document.querySelector('.quantity-btn:nth-child(1)').onclick = () => {
    if (quantityCount > 1) {
        quantityCount -= 1;
        quantity.textContent = quantityCount;
    }
};
closeModal.onclick = () => {
    quantityCount = 1;
    quantity.textContent = quantityCount;
    productModal.style.display = 'none';
};



//------------ICON CART--------------
const cartIcon = document.getElementById('cartIcon');
const cartIframe = document.getElementById('cartIframe');

// Khi click vào icon giỏ hàng, mở iframe
cartIcon.addEventListener('click', () => {
    cartIframe.classList.toggle('open'); // Toggle mở/đóng iframe
});

// Đóng giỏ hàng từ bên trong iframe bằng message
window.addEventListener('message', (event) => {
    if (event.data === 'closeCart') {
        cartIframe.classList.remove('open');
    }
});

//click ADD TO CART ==> thêm sản phẩm vào giỏ và tăng amount tương ứng trên icon

// Lấy thông tin giỏ hàng từ localStorage
function getCartFromLocalStorage() {
    const cart = localStorage.getItem('cart')
    return cart ? JSON.parse(cart) : [];
}

// Lưu giỏ hàng vào localStorage
function storeCartInLocalStorage(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}
//tang so luong tren icon cart
function amountInIconCart() {
    const cart = getCartFromLocalStorage();
    var amount = cart.reduce((total, cartElement) => {
        return total + cartElement.quantity;
    }, 0);
    const amountCart = document.getElementById('amount-cart');
    if (amount) amountCart.textContent = amount;
}


// Lắng nghe sự kiện khi nhấn "Add to Cart"
const addToCartButtons = document.querySelectorAll('.wishlist');
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        //Lấy thông tin sản phẩm từ modal
        const productImage = document.getElementById('modalImage').src;
        const productName = document.getElementById('modalName').textContent;
        const productSize = document.getElementById('sizeSelect').value;
        const productPrice = parseFloat(document.getElementById('modalPrice').textContent);
        const productQuantity = parseInt(document.getElementById('quantity').textContent, 10);

        var cart = getCartFromLocalStorage();
        var checkProductInCart = cart.find(item => {
            return item.name === productName && item.size === productSize;
        });

        if (checkProductInCart) {
            checkProductInCart.quantity += productQuantity;
        } else {
            cart.push({
                name: productName,
                image: productImage,
                size: productSize,
                price: productPrice,
                quantity: productQuantity,
            });
        }
        storeCartInLocalStorage(cart);
        amountInIconCart();
    });

});

//load lại trang và giữ những cập nhập như cũ
window.addEventListener('DOMContentLoaded', () => {
    amountInIconCart();
    displayProducts(currentPage);
    addClickEventToProducts();
    filterProducts();
});

//luu gio hang vao localStorage trc khi thay doi
window.addEventListener('beforeunload', () => {
    storeCartInLocalStorage(cart);
});



