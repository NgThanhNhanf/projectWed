
const backButtons = document.querySelectorAll('.back-button');

backButtons.forEach(backButton => {
    backButton.addEventListener('click', () => {
        const signUpContainer = document.querySelector('.signup-container');
        const signInContainer = document.querySelector('.signin-container');
        if (!signUpContainer.classList.contains('hide')) {
            modalLogin.classList.add('hide');
            signUpContainer.classList.add('hide');
        } else if (!signInContainer.classList.contains('hide')) {
            modalLogin.classList.add('hide');
            signInContainer.classList.add('hide');
        }
    });
});

const showSignIn = document.querySelector('.show-signin');
const showSignUp = document.querySelector('.show-signup');
const signUpContainer = document.querySelector('.signup-container');
const signInContainer = document.querySelector('.signin-container');
const modalLogin = document.querySelector('.modal-login')

const openModalBtn1 = document.querySelector('.open-modal-btn-up');
const openModalBtn2 = document.querySelector('.open-modal-btn-in');
if (openModalBtn1) {
    openModalBtn1.addEventListener('click', () => {
        modalLogin.classList.remove('hide');
        signUpContainer.classList.remove('hide');
    });
}
if (openModalBtn2) {
    openModalBtn2.addEventListener('click', () => {
        modalLogin.classList.remove('hide');
        signInContainer.classList.remove('hide');
    });
}

showSignIn.addEventListener('click', () => {
    signUpContainer.classList.add('hide');
    modalLogin.classList.remove('hide');
    signInContainer.classList.remove('hide');
});

showSignUp.addEventListener('click', () => {
    signInContainer.classList.add('hide');
    modalLogin.classList.remove('hide');
    signUpContainer.classList.remove('hide');
});

