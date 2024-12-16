// ### CẤU HÌNH DANH SÁCH DỮ LIỆU ###
const config = {
  productKey: "allProducts",
  products: [],
  orderKey: "informationOrder",
  orders: [
    {
      id: 1733479747069,
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
          name: "BinGo T-shirt",
          image: "http://127.0.0.1:5500/assets/img/product/img1.jpg",
          size: "S",
          price: 205600,
          quantity: 1,
        },
        {
          name: "Anh hải",
          image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAA",
          size: "S",
          price: 120000,
          quantity: 1,
        },
      ],
      customer: [
        {
          firstNameCus: "Thanh Hiền",
          lastNameCus: "Nguyễn",
          emailCus: "thanhhien00000005@gmail.com",
          indexLogin: 5,
          status: "Đã xác nhận",
          timeOrder: 1734166858927,
          total: 325600,
        },
      ],
    },
    {
      id: 1733481635091,
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
          name: "Anh hải",
          image: "data:image/png;base64,UklGRoiBAQBXRUJQVlA4IHyBAQB",
          size: "S",
          price: 120000,
          quantity: 1,
        },
        {
          name: "Black Collection",
          image: "http://127.0.0.1:5500/assets/img/product/co2.jpg",
          size: "S",
          price: 559999,
          quantity: 1,
        },
        {
          name: "White Blazer",
          image: "http://127.0.0.1:5500/assets/img/product/aovest3.png",
          size: "S",
          price: 233000,
          quantity: 1,
        },
      ],
      customer: [
        {
          firstNameCus: "Nhật Hoàng",
          lastNameCus: "Nguyễn",
          emailCus: "thanhhiennguyen123@gmail.com",
          indexLogin: 1,
          status: "Giao hàng thành công",
          timeOrder: 1734181809556,
          total: 912999,
        },
      ],
    },
    {
      id: 1733481701752,
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
          name: "BinGo T-shirt",
          image: "http://127.0.0.1:5500/assets/img/product/img1.jpg",
          size: "S",
          price: 205600,
          quantity: 1,
        },
      ],
      customer: [
        {
          firstNameCus: "Thanh Hiền",
          lastNameCus: "Nguyễn",
          emailCus: "thanhhien00000005@gmail.com",
          indexLogin: 5,
          status: "Đã xác nhận",
          timeOrder: 1734166858927,
          total: 325600,
        },
      ],
    },
    {
      id: 1734107185967,
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
          name: "Anh hải",
          image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAA",
          size: "S",
          price: 120000,
          quantity: 1,
        },
      ],
      customer: [
        {
          firstNameCus: "Thanh Hiền",
          lastNameCus: "Nguyễn",
          emailCus: "thanhhien00000005@gmail.com",
          indexLogin: 5,
          status: "Đã xác nhận",
          timeOrder: 1734166858927,
          total: 325600,
        },
      ],
    },
    {
      id: 1734166858927,
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
          name: "BinGo T-shirt",
          image: "http://127.0.0.1:5500/assets/img/product/img1.jpg",
          size: "S",
          price: 205600,
          quantity: 1,
        },
      ],
      customer: [
        {
          firstNameCus: "Thanh Hiền",
          lastNameCus: "Nguyễn",
          emailCus: "thanhhien00000005@gmail.com",
          indexLogin: 5,
          status: "Đã xác nhận",
          timeOrder: 1734166858927,
          total: 325600,
        },
      ],
    },
  ],
  accountKey: "users",
  accounts: [
    {
      username: "hien278",
      email: "thanhvinhnguyen4594@gmail.com",
      password: "aGllbjEyMw==",
      cartItem: [],
    },
  ],
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
      const isStatusSuccess = order.status === "Giao hàng thành công"; 
      return (
        isStatusSuccess &&
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
  dataIncomeMonth.fill(0);
  for (let i = 0; i < dataIncomeMonth.length; i++) {
    const ordersInMonth = orderList.filter((order) => {
      const orderDate = new Date(order.timeOrder);
      // Check status in order.status
      const isStatusSuccess = order.status === "Giao hàng thành công";
      return (
        isStatusSuccess &&
        orderDate.getFullYear() === year &&
        orderDate.getMonth() === i
      );
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
      const isStatusSuccess = order.status === "Giao hàng thành công";
      return (
        isStatusSuccess &&
        orderDate.getFullYear() === year
      );
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

function calculateLowDemandMonth(currentDate) {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const productSales = new Map();
  lowDemandMonth.fill(0);

  orderList.forEach((order) => {
    const orderDate = new Date(order.timeOrder);
    if (orderDate.getFullYear() === year && orderDate.getMonth() === month) {
      order.cart.forEach((item) => {
        const currentSales = productSales.get(item.name) || 0;
        productSales.set(item.name, currentSales + item.quantity);
      });
    }
  });

  processDemandData(productSales, lowDemandMonth, true); // true cho sắp xếp tăng dần (nhu cầu thấp)
}

function calculateHighDemandMonth(currentDate) {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const productSales = new Map();
  highDemandMonth.fill(0);

  orderList.forEach((order) => {
    const orderDate = new Date(order.timeOrder);
    if (orderDate.getFullYear() === year && orderDate.getMonth() === month) {
      order.cart.forEach((item) => {
        const currentSales = productSales.get(item.name) || 0;
        productSales.set(item.name, currentSales + item.quantity);
      });
    }
  });

  processDemandData(productSales, highDemandMonth, false); // false cho sắp xếp giảm dần (nhu cầu cao)
}

function calculateLowDemandYear(currentYear) {
  const productSales = new Map();
  lowDemandYear.fill(0);

  orderList.forEach((order) => {
    const orderDate = new Date(order.timeOrder);
    if (orderDate.getFullYear() === currentYear) {
      order.cart.forEach((item) => {
        const currentSales = productSales.get(item.name) || 0;
        productSales.set(item.name, currentSales + item.quantity);
      });
    }
  });

  processDemandData(productSales, lowDemandYear, true);
}

function calculateHighDemandYear(currentYear) {
  const productSales = new Map();
  highDemandYear.fill(0);

  orderList.forEach((order) => {
    const orderDate = new Date(order.timeOrder);
    if (orderDate.getFullYear() === currentYear) {
      order.cart.forEach((item) => {
        const currentSales = productSales.get(item.name) || 0;
        productSales.set(item.name, currentSales + item.quantity);
      });
    }
  });

  processDemandData(productSales, highDemandYear, false);
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

function calculateMarketShare(dataType, timeSource) {
    // Reset marketshare array
    marketshareProduct.fill(0);

    let currentProducts = [];
    let previousProducts = [];
    const currentDate = new Date(topCurrentDate);
    const previousDate = new Date(topCurrentDate);

    // Get current and previous period data
    if (timeSource === 'day') {
        previousDate.setDate(previousDate.getDate() - 1);
        
        if (dataType === 'high') {
            calculateHighDemandDay(currentDate);
            currentProducts = [...highDemandDay];
            calculateHighDemandDay(previousDate);
            previousProducts = [...highDemandDay];
        } else {
            calculateLowDemandDay(currentDate);
            currentProducts = [...lowDemandDay];
            calculateLowDemandDay(previousDate);
            previousProducts = [...lowDemandDay];
        }
    } else if (timeSource === 'month') {
        previousDate.setMonth(previousDate.getMonth() - 1);
        
        if (dataType === 'high') {
            calculateHighDemandMonth(currentDate);
            currentProducts = [...highDemandMonth];
            calculateHighDemandMonth(previousDate);
            previousProducts = [...highDemandMonth];
        } else {
            calculateLowDemandMonth(currentDate);
            currentProducts = [...lowDemandMonth];
            calculateLowDemandMonth(previousDate);
            previousProducts = [...lowDemandMonth];
        }
    } else if (timeSource === 'year') {
        previousDate.setFullYear(previousDate.getFullYear() - 1);
        
        if (dataType === 'high') {
            calculateHighDemandYear(currentDate.getFullYear());
            currentProducts = [...highDemandYear];
            calculateHighDemandYear(previousDate.getFullYear());
            previousProducts = [...highDemandYear];
        } else {
            calculateLowDemandYear(currentDate.getFullYear());
            currentProducts = [...lowDemandYear];
            calculateLowDemandYear(previousDate.getFullYear());
            previousProducts = [...lowDemandYear];
        }
    }

    // Create maps for easier lookup
    const previousProductMap = new Map();
    let previousOthers = null;

    // Process previous period data
    previousProducts.forEach((product, index) => {
        if (product) {
            if (product.name === "Orthers") {
                previousOthers = {
                    percentage: parseFloat(product.percentage),
                    products: getOthersProducts(previousDate, timeSource, dataType)
                };
            } else {
                previousProductMap.set(product.name, {
                    percentage: parseFloat(product.percentage),
                    index: index
                });
            }
        }
    });

    // Calculate market share differences
    currentProducts.forEach((product, index) => {
        if (!product) return;
        
        const currentPercentage = parseFloat(product.percentage);
        let previousPercentage = 0;

        if (product.name === "Orthers") {
            previousPercentage = previousOthers ? previousOthers.percentage : 0;
        } else {
            const previousData = previousProductMap.get(product.name);
            if (previousData) {
                // Product was in top 5 in previous period
                previousPercentage = previousData.percentage;
            } else if (previousOthers && previousOthers.products) {
                // Check if product was in "Others" in previous period
                const previousProductData = previousOthers.products.find(p => p.name === product.name);
                if (previousProductData) {
                    previousPercentage = previousProductData.percentage;
                }
            }
        }

        marketshareProduct[index] = +(currentPercentage - previousPercentage).toFixed(2);
    });

    updateMarketShareUI();
}

// Helper function to get detailed "Others" products
function getOthersProducts(date, timeSource, dataType) {
    const allProducts = new Map();
    const topProducts = new Set();
    let orders = [];

    // Get orders for the period
    if (timeSource === 'day') {
        orders = orderList.filter(order => {
            const orderDate = new Date(order.timeOrder);
            return orderDate.getFullYear() === date.getFullYear() &&
                   orderDate.getMonth() === date.getMonth() &&
                   orderDate.getDate() === date.getDate();
        });
    } else if (timeSource === 'month') {
        orders = orderList.filter(order => {
            const orderDate = new Date(order.timeOrder);
            return orderDate.getFullYear() === date.getFullYear() &&
                   orderDate.getMonth() === date.getMonth();
        });
    } else if (timeSource === 'year') {
        orders = orderList.filter(order => {
            const orderDate = new Date(order.timeOrder);
            return orderDate.getFullYear() === date.getFullYear();
        });
    }

    // Calculate total sales for each product
    orders.forEach(order => {
        order.cart.forEach(item => {
            const currentSales = allProducts.get(item.name) || 0;
            allProducts.set(item.name, currentSales + item.quantity);
        });
    });

    // Calculate total sales
    const totalSales = Array.from(allProducts.values()).reduce((sum, sales) => sum + sales, 0);

    // Convert to array and sort
    const sortedProducts = Array.from(allProducts.entries())
        .map(([name, sales]) => ({
            name,
            percentage: ((sales / totalSales) * 100).toFixed(2)
        }))
        .sort((a, b) => dataType === 'high' ? 
            parseFloat(b.percentage) - parseFloat(a.percentage) : 
            parseFloat(a.percentage) - parseFloat(b.percentage));

    // Return products not in top 5
    return sortedProducts.slice(5);
}

// Update UI with market share changes
function updateMarketShareUI() {
    const marketShareSubs = document.querySelectorAll('.market-share-sub');
    marketShareSubs.forEach((element, index) => {
        if (marketshareProduct[index] === 0) {
            element.textContent = '0.00%';
            element.style.color = 'gray';
        } else if (marketshareProduct[index] > 0) {
            element.textContent = `+${marketshareProduct[index]}%`;
            element.style.color = 'green';
        } else {
            element.textContent = `${marketshareProduct[index]}%`;
            element.style.color = 'red';
        }
    });
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
        ticks: { stepSize: 1000000 },
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
    console.log(selectedDate);
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

let topCurrentDate = new Date();
let topCurrentYear = topCurrentDate.getFullYear();

function circleDatasets (labels) {
  const colorList = [
    "red",
    "purple",
    "cyan",
    "greenyellow",
    "yellow",
    "orange",
  ];
  const colorListRGB = [
    "rgba(255, 0, 0, 0.6)", // white
    "rgba(128, 0, 128, 0.6)", // purple
    "rgba(0, 255, 255, 0.6)", // cyan
    "rgba(173, 255, 47, 0.6)", // greenyellow
    "rgba(255, 255, 0, 0.6)", // yellow
    "rgba(255, 165, 0, 0.6)", // orange
  ];

  return [
    {
      data: labels,
      backgroundColor: colorListRGB,
      borderColor: colorList,
      borderWidth: 2,
    },
  ];
}

function setLowHigh (chartId, demandType) {
  chartState[chartId].dataType = demandType;
  updatecircleChart(chartId, demandType, chartState[chartId].dataSource);
}

function setProductDate (chartId, timeset) {
  chartState[chartId].datasSource = timeset;
  updatecircleChart(chartId, chartState[chartId].dataType, timeset);
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

function displayTopProduct(demandData = []) {
  const toolBox = document.querySelector(".tool-box");
  if (!toolBox) return;

  // Xóa nội dung cũ
  toolBox.innerHTML = "";
  const validData = demandData.filter(
    (item) => item && typeof item === "object"
  );

  if (validData.length === 0) {
    toolBox.innerHTML = `<div class="no-data">Không có dữ liệu sản phẩm</div>`;
    return;
  }

  // Tạo HTML cho từng sản phẩm có dữ liệu
  const productHTML = validData
    .map(
      (item) => `
        <div class="top-product-btn">
            <div class="name-product-label">${item.name}</div>
            <div class="market-share">
                <div class="market-share-main">${item.percentage}%</div>
                ${
                  item.name !== "Others"
                    ? `
                    <div class="market-share-divider">|</div>
                    <div class="market-share-sub">+ 0.00%</div>
                `
                    : ""
                }
            </div>
        </div>
    `
    )
    .join("");

  // Cập nhật nội dung
  toolBox.innerHTML = productHTML;
}

function initializeDemandData (currentDate, currentYear) {
    // Tính thị phần sức mua 5 sản phẩm bán chạy/ế nhất trong ngày
    calculateLowDemandDay(currentDate);
    calculateHighDemandDay(currentDate);
  
    // Tính thị phần sức mua 5 sản phẩm bán chạy/ế nhất trong tháng
    calculateLowDemandMonth(currentDate);
    calculateHighDemandMonth(currentDate);
  
    // Tính thị phần sức mua 5 sản phẩm bán chạy/ế trong năm
    calculateLowDemandYear(currentYear);
    calculateHighDemandYear(currentYear);
}

function updatecircleChart(chartId, dataType, dataSource) {
  let datasets;
  let labels;
  if (dataType === 'high') {
    if (dataSource === 'day') {
      calculateHighDemandDay(topCurrentDate);
      const data = highDemandDay.filter((item) => item && item.percentage).map((item) => item.percentage);
      labels = highDemandDay.filter((item) => item && item.name).map((item) => item.name);
      datasets = circleDatasets(data);
      displayTopProduct(highDemandDay);
      calculateMarketShare(dataType, dataSource);
    } else if (dataSource === 'month') {
      calculateHighDemandMonth(topCurrentDate);
      const data = highDemandMonth.filter((item) => item && item.percentage).map((item) => item.percentage);
      labels = highDemandMonth.filter((item) => item && item.name).map((item) => item.name);
      datasets = circleDatasets(data);
      displayTopProduct(highDemandMonth);
      calculateMarketShare(dataType, dataSource);
    } else if (dataSource === 'year') {
      calculateHighDemandYear(topCurrentYear);
      const data = highDemandYear.filter((item) => item && item.percentage).map((item) => item.percentage);
      labels = highDemandYear.filter((item) => item && item.name).map((item) => item.name);
      datasets = circleDatasets(data);
      displayTopProduct(highDemandYear);
      calculateMarketShare(dataType, dataSource);
    }
  } else if (dataType === 'low') {
    if (dataSource === 'day') {
      calculateLowDemandDay(topCurrentDate);
      const data = lowDemandDay.filter((item) => item && item.percentage).map((item) => item.percentage);
      labels = lowDemandDay.filter((item) => item && item.name).map((item) => item.name);
      datasets = circleDatasets(data);
      displayTopProduct(lowDemandDay);
      calculateMarketShare(dataType, dataSource);
    } else if (dataSource === 'month') {
      calculateLowDemandMonth(topCurrentDate);
      const data = lowDemandMonth.filter((item) => item && item.percentage).map((item) => item.percentage);
      labels = lowDemandMonth.filter((item) => item && item.name).map((item) => item.name);
      datasets = circleDatasets(data);
      displayTopProduct(lowDemandMonth);
      calculateMarketShare(dataType, dataSource);
    } else if (dataSource === 'year') {
      calculateLowDemandYear(topCurrentYear);
      const data = lowDemandYear.filter((item) => item && item.percentage).map((item) => item.percentage);
      labels = lowDemandYear.filter((item) => item && item.name).map((item) => item.name);
      datasets = circleDatasets(data);
      displayTopProduct(lowDemandYear);
      calculateMarketShare(dataType, dataSource);
    }
  }

  const chartElement = document.getElementById(chartId);
  if (chartElement) {
    createChart(chartElement, chartState[chartId].chartType, labels, datasets, dataSource);
  }
}

function bestWorstSellerProcessing(currentDate, currentYear) {
  const timeText = document.querySelector(".time-text-circle");
  if (timeText) {
    timeText.textContent = currentDate.toLocaleDateString();
  }
  initializeDemandData(currentDate, currentYear);

  const chartType = "pie";
  const dataSource = 'month';
  const dataType = "high";

  const chartId = "top-demand-product-chart";
  chartState[chartId] = {
    chartType: chartType,
    dataSource: dataSource,
    dataType: dataType,
  };

  updatecircleChart (chartId, dataType, dataSource);

  const demandButton = document.getElementById("low-high-demand-selection");
  const toolBar = document.querySelector(".tool-bar");

  // Sự kiện lọc theo hàng bán ế hoặc bán chạy
  demandButton.addEventListener("change", (event) => {
    const demandType = event.target.value;
    chartState[chartId].dataType = demandType;
    console.log(chartState[chartId].dataType);
    setLowHigh(chartId, demandType);
  });

  // Sự kiện lọc ngày tháng năm
  toolBar.addEventListener("click", (event) => {
    if (event.target.matches(".date-filter button")) {
      const buttons = toolBar.querySelectorAll(".date-filter button");
      buttons.forEach((btn) => btn.classList.remove("active"));
      event.target.classList.add("active");

      const newdataSource = event.target.getAttribute("data-source");
      chartState[chartId].dataSource = newdataSource;
      setProductDate(chartId, newdataSource);
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
