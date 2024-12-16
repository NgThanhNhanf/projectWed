//xử lí các nút bấm chuyển này kia,....
const closeBtn = document.getElementById('closeBtn');
// Khi click vào nút đóng, gửi message về parent để đóng iframe
closeBtn.addEventListener('click', () => {
    window.parent.postMessage('closeCart', '*');
});
const cur = JSON.parse(localStorage.getItem('currentUser'));

//lắng nghe sự kiện click vào nút thong tin thanh toan
const buttonCheckout = document.getElementById('checkout-btn');
const closeCheckout = document.getElementById('close-checkout');
const cartsection = document.querySelector('.cart-section');
const checkoutsection = document.querySelector('.checkout-section');


buttonCheckout.addEventListener('click', () => {
    const isCart = getCartFromLocalStorage()
    if (isCart.length == 0) {
        alert('Bạn phải mua hàng thì mới được thanh toán')
        return;
    }
    cartsection.style.transform = 'translateX(-100%)';
    checkoutsection.style.transform = 'translateX(0)';
});
// lắng nghe sự kiện click vào quay lai
closeCheckout.addEventListener('click', () => {
    checkoutsection.style.transform = 'translateX(-100%)';
    cartsection.style.transform = 'translateX(0)';
});

//lắng nghe sự kiện click vào tiến hành vận chuyển 
const preceedtoshipping = document.querySelector('.preceed-btn');
const payment = document.querySelector('.infor-payment');
const leftcheckout = document.querySelector('.checkout-section .left');
preceedtoshipping.addEventListener('click', () => {
    if (solvePreceed()) {
        leftcheckout.classList.remove('active');
        leftcheckout.classList.add('hidden');
        payment.classList.remove('hidden');
        payment.classList.add('active');
    } else {
        alert("kiểm tra lại thông tin của bạn");
    }
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

//lắng nghe sự kiện click vào Thanh toán
const proceedToPayment = document.querySelector('.proceed-btn');
const paymentMethod = document.querySelector('.paymentMethod');
proceedToPayment.addEventListener('click', (event) => {
    event.preventDefault();
    if (isCheckPayment()) {
        paymentMethod.classList.remove('hidden');
        paymentMethod.classList.add('active');
        payment.classList.remove('active');
        payment.classList.add('hidden');
    }
});

//lắng nghe sự kiện click vào nodejs 
const nodejs = document.querySelector('.nodejs');
nodejs.addEventListener('click', () => {
    paymentMethod.classList.remove('active');
    paymentMethod.classList.add('hidden');
    payment.classList.remove('hidden');
    payment.classList.add('active')
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
    if (cart.length == '') {
        cartItemContent.innerHTML = `
                <div class="cartEmpty">
                    <i class="fa-brands fa-opencart iconCartEmpty"></i>
                    <div class="empty-cart">Chưa có sản phẩm trong giỏ hàng</div>
                </div>
            `;
        return; // Kết thúc hàm khi giỏ hàng trống
    }
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
                                <i class="fas fa-minus minus"></i>
                                <span class="quantity-cnt">${item.quantity}</span>
                                <i class="fas fa-plus plus"></i>
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
    solveQuantity(cart);
    solveIconX(cart)
    updateCart(cart)
    amountInIconCart()
}

// displayCart(cart);

//tinh tien all san pham trong cart => luu vao subtotal
var cartItem = document.querySelectorAll('.item');
// console.log(cartItem)
var subtotal = document.querySelector('.subtotal .value');
var subtotalInt = parseInt(subtotal.textContent);

function sumProductInCart(cart) {
    return cart.reduce((sum, item) => {
        return sum + (item.price * item.quantity);
    }, 0);
}
// sumProductInCart();

//tinh ship dua tren subtotal
function shipping(subtal) {
    return subtal > 1000 ? 50 : 0;
}
// shipping();

//tinh thue dua vao tien ship
function tax(shipCost) {
    return shipCost === 50 ? 20 : 0;
}
// tax();

//cong don vao total tong
function totalAll(cart) {
    var subtal = sumProductInCart(cart)
    var shipCost = shipping(subtal)
    var istax = tax(shipCost)
    return subtal + shipCost + istax;
}


//click vao x se xoa san pham va cap nhap lai cac gia tri
const users = JSON.parse(localStorage.getItem('users')) || [];
const currentU = JSON.parse(localStorage.getItem('currentUser'));
const logedInUser = currentU === null ? null : users.find(user => user.email === currentU.email);
if (logedInUser != null)
    localStorage.setItem('cart', JSON.stringify(logedInUser.cartItem));
function solveIconX(cart) {
    var cartItem = document.querySelectorAll('.item');
    // console.log(cartItem)
    var iconX = document.querySelectorAll('.iconX');
    iconX.forEach((icon, index) => {
        icon.addEventListener('click', () => {
            cartItem[index].remove();
            cart.splice(index, 1);
            logedInUser.cartItem = cart;
            console.log(logedInUser);
            // if (logedInUser != null)
            localStorage.setItem('users', JSON.stringify(users));
            storeCartInLocalStorage(cart);
            displayCart(cart)
            updateCart(cart)
            displayCheckout(cart)
            amountInIconCart1();
        });
    });
}
function solveQuantity(cart) {
    const minusIcon = document.querySelectorAll('.minus');
    const plusIcon = document.querySelectorAll('.plus');

    // Lấy thông tin sản phẩm gốc dựa trên ID
    function getOriginalQuantity(productName) {
        const product = allProducts.find(p => p.name === productName);
        return product ? product.quantity : 0;
    }

    minusIcon.forEach((button, index) => {
        button.addEventListener('click', () => {
            if (cart[index].quantity > 1) {
                cart[index].quantity--; // Giảm số lượng trong giỏ hàng
                displayQuantilyAlterUpdate(index, cart[index].quantity);
                storeCartInLocalStorage(cart);
                updateCart(cart);
                displayCart(cart);
                displayCheckout(cart);
            }
        });
    });

    plusIcon.forEach((button, index) => {
        button.addEventListener('click', () => {
            const originalQuantity = getOriginalQuantity(cart[index].name);
            if (cart[index].quantity < originalQuantity) { // Kiểm tra giới hạn
                cart[index].quantity++; // Tăng số lượng
                displayQuantilyAlterUpdate(index, cart[index].quantity);
                storeCartInLocalStorage(cart);
                updateCart(cart);
                displayCart(cart);
                displayCheckout(cart);
            } else {
                alert('Số lượng vượt quá tồn kho!');
            }
        });
    });
}


function displayQuantilyAlterUpdate(index, quantity) {
    const quantityElement = document.querySelectorAll('.quantity-cnt');
    quantityElement[index].textContent = quantity;
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
    displayCheckout(cart)

}

//dong bo gio hang khi co thay doi trong localstorage
window.addEventListener('storage', (event) => {
    if (event.key === 'cart') {
        var update = JSON.parse(event.newValue) || [];
        displayCart(update)
        totalAll(cart)
        displayCheckout(cart)
    }
});


document.addEventListener('DOMContentLoaded', () => {
    // var cus = getCusTomerFromLocalStorage();
    var cart = getCartFromLocalStorage();
    displayCart(cart);
    totalAll(cart)
    storeCartInLocalStorage(cart);
    displayCheckout(cart)

});


//------------CHECKOUT RIGHT--------------

//form order
const currentUser = JSON.parse(localStorage.getItem('currentUser'))
if (currentUser) {
    var formdk = document.formdk;
    formdk.email.value = currentUser.email;
    formdk.name.value = currentUser.username;
    formdk.email.readOnly = true;
    formdk.name.readOnly = true;
}

var formdk = document.formdk;
function solvePreceed() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))
    var email = formdk.email.value;
    var name = formdk.name.value;
    email = currentUser.email;
    name = currentUser.username;
    if (email === '') {
        alert('email khong duoc rong');
        formdk.email.focus();
        return false;
    }

    if (name === '') {
        alert('name khong duoc rong');
        formdk.name.focus();
        return false;
    }
    addCustomerToLocalStorage();
    return true;
}

