// SỰ KIỆN DASHBOARD
function dashboardProcessing() {}
// SỰ KIỆN DASHBOARD

// SỰ KIỆN CUSTOMERS
function customersProcessing() {}
// SỰ KIỆN CUSTOMERS

// SỰ KIỆN ORDERS
function ordersProcessing() {}
// SỰ KIỆN ORDERS

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
