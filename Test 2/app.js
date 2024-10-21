
const backButtons = document.querySelectorAll('.back-button');

backButtons.forEach(backButton => {
    backButton.addEventListener('click', () => {
        const signUpContainer = document.querySelector('.signup-container');
        const signInContainer = document.querySelector('.signin-container');
        if (!signUpContainer.classList.contains('hide')) {
            signUpContainer.classList.add('hide');
        } else if (!signInContainer.classList.contains('hide')) {
            signInContainer.classList.add('hide');
        }
    });
});

const showSignIn = document.querySelector('.show-signin');
const showSignUp = document.querySelector('.show-signup');
const signUpContainer = document.querySelector('.signup-container');
const signInContainer = document.querySelector('.signin-container');

const openModalBtn = document.querySelector('.open-modal-btn');
if (openModalBtn) {
    openModalBtn.addEventListener('click', () => {
        signUpContainer.classList.remove('hide');
    });
}

showSignIn.addEventListener('click', () => {
    signUpContainer.classList.add('hide');
    signInContainer.classList.remove('hide');
});

showSignUp.addEventListener('click', () => {
    signInContainer.classList.add('hide');
    signUpContainer.classList.remove('hide');
});

