let today = new Date(); // Сегодня
console.log('Текущий день - ', today);

let currentYear = today.getFullYear(); // текущий год
console.log('Год - ', today.getFullYear());

let currentMonth = today.getMonth(); // текущий месяц
console.log('Месяц - ', today.getMonth() + 1);

let currentDay = today.getDate(); // день месяца
console.log('Число месяца - ', today.getDate());

let currentWeekDay = today.getDay(); // день недели
console.log('День недели - ', today.getDay());

let tempDay = new Date(currentYear, currentMonth + 1, 0); // последний день месяца
console.log('Последний день месяца - ', tempDay);

let lustDate = tempDay.getDate(); // Последнея число месяца
console.log('Последнее число месяца / Кол-во дней в месяце - ', lustDate);

let currentMonthDay = new Date(currentYear, currentMonth, 1); // Первый день текущего месяца
console.log('Первый день текущего месяца - ', currentMonthDay);
console.log('Число первого дня месяца - ', currentMonthDay.getDate());

var monthNames = ["January", "February", "March", "April", "May", "June", // Название месяца
    "July", "August", "September", "October", "November", "December"
];
console.log('Название месяца - ', monthNames[today.getMonth()]);


function createCalendar() {
    // CALC HEADER
    //Записываем имя месяца в DOM
    document.querySelector('.c-calendar__month-name').innerHTML = `[${monthNames[today.getMonth()]} `;
    //Записываем год в DOM
    document.querySelector('.c-calendar__year').innerHTML = `${currentYear}_]`;

    //CALC MAIN-FIALD
    let mainCal = document.querySelector('.c-calendar__main');

    for (let i = 0; i < 6; i++) {
        // Строка недели
        let weekRow = document.createElement('ul');
        weekRow.classList.add('c-calendar__week-number');
        mainCal.appendChild(weekRow);
        for (let i = 0; i < 7; i++) {
            // День недели
            let emptyDayCell = document.createElement('li');
            emptyDayCell.classList.add('c-calendar__day-num');
            weekRow.appendChild(emptyDayCell);

            // Число/Дата месяца
            let dayNum = document.createElement('span');
            dayNum.classList.add('c-day-num');
            emptyDayCell.appendChild(dayNum);
        }
    }

}

createCalendar();