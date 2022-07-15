function newsBlocks() {
  let playCount = 0;

  let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  }

  let callback = function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.closest('.news-block').classList.add('news-block--active')
      }
    })
  }

  let observer = new IntersectionObserver(callback, options)

  let targets = document.querySelectorAll('.news-block__title')
  targets.forEach(target => {
    observer.observe(target)
  })
}

export { newsBlocks }