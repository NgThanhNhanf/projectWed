// adminCustomer.js

document.querySelector('.search-btn').addEventListener('click', function () {
    this.parentElement.classList.toggle('open');
    this.previousElementSibling.focus();
});


function getCustomersFromLocal() {
    const inforCustomer = localStorage.getItem('customerList');
    return inforCustomer ? JSON.parse(inforCustomer) : [];
}

function saveCustomersToLocal(customers) {
    localStorage.setItem('customerList', JSON.stringify(customers));
}

//tạo id cho khách hàng
function generateUniqueId() {
    return Date.now();
}

console.log(JSON.parse(localStorage.getItem('informationOrder')));

function addCustomerFromOrder() {
    // Lấy thông tin khách hàng từ order
    const informationOrder = JSON.parse(localStorage.getItem('informationOrder')) || [];
    if (informationOrder.length == 0) {
        alert('khong co don hang nao');
        return;
    }
    const customers = getCustomersFromLocal();
    informationOrder.forEach(order => {
        const customerData = {
            id: generateUniqueId(),
            name: order.customer[0].nameCus,
            email: order.customer[0].emailCus,
            phone: order.address[0].phone,
            status: 'Customer',
            joinDate: new Date().toISOString()
        };

        customers.push(customerData); // Thêm khách hàng mới vào danh sách
        
    });
    // Lưu danh sách khách hàng đã cập nhật vào localStorage
    saveCustomersToLocal(customers);
}
// Display customers
function displayCustomers(customers) {
    const customerList = document.querySelector('.customer-list');
    customerList.innerHTML = '';

    if (customers.length === 0) {
        customerList.innerHTML = `<div class="no-customers">No customers found</div>`;
        return;
    }

    customers.forEach(customer => {
        const orders = getOrdersForCustomer(customer.id);

        const customerRow = document.createElement('div');
        customerRow.classList.add('customer-row');
        customerRow.dataset.id = customer.id;

        // Format join date
        let formattedDate = 'N/A';
        if (customer.joinDate) {
            const date = new Date(customer.joinDate);
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const year = date.getFullYear();
            formattedDate = `${day}/${month}/${year}`;
        }

        customerRow.innerHTML = `
                <div class="checkbox"><input type="checkbox" class="select-customer"></div>
                <div class="customer-info">
                    <div class="customer-name">${customer.name}</div>
                </div>
                <div class="customer-email">${customer.email}</div>
                <div class="customer-phone">${customer.phone}</div>
                <div class="customer-join-date">${formattedDate}</div>
                <div class="customer-totalSpending"> ${customer.total}</div>
                <div class="customer-status">${customer.status}</div>
                <button class="viewOrders">Orders</button> 
                <div class="customer-actions">
                    <i class="fa-solid fa-pen-to-square edit-customer" title="Edit"></i>
                    <i class="fa-solid fa-trash delete-customer" title="Delete"></i>
                </div>
            `;
        customerList.appendChild(customerRow);
    });
}

//lay don hang cua 1 khach
function getOrdersForCustomer(customerEmail) {
    const orders = JSON.parse(localStorage.getItem('informationOrder')) || [];
    return orders.filter(order => order.customer && order.customer[0].emailCus === customerEmail);
}

