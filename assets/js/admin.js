// SỰ KIỆN DASHBOARD
function dashboardProcessing() {
  console.log("Dashboard loaded");
}

// SỰ KIỆN CUSTOMERS
function customersProcessing() {
  console.log("Customers loaded");
}

// SỰ KIỆN PRODUCTS
function productsProcessing() {
  console.log("Products loaded");
}

// SỰ KIỆN ANALYTICS
function analyticsProcessing() {
  console.log("Analytics loaded");
}

// SỰ KIỆN ORDERS
function ordersProcessing() {
  console.log("Orders loaded");
}

// SỰ KIỆN LEFT CONTENT
function leftContentProcessing(activePage) {
  switch (activePage) {
    case "dashboard":
      dashboardProcessing();
      break;
    case "customers":
      customersProcessing();
      break;
    case "products":
      productsProcessing();
      break;
    case "orders":
      ordersProcessing();
      break;
    case "analytics":
      analyticsProcessing();
      break;
    default:
      dashboardProcessing();
      break;
  }
}

// SỰ KIỆN SIDEBAR
function sideBarProcessing() {
  console.log("Sidebar loaded");
}

// Xử lý hiển thị/ẩn mật khẩu
function togglePasswordVisibility() {
  document.querySelectorAll('.toggle-password').forEach(toggle => {
    toggle.addEventListener('click', function () {
      const inputSelector = this.getAttribute('data-toggle');
      const passwordInput = document.querySelector(inputSelector);

      if (passwordInput) {
        if (passwordInput.type === 'password') {
          passwordInput.type = 'text';
          this.classList.add('fa-eye');
          this.classList.remove('fa-eye-slash');
        } else {
          passwordInput.type = 'password';
          this.classList.add('fa-eye-slash');
          this.classList.remove('fa-eye');
        }
      }
    });
  });
}
// Cập nhật hàm handleLoginModal
function handleLoginModal() {
  const loginModal = document.querySelector('.modal-login');

  // Kiểm tra trạng thái đăng nhập từ localStorage
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  if (isLoggedIn === 'true') {
    loginModal.style.display = 'none'; // Ẩn modal nếu đã đăng nhập
    return;
  }

  // Hiển thị modal nếu chưa đăng nhập
  loginModal.style.display = 'flex';

  // Xử lý sự kiện đăng nhập
  document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (email === 'hai@gmail.com' && password === '000000') {
      // Lưu trạng thái đăng nhập vào localStorage
      localStorage.setItem('isLoggedIn', 'true');

      // Ẩn modal sau khi đăng nhập thành công
      loginModal.style.display = 'none';
      console.log('Đăng nhập thành công!');
    } else {
      alert('Email hoặc mật khẩu không đúng!');
    }
  });

  // Xử lý sự kiện đăng xuất
  document.querySelector('#Logout').addEventListener('click', function () {
    localStorage.setItem('isLoggedIn', 'false'); // Xóa trạng thái đăng nhập
    loginModal.style.display = 'flex'; // Hiển thị lại modal
  });
}

// Hàm chính
function mainAction() {
  const loginModal = document.querySelector('.modal-login');

  // **Đặt lại trạng thái đăng nhập về false mỗi khi tải lại trang**
  localStorage.setItem('isLoggedIn', 'false');

  // Hiển thị modal đăng nhập
  loginModal.style.display = 'flex';

  // Gọi các hàm xử lý khác
  sideBarProcessing();
  handleLoginModal();
  togglePasswordVisibility();

  const activePage = "dashboard";
  leftContentProcessing(activePage);
}

// Khởi tạo sự kiện
document.addEventListener("DOMContentLoaded", mainAction);
