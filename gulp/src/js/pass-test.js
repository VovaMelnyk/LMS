// Создать тест из 4 ответов, пройти его  и получить оценку по правильным и не правильным ответам.

// Прописать алгоритм: СТУДЕНТ открывает тест, сервер отдает ему данные, и студент видит тест.
// При клике студента на ЗАВЕРШИТЬ ТЕСТ система подсчитывает кол-во правильных ответов и выдает баллы.


const loadTest = users => {

    const test_content = document.querySelector('#test_content').textContent.trim();
    const compiled = _.template(test_content);

    const result = compiled(users[0]);  //функция result

    //console.log(result); // котнтент шаблона
    console.log(users); // data

    const container = document.querySelector('#t_content');
    container.innerHTML = result;
};

const loadResult = users => {

    const test_result = document.querySelector('#test_result').textContent.trim();
    const compiled = _.template(test_result);

    const result = compiled(users[0]);  //функция result

    //console.log(result); // котнтент шаблона
    console.log(users); // data

    const container = document.querySelector('#t_mistakes');
    container.innerHTML = result;
};


//////////////////Получаем тест//////////////////////
const getTestJson = () => {
    fetch("http://localhost:3000/tests")
        .then(response => {
            if (response.ok) return response.json();
            throw new Error("Error");
        })
        .then(data => {
            //console.log(data[1]);
             loadTest(data);
             loadResult(data);

        })
        .catch(error => {
            console.error("Error: ", error);
        });
}

const testBtnStart = document.querySelector('#t-btn__start');
const testBtnEnd = document.querySelector('#end_test');

testBtnStart.addEventListener('click', getTestJson);
testBtnEnd.addEventListener('click', getTestJson);






