const cartIcon = document.getElementById('cartIcon');
const cartIframe = document.getElementById('cartIframe');

cartIcon.addEventListener('click', () => {
    cartIframe.classList.toggle('open');
});

window.addEventListener('message',(event)=> {
    if(event.data === 'closeCart'){
        cartIframe.classList.remove('open');
    }
});

//an hien contact 
document.addEventListener('DOMContentLoaded', () => {
    const contactLink = document.getElementById('contact-link');
    const contact = document.getElementById('contact-section');

    contactLink.addEventListener('click', () => {
    contact.classList.toggle('active');
    });
});

