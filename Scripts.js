/* Place your JavaScript in this file */

let slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
    SlideShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
    SlideShow(slidePosition = n);
}

function SlideShow(n) {
    let i;
    let slides = document.getElementsByClassName("Containers");
    let circles = document.getElementsByClassName("dots");
    if (n > slides.length) { slidePosition = 1 }
    if (n < 1) { slidePosition = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < circles.length; i++) {
    /*      circles[i].classList.remove("enable");*/
    }
    slides[slidePosition - 1].style.display = "block";
    //  circles[slidePosition-1].classList.add("enable");
}