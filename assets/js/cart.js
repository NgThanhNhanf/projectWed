    //xử lí các nút bấm chuyển này kia,....
    const closeBtn = document.getElementById('closeBtn');
    // Khi click vào nút đóng, gửi message về parent để đóng iframe
    closeBtn.addEventListener('click', () => {
        window.parent.postMessage('closeCart', '*');
    });

    //lắng nghe sự kiện click vào nút checkout
    const buttonCheckout = document.getElementById('checkout-btn');
    const closeCheckout = document.getElementById('close-checkout');
    const cartsection = document.querySelector('.cart-section');
    const checkoutsection = document.querySelector('.checkout-section');

    buttonCheckout.addEventListener('click', () => {
        cartsection.style.transform = 'translateX(-100%)';
        checkoutsection.style.transform = 'translateX(0)';
    });
    // lắng nghe sự kiện click vào back to checkout
    closeCheckout.addEventListener('click', () => {
        checkoutsection.style.transform = 'translateX(-100%)';
        cartsection.style.transform = 'translateX(0)';
    });

    //lắng nghe sự kiện click vào preceed to shipping
    const preceedtoshipping = document.querySelector('.preceed-btn');
    const payment = document.querySelector('.infor-payment');
    const leftcheckout = document.querySelector('.checkout-section .left');
    preceedtoshipping.addEventListener('click', () => {
        if (solvePreceed()) {
            leftcheckout.classList.remove('active');
            leftcheckout.classList.add('hidden');
        }
        payment.classList.remove('hidden');
        payment.classList.add('active');
    });

    //lắng nghe sự kiện click vào back to checkout
    const backToCheckout = document.querySelector('.close-payment');
    // console.log(backToCheckout)
    backToCheckout.addEventListener('click', () => {
        payment.classList.remove('active');
        payment.classList.add('hidden');
        leftcheckout.classList.remove('hidden');
        leftcheckout.classList.add('active');
    });

    //lắng nghe sự kiện click vào proceed to payment
    const proceedToPayment = document.querySelector('.proceed-btn');
    const paymentMethod = document.querySelector('.paymentMethod');
    proceedToPayment.addEventListener('click', () => {
        paymentMethod.classList.remove('hidden');
        paymentMethod.classList.add('active');
        payment.classList.remove('active');
        payment.classList.add('hidden');
    }); 


    //cac hàm thực hiện các chức năng riêng

    //lay gio hang ra 
    function getCartFromLocalStorage() {
        const cart = localStorage.getItem('cart');
        return cart ? JSON.parse(cart) : [];
    }

    //Luu cart trong localStorage
    function storeCartInLocalStorage(cart) {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // console.log(cart)
    function displayCart(cart) {
        const cartItemContent = document.querySelector('.cartItemContent');
        // console.log(cartItemContent);
        cartItemContent.innerHTML = ''; // Xóa nội dung cũ

        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <div class="item">
                    <div class="product column">
                        <div class="product-img">
                            <img src="${item.image}" alt="${item.name}">
                        </div>
                        <div class="product-info">
                            <a href="#">${item.name}</a>
                        </div>
                    </div>
                    <div class="size column">${item.size}</div>
                    <div class="quantity column">
                        <span class="quantity-cnt">${item.quantity}</span>
                    </div>
                    <div class="price column">
                        <span class="priceNumber">${(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                    <div class = "iconX">
                        <i class="fa-solid fa-xmark"></i>    
                    </div>
                </div>`;
            cartItemContent.appendChild(cartItem);
        });
        solveIconX(cart)
        updateCart(cart)

    }
    // displayCart(cart);

    //tinh tien all san pham trong cart => luu vao subtotal
    var cartItem = document.querySelectorAll('.item');
    // console.log(cartItem)
    var subtotal = document.querySelector('.subtotal .value');
    var subtotalInt = parseInt(subtotal.textContent);

    function sumProductInCart(cart) {
        return cart.reduce( (sum,item)  => {
            return sum + (item.price * item.quantity);
        },0);
    }
    // sumProductInCart();

    //tinh ship dua tren subtotal
    function shipping(subtal) {
        return subtal > 1000 ? 50 : 0;
    }
    // shipping();

    //tinh thue dua vao tien ship
    function tax(shipCost) {
        return shipCost === 50 ? 20: 0;
    }
    // tax();

    //cong don vao total tong
    function totalAll(cart) {
        var subtal = sumProductInCart(cart)
        var shipCost = shipping(subtal)
        var istax = tax(shipCost)
        return subtal + shipCost + istax;
    }
    //nhap ma giam gia se giam 20%
    function solvePromocode() {
        var promocode = document.querySelector('.value input');
        //ma giam gia se la giamgia123
        promocode.addEventListener('change',() => {
            var cart = getCartFromLocalStorage();
            var sum = totalAll(cart);
            if(promocode.value === 'gg123'){
                sum = (sum * 0.8);
                var totalAlterPromocode = document.getElementById('price-total');
                totalAlterPromocode.textContent = sum;
            }
        });
    }
    solvePromocode();

    //click vao x se xoa san pham va cap nhap lai cac gia tri
    function solveIconX(cart) {
        var cartItem = document.querySelectorAll('.item');
        // console.log(cartItem)
        var iconX = document.querySelectorAll('.iconX');
        iconX.forEach((icon,index) => {
            icon.addEventListener('click', () => {
                cartItem[index].remove();
                cart.splice(index,1);
                storeCartInLocalStorage(cart)
                displayCart(cart)
                updateCart(cart)
                displayCheckout(cart)
            });
        });
    }

    function updateCart(cart) {
        //  const cart = getCartFromLocalStorage();
        var subtotal = sumProductInCart(cart);
        var shippingCost = shipping(subtotal);
        var taxCost = tax(shippingCost);
        var total = subtotal + shippingCost + taxCost;

        document.querySelector('.subtotal .value').textContent = subtotal.toLocaleString();
        document.querySelector('.shipping .value').textContent = shippingCost;
        document.querySelector('.tax .value').textContent = taxCost;
        document.getElementById('price-total').textContent = total.toLocaleString();
        //cap nhap cho total ben checkout
        document.querySelector('.checkout-section .footer-total span').textContent = total.toLocaleString();

    }

    //dong bo gio hang khi co thay doi trong localstorage
    window.addEventListener('storage', (event) =>{
        if(event.key === 'cart'){
            var update = JSON.parse(event.newValue) || [];
            displayCart(update)
            totalAll(cart)
            displayCheckout(cart)
        }
    });

    
window.addEventListener('DOMContentLoaded',()=> {
    var cart = getCartFromLocalStorage();
    displayCart(cart);
    totalAll(cart)
    storeCartInLocalStorage(cart);
    displayCheckout(cart)
});

   
    //------------CHECKOUT RIGHT--------------

    //form order
    var formdk = document.formdk;
    function solvePreceed() {
        var email = formdk.email.value;
        var firstname = formdk.firstName.value;
        var lastname = formdk.lastName.value;
        if (email === '') {
            alert('email khong duoc rong');
            email.focus();
            return false;
        }

        if (firstname === '') {
            alert('firstname khong duoc rong');
            firstname.focus();
            return false;
        }

        if (lastname === '') {
            alert('lastname khong duoc rong');
            lastname.focus();
            return false;
        }
        return true;
    }

    const emails = formdk.email;
    emails.addEventListener('click',() => {
        
    });


//hien thi ten san pham | so luong | gia tien ben cot phai
function displayCheckout(cart) {
    const contentInCheckoutRight = document.querySelector('.checkout-section .content-right');
    contentInCheckoutRight.innerHTML = '';

    cart.forEach(item => {
        const checkoutItem = document.createElement('div');
        checkoutItem.classList.add('checkout-item');
        checkoutItem.innerHTML = `
            <div class = "information">
                <div class = "information-left">
                    <p>${item.name}</p>
                </div>

                <div class = "information-right">
                    <span class = "amount">${item.quantity}</span><i>x</i>
                    <span class = "inforPrice"> <span>${item.price}</span> </span>
                </div>
            </div> `;
        contentInCheckoutRight.appendChild(checkoutItem);
    });
}





