let main = document.querySelector('.main');

let calendarButton = document.querySelector('.c-header__icon-calendar');

calendarButton.addEventListener('click', function () {
    main.innerHTML = `
    <div class="c-calendar">
        <div class="c-calendar__header">
            <div class="c-calendar__transparent"></div>
            <div class="c-calendar__month">
                <div class="prev-month-btn"></div>
                <span class="c-calendar__month-name">
                        January</span>
                <span class="c-calendar__year">2018_</span>
                <div class="next-month-btn"></div>
            </div>
            <div class="c-calendar__btn-add-event">
                <span class="c-btn-add-event__plus">Добавить событие</span>
            </div>
        </div>
        <div class="c-calendar__main">
            <ul class="c-calendar__week-day-name">
                <li class="c-calendar__day-name">Monday</li>
                <li class="c-calendar__day-name">Tuesday</li>
                <li class="c-calendar__day-name">Wednesday</li>
                <li class="c-calendar__day-name">Thursday</li>
                <li class="c-calendar__day-name">Friday</li>
                <li class="c-calendar__day-name">Saturday</li>
                <li class="c-calendar__day-name">Sunday</li>
            </ul>
            <div class="c-calendar__main-inner"></div>
        </div>
    </div>
    <div class="c-modul-window c-modul-window-hidden">
    	<span class="c-modul-window-close"></span>
    	<p class="c-modul-window__create-sms"> &#91; создать событие _&#93;</p>
    	<div class="c-modul-window__block c-modul-window__block-mt">
    		<label for="name-enter" class="c-modul-window__block-name">Название:</label>
    		<input type="text" placeholder="Введите название события" class="c-modul-window__block-enter">
    	</div>
    	<div class="c-modul-window__block-choice">
    		<label for="choice" class="c-modul-window__block-choice-type-sms c-modul-window__block-choice-mt">Тип события:</label>
    		<div class="c-modul-window__block-choice__wrapper">
    			<div class="c-modul-window__block-choice__wrapper-label">
    				<label class="c-modul-window__block-choice__wrapper-label-input">
    				<input type="radio" name="user" class="c-modul-window__block-choice__wrapper-label-input-end"> Пользовательское
    			</label>
    			<label class="c-modul-window__block-choice__wrapper-label-input">
    				<input type="radio" name="user" class="c-modul-window__block-choice__wrapper-label-input-end"> Прочитать теорию
    			</label>
    			<label class="c-modul-window__block-choice__wrapper-label-input">
    				<input type="radio" name="user" class="c-modul-window__block-choice__wrapper-label-input-end"> Пройти тест
    			</label>
    			<label class="c-modul-window__block-choice__wrapper-label-input">
    				<input type="radio" name="user" class="c-modul-window__block-choice__wrapper-label-input-end"> Сделать ДЗ
    			</label>
    			</div>
    			<div class="c-modul-window__block-choice__wrapper-invisible"></div>
    		</div>
    	</div>
    	<div class="c-modul-window__calendar c-modul-window__block-mt">
    		<label class="c-modul-window__calendar-label">Начало:</label>
    		<div class=c-modul-window__calendar-block>
    			<input type="date" name="calendar" class="c-modul-window__calendar-block-date">
    			<input type="time" name="time" class="c-modul-window__calendar-block-time">
    		</div>

    	</div>
    	<div class="c-modul-window__calendar-end c-modul-window__block-mt">
    		<label class="c-modul-window__calendar-end-label">Окончание:</label>
    		<div class="c-modul-window__calendar-end-block">
    			<input type="date" name="calendar" class="c-modul-window__calendar-end-block-date">
    			<input type="time" name="time" class="c-modul-window__calendar-end-block-time">
    		</div>

    	</div>
    	<label class="c-modul-window__check">
    		<input type="checkbox" class="c-modul-window__check-box"> Весь день
    	</label>
    	<div class="c-modul-window__place c-modul-window__block-mt">
    		<label for="event" class="c-modul-window__place-label">Место:</label>
    		<input type="text" placeholder="Место проведения события" class="c-modul-window__place-event">
    	</div>
    	<div class="c-modul-window__desc c-modul-window__block-mt">
    		<label for="text" class="c-modul-window__desc-label">Описание:</label>
    		<textarea name="" id="" cols="22" rows="5" class="c-modul-window__desc-text" placeholder="Введите описание события"></textarea>
    	</div>
    	<div class="c-modul-window__button c-modul-window__block-mt">
    		<button class="c-modul-window__button-btn">Создать</button>
    	</div>
    </div>
    `;
    showCalendar();
});

