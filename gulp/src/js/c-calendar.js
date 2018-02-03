// ======== CALENDAR-HEADER START
function getMonthString(num) {
    var month; //Создаем локальную переменную для получения имени месяца(String)
    switch (num) {
        case 0:
            month = "January";
            break;
        case 1:
            month = "February";
            break;
        case 2:
            month = "March";
            break;
        case 3:
            month = "April";
            break;
        case 4:
            month = "May";
            break;
        case 5:
            month = "June";
            break;
        case 6:
            month = "July";
            break;
        case 7:
            month = "August";
            break;
        case 8:
            month = "September";
            break;
        case 9:
            month = "October";
            break;
        case 10:
            month = "November";
            break;
        case 11:
            month = "December";
            break;
        default:
            month = "Invalid month";
    }
    return month;
}

//Создаем объект theDate
let theDate = new Date();

//Получаем текущий месяц
let theMonth = getMonthString(theDate.getMonth());

//Записываем имя месяца в DOM
document.querySelector('.c-calendar__month-name').innerHTML = `[${theMonth}`;

//Получаем текущий год
let theYear = theDate.getFullYear();

//Записываем год в DOM
document.querySelector('.c-calendar__year').innerHTML = `${theYear}_]`;
// ======== CALENDAR-HEADER END


// ======== CALENDAR-MAIN-FIELD START
function createCalendar(className, year, month) {
     
    let elem = document.querySelector(className); //Получаем DOM-MAIN календаря

    let mon = month - 1; // месяцы в JS идут от 0 до 11, а не от 1 до 12
    let d = new Date(year, mon);
    // console.log(d);

    // получить номер дня недели, от 0(пн) до 6(вс)
    function getDay(date) {
        let day = date.getDay();
        if (day == 0) day = 7;
        return day - 1;
    }

    // Шаблон для недели
    let weekRow = `
        <ul class="c-calendar__week-number"></ul>
    `;

    // Шаблон для дня недели без номера
    let emptyDayCell = `        
                <li class="c-calendar__day-num">
                    <span class="c-day-num">${calDate}</span>
                </li>
    `;

    // Шаблон для дня недели с номером
    let numDayCell = `        
                <li class="c-calendar__day-num">
                    <span class="c-day-num">${calDate}</span>
                </li>
    `;

    // ячейки календаря с датами
    while (d.getMonth() == mon) {
        table += '<td>' + d.getDate() + '</td>';

        if (getDay(d) % 7 == 6) { // вс, последний день - перевод строки
            table += '</tr><tr>';
        }

        d.setDate(d.getDate() + 1);
    }

    // заполнить первый ряд от понедельника
    // и до дня, с которого начинается месяц
    // * * * | 1  2  3  4
    for (let i = 0; i < getDay(d); i++) {
        weekRow += emptyDayCell;
    }
}

createCalendar(".c-calendar__main", theYear, theMonth);

// ======== CALENDAR-MAIN-FIELD END

//Получаем текущий день
let calDate = theDate.getDate();

//Получаем DOM-элементы дней календаря
let calDateBg = document.querySelectorAll('.c-day-num');

// for (let i = 0; i <= 31; i++) {
//     if (calDateBg[i].textContent == calDate) {
//         calDateBg[i].classList.add('c-day-num_today');
//     }
// }
