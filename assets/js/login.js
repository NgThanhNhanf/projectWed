
const backButtons = document.querySelectorAll('.back-button');

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

const modalLogin = document.querySelector('.modal-login')

const openModalBtn1 = document.querySelector('.open-modal-btn-up');
const openModalBtn2 = document.querySelector('.open-modal-btn-in');
if (openModalBtn1) {
    openModalBtn1.addEventListener('click', () => {
        modalLogin.classList.remove('hide');
        signUpContainer.classList.remove('hide');
        signInContainer.classList.remove('hide');
        modalLogin.classList.add("active");
    });
}
if (openModalBtn2) {
    openModalBtn2.addEventListener('click', () => {
        modalLogin.classList.remove('hide');
        signInContainer.classList.remove('hide');
        signUpContainer.classList.remove('hide');
        modalLogin.classList.remove("active"); 
    });
}

//

const signinBtn = document.querySelector(".SigninBtn");
const signupBtn = document.querySelector(".SignupBtn");
signupBtn.onclick = function() {
    modalLogin.classList.remove("active"); 
};

signinBtn.onclick = function() {
    modalLogin.classList.add("active"); 
};