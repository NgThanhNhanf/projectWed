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