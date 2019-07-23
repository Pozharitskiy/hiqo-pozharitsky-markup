let pos = 0;
let headerPos = 0;
let paginationCounter = 0;
const slides = document.getElementsByClassName('mySlides');
const dots = document.getElementsByClassName('slider-dot');
const createDynamicDots = function () {
    let createDots = document.querySelector('.slider-dots');
    for (let i = 0; i < slides.length; i++) {
        createDots.innerHTML += `<span class="slider-dot" onclick="moveSlide(${i + 1},'header')"></span>`;
    }
    document.querySelector(".left-blog-arrow").style.display = 'none';
    document.querySelector(".prev").style.display = 'none';
    dots[0].className = 'slider-dots-item-active';
}();


function moveSlide(arg, sliderId) {
    const blogSlides = document.getElementsByClassName('blogSlides');
    const scroller = document.querySelector(".scroller");
    const headerSlider = document.querySelector(".header-slider");
    const slideRange = document.getElementById('folder').offsetWidth;
    const headerSlideRange = document.querySelector('.mySlides').offsetWidth;
    const maxWidth = blogSlides.length * slideRange + 'px';
    const overflowElements = blogSlides.length - 3;
    scroller.style.width = maxWidth;
    if (sliderId === 'header') {
        if (paginationCounter >= slides.length) {
            paginationCounter = 0;
        }

        dots[paginationCounter].className = 'slider-dots-item-active';
        if (arg === true) {
            document.querySelector(".prev").style.display = 'block';
            if (headerPos * (-1) >= headerSlideRange) {
                document.querySelector(".next").style.display = 'none';
            }
            headerPos -= headerSlideRange;
            headerSlider.style.left = headerPos + 'px';
            return headerPos;
        } else if (arg === false) {
            if (headerPos <= headerSlideRange) {
                document.querySelector(".next").style.display = 'block';
            }

            headerPos += headerSlideRange;
            headerSlider.style.left = headerPos + 'px';
            (headerPos === 0) ? document.querySelector(".prev").style.display = 'none' : null;

            return headerPos;
        }
        else if (typeof (arg) === 'number') {
            headerSlider.style.left = -headerSlideRange * arg + headerSlideRange + 'px';
            for (let i = 0; i < slides.length; i++) {

            }
            return headerSlider;
        }
    }
    if (sliderId === 'blog') {
        if (arg === true) {
            document.querySelector(".left-blog-arrow").style.display = 'block';
            if (pos * (-1) >= (overflowElements - 1) * slideRange) {
                document.querySelector(".right-blog-arrow").style.display = 'none';
            }
            pos -= slideRange;
            scroller.style.left = pos + 'px';

            return pos;
        }
        if (pos <= overflowElements * slideRange) {
            document.querySelector(".right-blog-arrow").style.display = 'block';
        }
        document.querySelector(".left-blog-arrow").style.display = 'block';
        pos += slideRange;
        scroller.style.left = pos + 'px';
        (pos === 0) ? document.querySelector(".left-blog-arrow").style.display = 'none' : null;
        console.log(scroller);
        console.log(slideRange);
        return pos;
    }
    paginationCounter++;

}

















// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//     showSlides((slideIndex += n));
// }

// function currentSlide(n) {
//     showSlides((slideIndex = n));
// }

// function showSlides(n) {
//     let i = 0;

//     if (n > slides.length) {
//         slideIndex = 1;
//     }

//     if (n < 1) {
//         slideIndex = slides.length;
//     }

//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = 'none';
//     }

//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace('slider-dots-item-active', '');
//     }

//     slides[slideIndex - 1].style.display = 'block';
//     dots[slideIndex - 1].className += ' slider-dots-item-active';
// }