function addCustomerToLocalStorage() {
    const emailCus = formdk.email.value;
    const nameCus = formdk.name.value;
    var customerFormLocalStorage = getCusTomerFromLocalStorage();

    const customerExist = customerFormLocalStorage.findIndex((customer) => {
        return customer.emailCus === emailCus;
    });

    if (customerExist !== -1) {
        customerFormLocalStorage[customerExist].indexLogin += 1;
    } else {
        var customerData =
        {
            nameCus,
            emailCus,
            indexLogin: 1,
        };
        customerFormLocalStorage.push(customerData);
    }
    localStorage.setItem('cusData', JSON.stringify(customerFormLocalStorage));
}

function getCusTomerFromLocalStorage() {
    var cus = localStorage.getItem('cusData');
    return cus ? JSON.parse(cus) : [];
}

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



    //click vao di den phuong thuc thanh toan -> chuyen den trang tuy chon thanh toan

    function setAddressCusInLocal(addressCustomer) {
        localStorage.setItem('addressCustomer', JSON.stringify(addressCustomer));
    }

    function getAddressCusInLocal() {
        const addressCus = localStorage.getItem('addressCustomer');
        return addressCus ? JSON.parse(addressCus) : [];
    }

    function isCheckPayment() {
        const formPayment = document.formPy;
        const country = formPayment.country.value;
        const address = formPayment.address.value;
        const city = formPayment.city.value;
        const phone = formPayment.phone.value;

        if (!country || !address || !city || !phone) {
            alert("Vui lòng điền đầy đủ thông tin địa chỉ!");
            return false;
        }
        return true;
    }

    //chon dia chi old or new => nhap du lieu moi
    function showOldAddresses() {
        const addressCustomer = getAddressCusInLocal()
        const oldAddresssesContainer = document.getElementById('oldAddresses');

        oldAddresssesContainer.innerHTML = ''

        if (addressCustomer.length == 0) {
            oldAddresssesContainer.innerHTML = '<p> không có địa chỉ cũ</p>'
        } else {
            addressCustomer.forEach((address, index) => {
                const addressCard = document.createElement('div');
                addressCard.classList.add("address-card");

                addressCard.innerHTML = `
                    <div class="address-row">
                        <span><strong>Địa chỉ:</strong> ${address.address}</span>
                        <span><strong>Quận:</strong> ${address.country}</span>
                        <span><strong>Thành phố:</strong> ${address.city}</span>
                        <span><strong>Số điện thoại:</strong> ${address.phone}</span>
                        <button class="select-btn" data-index="${index}">Chọn</button>
                    </div>
                `;
                oldAddresssesContainer.appendChild(addressCard)
            });
            document.querySelectorAll('.select-btn').forEach(button => {
                button.addEventListener('click', (event) => {
                    event.preventDefault();
                    const index = button.getAttribute('data-index');
                    selectOldAddress(index);
                });
            });
            document.getElementById('newAddressButton').style.display = 'block';
        }
        oldAddresssesContainer.style.display = 'block'
    }
    function selectOldAddress(index) {
        const addressCustomer = getAddressCusInLocal();
        const selectedAddress = addressCustomer[index];
     
        document.getElementById("address").value = selectedAddress.address;
        document.getElementById("country").value = selectedAddress.country;
        document.getElementById("city").value = selectedAddress.city;
        document.getElementById("phone").value = selectedAddress.phone;


        document.getElementById('country').disabled = true;
        document.getElementById('address').disabled = true;
        document.getElementById('city').disabled = true;
        document.getElementById('phone').disabled = true;

        document.getElementById('oldAddresses').style.display = 'none';

        alert('đã chọn địa chỉ cũ');
    }

    function selectNewAddress() {
        document.getElementById('country').disabled = false;
        document.getElementById('address').disabled = false;
        document.getElementById('city').disabled = false;
        document.getElementById('phone').disabled = false;

        document.getElementById('country').value = ''
        document.getElementById('address').value = ''
        document.getElementById('city').value = ''
        document.getElementById('phone').value = ''

        document.getElementById('oldAddresses').style.display = 'none';
        alert('nhap dia chi moi')
    }

    document.getElementById("showOldAddresses").addEventListener("click", showOldAddresses);
    document.getElementById("newAddressButton").addEventListener("click", selectNewAddress);

    document.querySelector(".proceed-btn").addEventListener("click", saveAddressInLocal)

    //Nếu có địa chỉ cũ, hiển thị nút chọn
    document.addEventListener("DOMContentLoaded", () => {
        const oldAddresses = getAddressCusInLocal();
        if (oldAddresses.length > 0) {
            document.getElementById("showOldAddresses").style.display = "block";
        } else {
            document.getElementById("showOldAddresses").style.display = "none";
        }
    });


    function saveAddressInLocal(event) {
        event.preventDefault()

        if (!isCheckPayment()) {
            alert('thong tin khong hop le')
            return;
        }

        const newCountry = document.getElementById('country').value
        const newAddress = document.getElementById('address').value
        const newCity = document.getElementById('city').value
        const newPhone = document.getElementById('phone').value;
        const customerInLocal = getAddressCusInLocal();



        const updateAddress = {
            country: newCountry,
            address: newAddress,
            city: newCity,
            phone: newPhone
        };

        const checknewAddressIsOld = customerInLocal.some(addressOld => {
            return addressOld.country === updateAddress.country &&
                    addressOld.address === updateAddress.address &&
                    addressOld.city === updateAddress.city &&
                    addressOld.phone === updateAddress.phone
        });

        if(checknewAddressIsOld) {
            alert('địa chỉ này đã tồn tại')
            return;
        }

        customerInLocal.push(updateAddress);
        setAddressCusInLocal(customerInLocal)
        alert('them dia chi moi thanh cong')

    }