function showCalendar() {

let today = new Date(); // Текущий день - Sun Feb 04 2018 15:35:42 GMT+0200 (EET)

let currentYear = today.getFullYear(); // Год - 2018

let currentMonth = today.getMonth(); // Месяц - 1

let currentDay = today.getDate(); // Число месяца - 4

let currentWeekDay = today.getDay(); // День недели - 0

let firstCurrentMonthDay = new Date(currentYear, currentMonth, 1); // Первый день текущего месяца - Thu Feb 01 2018 00:00:00 GMT+0200 (EET)

let firstDayNum = firstCurrentMonthDay.getDate(); // Число первого дня месяца - 1

let tempDay = new Date(currentYear, currentMonth + 1, 0); // Последний день месяца - Wed Feb 28 2018 00:00:00 GMT+0200 (EET)

let lastDate = tempDay.getDate(); // Последнее число месяца / Кол-во дней в месяце - 28


let prevMonth = new Date(currentYear, currentMonth, 0); // Предыдущий месяц -  Wed Jan 31 2018 00:00:00 GMT+0200 (EET)
let prevMonthLD = prevMonth.getDate(); // Последнее число предыдущего месяца

let nextMonth = new Date(currentYear, currentMonth + 1); // Следующий месяц - Thu Mar 01 2018 00: 00: 00 GMT + 0200(EET)
let nextMonthFD = nextMonth.getDate();  // Первое число следующего месяца


function createCalendar(currentYear, currentMonth, firstCurrentMonthDay, currentDay, prevMonthLD) {

    let monthNames = ["January", "February", "March", "April", "May", "June", // Название месяца - February
        "July", "August", "September", "October", "November", "December"
    ];

    let d = new Date(currentYear, currentMonth);

    // CALC HEADER
    // Записываем имя месяца в DOM
    document.querySelector('.c-calendar__month-name').innerHTML = `${monthNames[d.getMonth()]}&nbsp`;
    // Записываем год в DOM
    document.querySelector('.c-calendar__year').innerHTML = `${d.getFullYear()}_`;

    // CALC MAIN-FIALD
    let mainCal = document.querySelector('.c-calendar__main-inner');

    // заполнить первый ряд от понедельника
    // и до дня, с которого начинается месяц
    // * * * | 1  2  3  4

    for (let i = 0; i < getDay(d); i++) {
        mainCal.innerHTML += `
            <div class='c-calendar__day-num'>
                <span class='c-day-num_prev-month'></span>
            </div>`;
    }

    // ячейки календаря с датами
    while (d.getMonth() == currentMonth) {
        mainCal.innerHTML += `
        <div class='c-calendar__day-num'>
            <span class='c-day-num'>${d.getDate()}</span>
        </div>`;
        d.setDate(d.getDate() + 1);
    }

    // добить таблицу пустыми ячейками, если нужно
    if (getDay(d) != 0) {
        for (let i = getDay(d); i < 7; i++) {
            mainCal.innerHTML += `
            <div class='c-calendar__day-num'>
                <span class='c-day-num_next-month'></span>
            </div>`;
        }
    }

    // Нумеруем дни предыдущего месяца
    let prevMonth = document.querySelectorAll('.c-day-num_prev-month');
    let prevOut = prevMonthLD;
    for (let i = prevMonth.length - 1; i >= 0; i--) {
        prevMonth[i].innerHTML += prevOut--;
    }

    // Нумеруем дни следующего месяца
    let nextMonth = document.querySelectorAll('.c-day-num_next-month');
    let nextOut = 0;
    for (let i = 0; i < nextMonth.length; i++) {
        nextMonth[i].innerHTML += ++nextOut;
    }

    //Получаем элементы дат календаря и подкрашиваем текущую дату
    let calDateBg = document.querySelectorAll('.c-day-num');
    for (let i = 0; i <= lastDate; i++) {
        if (i == new Date().getDate() - 1) { // && d.getFullYear() == new Date().getFullYear() && d.getMonth() == new Date().getMonth()
            calDateBg[i].classList.add('c-day-num_today');
        }
    }
    dayTask()
}

createCalendar(currentYear, currentMonth, firstCurrentMonthDay, currentDay, prevMonthLD);

// получить номер дня недели, от 0(пн) до 6(вс)
function getDay(date) {
    let day = date.getDay();
    if (day == 0) day = 7;
    return day - 1;
}

// function getFullYearR(currentYear, currentMonth) {
// let d = new Date(currentYear, currentMonth);
// let tempY = document.querySelector('.c-calendar__year').innerText;
// tempY.slice(0,4);
// console.log(tempY.slice(0,4));
// parseFloat(tempY);
// console.log(parseFloat(tempY));
// console.log(tempY);
// if (d.getFullYear() < currentYear) {
//     currentYear--;
// } else {
//     currentYear++;
// }
//     if (currentMonth < 0) {
//         currentMonth = 11;
//         currentYear--;
//     } else {
//         currentYear++;
//     }
//     return currentYear;
// }

document.querySelector('.prev-month-btn').onclick = function () {
    document.querySelector('.c-calendar__main-inner').innerHTML = '';
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    createCalendar(currentYear, currentMonth, firstCurrentMonthDay, currentDay, prevMonthLD);
};

document.querySelector('.next-month-btn').onclick = function () {
    document.querySelector('.c-calendar__main-inner').innerHTML = '';
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    createCalendar(currentYear, currentMonth, firstCurrentMonthDay, currentDay, prevMonthLD);
};

//////////////////////
// getFullYearR();
//////////////////////

// document.createDocumentFragment - почитать !

function dayTask() {

    let dayTask = document.querySelectorAll('.c-calendar__day-num');

    let task = document.createElement('span');
    task.classList.add('c-calendar__task','c-calendar__task_mt');
    task.innerHTML = 'Пройти тест';


    dayTask[Math.floor(Math.random() * dayTask.length)].appendChild(task);

    return dayTask;
}
let addEventButton = document.querySelector('.c-calendar__btn-add-event');
let modulWindow = document.querySelector('.c-modul-window');
let closemodulWindow = document.querySelector('.c-modul-window-close');

addEventButton.onclick = () => {
	modulWindow.classList.remove('c-modul-window-hidden');
}
addEventButton.onclick = () => {
	modulWindow.classList.remove('c-modul-window-hidden');
}

closemodulWindow.onclick = () => {
    modulWindow.classList.add('c-modul-window-hidden');
}

}
    calendarButton.addEventListener('click', () => {
        document.querySelector('.main-board').style.display = "none";
        main.style.display = "block";
    });
