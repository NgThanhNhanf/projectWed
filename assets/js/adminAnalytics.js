// ### CẤU HÌNH DANH SÁCH DỮ LIỆU ###
const config = {
  productKey: "product",
  products: [
    {
      id: 1,
      name: "Name product white-black",
      price: 200,
      quantity: 10,
      image: "assets/img/product/img1.jpg",
      nature: {
        color: ["white", "black"],
        size: ["S", "M", "L"],
        type: "T-shirt",
      },
      date: "2023-01-15T10:00:00",
    },
    {
      id: 2,
      name: "Name product white-black-grey",
      price: 300,
      quantity: 30,
      image: "assets/img/product/img2.jpg",
      nature: {
        color: ["white", "black", "grey"],
        size: ["S", "M", "L"],
        type: "Polo",
      },
      date: "2022-01-15T10:00:00",
    },
    {
      id: 3,
      name: "Name product black",
      price: 200,
      quantity: 20,
      image: "assets/img/product/img3.jpg",
      nature: {
        color: ["black"],
        size: ["S", "M", "L"],
        type: "T-shirt",
      },
      date: "2024-01-15T10:00:00",
    },
    {
      id: 4,
      name: "Name product blue-black",
      price: 400,
      quantity: 30,
      image: "assets/img/product/img4.jpg",
      nature: {
        color: ["black", "blue"],
        size: ["S", "M", "L"],
        type: "T-shirt",
      },
      date: "2024-01-15T10:00:00",
    },
    {
      id: 5,
      name: "Name product brown",
      price: 320,
      quantity: 30,
      image: "assets/img/product/img5.jpg",
      nature: {
        color: ["brown"],
        size: ["S", "M", "L"],
        type: "Polo",
      },
      date: "2024-02-15T10:00:00",
    },
    {
      id: 6,
      name: "Name product white-black",
      price: 100,
      quantity: 30,
      image: "assets/img/product/img6.jpg",
      nature: {
        color: ["white", "black"],
        size: ["S", "M", "L"],
        type: "Shirt",
      },
      date: "2024-01-15T10:00:00",
    },
  ],
  orderKey: "informationOrder",
  orders: [
    {
      id: 1733403055339,
      address: [
        {
          country: "Vietnam",
          address: "Chợ Mới",
          city: "An Giang",
          phone: "0866065213",
        },
      ],
      cart: [
        {
          id: "4",
          name: "Alesia T-shirt",
          image: "http://127.0.0.1:5501/assets/img/product/img4.jpg",
          price: 400,
          quantity: 1,
          size: "S",
        },
        {
          name: "Polo White",
          image: "http://127.0.0.1:5501/assets/img/product/img2.jpg",
          size: "S",
          price: 300,
          quantity: 2,
        },
      ],
      customer: [
        {
          firstNameCus: "Thanh Hiền",
          lastNameCus: "Nguyễn",
          emailCus: "thanhhien00000005@gmail.com",
          indexLogin: 4,
        },
      ],
      status: "Đang xử lý",
      timeOrder: 1733403055339,
      total: 1000,
    },
    {
      id: 1733405936178,
      address: [
        {
          country: "Vietnam",
          address: "Chợ Mới",
          city: "An Giang",
          phone: "0866065213",
        },
      ],
      cart: [
        {
          name: "Cream Sweater",
          image: "http://127.0.0.1:5501/assets/img/product/aolen4.jpg",
          size: "S",
          price: 233,
          quantity: 1,
        },
        {
          name: "Black T-shirt",
          image: "http://127.0.0.1:5501/assets/img/product/aothun1.jpg",
          size: "S",
          price: 233,
          quantity: 1,
        },
      ],
      customer: [
        {
          firstNameCus: "Thanh Hiền",
          lastNameCus: "Nguyễn",
          emailCus: "thanhhien00000005@gmail.com",
          indexLogin: 5,
        },
      ],
      status: "Đang xử lý",
      timeOrder: 1733405936178,
      total: 466,
    },
    {
      id: 1733412353076,
      address: [
        {
          country: "Vietnam",
          address: "Chợ Mới",
          city: "An Giang",
          phone: "0866065213",
        },
      ],
      cart: [
        {
          name: "White Collection",
          image: "http://127.0.0.1:5501/assets/img/product/co1.png",
          price: 233,
          quantity: 1,
          size: "S",
        },
        {
          name: "White T-shirt",
          image: "http://127.0.0.1:5501/assets/img/product/aothun2.jpg",
          price: 233,
          quantity: 2,
          size: "S",
        },
      ],
      customer: [
        {
          firstNameCus: "Thanh Hiền",
          lastNameCus: "Nguyễn",
          emailCus: "thanhhien00000005@gmail.com",
          indexLogin: 6,
        },
      ],
      status: "Đang xử lý",
      timeOrder: 1733412353076,
      total: 699,
    },
    {
      id: 1733412393162,
      address: [
        {
          country: "Vietnam",
          address: "Chợ Mới",
          city: "An Giang",
          phone: "0866065213",
        },
      ],
      cart: [
        {
          name: "White Shirt",
          image: "http://127.0.0.1:5501/assets/img/product/img6.jpg",
          price: 100,
          quantity: 1,
          size: "S",
        },
        {
          name: "AnuBis T-shirt",
          image: "http://127.0.0.1:5501/assets/img/product/img3.jpg",
          price: 200,
          quantity: 1,
          size: "S",
        },
        {
          name: "Wide-leg Black pants",
          image: "http://127.0.0.1:5501/assets/img/product/quan3.jpg",
          price: 233,
          quantity: 2,
          size: "S",
        },
      ],
      customer: [
        {
          firstNameCus: "Thanh Hiền",
          lastNameCus: "Nguyễn",
          emailCus: "thanhhien00000005@gmail.com",
          indexLogin: 7,
        },
      ],
      status: "Đang xử lý",
      timeOrder: 1733412393162,
      total: 766,
    },
    {
      id: 1733412430489,
      address: [
        {
          country: "Vietnam",
          address: "Chợ Mới",
          city: "An Giang",
          phone: "0866065213",
        },
      ],
      cart: [
        {
          name: "Black Shorts",
          image: "http://127.0.0.1:5501/assets/img/product/quan12.png",
          price: 233,
          quantity: 2,
          size: "S",
        },
        {
          name: "Wide-leg Cream pants",
          image: "http://127.0.0.1:5501/assets/img/product/quan9.jpg",
          price: 233,
          quantity: 1,
          size: "S",
        },
        {
          name: "Wide-leg Black pants",
          image: "http://127.0.0.1:5501/assets/img/product/quan3.jpg",
          price: 233,
          quantity: 1,
          size: "S",
        },
      ],
      customer: [
        {
          firstNameCus: "Thanh Hiền",
          lastNameCus: "Nguyễn",
          emailCus: "thanhhien00000005@gmail.com",
          indexLogin: 8,
        },
      ],
      status: "Đang xử lý",
      timeOrder: 1733412430489,
      total: 932,
    },
    {
      id: 1733421238568,
      address: [
        {
          country: "Vietnam",
          address: "Chợ Mới",
          city: "An Giang",
          phone: "0866065213",
        },
      ],
      cart: [
        {
          name: "Polo White",
          image: "http://127.0.0.1:5500/assets/img/product/img2.jpg",
          size: "S",
          price: 300,
          quantity: 5,
        },
        {
          name: "White Shorts",
          image: "http://127.0.0.1:5500/assets/img/product/quan11.png",
          size: "S",
          price: 233,
          quantity: 2,
        },
        {
          name: "Alesia T-shirt",
          image: "http://127.0.0.1:5500/assets/img/product/img4.jpg",
          size: "S",
          price: 400,
          quantity: 4,
        },
        {
          name: "White Shirt",
          image: "http://127.0.0.1:5500/assets/img/product/img6.jpg",
          size: "S",
          price: 100,
          quantity: 1,
        },
      ],
      customer: [
        {
          firstNameCus: "Thanh Hiền",
          lastNameCus: "Nguyễn",
          emailCus: "thanhhien00000005@gmail.com",
          indexLogin: 1,
        },
      ],
      status: "Đang xử lý",
      timeOrder: 1733491238568,
      total: 3666,
    },
  ],
  accountKey: "account",
  accounts: [],
};
// ### CẤU HÌNH DANH SÁCH DỮ LIỆU ###