//----------xử lí thanh toán-----------

document.addEventListener("DOMContentLoaded", function () {
    // Lấy các phần tử
    const form = document.querySelector(".payment-form");
    const paymentOptions = document.querySelectorAll(".payment-option input[name ='payment']");
    const inputs = document.querySelectorAll(".input-group input");
    const checkboxes = document.querySelectorAll(".checkbox-group input");
    // const submitButton = document.querySelector(".pay");
    const radioCard = document.getElementById('card-swipe');
    const inforCard = document.querySelector('.infor')
    const codeCard = document.querySelector('.expiration-code')
    // console.log(inforCard)
    // console.log(codeCard)

    function openMethodOfCard(show) {
        inforCard.style.display = show ? "block" : "none"
        codeCard.style.display = show ? "block" : "none"
    }

    paymentOptions.forEach(option => {
        option.addEventListener('change', () => {
            if (radioCard.checked) {
                openMethodOfCard(true)
            } else {
                openMethodOfCard(false)
            }
        });
    })
    // Xử lý khi submit form
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Ngăn chặn hành động mặc định

        // Kiểm tra phương thức thanh toán
        const selectedPayment = Array.from(paymentOptions).find(option => option.checked);
        if (!selectedPayment) {
            alert("Vui lòng chọn phương thức thanh toán!");
            return;
        }

        if (radioCard.checked) {
            const cardFields = document.querySelectorAll('#card-name,#card-number,#expiry-date,#cvv');
            let isValid = true;
            // Kiểm tra các trường input
            cardFields.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.classList.add("error");
                } else {
                    input.classList.remove("error");
                }
            });

            if (!isValid) {
                alert("Vui lòng điền đầy đủ thông tin!");
                return;
            }

        }

        // Kiểm tra các checkbox
        const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);
        if (!allChecked) {
            alert("Vui lòng chấp nhận điều khoản và sử dụng địa chỉ thanh toán!");
            return;
        }

        // Xử lý thanh toán thành công
        location.reload();
        alert("Thanh toán thành công! Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi.");
        form.reset(); // Reset form sau khi thanh toán thành công
        openMethodOfCard(false)
    });
    openMethodOfCard(false)
});

