window.onscroll = function() {headerScroll()};
function headerScroll() {
    var header = document.querySelector('.header');
    var headerTop = document.querySelector('.header-top');
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        header.classList.add('white-background');
        headerTop.classList.add('hide');
    } else {
        if (header.classList.contains('white-background')) {
            header.classList.remove('white-background');
            headerTop.classList.remove('hide');
        }
    }
}