// ### DỮ LIỆU TRUY NHẬP/TRUY XUẤT ###
const orderList =
  JSON.parse(localStorage.getItem(config.orderKey)) || config.orders;
const productList =
  JSON.parse(localStorage.getItem(config.productKey)) || config.products;
const accountList =
  JSON.parse(localStorage.getItem(config.accountKey)) || config.accounts;
// ### DỮ LIỆU TRUY NHẬP/TRUY XUẤT ###

// ### ĐỊNH NGHĨA MÀU ###
const styles = getComputedStyle(document.documentElement);
const clrPrimary = styles.getPropertyValue("--clr-primary").trim();
const clrSecondary = styles.getPropertyValue("--clr-secondary").trim();
const clrThird = styles.getPropertyValue("--clr-third").trim();
const clrText = styles.getPropertyValue("--clr-text").trim();
const clrRedFlag = styles.getPropertyValue("--clr-redflag").trim();
const clrGreenFlag = styles.getPropertyValue("--clrgreen").trim();
const clrPrimaryRGBA = "rgba(100, 81, 70, 0.8)";
const clrSecondaryRGBA = "rgba(254, 236, 226, 0.5)";
const clrRedFlagRGBA = "rgba(255, 0, 0, 0.5)";
const clrGreenFlagRGBA = "rgba(0, 255, 0, 0.8)";
// ### ĐỊNH NGHĨA MÀU ###

