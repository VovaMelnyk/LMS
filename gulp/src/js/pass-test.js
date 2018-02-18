// Создать тест из 4 ответов, пройти его  и получить оценку по правильным и не правильным ответам.

// Прописать алгоритм: СТУДЕНТ открывает тест, сервер отдает ему данные, и студент видит тест.
// При клике студента на ЗАВЕРШИТЬ ТЕСТ система подсчитывает кол-во правильных ответов и выдает баллы.
const btnTests = document.querySelector("li[data='tests']");

let testRender = () => {
    document.querySelector('.main-board').style.display = "none";
    let main = document.querySelector('.main');
    main.style.display = "block";
    main.innerHTML = testsRender;
    let returnTheory = document.querySelector('#returnToTheory');
    returnTheory.addEventListener('click', function (){
        TheoryRender(themeNum - 1);
    });
    
    

///////////////////Globals/////////////////////////
const url42 = `http://localhost:3000/tests`;

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
  console.log(nowId);
  if (localStorage.getItem(nowId)) {
    let rezTest = localStorage.getItem(nowId);

    let lab = document.getElementsByClassName("t-answers__label");
    for (var i = 0; i < lab.length; i++) {
      if (rezTest == lab[i].innerHTML) {
        addBlue();
        console.log(lab[i].previousSibling);
        let check = document.getElementsByClassName('t-answers__item');
        check[i].checked = "true";
        console.log(check);
      } else {
        console.log("нет совпадения ");
      }
    }
  }
};

function addBlue() {
  const pageNumder = document.getElementsByClassName("t-navigation__number");

  for (var q = 0; q < pageNumder.length; q++) {

    if (localStorage.getItem(pageNumder[q])) {
      pageNumder[q].classList.add("t-navigation__number--blue");

    }

  }
};

let someId = 1;
let url422 = url42 + "/" + someId;