// Validation Functions
function isValidEmailFormat(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


function isEmailUnique(email, customerId = null) {
    const customers = getCustomersFromLocal();
    return !customers.some(c => c.email.toLowerCase() === email.toLowerCase() && c.id !== customerId);
}

function isValidPhoneFormat(phone) {
    const phoneRegex = /^\d{10,15}$/; // Adjust the range as needed
    return phoneRegex.test(phone);
}


function isPhoneUnique(phone, customerId = null) {
    const customers = getCustomersFromLocal();
    return !customers.some(c => c.phone === phone && c.id !== customerId);
}

// Add new customer
function addNewCustomer() {
    const nameInput = document.getElementById('customer-name');
    const emailInput = document.getElementById('customer-email');
    const phoneInput = document.getElementById('customer-phone');
    const addressInput = document.getElementById('customer-address');
    const joinDateInput = document.getElementById('customer-join-date');
    const statusInput = document.getElementById('customer-status');

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const address = addressInput.value.trim();
    const joinDate = joinDateInput.value;
    const status = statusInput.value.trim();

    const customers = getCustomersFromLocal();

    if (!name || !email || !phone || !joinDate || !status) {
        alert('Please fill in all required fields.');
        return;
    }

    // Validate Email Format
    if (!isValidEmailFormat(email)) {
        alert('Định dạng email không hợp lệ.');
        return;
    }

    // Check if Email Already Exists
    if (!isEmailUnique(email, customers)) {
        alert('Email đã tồn tại.');
        return;
    }

    // Validate Phone Number Format
    if (!isValidPhoneFormat(phone)) {
        alert('Định dạng số điện thoại không hợp lệ.');
        return;
    }

    // Check if Phone Number Already Exists
    if (!isPhoneUnique(phone, customers)) {
        alert('Số điện thoại đã tồn tại.');
        return;
    }

    const newCustomer = {
        id: generateUniqueId(),
        name,
        email,
        phone,
        address,
        joinDate,
        status
    };

    customers.push(newCustomer);
    saveCustomersToLocal(customers);
    displayCustomers(customers);

    // Clear input fields
    nameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';
    addressInput.value = '';
    joinDateInput.value = '';
    statusInput.value = '';

    document.getElementById('add-customer-form').reset();
    document.getElementById('add-customer-modal').classList.remove('show');
}
// Edit customer
function openEditCustomerModal(customerId) {
    const customers = getCustomersFromLocal();
    const customer = customers.find(c => c.id === customerId);
    if (!customer) return;

    document.getElementById('edit-customer-id').value = customer.id;
    document.getElementById('edit-customer-name').value = customer.name;
    document.getElementById('edit-customer-email').value = customer.email;
    document.getElementById('edit-customer-phone').value = customer.phone;
    document.getElementById('edit-customer-address').value = customer.address;
    document.getElementById('edit-customer-join-date').value = customer.joinDate;
    document.getElementById('edit-customer-status').value = customer.status;

    
    document.getElementById('edit-customer-modal').classList.add('show');
}

function updateCustomer() {
    // Parse customerId as integer to match the type of customer.id
    const customerId = parseInt(document.getElementById('edit-customer-id').value, 10);
    const name = document.getElementById('edit-customer-name').value.trim();
    const email = document.getElementById('edit-customer-email').value.trim();
    const phone = document.getElementById('edit-customer-phone').value.trim();
    const address = document.getElementById('edit-customer-address').value.trim();
    const joinDate = document.getElementById('edit-customer-join-date').value;
    const status = document.getElementById('edit-customer-status').value.trim();

    if (!name || !email || !phone || !joinDate || !status) {
        alert('Please fill in all required fields.');
        return;
    }

    // Validate Email Format
    if (!isValidEmailFormat(email)) {
        alert('Định dạng email không hợp lệ.');
        return;
    }

    // Check if Email Already Exists
    if (!isEmailUnique(email, customerId)) {
        alert('Email đã tồn tại.');
        return;
    }

    // Validate Phone Number Format
    if (!isValidPhoneFormat(phone)) {
        alert('Định dạng số điện thoại không hợp lệ.');
        return;
    }

    // Check if Phone Number Already Exists
    if (!isPhoneUnique(phone, customerId)) {
        alert('Số điện thoại đã tồn tại.');
        return;
    }
    const customers = getCustomersFromLocal();
    const index = customers.findIndex(c => c.id === customerId);
    if (index === -1) {
        alert('Customer not found.');
        return;
    }

    customers[index] = {
        ...customers[index],
        name,
        email,
        phone,
        address,
        joinDate,
        status
    };
    saveCustomersToLocal(customers);

    displayCustomers(customers);

    document.getElementById('edit-customer-modal').classList.remove('show');
}

// Delete customer
function deleteCustomer(customerId) {
    const customers = getCustomersFromLocal();
    const updatedCustomers = customers.filter(c => c.id !== customerId);
    saveCustomersToLocal(updatedCustomers);

    displayCustomers(updatedCustomers);
}

// Delete selected customers
function deleteSelectedCustomers() {
    const selectedCheckboxes = document.querySelectorAll('.customer-row .select-customer:checked');
    if (selectedCheckboxes.length === 0) {
        alert('No customers selected for deletion.');
        return;
    }

    if (!confirm('Are you sure you want to delete selected customers?')) {
        return;
    }

    let customerIdsToDelete = [];
    selectedCheckboxes.forEach(checkbox => {
        const customerRow = checkbox.closest('.customer-row');
        const customerId = parseInt(customerRow.dataset.id);
        customerIdsToDelete.push(customerId);
    });

    const customers = getCustomersFromLocal();
    const updatedCustomers = customers.filter(c => !customerIdsToDelete.includes(c.id));
    saveCustomersToLocal(updatedCustomers);

    displayCustomers(updatedCustomers);
}

// Search and filter customers
// Filter and Search Customers
function filterAndSearchCustomers() {
    const customers = getCustomersFromLocal();
    const searchInput = document.querySelector('.search-input').value.trim().toLowerCase();
    const filterName = document.getElementById('filter-name').value.trim().toLowerCase();
    const filterEmail = document.getElementById('filter-email').value.trim().toLowerCase();
    const filterPhone = document.getElementById('filter-phone').value.trim();
    const filterJoinDate = document.getElementById('filter-join-date').value;
    const filterSpending = document.getElementById('filter-spending').value;
    const filterStatus = document.getElementById('filter-status').value; // Updated

    const filteredCustomers = customers.filter(customer => {
        let isValid = true;

        // Search input
        if (searchInput && !customer.name.toLowerCase().includes(searchInput)) {
            isValid = false;
        }

        // Filter by name
        if (filterName && !customer.name.toLowerCase().includes(filterName)) {
            isValid = false;
        }

        // Filter by email
        if (filterEmail && !customer.email.toLowerCase().includes(filterEmail)) {
            isValid = false;
        }

        // Filter by phone
        if (filterPhone && !customer.phone.includes(filterPhone)) {
            isValid = false;
        }

        // Filter by status
        if (filterStatus && customer.status !== filterStatus) { // Updated
            isValid = false;
        }

        // Filter by join date
        if (filterJoinDate) {
            const customerDate = new Date(customer.joinDate);
            const now = new Date();
            const firstDayThisMonth = new Date(now.getFullYear(), now.getMonth(), 1);
            const firstDayLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
            const firstDayThisYear = new Date(now.getFullYear(), 0, 1);
            const firstDayLastYear = new Date(now.getFullYear() - 1, 0, 1);

            if (filterJoinDate === 'this-month' && customerDate < firstDayThisMonth) {
                isValid = false;
            }
            if (filterJoinDate === 'last-month' && (customerDate < firstDayLastMonth || customerDate >= firstDayThisMonth)) {
                isValid = false;
            }
            if (filterJoinDate === 'this-year' && customerDate < firstDayThisYear) {
                isValid = false;
            }
            if (filterJoinDate === 'last-year' && (customerDate < firstDayLastYear || customerDate >= firstDayThisYear)) {
                isValid = false;
            }
        }

        return isValid;
    });

    displayCustomers(filteredCustomers);
}

// Event listeners
document.querySelector('.search-input').addEventListener('input', filterAndSearchCustomers);
document.getElementById('filter-name').addEventListener('input', filterAndSearchCustomers);
document.getElementById('filter-email').addEventListener('input', filterAndSearchCustomers);
document.getElementById('filter-phone').addEventListener('input', filterAndSearchCustomers);
document.getElementById('filter-join-date').addEventListener('change', filterAndSearchCustomers);
document.getElementById('filter-spending').addEventListener('change', filterAndSearchCustomers);
document.getElementById('filter-status').addEventListener('change', filterAndSearchCustomers);

document.querySelector('.add-customer-btn').addEventListener('click', () => {
    document.getElementById('add-customer-modal').classList.add('show');
});

document.querySelector('.close-modal').addEventListener('click', () => {
    document.getElementById('add-customer-modal').classList.remove('show');
});

document.querySelector('.submit-customer-btn').addEventListener('click', addNewCustomer);

document.querySelector('.customer-list').addEventListener('click', function (e) {
    if (e.target.classList.contains('edit-customer')) {
        const customerRow = e.target.closest('.customer-row');
        const customerId = parseInt(customerRow.dataset.id);
        console.log(customerId)
        openEditCustomerModal(customerId);
    }
    if (e.target.classList.contains('delete-customer')) {
        const customerRow = e.target.closest('.customer-row');
        const customerId = parseInt(customerRow.dataset.id);
        if (confirm('Are you sure you want to delete this customer?')) {
            deleteCustomer(customerId);
        }
    }

    if (e.target.classList.contains('viewOrders')) {
        const customerRow = e.target.closest('.customer-row');
        const customerEmail = customerRow.querySelector('.customer-email').innerText.trim();
        console.log(customerEmail)
        const orders = getOrdersForCustomer(customerEmail);
        showCustomerOrderModal(orders);
    }
});

//ham hien thi don hang khach mua
function showCustomerOrderModal(orders) {
    const modalBodyOrder = document.getElementById('customer-orders-modal-body');
    modalBodyOrder.innerHTML = ''

    if (orders.length == 0) {
        modalBodyOrder.innerHTML = '<p> khong co don hang nao</p>';
    } else {
        orders.forEach(order => {
            const orderRow = document.createElement('div');
            orderRow.classList.add('customer-orders-row');
            orderRow.innerHTML = `
                    <div class="order-id">Order ID: ${order.id}</div>
                    <div class="order-status">Status: ${order.status}</div>
                `;
            modalBodyOrder.appendChild(orderRow)
        });
    }
    console.log("Modal content updated!");
    document.getElementById('customer-orders-modal').style.display = 'block';
}
//tat hien thi don hang khach mua
document.querySelector('.customer-orders-modal-close').addEventListener('click', () => {
    document.getElementById('customer-orders-modal').style.display = 'none'
});


document.querySelector('.update-customer-btn').addEventListener('click', updateCustomer);

document.querySelector('.close-edit-modal').addEventListener('click', () => {
    document.getElementById('edit-customer-modal').classList.remove('show');
});

document.querySelector('.remove-btn').addEventListener('click', deleteSelectedCustomers);

document.querySelector('.reLoad').addEventListener('click', () => {
    document.querySelector('.search-input').value = '';
    document.getElementById('filter-name').value = '';
    document.getElementById('filter-email').value = '';
    document.getElementById('filter-phone').value = '';
    document.getElementById('filter-join-date').value = '';
    document.getElementById('filter-spending').value = '';
    document.getElementById('filter-status').value = '';
    filterAndSearchCustomers();
});

// Initialize page
window.addEventListener('DOMContentLoaded', () => {
    // initializeSampleCustomers();
    filterAndSearchCustomers();
    displayCustomers(getCustomersFromLocal());
});