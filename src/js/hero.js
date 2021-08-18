var slideIndex = 1;
carousel(slideIndex);

function slide(n) {
    carousel(slideIndex += n);
}

function currentSlide(n) {
    carousel(slideIndex = n);
}

function carousel(n) {
    var i;
    var slides = document.getElementsByClassName("carousel__hs-item");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}