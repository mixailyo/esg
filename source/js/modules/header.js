function header() {
  let welcome = document.querySelector('.welcome');
  let welcomeLogo = document.querySelector('.welcome__logo');
  let header = document.querySelector('.header');

  document.addEventListener('scroll', () => {
    if (welcomeLogo.getBoundingClientRect().top + welcomeLogo.clientHeight < 0 || welcome.getBoundingClientRect().top < 0) {
      header.classList.add('header--active')
    } else {
      header.classList.remove('header--active')
    }
  })
}

export { header }