function people() {
  let peopleSlider = document.querySelector('.people__slider');

  const swiper = new Swiper(peopleSlider, {
    slidesPerView: "auto",
    spaceBetween: 30,
    centeredSlides: true,

    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.people__slider .slider-navigation-btn--next',
      prevEl: '.people__slider .slider-navigation-btn--prev',
    },
  });

  swiper.slideTo(2)

  // Parallax
  let peopleWrapper = document.querySelector('.people__wrapper');

  if (document.documentElement.clientWidth > 767) {
    document.addEventListener('scroll', () => {
      if (peopleWrapper.getBoundingClientRect().top < document.documentElement.clientHeight) {
        let end = document.documentElement.clientHeight / 2;
        let peopleSliders = document.querySelectorAll('.people__slider .swiper-slide');
  
        peopleSliders.forEach(slide => {
          if (slide.classList.contains('swiper-slide--less')) {
            slide.style.transform = `translateY(-${(peopleWrapper.getBoundingClientRect().top - end) / end * 100 / 3}px)`;
          }
          if (slide.classList.contains('swiper-slide--more')) {
            slide.style.transform = `translateY(${(peopleWrapper.getBoundingClientRect().top - end) / end * 100 / 3}px)`;
          }
        })
      }
  
    })
  }
  
}

export { people }