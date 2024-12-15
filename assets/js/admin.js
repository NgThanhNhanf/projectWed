// admin.js

// SỰ KIỆN DASHBOARD
function dashboardProcessing() {
  console.log("Dashboard loaded");
}

// SỰ KIỆN CUSTOMERS
function customersProcessing() {
  console.log("Customers loaded");
}

// SỰ KIỆN PRODUCTS (Handled in adminProduct.js)
// function productsProcessing() {
//   console.log("Products page handler loaded");
// }

// SỰ KIỆN ANALYTICS
// function analyticsProcessing() {
//   console.log("Analytics loaded");
// }

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
    if (!target) {
      console.error("Invalid target provided");
      return;
    }

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
      const menuTextElement = document.querySelector(
        `.menuSideBar[data-target="${target}"] .text`
      );
      if (menuTextElement && contentTitle) {
        contentTitle.textContent = menuTextElement.textContent;
      }
      const menuSideBarItem = document.querySelector(
        `.menuSideBar[data-target="${target}"]`
      );
      if (menuSideBarItem) {
        menuSideBarItem.classList.add("active");
      }

      // Cập nhật tiêu đề trang
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
    } else {
      console.error(`Content page for target "${target}" not found.`);
    }
  }

  // Sự kiện click vào từng phần tử của menuItem
  menuItems.forEach(function (menuItem) {
    menuItem.addEventListener("click", function () {
      const target = this.getAttribute("data-target");
      localStorage.setItem("activePage", target); // Lưu trạng thái trang vào localStorage
      contentTitleContainer.classList.remove("show");
      setTimeout(() => showPage(target), 200);
    });
  });

  // Khởi tạo trang
  showPage(activePage);
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
      productsProcessing(); // Calls adminProduct.js's productsProcessing
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
function handleLoginModal() {
  const loginModal = document.querySelector('.modal-login');

  // Kiểm tra trạng thái đăng nhập từ localStorage
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  if (isLoggedIn === 'true') {
    loginModal.style.display = 'none'; // Ẩn modal nếu đã đăng nhập
    // Khởi chạy các xử lý giao diện sau khi đã đăng nhập
    const activePage = localStorage.getItem("activePage") || "dashboard";
    sideBarProcessing();
    leftContentProcessing(activePage);
  } else {
    // Hiển thị modal nếu chưa đăng nhập
    loginModal.style.display = 'flex';
  }

  // Xử lý sự kiện đăng nhập
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();

      // Kiểm tra thông tin đăng nhập
      if (email === 'hai@gmail.com' && password === '000000') {
        localStorage.setItem('isLoggedIn', 'true'); // Lưu trạng thái đăng nhập
        loginModal.style.display = 'none'; // Ẩn modal
        console.log('Đăng nhập thành công!');

        // Sau khi đăng nhập, hiển thị lại trang đã lưu
        const activePage = localStorage.getItem("activePage") || "dashboard";
        sideBarProcessing();
        leftContentProcessing(activePage);
      } else {
        alert('Email hoặc mật khẩu không đúng!');
      }
    });
  }

  // Xử lý sự kiện đăng xuất (Event Delegation để tránh mất sự kiện)
  document.body.addEventListener('click', function (e) {
    const target = e.target;
    if (target && target.id === 'Logout') {
      // Xóa trạng thái đăng nhập
      localStorage.setItem('isLoggedIn', 'false'); 
      loginModal.style.display = 'flex'; // Hiển thị lại modal
      console.log('Đã đăng xuất!');

      // Ẩn nội dung hiển thị sau khi đăng nhập
      const contentPages = document.querySelectorAll(".content-page");
      contentPages.forEach(page => {
        page.style.display = "none";
      });

      const menuItems = document.querySelectorAll(".menuSideBar");
      menuItems.forEach(item => {
        item.classList.remove("active");
      });

      const contentTitle = document.querySelector(".left-content-title p");
      if (contentTitle) {
        contentTitle.textContent = "";
      }
    }
  });
}


// Hàm chính
function mainAction() {
  togglePasswordVisibility();
  handleLoginModal();
}

// Khởi tạo sự kiện
document.addEventListener("DOMContentLoaded", mainAction);