const btnRender = document.querySelectorAll("li[data='theory']");
const mainTheory = document.querySelector(".main");

let TheoryRender = (themNum) => {

    fetch("http://localhost:3000/course")
        .then(response => {
            if (response.ok) {
                return response.json();
            }

            throw new Error("error while fetching, " + response.statusText);
        })
        .then(data => {

        let navCard = "";
            data[themNum].theory.content.forEach((elem, idx) => {
                navCard += `<a href="#cnt${idx}" class="m-left-nav__link">
                ${idx + 1}
                <span class="m-left-nav__prompt">[ ${elem.contentTitle} _]</span>
                </a>`;
            });

        let contentCard = "";
            data[themNum].theory.content.forEach((elem, idx) => {
                contentCard += `
                <h4 class="m-content__content-title" id="cnt${idx}">[ ${elem.contentTitle} _] </h4>
                  <p class="m-content__text">${elem.contentText}</p>`;
            });

        mainTheory.innerHTML = `
        <div id="m-title" class="m-header">
            <div class="m-header__caption caption">
                <h2 class="caption__title">Теория</h2>
                <h3 class="caption__theme">ТЕМА ${data[themNum].theory.number}</h3>
            </div>
            <h2 class="m-header__title" id="theory-name">
                [ ${data[themNum].theory.title} _]
            </h2>
            <div id="m-timers">
                <div class="m-timer">
                    <p class="m-timer__time">
                        <span id="m-timer">25 мин</span>
                        <br> на прочтение
                    </p>
                    <div class="m-timer__img icon" id="m-timer__img"></div>
                </div>
                <div>
                    <a class="m-btn-test button-small">к тестам!</a>
                </div>
            </div>
        </div>
        <dl class="m-content">
        <div class="m-content">${contentCard}</div>

        </dl>
        <a href="#m-title" class="m-btn-up invisible"> </a>

        <div class="m-highlight">
            <div class="m-highlight__visible">
                <button type="button" class="m-highlight__visible-notepad"></button>
                <button type="button" class="m-highlight__visible-cut"></button>
            </div>
        </div>

        <div class="right-nav" id="right-nav">
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
        <!-- RIGHT-NAV end -->
        <!-- LEFT CONTENT STARTS -->
        <div class="m-left-nav" id="m-left-nav">${navCard}</div>
        `
        })

        .catch(err => console.log(err));

};

btnRender.forEach((element, idx) => {
    element.addEventListener('click', () => {
        document.querySelector('.board').innerHTML = '';
        TheoryRender(idx)});
});
