// SỰ KIỆN DASHBOARD
function dashboardProcessing() {}
// SỰ KIỆN DASHBOARD

// SỰ KIỆN CUSTOMERS
function customersProcessing() {}
// SỰ KIỆN CUSTOMERS

// SỰ KIỆN ORDERS
function ordersProcessing() {}
// SỰ KIỆN ORDERS

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
  // Gọi hàm xử lý tương ứng
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
// SỰ KIỆN LEFT CONTENT

// SỰ KIỆN RIGHT CONTENT
function rightContentProcessing() {
  // Chưa cần định nghĩa
}
// SỰ KIỆN RIGHT CONTENT

function mainAction() {
  // Chạy SideBar
  sideBarProcessing();
  // Chạy left content
  leftContentProcessing();
  // Chạy right content
  rightContentProcessing();
}

document.addEventListener("DOMContentLoaded", mainAction);
