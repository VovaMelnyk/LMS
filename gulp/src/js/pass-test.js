// Создать тест из 4 ответов, пройти его  и получить оценку по правильным и не правильным ответам.

// Прописать алгоритм: СТУДЕНТ открывает тест, сервер отдает ему данные, и студент видит тест.
// При клике студента на ЗАВЕРШИТЬ ТЕСТ система подсчитывает кол-во правильных ответов и выдает баллы.


///////////////////Globals/////////////////////////
const url=`http://localhost:3000/tests`;

const testBtnStart = document.querySelector('#start_test'); // кнопка начать тест на первой стр

const taskContainer = document.querySelector('#begin_test'); //куда вставить tests-task

const taskScript = document.querySelector('#tests-task'); // script tests-task
const resultScript = document.querySelector('#tests-result'); // script tests-result
///////////////////////////////////////////////////

const updateView = (tests, container, script) => {    // обновляем данные



    const compiled = _.template(script.textContent.trim());
    const result = compiled(tests);
     // это вопрос 4 правильный ответ 2 !!!
    container.innerHTML = result;

};


let someId = 1;
let url2 = url + "/" + someId;

function getTestJson(c) {    // Получаем данные с сервера и передаем их функции updateView
    fetch(c)
        .then(response => {
            if (response.ok) return response.json();
            throw new Error("Error");
        })
        .then(data => {
            updateView(data, taskContainer, taskScript);

            return data;

        })
        .then(data => {
          const btnNext = document.getElementsByClassName("t-navigation__next");
          const btnPrev = document.getElementsByClassName("t-navigation__prev");

          btnNext[0].addEventListener('click', function () {
            let newId = data.id + 1;
            if (newId<=7) {
              let urlNext = url + "/" + newId;
          getTestJson(urlNext);
            }

          });
          btnPrev[0].addEventListener('click', function () {
            let newId = data.id - 1;
            if (newId>0) {
              let urlNext = url + "/" + newId;
          getTestJson(urlNext);
            }

          });
            const testBtnEnd = document.querySelector('#end_test');
            testBtnEnd.addEventListener('click', ()=>resultTest(data));
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

    updateView(templateData, taskContainer, resultScript); // загрузка правильных и неправильных ответов

    let mistake = document.querySelector('.t-mistakes__numbers'); //span
    let question = document.querySelector('.t-mistakes__description'); //li
    let resultTest = document.querySelector('#result-test');
    let rightAnswer = 0;
    let result;

    arrRadio.map(answer=>{
        if(answer.checked) {
           if(answer.value === templateData[3].correctAnswer) {
               console.log('Ответ верный!');
               mistake.classList.remove('t-mistakes__numbers-wrong');
               question.lastElementChild.remove();
               rightAnswer++;
           }
           else {
               console.log('Ответ не верен');
           }
       }
    });

    result = Math.floor((rightAnswer/1)*10);  // если вопросов много, тогда вместо единицы подставляем кол-во вопросов т.е. длинну массива
    resultTest.innerHTML = `${result}/10 баллов`;
}