function getTestJson(c) { // Получаем данные с сервера и передаем их функции updateView
  fetch(c)
    .then(response => {
      if (response.ok) return response.json();
      throw new Error("Error");
    })
    .then(data => {
      updateView(data, taskContainer, taskScript);
      // fineRatio();

      getLenghtTests(url42);
      return data;

    })
    .then(data => {
      const btnNext = document.getElementsByClassName("t-navigation__next");
      const btnPrev = document.getElementsByClassName("t-navigation__prev");
      btnNext[0].addEventListener('click', function () {
        let newId = data.id + 1;
        if (newId <= 7) {
          checkratio(data);
          let url42Next = url42 + "/" + newId;
          getTestJson(url42Next);
        }
      });
      btnPrev[0].addEventListener('click', function () {
        let newId = data.id - 1;
        if (newId > 0) {
          checkratio(data);
          let url42Next = url42 + "/" + newId;
          getTestJson(url42Next);
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
  getTestJson(url422);
});

//////////////////////////////если нажата завершить тест////////////////////////
const resultTest = (templateData) => {

  let answers = document.querySelectorAll('.t-answers__item'); // набор всех вопросов (radio)
  let arrRadio = Array.from(answers); // массив из radio
  localStorage.clear();

  updateView(templateData, taskContainer, resultScript); // загрузка правильных и неправильных ответов

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
    let goToHW = document.querySelector('.goHW');
    goToHW.addEventListener('click', function(){
        fetch2(themeNum - 1, url1);
    });
  result = Math.floor((rightAnswer / 1) * 10); // если вопросов много, тогда вместо единицы подставляем кол-во вопросов т.е. длинну массива
  resultTest.innerHTML = `${result}/10 баллов`;
};

function checkratio(data) {
  let check = document.getElementsByClassName('t-answers__item');
  for (var i = 0; i < check.length; i++) {
    if (check[i].checked) {
      let next = check[i].nextSibling;
      next = next.previousSibling.defaultValue;
      localStorage.setItem(data.id, next);
      console.log("Id of page " + data.id);
      let page = document.getElementsByClassName('t-navigation__number');

    }
  }
};

let numberQues = document.getElementsByClassName("t-navigation__number");
for (var i = 0; i < numberQues.length; i++) {
  numberQues[i].addEventListener("click", function () {
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
        li.style.cursor = "pointer";
        if (localStorage.getItem(li.innerHTML)) {
          li.classList.add("t-navigation__number--blue");
        }
      }
      let numberPages = document.getElementsByClassName('t-navigation__number');

      for (let x = 0; x < numberPages.length; x++) {
        numberPages[x].addEventListener("click", function () {
          let nowTest = document.querySelector('.t-question__task').innerHTML;
          let newId = nowTest[nowTest.length - 1];
          let check = document.getElementsByClassName('t-answers__item');
          for (var y = 0; y < check.length; y++) {
            if (check[y].checked) {
              let next = check[y].nextSibling;
              next = next.previousSibling.defaultValue;
              localStorage.setItem(newId, next);
            }
          }
          let url42Next = url42 + "/" + this.innerHTML;
          getTestJson(url42Next);
        });
      }
    });
};

function fineRatio() {
  let liQues = document.getElementsByClassName("t-answers__choice");
  for (let u = 0; u < liQues.length; u++) {
    liQues[u].addEventListener("click", function () {
      let changeLi = liQues[u];
      let circle = changeLi.getElementsByClassName('circle');
      let circleALL = document.getElementsByClassName('circle');
      for (let o = 0; o < circleALL.length; o++) {
        circleALL[o].style.display = "none";
      }
      let check = changeLi.getElementsByClassName('t-answers__item hide');
      check.checked = !0;

      circle[0].style.display = "block";
    })
  }
  }
};
btnTests.addEventListener('click', testRender);
let testsRender = `
<div class="t-main-tests">
    <div id="begin_test">

        <div class="t-header">
            <div class="t-title">
                <!-- заголовок тестов -->
                <h1 class="t-title__subtitle">Тесты</h1>
                <h2 class="t-title__number">Тема 2</h2>
            </div>
            <div class="t-theme">
                <h2 class="t-theme__name">[ XXXXXXX _ ]</h2>
            </div>
            <div class="t-timer">
                <p class="t-timer__time">15 м
                    <br> на прохождение </p>
                <img class="t-timer__clock" src="img/clock.png" alt="clock-img">
            </div>
        </div>

        <div class="t-content t-content--position">
            <p class="t-content__question">[ Количество вопросов:
                <span class="t-content__amount" id="q-amount">20</span> _]</p>
            <p class="t-content__attempts">[ Количество попыток:
                <span class="t-content__amount" at-amount>3</span> _]</p>
            <button class="button-big t-btn__start" id="start_test">Начать тест!</button>
        </div>

        <div class="t-footer">
            <div class="t-control" id="returnToTheory">
                <img class="t-control__arrow" src="img/left_arrow.gif" alt="left_arrow">
                <span class="t-control__word">Вернуться к теории</span>
            </div>
        </div>

    </div>



    <script type="text/template" id="tests-task">

        <div class="t-header">
            <!-- шапка -->

            <div class="t-title">
                <!-- заголовок тестов -->
                <h1 class="t-title__subtitle">Тесты</h1>
                <!-- верхняя часть общая часть -->
                <h2 class="t-title__number">ТЕМА 2</h2>
            </div>

            <div class="t-theme">
                <!-- часть с названием теста -->
                <h2 class="t-theme__name">[ XXXXXX_ ]</h2>
            </div>

            <div class="t-timer">
                <!-- часы -->
                <p class="t-timer__time">14:09</p>
                <img class="t-timer__clock" src="img/clock.png" alt="clock-img">

            </div>

        </div>

        <div class="t-content t-content--withmargin">
            <!-- основной контент -->

            <div class="t-question">
                <!-- описание вопроса -->
                <h2 class="t-question__point">Вопросов 20/20</h2>
                <!-- количество ответов/вопросов-->
                <h3 class="t-question__task">
                    <%- title %>
                </h3>
                <!-- задание-->
            </div>

            <ul class="t-answers">
                <!-- ответы на вопросы -->

                <li class="t-answers__choice">
                    <input class="t-answers__item" name="quest" id="i1" type="radio" value="<%- answer1 %>">
                    <label class="t-answers__label" for="i1">
                        <%- answer1 %>
                    </label>
                </li>
                <li class="t-answers__choice">
                    <input class="t-answers__item" name="quest" id="i2" type="radio" value="<%- answer2 %>">
                    <label class="t-answers__label" for="i2">
                        <%- answer2 %>
                    </label>
                </li>
                <li class="t-answers__choice">
                    <input class="t-answers__item" name="quest" id="i3" type="radio" value="<%- answer3 %>">
                    <label class="t-answers__label" for="i3">
                        <%- answer3 %>
                    </label>
                </li>
                <li class="t-answers__choice">
                    <input class="t-answers__item" name="quest" id="i4" type="radio" value="<%- answer4 %>">
                    <label class="t-answers__label" for="i4">
                        <%- answer4 %>
                    </label>
                </li>
            </ul>
            <!-- варианты ответов -->
            <div class="t-navigation">
                <!-- навигация по вопросам -->
                <div class="t-navigation__arrows">
                    <span class="t-navigation__prev"> &lt </span>
                    <span class="t-navigation__next"> &gt </span>
                </div>
                <!-- стрелочки -->
                <ul class="t-navigation__pagination">

                </ul>
                <!-- пагинация -->
            </div>
        </div>


        <div class="t-footer">
            <!-- футер -->
            <div class="t-control">
                <img class="t-control__arrow" src="img/left_arrow.gif" alt="left_arrow">
                <span class="t-control__word">Вернуться к теории</span>
            </div>
            <!-- вернуться к теории -->
            <button class="button-big t-btn__finish" id="end_test">Завершить тест!</button>
        </div>

    </script>



    <script type="text/template" id="tests-result">
        <div class="t-header">

            <!-- start t-title -->
            <div class="t-title">
                <h1 class="t-title__subtitle">Тесты: результат</h1>
                <h2 class="t-title__number">Тема 2</h2>
            </div>
            <div class="t-theme">
                <h2 class="t-theme__name t-theme__results">[ XXXXXX _ ]</h2>
            </div>
            <div class="t-timer">
                <p class="t-timer__time">14:09</p>
                <img class="t-timer__clock" src="img/clock.png" alt="clock-img">
            </div>
            <!-- end t-title -->
        </div>

        <!-- start t-content -->
        <div class="t-content t-content--margin">
            <div class="t-results">
                <p class="t-results__marks" id="result-test"></p>
                <p class="t-results__summ-time">пройдено за 14:25м</p>
            </div>

            <!-- start t-content__mistakes -->
            <div class="t-mistakes">
                <ul class="t-mistakes__list">

                    <li class="t-mistakes__description">
                        <span class="t-mistakes__numbers t-mistakes__numbers-wrong">
                            <<%- id%>></span>
                        <%- title %>
                            <p class="t-mistakes__explanation">Советуем почитать тут:
                                <span class="t-mistakes__link">[
                                    <a href="#">ссылка</a>]</span>
                            </p>
                    </li>

                </ul>
            </div>
            <!-- end t-content__mistakes -->

            <!-- start t-btn -->

            <button class="button-big">Пройти ещё раз</button>
        </div>
        <!-- end t-content -->

        <!-- start t-footer -->
        <div class="t-footer">
            <div class="t-control">
                <img class="t-control__arrow" src="img/left_arrow.gif" alt="left_arrow">
                <span class="t-control__word">Вернутся к теории</span>
            </div>
            <div class="t-control goHW">
                <span class="t-control__word" >Дальше к ДЗ</span>
                <img class="t-control__arrow" src="img/right_arrow.gif" alt="right_arrow">
            </div>
        </div>
        <!-- end t-footer -->
    </script>
</div>`

