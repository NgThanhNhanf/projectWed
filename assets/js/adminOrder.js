
function getOrders() {
    return JSON.parse(localStorage.getItem('informationOrder')) || [];
}

function filerOrder() {
    let orderStatus = document.getElementById('Status').value;
    let orderTotal = document.getElementById('Total').value;
    let beginOrder = document.getElementById('beginTimeOrder').value;
    let endOrder = document.getElementById('endTimeOrder').value;
    let orderAddress = document.getElementById('address').value;
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

    if (beginOrder && endOrder) {
        filOrder = filOrder.filter(order => {
            const itOrders = new Date(order.timeOrder).toISOString().split("T")[0];
            return itOrders >= beginOrder && itOrders <= endOrder;
        });
    }

    if (orderAddress != "...") {
        filOrder = filOrder.filter((order) => {
            return Array.isArray(order.address) && order.address.some(district => district.country === orderAddress)
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
                    <p id= "isStatus">${order.status}</p>
                    <p>${new Date(order.timeOrder).toLocaleString()}</p>
                    <p>${order.total} VND</p>
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
//hien thi chi tiet don hang
function displayOrderSummary(orderId) {
    const orders = getOrders();
    const order = orders.find(isOrder => isOrder.id === parseInt(orderId));

    if (!order) {
        alert('Không tìm thấy đơn hàng');
        return;
    }

    const listAddress = order.address.map(addr =>
        `Đường:${addr.address || "Không có địa chỉ"},
            Quận:${addr.country || "Không có quận"}, 
            Thành Phố:${addr.city || "Không có thành phố"}, 
            SĐT: ${addr.phone || "Không có số điện thoại"}`
    ).join('<br>');

    const orderSummary = `
        <div class="order-summary">
            <h3>Chi tiết đơn hàng #${order.id}</h3>
            <p>Ngày đặt: ${new Date(order.timeOrder).toLocaleDateString()}</p>
            <p>Tổng tiền: ${order.total.toLocaleString()} VND</p>
            <h4>Thông tin sản phẩm:</h4>
            <ul>
                ${order.cart.map(item => `
                    <li><strong>${item.name}</strong> (x${item.quantity}) - ${(item.price * item.quantity).toLocaleString()} VND</li>
                `).join('')}
            </ul>
            <h4>Danh sách địa chỉ:</h4>
            <p>${listAddress}</p>
            <p> Trạng thái: </p>
                <select id="status-section">
                    <option value = "Chưa xử lý" ${order.status === "Chưa xử lý" ? "selected" : ""}>Chưa xử lý </option>
                    <option value = "Đã xác nhận" ${order.status === "Đã xác nhận" ? "selected" : ""}>Đã xác nhận </option>
                    <option value = "Giao hàng thành công" ${order.status === "Giao hàng thành công" ? "selected" : ""}>Giao hàng thành công </option>
                    <option value = "Đã hủy" ${order.status === "Đã hủy" ? "selected" : ""}>Đã hủy</option>
                </select>
                <button id= "updateStatus"> Cập nhật trạng thái</button>
            <button id="close-modal">Đóng</button>
        </div>`;

    const modalContainer = document.getElementById('modal-container');
    modalContainer.innerHTML = orderSummary;

    document.getElementById('modal-popup').classList.remove('hidden');
    modalContainer.classList.remove('hidden');

    document.getElementById('close-modal').addEventListener('click', () => {
        document.getElementById('modal-popup').classList.add('hidden');
        modalContainer.classList.add('hidden');
    });

    //click vao popup(nen den ben ngoan) => dong phan chi tiet
    document.getElementById('modal-popup').addEventListener('click', () => {
        document.getElementById('modal-popup').classList.add('hidden');
        modalContainer.classList.add('hidden');
    });

    //cap nhap trang thai
    document.getElementById('updateStatus').addEventListener('click', () => {
        const newStatus = document.getElementById('status-section').value;
        order.status = newStatus
        localStorage.setItem('informationOrder', JSON.stringify(orders));
        alert('cap nhap trang thai don hang thanh cong');
        displayOrders(getOrders());
    });

}

function resetOrder() {
    let orderStatus = document.getElementById('Status').value = "....";
    let orderTotal = document.getElementById('Total').value = "---";
    let beginOrder = document.getElementById('beginTimeOrder').value = "";
    let endOrder = document.getElementById('endTimeOrder').value = "";
    let orderAddress = document.getElementById('address').value = "...";
    displayOrders(getOrders());
}

document.getElementById('Status').addEventListener('change', filerOrder);
document.getElementById('Total').addEventListener('change', filerOrder);
document.getElementById('beginTimeOrder').addEventListener('change', filerOrder)
document.getElementById('endTimeOrder').addEventListener('change', filerOrder)
document.getElementById('address').addEventListener('change', filerOrder)


document.getElementById('filter-orders').addEventListener('click', resetOrder);

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded: Running');
    const orders = getOrders();
    console.log('Orders:', orders);  // Kiểm tra dữ liệu đơn hàng
    displayOrders(orders);
});
