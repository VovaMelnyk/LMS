
let today = new Date(); // Текущий день - Sun Feb 04 2018 15:35:42 GMT+0200 (EET)
console.log('Текущий день - ', today);

let currentYear = today.getFullYear(); // Год - 2018
console.log('Год - ', today.getFullYear());

let currentMonth = today.getMonth(); // Месяц - 1
console.log('Месяц - ', today.getMonth());

let currentDay = today.getDate(); // Число месяца - 4
console.log('Число месяца - ', today.getDate());

let currentWeekDay = today.getDay(); // День недели - 0
console.log('День недели - ', today.getDay());

let firstCurrentMonthDay = new Date(currentYear, currentMonth, 1); // Первый день текущего месяца - Thu Feb 01 2018 00:00:00 GMT+0200 (EET)
console.log('Первый день текущего месяца - ', firstCurrentMonthDay);

let firstDayNum = firstCurrentMonthDay.getDate(); // Число первого дня месяца - 1
console.log('Число первого дня месяца - ', firstDayNum);

let tempDay = new Date(currentYear, currentMonth + 1, 0); // Последний день месяца - Wed Feb 28 2018 00:00:00 GMT+0200 (EET)
console.log('Последний день месяца - ', tempDay);

let lastDate = tempDay.getDate(); // Последнее число месяца / Кол-во дней в месяце - 28
console.log('Последнее число месяца / Кол-во дней в месяце - ', lastDate);


let prevMonth = new Date(currentYear, currentMonth, 0); // Предыдущий месяц -  Wed Jan 31 2018 00:00:00 GMT+0200 (EET)
console.log('Предыдущий месяц - ', prevMonth);
let prevMonthLD = prevMonth.getDate();
console.log('Число предыдущего месяца - ', prevMonthLD);


let nextMonth = new Date(currentYear, currentMonth, 1); // Следующий месяц - Thu Mar 01 2018 00: 00: 00 GMT + 0200(EET)
console.log('Следующий месяц - ', nextMonth);
console.log('Число следующего месяца - ', nextMonth.getDate());

var monthNames = ["January", "February", "March", "April", "May", "June", // Название месяца - February
    "July", "August", "September", "October", "November", "December"
];
// console.log('Название месяца - ', monthNames[today.getMonth()]);

function createCalendar(firstCurrentMonthDay, currentMonth,prevMonthLD) {

    // CALC HEADER
    // Записываем имя месяца в DOM
    document.querySelector('.c-calendar__month-name').innerHTML = `[${monthNames[today.getMonth()]} `;
    // Записываем год в DOM
    document.querySelector('.c-calendar__year').innerHTML = `${currentYear}_]`;

    // CALC MAIN-FIALD
    let mainCal = document.querySelector('.c-calendar__main');

    // заполнить первый ряд от понедельника
    // и до дня, с которого начинается месяц
    // * * * | 1  2  3  4
    for (let i = 0; i < getDay(firstCurrentMonthDay); i++) {
        mainCal.innerHTML += `
            <div class='c-calendar__day-num'>
                <span class='c-day-num_prev-month'></span>
            </div>`;            
    }

    // ячейки календаря с датами
    while (firstCurrentMonthDay.getMonth() == currentMonth) {
        mainCal.innerHTML += `
            <div class='c-calendar__day-num'>
                <span class='c-day-num'>${firstCurrentMonthDay.getDate()}</span>
            </div>`;
        firstCurrentMonthDay.setDate(firstCurrentMonthDay.getDate() + 1);
    }
    
    // добить таблицу пустыми ячейками, если нужно
    if (getDay(firstCurrentMonthDay) != 0) {
        for (let i = getDay(firstCurrentMonthDay); i < 7; i++) {
            mainCal.innerHTML += `
            <div class='c-calendar__day-num'>
                <span class='c-day-num_next-month'></span>
            </div>`;
        }
    }
 
    // Нумеруем дни предыдущего месяца
    let prevMonth = document.querySelectorAll('.c-day-num_prev-month');
    let prevOut = prevMonthLD;
    for (let i = prevMonth.length-1; i >= 0; i--) {
        prevMonth[i].innerHTML += prevOut--;
    }

    // Нумеруем дни следующего месяца
    let nextMonth = document.querySelectorAll('.c-day-num_next-month');
    let nextOut=0;
    for (let i = 0; i < nextMonth.length; i++) {
        nextMonth[i].innerHTML += ++nextOut;
    }

    //Получаем элементы дат календаря и подкрышиваем текущую дату
    let calDateBg = document.querySelectorAll('.c-day-num');
    for (let i = 0; i <= calDateBg.length; i++) {
        if (calDateBg[i].textContent == currentDay) {
            calDateBg[i].classList.add('c-day-num_today');
        }
    }
  }

createCalendar(firstCurrentMonthDay, currentMonth, prevMonthLD);

// получить номер дня недели, от 0(пн) до 6(вс)
function getDay(date) {
    let day = date.getDay();
    if (day == 0) day = 7;
    return day - 1;
}