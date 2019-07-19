const blogSlides = document.getElementsByClassName('blogSlides');
const slides = document.getElementsByClassName('mySlides');
const scroller = document.querySelector(".scroller");
const maxWidth = blogSlides.length * 372 + 'px';
const slideRange = document.getElementById('folder').offsetWidth;;
const overflowElements = blogSlides.length - 3;
let pos = 0;
let createDots = document.getElementsByClassName('slider-dots');
console.log(createDots);
document.querySelector(".left-blog-arrow").style.display = 'none';
console.log(slideRange);

for (let i = 0; i < slides.length; i++) {
    createDots.innerHTML += `<span class="slider-dot" onclick="currentSlide(${i + 1})"></span>`;
}

const dots = document.getElementsByClassName('slider-dot');
console.log(dots);

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides((slideIndex += n));
}

function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    let i = 0;

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace('slider-dots-item-active', '');
    }

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' slider-dots-item-active';
}

function right() {
    document.querySelector(".left-blog-arrow").style.display = 'block';
    console.log(overflowElements);
    if (pos * (-1) >= (overflowElements - 1) * slideRange) {
        document.querySelector(".right-blog-arrow").style.display = 'none';
    }
    pos = pos - slideRange;
    scroller.style.left = pos + 'px';
    console.log(pos);

    return pos;

}

function left() {
    if (pos <= overflowElements * slideRange) {
        document.querySelector(".right-blog-arrow").style.display = 'block';
    }
    document.querySelector(".left-blog-arrow").style.display = 'block';
    pos = pos + slideRange;
    scroller.style.left = pos + 'px';
    (pos === 0) ? document.querySelector(".left-blog-arrow").style.display = 'none' : null;
    return pos;
}
