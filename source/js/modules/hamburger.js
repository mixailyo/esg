function hamburger() {
  let hamburger = document.querySelector('.hamburger');
  let headerMenu = document.querySelector('.header__menu');
  let headerMenuLink = document.querySelectorAll('.header__menu-link');

  document.addEventListener('click', (e) => {
    if (e.target.closest('.hamburger')) {
      hamburger.classList.toggle('is-active');
      headerMenu.classList.toggle('header__menu--active');
      document.body.classList.toggle('scroll-lock')
    }
  })

  headerMenuLink.forEach((link) => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('is-active');
      headerMenu.classList.remove('header__menu--active');
      document.body.classList.remove('scroll-lock')
    })
  })
}

export { hamburger }