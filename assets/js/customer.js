//xử lí bấm vào xem lịch sử đơn hàng
function getOrderInLocal() {
    const inforOrder = localStorage.getItem('informationOrder');
    if(inforOrder) {
        return JSON.parse(inforOrder)
    }else {
        console.log('trong truy xuat dc local')
        return []
    }
}

function OrderInLocal(informationOrder) {
    localStorage.setItem('informationOrder', JSON.stringify(informationOrder));
}

function displayOrderHistory(email) {
    const orderContainer = document.getElementById('orders-container');
    const orderHistory = document.getElementById('order-history');
    const closeOrderHistory = document.getElementById('close-order-history');
    
    // Lấy lịch sử đơn hàng từ localStorage
    const orders = getOrderInLocal();

    // Lọc đơn hàng theo email
    const userOrders = orders.filter(order => {
        return order.customer && order.customer[0] && order.customer[0].emailCus === email;
    });

    // Kiểm tra nếu có đơn hàng của khách hàng
    if (userOrders.length === 0) {
        orderContainer.innerHTML = `<p>Không có đơn hàng nào trong lịch sử.</p>`;
    } else {
        // Hiển thị các đơn hàng
        orderContainer.innerHTML = '';
        userOrders.forEach(order => {
            const orderElement = document.createElement('div');
            orderElement.classList.add('order-item');
            orderElement.innerHTML = `
                <div class="order-details">
                    <p><strong>Mã đơn hàng:</strong> ${order.id}</p>
                    <p><strong>Ngày đặt:</strong> ${new Date(order.timeOrder).toLocaleString()}</p>
                    <p><strong>Sản phẩm:</strong> ${order.cart.map(item => item.name).join(', ')}</p>
                    <p><strong>Trạng thái:</strong> ${order.status}</p>
                </div>
            `;
            orderContainer.appendChild(orderElement);
        });
    }

    // Đóng lịch sử đơn hàng khi nhấn "Đóng"
    closeOrderHistory.addEventListener('click', () => {
        orderHistory.style.display = 'none';
    });

    // Hiển thị lịch sử đơn hàng
    orderHistory.style.display = 'block';
}


document.addEventListener('DOMContentLoaded', () => {
    const userButton = document.querySelector('.user-button');

    if (userButton) {
        userButton.addEventListener('click', (event) => {
            const target = event.target;

            // Nếu bấm vào mục "Đơn hàng đã mua"
            if (target.textContent === "Đơn hàng đã mua") {
                const currentUser = JSON.parse(localStorage.getItem('currentUser'));
                if (currentUser) {
                    displayOrderHistory(currentUser.emailCus); // Hiển thị đơn hàng của người dùng
                } else {
                    alert("Bạn cần đăng nhập để xem lịch sử đơn hàng.");
                }
            }
        });
    }
});
