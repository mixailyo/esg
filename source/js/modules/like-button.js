function likeButton () {
  let checkClickLikesButtons = {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
    17: false,
  }

  if (JSON.parse(localStorage.getItem("checkClickLikesButtons"))) {
    checkClickLikesButtons = JSON.parse(localStorage.getItem("checkClickLikesButtons"))
  } else {
    localStorage.setItem("checkClickLikesButtons", JSON.stringify(checkClickLikesButtons))
  }

  let dataLikes;

  try {
    fetch('https://vkesg-24dac-default-rtdb.europe-west1.firebasedatabase.app/dataLikes.json').then((response) => { return response.json(); }).then((data) => { dataLikes = data }).then(setTimeout(start, 1000));
  } catch (error) {
    console.error('Ошибка:', error);
  }

  function start() {
    let likeButtons = document.querySelectorAll('.like-button');

    likeButtons.forEach((btn) => {
      let likeButtonCounter = btn.querySelector('.like-button__counter');
      likeButtonCounter.textContent = dataLikes[btn.dataset.id]

      if (checkClickLikesButtons[dataLikes[btn.dataset.id]]) {
        btn.classList.add('like-button--active')
      }
  
      btn.addEventListener('click', () => {
        if (btn.closest('.like-button--active')) {
          dataLikes[btn.dataset.id]--
          checkClickLikesButtons[btn.dataset.id] = false
          likeButtonCounter.textContent = dataLikes[btn.dataset.id]
        } else {
          dataLikes[btn.dataset.id]++
          checkClickLikesButtons[btn.dataset.id] = true
          likeButtonCounter.textContent = dataLikes[btn.dataset.id]
        }
  
        btn.classList.toggle('like-button--active')

        localStorage.setItem("checkClickLikesButtons", JSON.stringify(checkClickLikesButtons))

        fetch('https://vkesg-24dac-default-rtdb.europe-west1.firebasedatabase.app/dataLikes.json', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json;'
          },
          body: JSON.stringify(dataLikes)
        })
      })
    })
  }
}

export { likeButton }