// ### BIỂU ĐỒ DỮ LIỆU ###
const labelsYear = [];
const dataIncomeYear = new Array(3).fill(0);
const dataSpendingYear = new Array(3).fill(0);

const labelsDay = [
  "7:00 AM",
  "10:00 AM",
  "1:00 PM",
  "4:00 PM",
  "7:00 PM",
  "10:00 PM",
];
const LabelsfullTime = Array.from({ length: 16 }, (_, i) => `${i + 7}:00`);
const dataIncomeDay = new Array(16).fill(0);
const dataSpendingDay = new Array(16).fill(0);

const labelsMonth = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const dataIncomeMonth = new Array(12).fill(0);
const dataSpendingMonth = new Array(12).fill(0);

const lowDemandDay = new Array(6).fill(0);
const lowDemandMonth = new Array(6).fill(0);
const lowDemandYear = new Array(6).fill(0);

const highDemandDay = new Array(6).fill(0);
const highDemandMonth = new Array(6).fill(0);
const highDemandYear = new Array(6).fill(0);

const marketshareProduct = new Array(6).fill(0);

// ### BIỂU ĐỒ DỮ LIỆU ###

// ### KHỞI TẠO DỮ LIỆU ĐƯA VÀO MẢNG ###
// Tổng thu nhập theo giờ trong ngày
function calculateTotalIncomeDay(date) {
  dataIncomeDay.fill(0);
  const selectedDate = new Date(date);

  LabelsfullTime.forEach((_, index) => {
    const hour = 7 + index;
    const ordersInHour = orderList.filter((order) => {
      const orderDate = new Date(order.timeOrder);
      return (
        orderDate.getFullYear() === selectedDate.getFullYear() &&
        orderDate.getMonth() === selectedDate.getMonth() &&
        orderDate.getDate() === selectedDate.getDate() &&
        orderDate.getHours() === hour
      );
    });
    const hourTotal = ordersInHour.reduce((sum, order) => {
      const cartTotal = order.cart.reduce(
        (cartSum, item) => cartSum + item.price * item.quantity,
        0
      );
      return sum + cartTotal;
    }, 0);
    dataIncomeDay[index] = hourTotal;
  });
}

// Tổng thu nhập theo tháng
function calculateTotalIncomeMonth(year) {
  for (let i = 0; i < dataIncomeMonth.length; i++) {
    const ordersInMonth = orderList.filter((order) => {
      const orderDate = new Date(order.timeOrder);
      return orderDate.getFullYear() === year && orderDate.getMonth() === i;
    });
    const totalIncome = ordersInMonth.reduce(
      (sum, order) => sum + order.total,
      0
    );
    dataIncomeMonth[i] = totalIncome;
  }
}

// Tổng thu nhập theo từng năm
function calculateTotalIncomeYear() {
  initializeLabelsYear();
  for (let i = 0; i < labelsYear.length; i++) {
    const year = labelsYear[i];
    const ordersInYear = orderList.filter((order) => {
      const orderDate = new Date(order.timeOrder);
      return orderDate.getFullYear() === year;
    });
    const totalIncome = ordersInYear.reduce(
      (sum, order) => sum + order.total,
      0
    );
    dataIncomeYear[i] = totalIncome;
  }
}

function calculateTotalSpendingDay(date) {
  dataSpendingDay.fill(0);
  const selectedDate = new Date(date);
  LabelsfullTime.forEach((_, index) => {
    const hour = 7 + index;
    dataSpendingDay[index] = productList
      .filter((product) => {
        const productDate = new Date(product.date);
        return (
          productDate.getFullYear() === selectedDate.getFullYear() &&
          productDate.getMonth() === selectedDate.getMonth() &&
          productDate.getDate() === selectedDate.getDate() &&
          productDate.getHours() === hour
        );
      })
      .reduce((sum, product) => sum + product.price * product.quantity, 0);
  });
}

