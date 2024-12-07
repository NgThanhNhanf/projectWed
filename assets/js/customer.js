
function getOrderInLocal() {
    const inforOrder = localStorage.getItem('informationOrder');
    return inforOrder ? JSON.parse(inforOrder) : [];
}

// console.log(localStorage.getItem('informationOrder'));



function OrderInLocal(informationOrder) {
    localStorage.setItem('informationOrder', JSON.stringify(informationOrder));
}

// const currentUser = JSON.parse(localStorage.getItem('currentUser'));
// console.log(currentUser)
// const customer = JSON.parse(localStorage.getItem('cusData'))
// console.log(customer)

function displayOrderInHistory() {
    const orderHistory = document.getElementById('order-history');
    const orderContainer = document.getElementById('orders-container');
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        alert('Đăng nhập để xem lịch sử đơn hàng');
        return;
    }

    const orders = getOrderInLocal().filter(order => order.customer.some(cus => cus.emailCus === currentUser.email));
    // console.log(orders)
    if (orders.length === 0) {
        orderContainer.innerHTML = `<p>Chưa có đơn hàng nào</p>`;
    } else {
        orderContainer.innerHTML = orders.map(order =>
            `<div class="order-item">
                <h3>Đơn hàng #${order.id}</h3>
                <p>Ngày đặt: ${new Date(order.timeOrder).toLocaleDateString()}</p>
                <p>Tổng tiền: ${order.total.toLocaleString()} VND</p>
                <p>Trạng thái: ${order.status}</p>
                <button class="view-summary" data-id="${order.id}">Xem chi tiết</button>
            </div>`
        ).join('');
    }
    orderHistory.classList.remove('hidden');

}

document.getElementById('close-order-history').addEventListener('click', () => {
    document.getElementById('order-history').classList.add('hidden');
});

document.getElementById('orders-container').addEventListener('click', (event) => {
    if (event.target.classList.contains('view-summary')) {
        const orderId = event.target.dataset.id;
        displayOrderSummary(orderId);
    }
});

function displayOrderSummary(orderId) {
    const orders = getOrderInLocal();
    const order = orders.find(isOrder => isOrder.id === parseInt(orderId));

    const listAddress = order.address.map(addr => 
        `${addr.country || "Không có quốc gia"}, 
        ${addr.city || "Không có thành phố"}, 
        ${addr.address || "Không có địa chỉ"} - 
        SĐT: ${addr.phone || "Không có số điện thoại"}
    `).join(' <br> ');


    if (!order) {
        alert('Không tìm thấy đơn hàng');
        return;
    }

    const orderSummary = `
    <div class="order-summary">
        <h3>Chi tiết đơn hàng #${order.id}</h3>
        <p>Ngày đặt: ${new Date(order.timeOrder).toLocaleDateString()}</p>
        <p>Tổng tiền: ${order.total.toLocaleString()} VND</p>
        <p>Trạng thái: ${order.status}</p>
        <h4>Thông tin sản phẩm:</h4>
        <ul>
            ${order.cart.map(item => `
                <li><strong>${item.name}</strong> (x${item.quantity}) - ${(item.price * item.quantity).toLocaleString()} VND</li>
            `).join('')}
        </ul>
        <h4>Danh sách địa chỉ:</h4>
        <p> ${listAddress} </p>
        <button id="close-summary">Đóng</button>
    </div>`;

    const orderContainer = document.getElementById('orders-container');
    orderContainer.innerHTML = orderSummary;

    document.getElementById('close-summary').addEventListener('click', () => {
        displayOrderInHistory();
    });
}


//mo/tat sua thong tin tai khoan
document.addEventListener('DOMContentLoaded', () => {
    const yourAccount = document.querySelector('.editAccount');
    const wrapperInformation = document.querySelector('.wrapper-information');
    if(yourAccount && wrapperInformation){
        yourAccount.addEventListener('click', (event) => {
            event.preventDefault();
            wrapperInformation.classList.toggle('hidden');
            wrapperInformation.style.display = "block"
        });
    }

    const exitAccount = document.getElementById('exit')
    // console.log(exitAccount)
    if(exitAccount) {
        exitAccount.addEventListener('click', () => {
            wrapperInformation.style.display = 'none'
        });
    }
});


//thao tac cac input
function inPlacholder() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
    const addressCustomer = JSON.parse(localStorage.getItem('addressCustomer')) || [{}];
    const addressData = addressCustomer[0];
    document.getElementById('hotenUser').placeholder = currentUser.username || 'Nhap ho va ten'
    document.getElementById('sdtUser').placeholder = addressData.phone || 'Nhap so dien thoai'
    document.getElementById('emailUser').placeholder = currentUser.email || 'Nhap email'
    document.getElementById('addressUser').placeholder = addressData.address || 'Nhap dia chi'
}

function saveInforUser() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
    const addressCustomer = JSON.parse(localStorage.getItem('addressCustomer')) || [{}];
    const addressData = addressCustomer[0];
    let newhoten = document.getElementById('hotenUser').value;
    let newphone = document.getElementById('sdtUser').value;
    let newemail = document.getElementById('emailUser').value;
    let newaddress = document.getElementById('addressUser').value;
    //toan tu ... de sao chep du lieu
    const updateCurrentUser = {
        ...currentUser,
        ...(newhoten && {username: newhoten}),
        ...(newemail && {email: newemail})
    };

    const updateAddressCustomer = {
        ...addressData,
        ...(newphone && {phone: newphone}),
        ...(newaddress && {address: newaddress})
    };

    localStorage.setItem('currentUser',JSON.stringify(updateCurrentUser));
    localStorage.setItem('addressCustomer',JSON.stringify([updateAddressCustomer]));

    console.log("Updated currentUser:", updateCurrentUser);
    console.log("Updated addressCustomer:", updateAddressCustomer)
    
    inPlacholder();
    alert('sua thong tin thanh cong');
}

document.addEventListener('DOMContentLoaded',inPlacholder); 

document.getElementById('editInformation').addEventListener('click',saveInforUser);
