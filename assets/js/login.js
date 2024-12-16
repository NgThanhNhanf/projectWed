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


const backButtons = document.querySelectorAll('.back-button');
const modalLogin = document.querySelector('.modal-login')
const signUpContainer = document.querySelector('.signup-container');
const signInContainer = document.querySelector('.signin-container');
backButtons.forEach(backButton => {
    backButton.addEventListener('click', () => {
        if (!signUpContainer.classList.contains('hide')) {
            modalLogin.classList.add('hide');
            signUpContainer.classList.add('hide');
        } else if (!signInContainer.classList.contains('hide')) {
            modalLogin.classList.add('hide');
            signInContainer.classList.add('hide');
        }
    });
});
//
const signinBtn = document.querySelector(".SigninBtn");
const signupBtn = document.querySelector(".SignupBtn");
signupBtn.onclick = function() {
    modalLogin.classList.remove("active"); 
};

signinBtn.onclick = function() {
    modalLogin.classList.add("active"); 
};


// Form Validation
const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validatePassword = (password) => password.length >= 6;

// Local Storage Helpers
const getUsers = () => JSON.parse(localStorage.getItem('users')) || [];
const saveUsers = (users) => localStorage.setItem('users', JSON.stringify(users));
const hashPassword = (password) => btoa(password); 

// Sign Up
document.querySelector('.signup-container .inputBox input[type="submit"]').addEventListener('click', (e) => {
    e.preventDefault();
    try {
        const username = signUpContainer.querySelector('input[name="username"]').value.trim();
        const email = signUpContainer.querySelector('input[name="email"]').value.trim();
        const password = signUpContainer.querySelector('input[name="password"]').value.trim();
        const confirmPassword = signUpContainer.querySelector('input[name="confirmPassword"]').value.trim();

        if (!username || !email || !password || !confirmPassword) {
            throw new Error('Vui lòng điền đầy đủ thông tin!');
        }
        if (!validateEmail(email)) throw new Error('Email không hợp lệ!');
        if (!validatePassword(password)) throw new Error('Mật khẩu phải có ít nhất 6 ký tự!');
        if (password !== confirmPassword) throw new Error('Mật khẩu xác nhận không khớp!');

        const users = getUsers();
        if (users.find(user => user.email === email)) {
            throw new Error('Email đã tồn tại!');
        }

        users.push({ username, email, password: hashPassword(password), cartItem: []});
        saveUsers(users);

        alert('Đăng ký thành công!');
        modalLogin.classList.remove('hide');
        signInContainer.classList.remove('hide');
        signUpContainer.classList.remove('hide');
        modalLogin.classList.remove("active"); 
    } catch (error) {
        alert(error.message);
    }
});

// Login    
document.querySelector('.signin-container .inputBox input[type="submit"]').addEventListener('click', (e) => {
    e.preventDefault();
    try {
        const email = signInContainer.querySelector('input[name="email"]').value.trim();
        const password = signInContainer.querySelector('input[name="password"]').value.trim();
        
        if (!email || !password) {
            throw new Error('Vui lòng nhập email và mật khẩu!');
        }

        const customerList = JSON.parse(localStorage.getItem('customerList')) || [];
        const customerData = customerList.find(customer => customer.email === email);
        
        if (customerData && customerData.status === "Block") {
            throw new Error('Tài khoản của bạn đã bị khóa!');
        }

        const users = getUsers();
        const user = users.find(u => u.email === email && u.password === hashPassword(password));
        
        if (!user) {
            throw new Error('Email hoặc mật khẩu không đúng!');
        }

        localStorage.setItem('currentUser', JSON.stringify(user));
        updateUI();
        location.reload();
        modalLogin.classList.add('hide');
        
    } catch (error) {
        alert(error.message);
    }
});
// Logout
document.querySelector('.user-button').addEventListener('click', (e) => {
    if (e.target.classList.contains('logout')) {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('cart');
        location.reload();
        updateUI();
    }
});
// Update UI
function updateUI() {
    const userButton = document.querySelector('.user-button');
    if (!userButton) return;  // Guard clause for null element
    
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if (currentUser) {
        userButton.innerHTML = `
            <i class="fa-regular fa-user iconUser"></i>
            <div class="username">${currentUser.username}</div>
            <ul class="nav-menuUser">
                <li><a href="#" class= "editAccount">Tài khoản của tôi</a></li>
                <li><a href="#" class="view-orders-btn">Đơn hàng đã mua</a></li>
                <li><a href="#" class="logout">Thoát tài khoản</a></li> 
            </ul>
        `;
        
        // Xử lý sự kiện cho nút "Đơn hàng đã mua"
        const viewOrdersBtn = userButton.querySelector('.view-orders-btn');
        if (viewOrdersBtn) {
            viewOrdersBtn.addEventListener('click', (event) => {
                event.preventDefault();
                displayOrderInHistory();  // Gọi hàm hiển thị lịch sử đơn hàng
            });
        }

        // Xử lý sự kiện đăng xuất
        const logoutBtn = userButton.querySelector('.logout');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => {
                localStorage.removeItem('currentUser');
                updateUI();  // Cập nhật giao diện sau khi đăng xuất
            });
        }

        // Hiển thị menu người dùng khi click vào userButton
        userButton.addEventListener('click', () => {
            const menuUser = userButton.querySelector('.nav-menuUser');
            menuUser.style.display = menuUser.style.display === 'block' ? 'none' : 'block';
        });
    } else {
        userButton.innerHTML = `
            <div class="login nav_hover open-modal-btn-in">Login</div>
            <div class="signup nav_hover open-modal-btn-up">Sign up</div>
        `;
        
        // Reattach modal open event listeners
        const loginBtn = userButton.querySelector('.login');
        const signupBtn = userButton.querySelector('.signup');
        
        loginBtn.addEventListener('click', () => {
            modalLogin.classList.remove('hide');
            signInContainer.classList.remove('hide');
            signUpContainer.classList.remove('hide');
            modalLogin.classList.remove("active"); 
        });
        
        signupBtn.addEventListener('click', () => {
            modalLogin.classList.remove('hide');
            signUpContainer.classList.remove('hide');
            signInContainer.classList.remove('hide');
            modalLogin.classList.add("active");
        });
    }
}

document.addEventListener('DOMContentLoaded', updateUI);



const userButton = document.querySelector('.user-button');
userButton.querySelector('.nav-menuUser a[href="#"]').addEventListener('click', (event) => {
    event.preventDefault();
    displayOrderInHistory();
});