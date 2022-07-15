function news() {
  // #VKESG animation
  let playCount = 0;

  let options = {
    root: null,
    rootMargin: '0px',
    threshold: 1
  }

  let callback = function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting && playCount === 0) {
        let strokeAnimations = document.querySelectorAll('.stroke-animation');
        
        strokeAnimations.forEach((animation) => {
          animation.beginElement();
          playCount++
        })
      }
    })
  }

  // let observer = new IntersectionObserver(callback, options)

  // let target = document.querySelector('.news__hashtag')
  // observer.observe(target)

  // News slider
  let newsSlider = document.querySelector('.news__slider');

  const swiper = new Swiper(newsSlider, {
    slidesPerView: "auto",
    loop: true,
    centeredSlides: true,
  
    navigation: {
      nextEl: '.news .slider-navigation-btn--next',
      prevEl: '.news .slider-navigation-btn--prev',
    },
  });
}

export { news }