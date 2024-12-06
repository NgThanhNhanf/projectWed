function getOrders() {
    return JSON.parse(localStorage.getItem('informationOrder')) || [];
}

function filerOrder() {
    let orderStatus = document.getElementById('Status').value;
    let orderTotal = document.getElementById('Total').value;

    let filOrder = getOrders();

    if (orderStatus != "....") {
        filOrder = filOrder.filter(order => order.status === orderStatus);
    }

    if (orderTotal != "---") {
        filOrder = filOrder.filter(order => {
            const totalAmount = order.total;
            switch (orderTotal) {
                case "Less 100000":
                    return totalAmount < 100000;
                case "More 100000":
                    return totalAmount >= 100000 && totalAmount < 200000;
                case "More 200000":
                    return totalAmount >= 200000 && totalAmount < 300000;
                case "More 300000":
                    return totalAmount >= 300000 && totalAmount < 400000;
                case "More 400000":
                    return totalAmount >= 400000;
                default:
                    return true;
            }
        });
    }

    displayOrders(filOrder);
}

function displayOrders(filOrder) {
    let orderList = document.querySelector('.order-list');
    if (filOrder.length == 0) {
        orderList.innerHTML = `<p>Không có đơn hàng</p>`;
    } else {
        orderList.innerHTML = filOrder.map(order =>
            `
            <div class="order-row">
                <h3>#${order.id}</h3>
                <p>${order.status}</p>
                <p>${order.timeOrder}</p>
                <p>${order.total}</p>
                <button class="view" data-id="${order.id}">Chi tiết</button>
            </div>
        `
        ).join('');
    }
}

document.querySelector('.order-list').addEventListener('click', (event) => {
    if (event.target.classList.contains('view')) {
        const orderId = event.target.dataset.id;
        displayOrderSummary(orderId);
    }
});

function displayOrderSummary(orderId) {
    const orders = getOrders();
    const order = orders.find(isOrder => isOrder.id === parseInt(orderId));

    if (!order) {
        alert('Không tìm thấy đơn hàng');
        return;
    }

    const listAddress = order.address.map(addr =>
        `${addr.country || "Không có quốc gia"}, 
        ${addr.city || "Không có thành phố"}, 
        ${addr.address || "Không có địa chỉ"} - 
        SĐT: ${addr.phone || "Không có số điện thoại"}`
    ).join('<br>');

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
        <p>${listAddress}</p>
        <button id="close-modal">Đóng</button>
    </div>`;

    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = orderSummary;

    document.getElementById('modal-popup').classList.remove('hidden');
    modalContent.classList.remove('hidden');

    document.getElementById('close-modal').addEventListener('click', () => {
        document.getElementById('modal-popup').classList.add('hidden');
        modalContent.classList.add('hidden');
    });

    document.getElementById('modal-popup').addEventListener('click', () => {
        document.getElementById('modal-popup').classList.add('hidden');
        modalContent.classList.add('hidden');
    });
}

document.getElementById('filter-orders').addEventListener('click', filerOrder);

document.addEventListener('DOMContentLoaded', () => {
    displayOrders(getOrders());
});