function calculateTotalSpendingMonth(year) {
  dataSpendingMonth.fill(0);
  productList.forEach((product) => {
    const productDate = new Date(product.date);
    if (productDate.getFullYear() === year) {
      const month = productDate.getMonth();
      dataSpendingMonth[month] += product.price * product.quantity;
    }
  });
}

function calculateTotalSpendingYear() {
  dataSpendingYear.length = 0;
  labelsYear.forEach(() => dataSpendingYear.push(0));
  productList.forEach((product) => {
    const year = new Date(product.date).getFullYear();
    const yearIndex = labelsYear.indexOf(year);
    if (yearIndex !== -1) {
      const spending = product.price * product.quantity;
      dataSpendingYear[yearIndex] += spending;
    }
  });
}

function initializeLabelsYear() {
  const yearSet = new Set();
  orderList.forEach((order) => {
    const year = new Date(order.timeOrder).getFullYear();
    yearSet.add(year);
  });
  productList.forEach((product) => {
    const year = new Date(product.date).getFullYear();
    yearSet.add(year);
  });
  labelsYear.length = 0;
  labelsYear.push(...Array.from(yearSet).sort((a, b) => a - b));
}

function calculateLowDemandDay(date) {
  const selectedDate = new Date(date);
  const productSales = new Map();
  lowDemandDay.fill(0);

  // Tính doanh số cho từng sản phẩm trong ngày được chọn
  orderList.forEach((order) => {
    const orderDate = new Date(order.timeOrder);
    if (
      orderDate.getFullYear() === selectedDate.getFullYear() &&
      orderDate.getMonth() === selectedDate.getMonth() &&
      orderDate.getDate() === selectedDate.getDate()
    ) {
      order.cart.forEach((item) => {
        const currentSales = productSales.get(item.name) || 0;
        productSales.set(item.name, currentSales + item.quantity);
      });
    }
  });

  // Chuyển sang mảng và sắp xếp theo doanh số (tăng dần cho nhu cầu thấp)
  const sortedProducts = Array.from(productSales.entries()).sort(
    (a, b) => a[1] - b[1]
  );

  // Tính tổng doanh số
  const totalSales = Array.from(productSales.values()).reduce(
    (sum, sales) => sum + sales,
    0
  );

  // Điền mảng lowDemandDay với phần trăm (5 sản phẩm bán ít nhất)
  const numProducts = Math.min(5, sortedProducts.length);
  for (let i = 0; i < numProducts; i++) {
    const [name, sales] = sortedProducts[i];
    lowDemandDay[i] = {
      name: name,
      percentage: ((sales / totalSales) * 100).toFixed(2),
    };
  }

  // Thêm danh mục "Khác" nếu có nhiều hơn 5 sản phẩm
  if (sortedProducts.length > 5) {
    const othersSales = sortedProducts
      .slice(5)
      .reduce((sum, [_, sales]) => sum + sales, 0);
    lowDemandDay[5] = {
      name: "Orthers",
      percentage: ((othersSales / totalSales) * 100).toFixed(2),
    };
  }
}

function calculateHighDemandDay(date) {
  const selectedDate = new Date(date);
  const productSales = new Map();

  // Đặt lại mảng
  highDemandDay.fill(0);

  // Tính doanh số cho từng sản phẩm trong ngày được chọn
  orderList.forEach((order) => {
    const orderDate = new Date(order.timeOrder);
    if (
      orderDate.getFullYear() === selectedDate.getFullYear() &&
      orderDate.getMonth() === selectedDate.getMonth() &&
      orderDate.getDate() === selectedDate.getDate()
    ) {
      order.cart.forEach((item) => {
        const currentSales = productSales.get(item.name) || 0;
        productSales.set(item.name, currentSales + item.quantity);
      });
    }
  });

  // Chuyển sang mảng và sắp xếp theo doanh số (giảm dần cho nhu cầu cao)
  const sortedProducts = Array.from(productSales.entries()).sort(
    (a, b) => b[1] - a[1]
  );

  // Tính tổng doanh số
  const totalSales = Array.from(productSales.values()).reduce(
    (sum, sales) => sum + sales,
    0
  );

  // Điền mảng highDemandDay với phần trăm (5 sản phẩm bán chạy nhất)
  const numProducts = Math.min(5, sortedProducts.length);
  for (let i = 0; i < numProducts; i++) {
    const [name, sales] = sortedProducts[i];
    highDemandDay[i] = {
      name: name,
      percentage: ((sales / totalSales) * 100).toFixed(2),
    };
  }

  // Thêm danh mục "Khác" nếu có nhiều hơn 5 sản phẩm
  if (sortedProducts.length > 5) {
    const othersSales = sortedProducts
      .slice(5)
      .reduce((sum, [_, sales]) => sum + sales, 0);
    highDemandDay[5] = {
      name: "Orthers",
      percentage: ((othersSales / totalSales) * 100).toFixed(2),
    };
  }
}

