document.addEventListener("DOMContentLoaded", () => {
    let nav_list = document.querySelectorAll('.our-product .product-header .product-nav .nav-list .nav-item');
    let product_content = document.querySelector('.product-content');
    let hotProduct = document.querySelector('#nav-product1');
    let trending = document.querySelector('#nav-product2');
    let newProduct = document.querySelector('#nav-product3');
  
    function displayProduct(id) {
        switch (id) {
            case 0:
                hotProduct.classList.add('nav-item-active');
                product_content.innerHTML = `
                    <div class="product">
                        <div class="ima">
                            <img src="/assets/img/product/Black_LSHOVCOB362UD0102SS24_1.jpg " alt="">
                        </div>
                        <div class="product-detail">
                            <h4>Product 1</h4>
                            <p>99$</p>
                        </div>
                        <i class="fa-solid fa-cart-shopping cart-item"></i>
                        <i class="fa-regular fa-heart"></i>
                    </div>`;
                break;
            case 1:
                trending.classList.add('nav-item-active');
                product_content.innerHTML = `
                    <div class="product">
                    <div class="ima">
                        <img src="/assets/img/product/Black_LSHOVCOB362UD0102SS24_1.jpg " alt="">
                    </div>
                    <div class="product-detail">
                        <h4>Product 1</h4>
                        <p>99$</p>
                    </div>
                    <i class="fa-solid fa-cart-shopping cart-item"></i>
                    <i class="fa-regular fa-heart"></i>
                </div>
                <div class="product">
                    <div class="ima">
                        <img src="/assets/img/product/Black_LSHOVCOB362UD0102SS24_1.jpg" alt="">
                    </div>
                    <div class="product-detail">
                        <h4>Product 1</h4>
                        <p>99$</p>
                    </div>
                    <i class="fa-solid fa-cart-shopping cart-item"></i>
                    <i class="fa-regular fa-heart"></i>
                </div>
                <div class="product">
                    <div class="ima">
                        <img src="/assets/img/product/Black_LSHOVCOB362UD0102SS24_1.jpg" alt="">
                    </div>
                    <div class="product-detail">
                        <h4>Product 1</h4>
                        <p>99$</p>
                    </div>
                    <i class="fa-solid fa-cart-shopping cart-item"></i>
                    <i class="fa-regular fa-heart"></i>
                </div>
                <div class="product">
                    <div class="ima">
                        <img src="/assets/img/product/aolen2.jpg" alt="">
                    </div>
                    <div class="product-detail">
                        <h4>Product 1</h4>
                        <p>99$</p>
                    </div>
                    <i class="fa-solid fa-cart-shopping cart-item"></i>
                    <i class="fa-regular fa-heart"></i>
                </div>
                <div class="product">
                    <div class="ima">
                        <img src="/assets/img/product/DarkGrey_LHZBXCOE275UX0202SS24_1.jpg" alt="">
                    </div>
                    <div class="product-detail">
                        <h4>Product 1</h4>
                        <p>99$</p>
                    </div>
                    <i class="fa-solid fa-cart-shopping cart-item"></i>
                    <i class="fa-regular fa-heart"></i>
                </div>
                <div class="product">
                    <div class="ima">
                        <img src="/assets/img/product/Black_LSHOVCOB362UD0102SS24_1.jpg" alt="">
                    </div>
                    <div class="product-detail">
                        <h4>Product 1</h4>
                        <p>99$</p>
                    </div>
                    <i class="fa-solid fa-cart-shopping cart-item"></i>
                    <i class="fa-regular fa-heart"></i>
                </div>
                <div class="product">
                    <div class="ima">
                        <img src="/assets/img/product/Black_LSHOVCOB362UD0102SS24_1.jpg" alt="">
                    </div>
                    <div class="product-detail">
                        <h4>Product 1</h4>
                        <p>99$</p>
                    </div>
                    <i class="fa-solid fa-cart-shopping cart-item"></i>
                    <i class="fa-regular fa-heart"></i>
                </div>`;
                break;
            case 2:
                newProduct.classList.add('nav-item-active');
                product_content.innerHTML = `
                    <div class="product">
                        <div class="ima">
                            <img src="/assets/img/product/aolen2.jpg" alt="">
                        </div>
                        <div class="product-detail">
                            <h4>Product 1</h4>
                            <p>99$</p>
                        </div>
                        <i class="fa-solid fa-cart-shopping cart-item"></i>
                        <i class="fa-regular fa-heart"></i>
                    </div>`;
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
  });