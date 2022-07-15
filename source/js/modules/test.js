function test() {
  let dataTests;

  try {
    fetch('https://vkesg-24dac-default-rtdb.europe-west1.firebasedatabase.app/dataTests.json').then((response) => { return response.json(); }).then((data) => { dataTests = data }).then(setTimeout(start, 2000));
  } catch (error) {
    console.error('Ошибка:', error);
  }

  function start() {
    let useCounters = {
      15648657: -1,
      34798512: -1,
      65471834: -1,
    }

    if (JSON.parse(localStorage.getItem("useCounters"))) {
      useCounters = JSON.parse(localStorage.getItem("useCounters"))
    } else {
      localStorage.setItem("useCounters", JSON.stringify(useCounters))
    }
  
    let tests = document.querySelectorAll("[data-test-id]");
  
    tests.forEach((test) => {
      let answers = test.querySelectorAll('.test__answer');
      test.querySelector('.test__count span').textContent = dataTests[test.dataset.testId].voterCounter;

      if (useCounters[test.dataset.testId] !== -1) {
        if (useCounters[test.dataset.testId] === dataTests[test.dataset.testId].rightAnswer) {
          answers[useCounters[test.dataset.testId]].classList.add('test__answer--true')
        } else {
          answers[useCounters[test.dataset.testId]].classList.add('test__answer--false')
          answers[dataTests[test.dataset.testId].rightAnswer].classList.add('test__answer--true')
        }
      }
  
      answers.forEach((answer, i) => {
        answer.addEventListener('click', () => {
          test.classList.add('test--passed')

          if (useCounters[test.dataset.testId] === -1) {
            if (dataTests[test.dataset.testId].rightAnswer === i) {
              answers[i].classList.add('test__answer--true')
            } else {
              answers[i].classList.add('test__answer--false')
              answers[dataTests[test.dataset.testId].rightAnswer].classList.add('test__answer--true')
            }
  
            useCounters[test.dataset.testId] = i
  
            dataTests[test.dataset.testId].voterCounter++
            test.querySelector('.test__count span').textContent = dataTests[test.dataset.testId].voterCounter;
            fetch('https://vkesg-24dac-default-rtdb.europe-west1.firebasedatabase.app/dataTests.json', {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json;'
              },
              body: JSON.stringify(dataTests)
            })

            localStorage.setItem("useCounters", JSON.stringify(useCounters))
          }
        })
      })

      if (test.querySelector('.test__answer--true')) {
        test.classList.add('test--passed')
      }
    })
  }
}

export { test }