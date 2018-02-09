// Создать тест из 4 ответов, пройти его  и получить оценку по правильным и не правильным ответам.

// Прописать алгоритм: СТУДЕНТ открывает тест, сервер отдает ему данные, и студент видит тест.
// При клике студента на ЗАВЕРШИТЬ ТЕСТ система подсчитывает кол-во правильных ответов и выдает баллы.
// $ json-server --watch db.json

"use strict";
///////////////////Globals/////////////////////////
const url = `http://localhost:3000/tests`;

const testBtnStart = document.querySelector('#start_test'); // кнопка начать тест на первой стр

const taskContainer = document.querySelector('#begin_test'); //куда вставить tests-task

const taskScript = document.querySelector('#tests-task'); // script tests-task
const resultScript = document.querySelector('#tests-result'); // script tests-result
///////////////////////////////////////////////////

const updateView = (tests, container, script) => { // обновляем данные



  const compiled = _.template(script.textContent.trim());
  const result = compiled(tests);
  // это вопрос 4 правильный ответ 2 !!!
  container.innerHTML = result;
  let nowId = tests.id;
  if (localStorage.getItem(nowId)) {
    let rezTest = localStorage.getItem(nowId);

    let lab = document.getElementsByClassName("t-answers__label");
    for (var i = 0; i < lab.length; i++) {
      if (rezTest == lab[i].innerHTML) {
        addBlue();
        console.log(lab[i].previousSibling);
        let check = document.getElementsByClassName('t-answers__item');
        check[i].checked = "true";

      } else {
        console.log("нет совпадения ");
      }
    }
  }
};

function addBlue() {
const pageNumder = document.getElementsByClassName("t-navigation__number");

for (var q = 0; q < pageNumder.length; q++) {
console.log("Yjvth ntcnf "+pageNumder[q]);
if (localStorage.getItem(pageNumder[q])) {
pageNumder[q].classList.add("t-navigation__number--blue");
console.log(pageNumder[q]);
}

}
};

let someId = 1;
let url2 = url + "/" + someId;

function getTestJson(c) { // Получаем данные с сервера и передаем их функции updateView
  fetch(c)
    .then(response => {
      if (response.ok) return response.json();
      throw new Error("Error");
    })
    .then(data => {
      updateView(data, taskContainer, taskScript);
      getLenghtTests(url);

        /////////Настя Timer///////////////////
        var repeatTimer;
        repeatTimer = setInterval (timer, 1000);
        function timer () {
            var minutes = document.getElementsByClassName('t-timer__minutes')[0].innerHTML;
            var seconds = document.getElementsByClassName('t-timer__seconds')[0].innerHTML;
            var end = false;

            if (seconds>0) seconds--;
            else {
                seconds = 59;
                if(minutes>0) minutes--;
                else {
                    end=true;
                }
            }

            if (seconds<10) {
                seconds='0' + seconds;
            }

            if(end) {
                clearInterval (repeatTimer);
                console.log ('время и стекло');
                updateView(data, taskContainer, resultScript);
                document.getElementsByClassName('t-results__summ-time')[0].innerHTML = 'К сожалению время вышло';

                /* переход на страницу с результатами */
            }
            else {
                document.getElementsByClassName('t-timer__minutes')[0].innerHTML=minutes;
                document.getElementsByClassName('t-timer__seconds')[0].innerHTML=seconds;
            }


        }

        return data;

      /////////////////////

    })
    .then(data => {

      const btnNext = document.getElementsByClassName("t-navigation__next");
      const btnPrev = document.getElementsByClassName("t-navigation__prev");


      btnNext[0].addEventListener('click', function() {
        let newId = data.id + 1;
        if (newId <= 7) {
          checkratio(data);
          let urlNext = url + "/" + newId;
          getTestJson(urlNext);
        }
      });
      btnPrev[0].addEventListener('click', function() {
        let newId = data.id - 1;
        if (newId > 0) {
          checkratio(data);
          let urlNext = url + "/" + newId;
          getTestJson(urlNext);
        }

      });



      const testBtnEnd = document.querySelector('#end_test');
      testBtnEnd.addEventListener('click', () => resultTest(data));
    })
    .catch(error => {
      console.error("Error: ", error);
    });
}

