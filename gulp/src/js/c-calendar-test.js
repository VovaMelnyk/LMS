
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
    console.log('currentMonth', currentMonth);
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

let dayTask = document.querySelectorAll('.c-calendar__day-num');

let task = document.createElement('span');
task.classList.add('c-calendar__task','c-calendar__task_mt');
task.innerHTML = 'Пройти тест';

dayTask[11].appendChild(task);






