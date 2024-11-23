let product = document.querySelectorAll('.best-item');
let product_list = document.getElementById('product-list');
let prev = document.getElementById('pre-btn');
let nxt = document.getElementById('nxt-btn');
let index = 0;
nxt.onclick = () => {
    if (index > 0) {
        index--;
        nextSlide();
    }
};

prev.onclick = () => {
    if (index < product.length - 3) {
        index++;
        nextSlide();
    }
};

function nextSlide() {
    const itemWidth = product[0].offsetWidth + 20;
    const moveDistance = -itemWidth * index;
    product_list.style.transform = `translateX(${moveDistance}px)`;
    console.log(`Slide moved to index: ${index}`);
}