testBtnStart.addEventListener('click', function functionName() {
  getTestJson(url2);
});

//////////////////////////////если нажата завершить тест////////////////////////
const resultTest = (templateData) => {

  let answers = document.querySelectorAll('.t-answers__item'); // набор всех вопросов (radio)
  let arrRadio = Array.from(answers); // массив из radio

    //написать функцию для сбора данных в массив из LocalStorage

  localStorage.clear();

  updateView(templateData, taskContainer, resultScript); // загрузка правильных и неправильных ответов

  /////////Настя///////////////////
    document.getElementsByClassName('t-results__summ-time')[0].innerHTML = 'Пройдено за N минут';
  /////////////////////////////////

  let mistake = document.querySelector('.t-mistakes__numbers'); //span
  let question = document.querySelector('.t-mistakes__description'); //li
  let resultTest = document.querySelector('#result-test');
  let rightAnswer = 0;
  let result;

  arrRadio.map(answer => {
    if (answer.checked) {

      if (answer.value === templateData[3].correctAnswer) {
        console.log('Ответ верный!');
        mistake.classList.remove('t-mistakes__numbers-wrong');
        question.lastElementChild.remove();
        rightAnswer++;
      } else {
        console.log('Ответ не верен');
      }
    }
  });

  result = Math.floor((rightAnswer / 1) * 10); // если вопросов много, тогда вместо единицы подставляем кол-во вопросов т.е. длинну массива
  resultTest.innerHTML = `${result}/10 баллов`;
}

function checkratio(data) {
  let check = document.getElementsByClassName('t-answers__item');
  for (var i = 0; i < check.length; i++) {
    if (check[i].checked) {
      let next = check[i].nextSibling;
      next = next.previousSibling.defaultValue;
      localStorage.setItem(data.id, next);
      console.log("Id of page " + data.id)

      let page = document.getElementsByClassName('t-navigation__number');

    }

  }
};

let numberQues = document.getElementsByClassName("t-navigation__number");
for (var i = 0; i < numberQues.length; i++) {
  numberQues[i].addEventListener("click", function() {
    console.log(numberQues[i].value);
  });
}

function getLenghtTests(c) {
  fetch(c)
    .then(response => {
      if (response.ok) return response.json();
      throw new Error("Error");
      return data;


    }).then(data => {
        let pages = document.querySelector('.t-navigation__pagination');
        for (var z = 0; z < data.length; z++) {
          let li = document.createElement('li');
          li.innerHTML = z + 1;
          pages.append(li);
          li.classList = "t-navigation__number";
          if (localStorage.getItem(li.innerHTML)) {
            li.classList.add("t-navigation__number--blue");
          }
        }
        let numberPages = document.getElementsByClassName('t-navigation__number');

        // тут добавляем класс с рамочкой текущего теста newId

        for (let x = 0; x < numberPages.length; x++) {
          numberPages[x].addEventListener("click", function() {

            let nowTest = document.querySelector('.t-question__task').innerHTML;

            let newId = nowTest[nowTest.length-1];   // номер текущего теста
            //numberPages[newId].classList.add('ramka'); // класс с рамкой
              console.log(numberPages[newId]);
            let check = document.getElementsByClassName('t-answers__item');
            for (var y = 0; y < check.length; y++) {
              if (check[y].checked) {
                let next = check[y].nextSibling;
                next = next.previousSibling.defaultValue;

                localStorage.setItem(newId, next);
              }
            }
              //let rezTest = localStorage.getItem(i + 1);
              // console.log("значение ли " + this.innerHTML);
              let urlNext = url + "/" + this.innerHTML;

              getTestJson(urlNext);
            });
            }


              });
            }
