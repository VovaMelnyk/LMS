
// json-server --watch db.json сервер 

///////////////////Globals/////////////////////////
const url=`http://localhost:3000/tests`;

const testBtnStart = document.querySelector('#start_test'); // кнопка начать тест на первой стр

const taskContainer = document.querySelector('#begin_test'); //куда вставить tests-task

const taskScript = document.querySelector('#tests-task'); // script tests-task
const resultScript = document.querySelector('#tests-result'); // script tests-result
///////////////////////////////////////////////////

const updateView = (tests, container, script) => {    // обновляем данные

    const compiled = _.template(script.textContent.trim());
    const result = compiled(tests[3]);  // это вопрос 4 правильный ответ 2 !!!
    container.innerHTML = result;
    
};


function getTestJson() {    // Получаем данные с сервера и передаем их функции updateView
    fetch(url)
        .then(response => {
            if (response.ok) return response.json();
            throw new Error("Error");
        })
        .then(data => {
            updateView(data, taskContainer, taskScript);

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
        })
        .then(data => {
            const testBtnEnd = document.querySelector('#end_test');
            testBtnEnd.addEventListener('click', ()=>resultTest(data));
        });
        // .catch(error => {
        //     console.error("Error: ", error);
        // });
}

testBtnStart.addEventListener('click', getTestJson);

//////////////////////////////если нажата завершить тест////////////////////////
const resultTest = (templateData) => {

    let answers = document.querySelectorAll('.t-answers__item'); // набор всех вопросов (radio)
    let arrRadio = Array.from(answers); // массив из radio

    updateView(templateData, taskContainer, resultScript); // загрузка правильных и неправильных ответов
    document.getElementsByClassName('t-results__summ-time')[0].innerHTML = 'Пройдено за N минут';
    let mistake = document.querySelector('.t-mistakes__numbers'); //span
    let passingTime = timer();
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

