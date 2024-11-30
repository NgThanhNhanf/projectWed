let slider_list = document.querySelector('.list-item');
let slider_arr = document.querySelectorAll('.insta .slider-container .list-item .slider-item');
let length_arr = slider_arr.length;
let cur = 0;
let widthElement = 300;
let timer = 3000;
function autoSlideLeft() {
    cur ++; 
    if (cur == length_arr/2 + 1) {
        cur = 0;
        slider_list.style.transition = `none`;
    } else {
        slider_list.style.transition = `transform 0.5s ease-in-out`;
    }
    if (cur == 0) {
        timer = 0;
    }  
    let moveDistance = cur*widthElement;
    slider_list.style.transform = `translateX(${-moveDistance}px)`;
    timer = 3000;
}
setInterval(autoSlideLeft, timer);
let slider_list_under = document.querySelector('.insta .slider-container-under .list-item');
let slider_arr_under = document.querySelectorAll('.insta .slider-container-under .list-item .slider-item');
let length_arr_under = slider_arr.length;
let cur_under = 0;
let widthElement_under = 400;
let timer_under = 4000;
function autoSlideLeft2() {
    cur_under ++; 
    if (cur_under == length_arr/2 + 1) {
        cur_under = 0;
        slider_list_under.style.transition = `none`;
    } else {
        slider_list_under.style.transition = `transform 0.5s ease-in-out`;
    }
    if (cur_under == 0) {
        timer_under = 0;
    }  
    let moveDistance_under = cur_under*widthElement_under;
    slider_list_under.style.transform = `translateX(${-moveDistance_under}px)`;
    timer_under = 4000;
}
setInterval(autoSlideLeft2, timer_under);