//sau khi ấn submit thì sẽ lưu thông tin đơn hàng vào trong localStorage chờ xử lí

function getOrderInLocal() {
    const inforOrder = localStorage.getItem('informationOrder');
    return inforOrder ? JSON.parse(inforOrder) : [];
}

function OrderInLocal(informationOrder) {
    localStorage.setItem('informationOrder', JSON.stringify(informationOrder));
}


function saveOrder(cart, customer, address) {
    const orders = getOrderInLocal();

    const newOrder = {
        id: new Date().getTime(),
        customer: customer,
        address: address,
        cart: cart,
        timeOrder: Date.now(),
        total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
        status: "Chưa xử lý",
    };
    orders.push(newOrder);
    OrderInLocal(orders);
}

function clearCart() {
    localStorage.removeItem('cart');
    const cartUser = JSON.parse(localStorage.getItem('users'))
    if(cartUser && Array.isArray(cartUser[0].cartItem)) {
        cartUser[0].cartItem = [];
    }
    localStorage.setItem('users',JSON.stringify(cartUser))
}


document.getElementById('payment-form').addEventListener('submit', (e) => {
    e.preventDefault();

    if (!isCheckPayment()) return;

    const inforCart = getCartFromLocalStorage();
    const inforCustomer = getCusTomerFromLocalStorage();
    const inforAddress = getAddressCusInLocal();

    if (!inforCart.length || !inforCustomer.length || !inforAddress.length) {
        alert("vui long kiem tra lai thong tin!");
        return;
    }
    saveOrder(inforCart, inforCustomer, inforAddress);
    clearCart();
});    
