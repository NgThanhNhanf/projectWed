
function getOrderInLocal() {
    const inforOrder = localStorage.getItem('informationOrder');
    return inforOrder ? JSON.parse(inforOrder) : [];
}

function OrderInLocal(informationOrder) {
    localStorage.setItem('informationOrder', JSON.stringify(informationOrder));
}

const currentUser = JSON.parse(localStorage.getItem('currentUser'));
console.log(currentUser)
const customer = JSON.parse(localStorage.getItem('cusData'))
console.log(customer)

function displayOrderInHistory() {
    const orderHistory = document.getElementById('order-history');
    const orderContainer = document.getElementById('orders-container');
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log(isOrder)
    if (!currentUser) {
        alert('Đăng nhập để xem lịch sử đơn hàng');
        return;
    }

    const orders = getOrderInLocal().filter(order => order.customer.some(cus => cus.emailCus === currentUser.email));
    console.log(orders)
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
        <h4>Thông tin giao hàng:</h4>
        <p>${order.address.country}, ${order.address.city}, ${order.address.address}</p>
        <p>SĐT: ${order.address.phone}</p>
        <button id="close-summary">Đóng</button>
    </div>`;

    const orderContainer = document.getElementById('orders-container');
    orderContainer.innerHTML = orderSummary;

    document.getElementById('close-summary').addEventListener('click', () => {
        displayOrderInHistory();
    });
}


// document.addEventListener('DOMContentLoaded', () => {
//     const viewOrdersButton = document.querySelector('.view-orders-btn');
//     if (viewOrdersButton) {
//         viewOrdersButton.addEventListener('click', () => {
//             console.log("Nút xem đơn hàng đã mua đã được nhấn");
//             displayOrderInHistory();
//         });
//     }
// });
