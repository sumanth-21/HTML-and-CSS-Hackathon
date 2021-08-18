document.getElementsByClassName("menu-button")[0].addEventListener("click", function(e) {
    document.getElementsByClassName("mobile-menu")[0].classList.toggle('menu-open');
    document.getElementsByClassName("menu-overlay")[0].classList.toggle('overlay-active');
});

document.getElementsByClassName("menu-overlay")[0].addEventListener("click", function(e) {
    document.getElementsByClassName("mobile-menu")[0].classList.toggle('menu-open');
    document.getElementsByClassName("menu-overlay")[0].classList.toggle('overlay-active');
});

document.getElementsByClassName("mobile-menu__close")[0].addEventListener("click", function(e) {
    document.getElementsByClassName("mobile-menu")[0].classList.toggle('menu-open');
    document.getElementsByClassName("menu-overlay")[0].classList.toggle('overlay-active');
});

document.getElementsByClassName("nav-drop")[0].lastElementChild.addEventListener("click", function(e) {
    document.getElementsByClassName("nav-drop")[0].lastElementChild.classList.toggle('slick-down');
    document.getElementsByClassName("nav-open")[0].classList.toggle('nav-dropdown');
});