function calculateLowDemandMonth(year) {
  const productSales = new Map();

  // Đặt lại mảng
  lowDemandMonth.fill(0);

  // Tính doanh số cho từng sản phẩm trong tháng được chọn
  orderList.forEach((order) => {
    const orderDate = new Date(order.timeOrder);
    if (orderDate.getFullYear() === year) {
      order.cart.forEach((item) => {
        const currentSales = productSales.get(item.name) || 0;
        productSales.set(item.name, currentSales + item.quantity);
      });
    }
  });

  processDemandData(productSales, lowDemandMonth, true); // true cho sắp xếp tăng dần (nhu cầu thấp)
}

function calculateHighDemandMonth(year) {
  const productSales = new Map();

  // Đặt lại mảng
  highDemandMonth.fill(0);

  // Tính doanh số cho từng sản phẩm trong tháng được chọn
  orderList.forEach((order) => {
    const orderDate = new Date(order.timeOrder);
    if (orderDate.getFullYear() === year) {
      order.cart.forEach((item) => {
        const currentSales = productSales.get(item.name) || 0;
        productSales.set(item.name, currentSales + item.quantity);
      });
    }
  });

  processDemandData(productSales, highDemandMonth, false); // false cho sắp xếp giảm dần (nhu cầu cao)
}

function calculateLowDemandYear() {
  const productSales = new Map();

  // Đặt lại mảng
  lowDemandYear.fill(0);

  // Tính doanh số cho từng sản phẩm qua các năm
  orderList.forEach((order) => {
    order.cart.forEach((item) => {
      const currentSales = productSales.get(item.name) || 0;
      productSales.set(item.name, currentSales + item.quantity);
    });
  });

  processDemandData(productSales, lowDemandYear, true);
}

function calculateHighDemandYear() {
  const productSales = new Map();

  // Đặt lại mảng
  highDemandYear.fill(0);

  // Tính doanh số cho từng sản phẩm qua các năm
  orderList.forEach((order) => {
    order.cart.forEach((item) => {
      const currentSales = productSales.get(item.name) || 0;
      productSales.set(item.name, currentSales + item.quantity);
    });
  });

  processDemandData(productSales, highDemandYear, false);
}

function equalsMarketShare() {
  /*
  Với calculateMarketShare sẽ truyền vào định dạng bộ lọc hiện tại là đang lọc theo ngày, hay tháng hay năm và đang lọc theo sản phẩm bán chạy hay bán ế
  Công việc của nó là tạo một mảng tạm thời của bộ lọc hiện tại là bán chạy/ế và ngày/tháng/năm nhưng nó là bảng trạng thái của một loại thời gian được truyền vào trước đó trừ đi 1.
  Ví dụ: Nếu tôi đang truy vấn theo ngày và 
  */
}

// Hàm hỗ trợ xử lý dữ liệu nhu cầu
function processDemandData(productSales, targetArray, isAscending) {
  // Chuyển sang mảng và sắp xếp
  const sortedProducts = Array.from(productSales.entries()).sort((a, b) =>
    isAscending ? a[1] - b[1] : b[1] - a[1]
  );

  // Tính tổng doanh số
  const totalSales = Array.from(productSales.values()).reduce(
    (sum, sales) => sum + sales,
    0
  );

  // Điền mảng đích với phần trăm (5 sản phẩm)
  const numProducts = Math.min(5, sortedProducts.length);
  for (let i = 0; i < numProducts; i++) {
    const [name, sales] = sortedProducts[i];
    targetArray[i] = {
      name: name,
      percentage: ((sales / totalSales) * 100).toFixed(2),
    };
  }

  // Thêm danh mục "Khác" nếu có nhiều hơn 5 sản phẩm
  if (sortedProducts.length > 5) {
    const othersSales = sortedProducts
      .slice(5)
      .reduce((sum, [_, sales]) => sum + sales, 0);
    targetArray[5] = {
      name: "Orthers",
      percentage: ((othersSales / totalSales) * 100).toFixed(2),
    };
  }
}
// ### KHỞI TẠO DỮ LIỆU ĐƯA VÀO MẢNG ###

