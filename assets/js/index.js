//---------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const cartIcon = document.getElementById('cartIcon');
    const cartIframe = document.getElementById('cartIframe');

    cartIcon.addEventListener('click', () => {
        if (cur === null) {
            alert('Bạn cần đăng nhập để xem giỏ hàng');
            return;
        } 
        cartIframe.classList.toggle('open');
    });

    window.addEventListener('message',(event)=> {
        if(event.data === 'closeCart'){
            cartIframe.classList.remove('open');
            amountInIconCart1();
        }
    });

    // //an hien contact 
    // document.addEventListener('DOMContentLoaded', () => {
    //     const contactLink = document.getElementById('contact-link');
    //     const contact = document.getElementById('contact-section');

    //     contactLink.addEventListener('click', () => {
    //     console.log('click');
    //     contact.classList.toggle('active');
    //     });
    // });
    const productModal = document.getElementById('productModal');
    const modalImage = document.getElementById('modalImage');
    const modalName = document.getElementById('modalName');
    const modalPrice = document.getElementById('modalPrice');
    const modalDetail = document.querySelector('.detail-content');
    const closeModal = document.querySelector('.close');
    const allProduct = JSON.parse(localStorage.getItem('allProducts')) || [];

    function openModal(product) {
        const productImage = product.querySelector('img')?.src || '';
        const productName = product.querySelector('h4')?.textContent || 'Tên không xác định';
        const productPrice = product.querySelector('p')?.textContent || 'Giá không xác định';
        modalImage.src = productImage;
        modalName.textContent = productName;
        modalPrice.textContent = productPrice;
        const curProduct = allProduct.find(p => p.name === productName);
        if (curProduct) {
            modalDetail.textContent = curProduct.detail;
        } else {
            modalDetail.textContent = 'Chi tiết sản phẩm không khả dụng.';
        }
        productModal.style.display = 'block';
    }

    // Đóng modal khi nhấp ra ngoài
    window.onclick = (event) => {
        if (event.target === productModal) {
            productModal.style.display = 'none';
        }
    };
    // Đóng modal khi nhấn vào nút "close"
    closeModal.addEventListener('click', () => {
        productModal.style.display = 'none';
    });
    function displayProductLC(start, end) {
        const itemInPage = allProduct.slice(start, end);
        let product_content = document.querySelector('.product-content');
        itemInPage.forEach(p => {
            const div = document.createElement('div');
            div.setAttribute('class', 'product');
            div.innerHTML = `
                <div class="ima">
                    <img src="${p.image}" alt="">
                </div>
                <div class="product-detail">
                    <h4>${p.name}</h4>
                    <p>${p.price.toLocaleString()} đ</p>
                </div>
                <i class="fa-solid fa-cart-shopping cart-item"></i>
            ` 
            product_content.appendChild(div);
        });
    }
    function addClickEventToProducts() {
        const products = document.querySelectorAll('.product');
        products.forEach((product) => {
            product.addEventListener('click', () => {
                openModal(product);
            });
        });
    }

    const productList = document.querySelector('#product-list');
    function displayBestProduct() {
        for (let i = 0; i < 5; ++i) {
            const div = document.createElement('div');
            div.setAttribute('class', 'product best-item');
            div.innerHTML = `
                <div class="ima">
                    <img src="${allProduct[i].image}" alt="">
                </div>
                <div class="product-detail">
                    <h4>${allProduct[i].name}</h4>
                    <p>${allProduct[i].price.toLocaleString()} đ</p>
                </div>
                <i class="fa-solid fa-cart-shopping cart-item"></i>
            `
            productList.appendChild(div);
        }
    }

    let nav_list = document.querySelectorAll('.our-product .product-header .product-nav .nav-list .nav-item');
    let product_content = document.querySelector('.product-content');
    let hotProduct = document.querySelector('#nav-product1');
    let trending = document.querySelector('#nav-product2');
    let newProduct = document.querySelector('#nav-product3');
  
    function displayProduct(id) {
        switch (id) {
            case 0:
                hotProduct.classList.add('nav-item-active');
                product_content.innerHTML = ``;
                displayProductLC(0, 8);
                addClickEventToProducts();
                break;
            case 1:
                trending.classList.add('nav-item-active');
                product_content.innerHTML = ``;
                displayProductLC(8, 16);
                addClickEventToProducts();
                break;
            case 2:
                newProduct.classList.add('nav-item-active');
                product_content.innerHTML = ``;
                displayProductLC(16, 24);
                addClickEventToProducts();
                break;
        }
    }
  
    function checkProduct(id) {
        if (!nav_list || nav_list.length < 3) {
            return;
        }
  
        for (let i = 0; i < nav_list.length; ++i) {
            if (nav_list[i].classList.contains('nav-item-active')) {
                nav_list[i].classList.remove('nav-item-active');
            }
        }
        displayProduct(id);
    }
  
    hotProduct.onclick = () => checkProduct(0);
    trending.onclick = () => checkProduct(1);
    newProduct.onclick = () => checkProduct(2);
    checkProduct(0);
    displayBestProduct();
    addClickEventToProducts();
    const productBest = document.querySelectorAll('.best-item');
    const product_list = document.querySelector('#product-list');
    const prev = document.getElementById('pre-btn');
    const nxt = document.getElementById('nxt-btn');
    let index = 0;
    prev.onclick = () => {
        if (index > 0) {
            index--;
            nextSlide();
        }
        console.log(productBest.length);
    };

    nxt.onclick = () => {
        if (index < productBest.length - 3) {
            index++;
            nextSlide();
        }
    };

    function nextSlide() {
        const itemWidth = productBest[0].offsetWidth + 20;
        const moveDistance = -itemWidth * index;
        product_list.style.transform = `translateX(${moveDistance}px)`;
    }
    //-------------quantity---------------//
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

    //---------------cart----------------//
    const amountCart = document.querySelector('.amount-cart');
    function amountInIconCart1() {
        const productCart = getCartFromLocalStorage();
        var amount;
        if (productCart.length) {
            amount = productCart.reduce((total, cartElement) => {
                return total + cartElement.quantity;
            }, 0);
        } else {
            amount = 0;
        }
        if (amount) {
            amountCart.style.display = 'block';
            if(amount < 100)
                amountCart.textContent = amount; 
            else amountCart.textContent = '99+';
        } else {
            amountCart.style.display = 'none';
        }
    }
    const addToCartButtons = document.querySelectorAll('.wishlist');
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const cur = JSON.parse(localStorage.getItem('currentUser'));
    const logedInUser = cur === null ? null : users.find(user => user.email === cur.email);
    if (logedInUser != null)
        localStorage.setItem('cart', JSON.stringify(logedInUser.cartItem));
    amountInIconCart1();
    // console.log(cur);
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            //Lấy thông tin sản phẩm từ modal
            if (cur === null) {
                alert('Bạn cần đăng nhập để có thể thêm sản phẩm vào giỏ hàng');
                return;
            } 
            const productImage = document.getElementById('modalImage').src;
            const productName = document.getElementById('modalName').textContent;
            const productSize = document.getElementById('sizeSelect').value;
            const productPrice = parseFloat(document.getElementById('modalPrice').textContent);
            const productQuantity = parseInt(document.getElementById('quantity').textContent, 10);

            var cart = getCartFromLocalStorage();
            var checkProductInCart = logedInUser.cartItem.find(item => {
                return item.name === productName && item.size === productSize;
            });

            if (checkProductInCart) {
                checkProductInCart.quantity += productQuantity;
            } else {
                logedInUser.cartItem.push({
                    name: productName,
                    image: productImage,
                    size: productSize,
                    price: productPrice,
                    quantity: productQuantity,
                });
            }
            localStorage.setItem('users', JSON.stringify(users));
            storeCartInLocalStorage(cart);
            localStorage.setItem('cart', JSON.stringify(logedInUser.cartItem));
            amountInIconCart1();
            alert("Thêm sản phẩm vào giỏi hàng thành công");
        });

    });
    amountInIconCart1();
});
