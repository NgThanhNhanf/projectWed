// admin.js

// SỰ KIỆN DASHBOARD
function dashboardProcessing() {
  // Khởi tạo thời gian
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  // Cập nhật dữ liệu thu nhập và chi tiêu
  calculateTotalIncomeDay(currentDate);
  calculateTotalSpendingDay(currentDate);
  calculateTotalIncomeMonth(currentYear);
  calculateTotalSpendingMonth(currentYear);
  calculateTotalIncomeYear();
  calculateTotalSpendingYear();

  // Thiết lập dữ liệu cho biểu đồ dashboard
  const chartId = "dashboard-chart";
  const dataSource = "day"; // Hoặc "month", "year" tùy theo yêu cầu
  const chartType = "bar"; // Hoặc "line", "pie", tùy theo yêu cầu
  const labels = LabelsfullTime; // Hoặc labelsMonth, labelsYear tùy vào dataSource

  const data = {
      incomeLabel: "Income",
      spendingLabel: "Spending",
      profitLabel: "Profit",
      incomeData: dataIncomeDay,
      spendingData: dataSpendingDay,
      profitData: dataIncomeDay.map((income, index) => income - dataSpendingDay[index])
  };

  const datasets = incomeSpendingDatasets(data);

  // Lưu trạng thái biểu đồ
  chartState[chartId] = {
      chartType: chartType,
      dataSource: dataSource,
      labels: labels,
      datasets: datasets
  };

  // Tạo biểu đồ
  const chartElement = document.getElementById(chartId);
  if (chartElement) {
      createChart(chartElement, chartType, labels, datasets, dataSource);
  }
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

  // Thêm sự kiện cho "View more" để dẫn đến Analytics
  const viewMoreButton = document.querySelector(".view-more");
  if (viewMoreButton) {
    viewMoreButton.addEventListener("click", function () {
      const analyticsMenuItem = document.querySelector('.menuSideBar[data-target="analytics"]');
      if (analyticsMenuItem) {
        analyticsMenuItem.click();
      } else {
        console.error('Analytics menu item not found.');
      }
    });
  }

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

// Cập nhật hàm handleLoginModal
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
    return;
  }

  // Hiển thị modal nếu chưa đăng nhập
  loginModal.style.display = 'flex';

  // Xử lý sự kiện đăng nhập
  document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const emailInput = document.querySelector('#email'); // Giả sử id của input email là 'email'
    const passwordInput = document.querySelector('#password'); // Giả sử id của input password là 'password'

    if (emailInput.value === 'hai@gmail.com' && passwordInput.value === '000000') {
        localStorage.setItem('isLoggedIn', 'true'); // Lưu trạng thái đăng nhập
        loginModal.style.display = 'none'; // Ẩn modal
        console.log('Đăng nhập thành công!');
        emailInput.value = ''; // Xóa dữ liệu email
        passwordInput.value = ''; // Xóa dữ liệu password
        // Sau khi đăng nhập, hiển thị lại trang đã lưu
        const activePage = localStorage.getItem("activePage") || "dashboard";
        sideBarProcessing();
        leftContentProcessing(activePage);
    } else {
        alert('Email hoặc mật khẩu không đúng!');
    }

  });

  // Xử lý sự kiện đăng xuất
  const logoutButton = document.querySelector('#Logout');
  if (logoutButton) {
    logoutButton.addEventListener('click', function () {
      localStorage.setItem('isLoggedIn', 'false'); // Xóa trạng thái đăng nhập
      loginModal.style.display = 'flex'; // Hiển thị lại modal
      // Có thể thêm logic để ẩn các nội dung đã hiển thị
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
    });
  }
}

// Hàm chính
function mainAction() {
  togglePasswordVisibility();
  handleLoginModal();
}

// Khởi tạo sự kiện
document.addEventListener("DOMContentLoaded", mainAction);