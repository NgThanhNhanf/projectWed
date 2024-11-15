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

buttonCheckout.addEventListener('click' , () => {
    cartsection.style.transform = 'translateX(-100%)';
    checkoutsection.style.transform = 'translateX(0)';
});
// lắng nghe sự kiện click vào back to checkout
closeCheckout.addEventListener('click' , () => {
    checkoutsection.style.transform = 'translateX(-100%)';
    cartsection.style.transform = 'translateX(0)';
});

//lắng nghe sự kiện click vào preceed to shipping
const preceedtoshipping = document.querySelector('.preceed-btn');
const payment = document.querySelector('.infor-payment');
const leftcheckout = document.querySelector('.checkout-section .left');
preceedtoshipping.addEventListener('click', () => {
    if(solvePreceed()){
        leftcheckout.classList.add('hidden');
    }
    payment.classList.add('active');
});

//cac hàm thực hiện các chức năng riêng

//tang giam so luong san pham => price tăng hoặc giảm
function solveQuantily() {
    var minusButton = document.querySelectorAll('.minus');
    // console.log(minusButton);
    var plusButton = document.querySelectorAll('.plus');
    // console.log(plusButton);
    var quantily = document.querySelectorAll('.quantily-cnt');

    //giam bang nut -
    minusButton.forEach((minus,i) => {
        var cnt = quantily[i];
           minus.addEventListener('click' , () => {
               var childpriceproduct  = parseFloat(priceproduct[i].getAttribute('data-price'));
               var quantilyInt = parseInt(cnt.textContent);
                if(quantilyInt > 1){
                    quantilyInt--;
                    var totalPrice = quantilyInt * childpriceproduct;
                    priceproduct[i].textContent = totalPrice;
                    cnt.textContent = quantilyInt;
                    solveSumAllProduct();
            }
        });
    });
    
    //tang bang nut +
    plusButton.forEach((plus,i) => {
        var cnt = quantily[i];
        plus.addEventListener('click' , () => {
            var quantilyInt = parseInt(cnt.textContent);
            var childpriceproduct  = parseFloat(priceproduct[i].getAttribute('data-price'));
            quantilyInt++;
            var totalPrice = quantilyInt * childpriceproduct;
            cnt.textContent = quantilyInt;
            priceproduct[i].textContent = totalPrice;
            solveSumAllProduct();
        });
    });
}
solveQuantily();

//caculatorAllProduct
var sumProduct = 0;
var subtotal = document.querySelector('.row .value');
var priceproduct = document.querySelectorAll('.priceNumber');
console.log(priceproduct);
function solveSumAllProduct() {
    sumProduct = 0;
    priceproduct = document.querySelectorAll('.priceNumber');
    priceproduct.forEach((priceNumber) => {
        var price = parseFloat(priceNumber.textContent);
        sumProduct += price;
    });
    // console.log(sumProduct);
    subtotal.textContent = sumProduct.toFixed(2);
    solveTotal();
}

//total = subtotal + tax + shipping
var total = document.getElementById('price-total');
var sum = 0;
function solveTotal() {
    var totalPayment = document.querySelectorAll('.row .value');
    // console.log(totalPayment);
    sum = 0;
    totalPayment.forEach(value =>{
        var res = parseFloat(value.textContent);
        sum+= res;
    });
    total.textContent = sum.toFixed(2);
}


//nhap ma giam gia se giam 20%
function solvePromocode() {
    var promocode = document.querySelector('.value input');
    //ma giam gia se la gg123
    promocode.addEventListener('input' , () => {
        solveTotal();
       if(promocode.value === 'gg123') {
           total.textContent = (sum * 0.8).toFixed(2);
       }else {
           total.textContent = sum.toFixed(2);
       }
    });
}
solvePromocode();

//click vao x se xoa san pham
function solveIconX() {
    var icon = document.querySelectorAll('.iconX');
    var item = document.querySelectorAll('.item');
    var content = document.querySelector('.content-left');
    console.log(item);
    icon.forEach((iconX,i) =>{
        iconX.addEventListener('click' , () =>{
            content.removeChild(item[i]);
            solveSumAllProduct();
        });
    });
}
solveIconX();
solveSumAllProduct();
solveTotal();


//from order
function solvePreceed() {
    var formdk = document.formdk;
    var email = formdk.email.value;
    var firstname = formdk.firstName.value;
    var lastname = formdk.lastName.value;
    if(email === ''){
        alert('email khong duoc rong');
        email.focus();
        return false;
    }

    if(firstname === '') {
        alert('firstname khong duoc rong');
        firstname.focus();
        return false;
    }

    if(lastname === ''){
        alert('lastname khong duoc rong');
        lastname.focus();
        return false;
    }
    return true;
}

