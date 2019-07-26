function Slider(sliderId, choseSlider, isMoreThanOneSlide, isDotsRequired) {
  this.isMoreThanOneSlide = isMoreThanOneSlide;
  this.isDotsRequired = isDotsRequired;
  this.choseSlider = choseSlider;
  this.index = 0;
  this.box = document.getElementById(sliderId);
  this.slidesBox = this.box.querySelector(this.choseSlider);
  this.slides = this.slidesBox.getElementsByClassName('mySlides');
  this.arrows = this.box.getElementsByClassName('slider-arrow');
  this.code = 'sucks';
  if (isMoreThanOneSlide) {
    this.slideSize = this.slidesBox.querySelector('.mySlides').clientWidth;
  } else {
    this.slideSize = this.box.clientWidth;
  }
  this.slidesBox.style.width = `${this.slideSize * this.slides.length}px`;

  this.carousel();

  if (this.isDotsRequired) {
    this.createDots();
  }
}

Slider.prototype.createDots = function sliderCreateDots() {
  const that = this;
  const dotsDiv = document.querySelector('.slider-dots');

  for (let i = 0; i < that.slides.length; i += 1) {
    dotsDiv.innerHTML += `<a class="slider-dot" data-index="${i}"></a>`;
  }

  that.dots = dotsDiv.getElementsByClassName('slider-dot');
  that.dots[that.index].className += ' slider-dot-item-active';

  function delegateEvent(event) {
    const index = event.target.getAttribute('data-index');
    that.slidesBox.style.transform = `translateX(${-that.slideSize * index}px)`;
    that.slidesBox.style.transition = '0.3s ease-in-out';
    for (let i = 0; i < that.dots.length; i += 1) {
      that.dots[i].className = that.dots[i].className.replace(
        'slider-dots-item-active',
        ''
      );
    }
    that.dots[index].className += 'slider-dots-item-active';
  }
  dotsDiv.addEventListener('click', delegateEvent);
  that.box.append(dotsDiv);
};

Slider.prototype.carousel = function sliderCarousel() {
  const that = this;
  that.arrows[0].addEventListener('click', Slider.previous.bind(null, that));
  that.arrows[1].addEventListener('click', Slider.next.bind(null, that));
};

Slider.previous = function previousSlide(box) {
  const selectedBox = box;
  selectedBox.slidesBox.style.transition = '0.3s ease-in-out';
  if (selectedBox.index > 0) {
    selectedBox.index -= 1;
  }

  if (selectedBox.isDotsRequired) {
    for (let i = 0; i < selectedBox.dots.length; i += 1) {
      selectedBox.dots[i].className = selectedBox.dots[i].className.replace(
        'slider-dots-item-active', ''
      );
    }
    selectedBox.dots[selectedBox.index].className += ' slider-dots-item-active';
  }
  selectedBox.slidesBox.style.transform = `translateX(${-selectedBox.slideSize *
    selectedBox.index}px)`;
  // if (-value === 0) {
  //   document.querySelector('.prev').style.display = 'none';
  // }
  // if (-value !== 0) {
  //   document.querySelector('.prev').style.display = 'block';
  // }
};

Slider.next = function nextSlide(box) {
  const selectedBox = box;
  let max = 0;
  const sliderVisibleSize = document.querySelector('.blog-folders').clientWidth;
  selectedBox.slidesBox.style.transition = '0.3s ease-in-out';
  // checking wrapper size to prevent extra movement
  if (selectedBox.isMoreThanOneSlide) {
    if (sliderVisibleSize >= 1200) {
      max = selectedBox.slides.length - 3;
    } else if (sliderVisibleSize >= 800) {
      max = selectedBox.slides.length - 2;
    } else {
      max = selectedBox.slides.length - 1;
    }
  } else {
    max = selectedBox.slides.length - 1;
  }

  if (selectedBox.index < max) {
    selectedBox.index += 1;
  }

  if (selectedBox.isDotsRequired) {
    for (let i = 0; i < selectedBox.dots.length; i += 1) {
      selectedBox.dots[i].className = selectedBox.dots[i].className.replace(
        'slider-dots-item-active',
        ''
      );
    }
    selectedBox.dots[selectedBox.index].className += ' slider-dots-item-active';
  }

  selectedBox.slidesBox.style.transform = `translateX(${-selectedBox.slideSize *
    selectedBox.index}px)`;
};
new Slider('home-slider', '.header-slider', false, true);
new Slider('blog-slider', '.scroller', true, false);