// ### KHỞI TẠO CÁC BIẾN TOÀN CỤC CHO NGÀY VÀ NĂM ###
let selectedDate = new Date();
let selectedYear = selectedDate.getFullYear();
// ### KHỞI TẠO CÁC BIẾN TOÀN CỤC CHO NGÀY VÀ NĂM ###

// ### TẠO BIỂU ĐỒ VÀ PHƯƠNG THỨC THAO TÁC ###
// Cấu hình biểu đồ cột.
const chartState = {};
// Mảng option cho từng loại biểu đồ
const chartOptions = {
  bar: (dataSource) => ({
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            return context.dataset.label + ": " + context.raw;
          },
        },
        enabled: true,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: { stepSize: 10000 },
        grid: {
          display: true,
          color: "#ccc",
          drawBorder: false,
        },
      },
      x: {
        ticks: {
          callback: function (value) {
            if (dataSource === "day") {
              const hour = parseInt(this.getLabelForValue(value));
              if (hour >= 7 && hour <= 22) {
                if (hour === 7) return "7:00 AM";
                if (hour === 10) return "10:00 AM";
                if (hour === 13) return "1:00 PM";
                if (hour === 16) return "4:00 PM";
                if (hour === 19) return "7:00 PM";
                if (hour === 22) return "10:00 PM";
              }
              return "";
            } else {
              return this.getLabelForValue(value);
            }
          },
          maxRotation: 0,
          minRotation: 0,
        },
        grid: {
          display: false,
        },
      },
    },
  }),
  line: (dataSource) => ({
    plugins: {
      tooltip: {
        enabled: true,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        grid: { display: true },
      },
      x: {
        ticks: {
          callback: function (value) {
            if (dataSource === "day") {
              const hour = parseInt(this.getLabelForValue(value));
              if (hour >= 7 && hour <= 22) {
                if (hour === 7) return "7:00 AM";
                if (hour === 10) return "10:00 AM";
                if (hour === 13) return "1:00 PM";
                if (hour === 16) return "4:00 PM";
                if (hour === 19) return "7:00 PM";
                if (hour === 22) return "10:00 PM";
              }
              return "";
            } else {
              return this.getLabelForValue(value);
            }
          },
          maxRotation: 0,
          minRotation: 0,
        },
        grid: { display: true },
      },
    },
    elements: {
      line: { tension: 0.4 },
      point: { radius: 4 },
    },
  }),
  pie: (dataSource) => ({
    plugins: {
      tooltip: {
        enabled: true,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  }),
};

function setChartType(chartId, chartType) {
  const chartElement = document.getElementById(chartId);
  if (!chartState[chartId]) {
    console.error(`Cấu hình của ${chartId} không được tìm thấy.`);
    return;
  }
  chartState[chartId].chartType = chartType;
  const datasets = incomeSpendingDatasets(chartState[chartId].data);
  createChart(
    chartElement,
    chartType,
    chartState[chartId].labels,
    datasets,
    chartState[chartId].dataSource
  );
}

function setDataScr(chartId, dataSource) {
  const chartElement = document.getElementById(chartId);
  if (!chartState[chartId]) {
    console.error(`Trạng thái biểu đồ ${chartId} không được tìm thấy.`);
    return;
  }
  chartState[chartId].dataSource = dataSource;

  const dateNavigation = document.querySelector(".date-navigation");
  const timeText = document.querySelector(".time-text");
  let labels, data;

  if (dataSource === "day") {
    dateNavigation.style.display = "flex";
    timeText.textContent = selectedDate.toLocaleDateString();

    calculateTotalIncomeDay(selectedDate);
    calculateTotalSpendingDay(selectedDate);
    data = {
      incomeLabel: "Income",
      spendingLabel: "Spending",
      profitLabel: "Profit",
      incomeData: dataIncomeDay,
      spendingData: dataSpendingDay,
      profitData: dataIncomeDay.map(
        (income, index) => income - dataSpendingDay[index]
      ),
    };
    labels = LabelsfullTime;
  } else if (dataSource === "month") {
    dateNavigation.style.display = "flex";
    timeText.textContent = selectedYear.toString();

    calculateTotalIncomeMonth(selectedYear);
    calculateTotalSpendingMonth(selectedYear);
    data = {
      incomeLabel: "Income",
      spendingLabel: "Spending",
      profitLabel: "Profit",
      incomeData: dataIncomeMonth,
      spendingData: dataSpendingMonth,
      profitData: dataIncomeMonth.map(
        (income, index) => income - dataSpendingMonth[index]
      ),
    };
    labels = labelsMonth;
  } else if (dataSource === "year") {
    dateNavigation.style.display = "none";
    timeText.textContent = "All Years";

    initializeLabelsYear();
    calculateTotalIncomeYear();
    calculateTotalSpendingYear();
    data = {
      incomeLabel: "Income",
      spendingLabel: "Spending",
      profitLabel: "Profit",
      incomeData: dataIncomeYear,
      spendingData: dataSpendingYear,
      profitData: dataIncomeYear.map(
        (income, index) => income - dataSpendingYear[index]
      ),
    };
    labels = labelsYear;
  }

  chartState[chartId].labels = labels;
  chartState[chartId].data = data;
  const datasets = incomeSpendingDatasets(data);

  createChart(
    chartElement,
    chartState[chartId].chartType,
    labels,
    datasets,
    dataSource
  );
}

function setCurrentTime(chartId, offset) {
  const chartElement = document.getElementById(chartId);
  if (!chartState[chartId]) {
    console.error(`Trạng thái biểu đồ ${chartId} không được tìm thấy.`);
    return;
  }
  const dataSource = chartState[chartId].dataSource;
  const chartType = chartState[chartId].chartType;

  const timeText = document.querySelector(".time-text");
  let labels, data;

  if (dataSource === "day") {
    selectedDate.setDate(selectedDate.getDate() + offset);
    timeText.textContent = selectedDate.toLocaleDateString();

    calculateTotalIncomeDay(selectedDate);
    calculateTotalSpendingDay(selectedDate);
    data = {
      incomeLabel: "Income",
      spendingLabel: "Spending",
      profitLabel: "Profit",
      incomeData: dataIncomeDay,
      spendingData: dataSpendingDay,
      profitData: dataIncomeDay.map(
        (income, index) => income - dataSpendingDay[index]
      ),
    };
    labels = LabelsfullTime;
  } else if (dataSource === "month") {
    selectedYear += offset;
    timeText.textContent = selectedYear.toString();

    calculateTotalIncomeMonth(selectedYear);
    calculateTotalSpendingMonth(selectedYear);
    data = {
      incomeLabel: "Income",
      spendingLabel: "Spending",
      profitLabel: "Profit",
      incomeData: dataIncomeMonth,
      spendingData: dataSpendingMonth,
      profitData: dataIncomeMonth.map(
        (income, index) => income - dataSpendingMonth[index]
      ),
    };
    labels = labelsMonth;
  }

  chartState[chartId].labels = labels;
  chartState[chartId].data = data;
  const datasets = incomeSpendingDatasets(data);

  createChart(chartElement, chartType, labels, datasets, dataSource);
}

function incomeSpendingDatasets(data) {
  const profitBackgroundColors = data.profitData.map((value) =>
    value < 0 ? clrRedFlagRGBA : clrGreenFlagRGBA
  );

  const profitBorderColors = data.profitData.map((value) =>
    value < 0 ? clrRedFlag : clrGreenFlag
  );

  return [
    {
      label: data.incomeLabel,
      data: data.incomeData,
      backgroundColor: clrPrimaryRGBA,
      borderColor: clrPrimary,
      borderWidth: 2,
    },
    {
      label: data.spendingLabel,
      data: data.spendingData,
      backgroundColor: clrSecondaryRGBA,
      borderColor: clrSecondary,
      borderWidth: 2,
    },
    {
      label: data.profitLabel,
      data: data.profitData.map(Math.abs),
      backgroundColor: profitBackgroundColors,
      borderColor: profitBorderColors,
      borderWidth: 2,
    },
  ];
}

function createChart(chartElement, chartType, labels, datasets, dataSource) {
  // Xóa biểu đồ cũ nếu có
  if (chartElement.chartInstance) {
    chartElement.chartInstance.destroy();
  }

  chartElement.chartInstance = new Chart(chartElement, {
    type: chartType,
    data: {
      labels: labels,
      datasets: datasets,
    },
    options: chartOptions[chartType](dataSource),
  });
}

// ### TẠO BIỂU ĐỒ VÀ PHƯƠNG THỨC THAO TÁC ###

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



// SỰ KIỆN ANALYSTICS
function incomeSpendingOverviewProcessing(currentDate, currentYear) {
  const timeText = document.querySelector(".time-text");
  if (timeText) {
    timeText.textContent = currentDate.toLocaleDateString();
  }

  // Tính thu nhập đưa vào ngày tháng năm hiện tại là mặc định
  calculateTotalIncomeDay(currentDate);
  calculateTotalSpendingDay(currentDate);

  // Tính thu nhập đưa vào năm hiện tại là mặc định
  calculateTotalIncomeMonth(currentYear);
  calculateTotalSpendingMonth(currentYear);

  // Tính thu nhập tổng quát từng năm là mặt định
  calculateTotalIncomeYear();
  calculateTotalSpendingYear();

  // Thiết lập dữ liệu để khởi tạo
  const dataSource = "day";
  const chartType = "bar";
  const labels = LabelsfullTime;
  const data = {
    incomeLabel: "Income",
    spendingLabel: "Spending",
    profitLabel: "Profit",
    incomeData: dataIncomeDay,
    spendingData: dataSpendingDay,
    profitData: dataIncomeDay.map(
      (income, index) => income - dataSpendingDay[index]
    ),
  };

  const datasets = incomeSpendingDatasets(data);

  // Lưu trạng thái chi biểu đồ này
  const chartId = "profit-with-product-chart";
  chartState[chartId] = {
    chartType: chartType,
    dataSource: dataSource,
    labels: labels,
    datasets: datasets,
  };

  // Tạo biểu đồ
  const chartElement = document.getElementById(chartId);
  if (chartElement) {
    createChart(chartElement, chartType, labels, datasets, dataSource);
  }

  // Sự kiện cho các nút
  const dateFilterButtons = document.querySelectorAll(
    ".income-spending-overview .date-filter button"
  );
  const chartViewButtons = document.querySelectorAll(
    ".income-spending-overview .chart-view-selector button"
  );

  function clearActiveButtons(buttons) {
    buttons.forEach((button) => button.classList.remove("active"));
  }

  // Sự kiện thay đổi dữ liệu
  dateFilterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      clearActiveButtons(dateFilterButtons);
      button.classList.add("active");

      const newDataSource = button.getAttribute("data-source");
      chartState[chartId].dataSource = newDataSource;
      setDataScr(chartId, newDataSource);
    });
  });

  // Sự kiện thay đổi loại biểu đồ
  chartViewButtons.forEach((button) => {
    button.addEventListener("click", () => {
      clearActiveButtons(chartViewButtons);
      button.classList.add("active");

      const newChartType = button.getAttribute("data-type");
      chartState[chartId].chartType = newChartType;
      setChartType(chartId, newChartType);
    });
  });

  // Cài đặt mặc định
  if (dateFilterButtons.length > 0) {
    dateFilterButtons[0].classList.add("active");
  }
  if (chartViewButtons.length > 0) {
    chartViewButtons[0].classList.add("active");
  }
}

