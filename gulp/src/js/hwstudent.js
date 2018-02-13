'use strict'

var modul = {};
var modulLength;
var themeNum = 1;
var mainDiv = document.querySelector('div.main');
var hwThemesLinks = document.querySelectorAll("[data='homework']");
    hwThemesLinks.forEach((element, idx) => {
    element.addEventListener('click', () => fetch2(idx, url1));
});
// -------------------------V--FETCH--V-----------------------------

// var newTheme = {
//     id: 16,
//     title: "THIS IS NEW THEME!!!",
//     hours: 24,
//     deadline: "2019-01-21",
//     text: "HOW ABOUT NEW THEME ?"
// }

function init(metod, obj) {
    let fetchParam = {
        method: metod,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    }
    return fetchParam
}

let url1 = 'http://localhost:3000/course';
//var url1StBase = 'https://my-json-server.typicode.com/kotyhoroshko/demo/course';

var status = function(response) {
    if (response.status !== 200) {
        return Promise.reject(new Error(response.statusText))
    }
    return Promise.resolve(response)
}
var json = function(response) {
    return response.json()
}
//window.addEventListener('DOMContentLoaded', fetch2(url1));
//window.addEventListener('DOMContentLoaded', fetch2(themurl1, init("POST", newTheme)))

function fetch2(num, url1, init) {
    fetch(url1, init)
        .then(status)
        .then(json)
        .then(function(data) {
            modulLength = data.length;
            modul = data[num];
            themeNum = num+1;
            showThemDetails(modul.homeWork)
        })
        .catch(function(error) {
            console.log('error', error)
        })
}


// ---------V-----SHOW & TOGLE theme details-----V-------------------

function showThemDetails(data) {
  opac();
  setTimeout (()=>{
    mainDiv.innerHTML = (`
        <div class="d-homework">
            <header class="d-header">
                <h3 class="d-page-title">Домашнее задание</h3>
                <div class="d-timeCounter">
                    <div class="d-timeCounter__text">
                        <p class="d-timeCounter__text d-timeCounter__text--time">${data.hours} часов</p>
                        <p class="d-timeCounter__text d-timeCounter__text--text">на выполнение</p>
                        <p class="d-timeCounter__text d-timeCounter__text--deadline">до ${data.deadline}</p>
                    </div>
                    <div class="d-timeCounter__img"></div>
                </div>
            </header>
            <div class="d-theme">
                <h3 class="d-theme__number">Тема ${themeNum}</h3>
                <h3 class="d-theme__title">${data.title}</h3>
                <p class="d-theme__desc">${data.text}</p>
            </div>
            <div class="d-rating">
                <form class="d-rating-form" action="#" method="post">
                    <img src="img/file.png" alt="file">
                    <input type="text" class="d-rating__choose" name="choose" placeholder="Додати файл">
                    <button class="d-btn d-rating__done" type="submit" name="d-sub">Готово</button>
                </form>
                <form class="d-rating-form" action="#" method="post">
                    <img src="img/github@1.2x.png" alt="file">
                    <input type="url1" class="d-rating__choose" name="choose" placeholder="Посилання на GitHub" title="Посилання має бути на GitHub" pattern=".*github\..*" required>
                    <button class="d-btn d-rating__done" type="submit" name="d-sub">Готово</button>
                </form>
                <p class="d-rating__line">
                    <Оценка><span class="d-rating__digit">3/10</span> баллов</p>
            </div>
            <div class="d-comments">
                <form class="d-comments-form" action="#" method="post">
                    <img src="img/d-comments.png" alt="file">
                    <label class="d-comments__name"></label><input class="d-comments__title" type="text" name="d-comments" value="" placeholder="Написать комментарий">
                    <button class="d-btn d-comments__send" type="submit" name="d-sub" value="sent">Отправить</button>
                </form>
            </div>
            <div class="d-nav">
                <a href="#" class="d-nav__left">Вернуться к тестам</a>
                <a href = "javascript:showNextTheme()" class="d-nav__right">Следующая тема</a>
            </div>
        </div>
        <div class="right-nav">
            <div class="m-right-nav">
                <a href="#"
                    class="m-right-nav__item m-right-nav__item-favorites"
                    prompt="[ Добавить в избранное _]">
                </a>
                <a href="#"
                    class="m-right-nav__item m-right-nav__item-reminder"
                    prompt="[ Напомнить позже _]">
                </a>
                <a href="#"
                    class="m-right-nav__item m-right-nav__item-forum"
                    prompt="[ Обсудить на форуме _]">
                </a>
                <a href="#"
                    class="m-right-nav__item m-right-nav__item-chat"
                    prompt="[ Обсудить в чате _]">
                </a>
                <a href="#"
                    class="m-right-nav__item m-right-nav__item-mentor"
                    prompt="[ Задать вопрос ментору _]">
                </a>
                <a href="#"
                    class="m-right-nav__item m-right-nav__item-select"
                    prompt="[ Выделить текст _]">
                </a>
            </div>
        </div>
            `)
    }, 200
  );
}

var opac =()=> {
  mainDiv.style.overflow="hidden";
  mainDiv.firstElementChild.style.opacity="0";
  mainDiv.firstElementChild.style.transform="scaleX(0)";

  setTimeout (()=>{
    mainDiv.firstElementChild.style.opacity="1";
    mainDiv.firstElementChild.style.transform="scaleX(1)";
    },
    250
  );
}

function showNextTheme() {
  themeNum++;
  if (themeNum > modulLength) { themeNum = 1 };
  opac();
  setTimeout (()=>{
    TheoryRender(themeNum-1);
    }, 200
  );
};
