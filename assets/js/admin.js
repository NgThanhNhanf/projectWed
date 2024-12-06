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

// SỰ KIỆN SIDE BAR
function sideBarProcessing() {
  // Lấy trang hiện tại từ localStorage
  const activePage = localStorage.getItem("activePage") || "dashboard";
  const menuItems = document.querySelectorAll(".menuSideBar");
  const contentPages = document.querySelectorAll(".content-page");
  const contentTitle = document.querySelector(".left-content-title p");
  const contentTitleContainer = document.querySelector(".left-content-title");
  const leftContent = document.getElementById("left-content");
  const rightContent = document.getElementById("right-content");

  // Hàm để hiển thị trang được chọn
  function showPage(target) {
    // Xóa active để tắt các tùy chỉnh
    menuItems.forEach(function (item) {
      item.classList.remove("active");
    });

    // Ẩn các nội dung của trang
    contentPages.forEach(function (page) {
      page.style.display = "none";
    });

    // Hiện nội dung được chọn
    const targetContent = document.getElementById("content-" + target);

    if (targetContent) {
      targetContent.style.display = "flex";
      contentTitle.textContent = document.querySelector(
        `.menuSideBar[data-target="${target}"] .text`
      ).textContent;
      document
        .querySelector(`.menuSideBar[data-target="${target}"]`)
        .classList.add("active");
      switch (target) {
        case "dashboard":
          document.title = "ALESIA - Dashboard";
          break;
        case "customers":
          document.title = "ALESIA - Customers";
          break;
        case "products":
          document.title = "ALESIA - Products";
          break;
        case "orders":
          document.title = "ALESIA - Orders";
          break;
        case "analytics":
          document.title = "ALESIA - Analytics";
          break;
        default:
          document.title = "ALESIA";
      }
      // Thêm animation cho title
      setTimeout(() => contentTitleContainer.classList.add("show"), 50);

      // Xử lý layout cho các trang
      if (["customers", "products", "orders", "analytics"].includes(target)) {
        leftContent.classList.add("analytics-view");
        rightContent.classList.add("hidden");
      } else {
        leftContent.classList.remove("analytics-view");
        rightContent.classList.remove("hidden");
      }

      // Gọi hàm xử lý nội dung tương ứng
      leftContentProcessing(target);
    }
  }

  // Sự kiện click vào từng phần tử của menuItem
  menuItems.forEach(function (menuItem) {
    menuItem.addEventListener("click", function () {
      const target = this.getAttribute("data-target");
      localStorage.setItem("activePage", target);
      contentTitleContainer.classList.remove("show");
      setTimeout(() => showPage(target), 200);
    });
  });

  // Khởi tạo trang
  showPage(activePage);
}
// SỰ KIỆN SIDE BAR

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