function bestWorstSellerProcessing(currentDate, currentYear) {
  // Tính thị phần sức mua 5 sản phẩm bán chạy/ế nhất trong ngày
  calculateLowDemandDay(currentDate);
  calculateHighDemandDay(currentDate);

  // Tính thị phần sức mua 5 sản phẩm bán chạy/ế nhất trong tháng
  calculateLowDemandMonth(currentYear);
  calculateHighDemandMonth(currentYear);

  // Tính thị phần sức mua 5 sản phẩm bán chạy/ế trong năm
  calculateLowDemandYear();
  calculateHighDemandYear();

  // Thiết lập dữ liệu để khởi tạo

  const categorySelect = document.getElementById("low-high-demand-selection");

  // Lắng nghe sự kiện change
  categorySelect.addEventListener("change", function () {
    // Lấy giá trị của option đang được chọn
    const selectedValue = categorySelect.value;

    // Kiểm tra giá trị
    if (selectedValue === "income") {
      console.log("You selected Income");
    } else if (selectedValue === "spending") {
      console.log("You selected Spending");
    }
  });
}

function collectionDistributionProcessing(currentDate, currentYear) {}

function analyticsProcessing() {
  // Khởi tạo các biến thời gian
  initializeLabelsYear();
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  // Gọi hàm chạy từng nhóm biểu đồ
  incomeSpendingOverviewProcessing(currentDate, currentYear);
  bestWorstSellerProcessing(currentDate, currentYear);
  collectionDistributionProcessing(currentDate, currentYear);
}
// SỰ KIỆN ANALYSTICS
