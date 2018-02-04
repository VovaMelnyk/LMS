// // ======== CALENDAR-HEADER START
// function getMonthString(num) {
//     var month; //Создаем локальную переменную для получения имени месяца(String)
//     switch (num) {
//         case 0:
//             month = "January";
//             break;
//         case 1:
//             month = "February";
//             break;
//         case 2:
//             month = "March";
//             break;
//         case 3:
//             month = "April";
//             break;
//         case 4:
//             month = "May";
//             break;
//         case 5:
//             month = "June";
//             break;
//         case 6:
//             month = "July";
//             break;
//         case 7:
//             month = "August";
//             break;
//         case 8:
//             month = "September";
//             break;
//         case 9:
//             month = "October";
//             break;
//         case 10:
//             month = "November";
//             break;
//         case 11:
//             month = "December";
//             break;
//         default:
//             month = "Invalid month";
//     }
//     return month;
// }

// //Создаем объект theDate
// let theDate = new Date();

// //Получаем текущий месяц
// let theMonth = getMonthString(theDate.getMonth());

// //Записываем имя месяца в DOM
// document.querySelector('.c-calendar__month-name').innerHTML = `[${theMonth}`;

// //Получаем текущий год
// let theYear = theDate.getFullYear();

// //Записываем год в DOM
// document.querySelector('.c-calendar__year').innerHTML = `${theYear}_]`;
// // ======== CALENDAR-HEADER END


// // ======== CALENDAR-MAIN-FIELD START
// function createCalendar(id, year, month) {      

//     let mainCal = document.getElementById(id); //Получаем DOM-MAIN календаря по #ID

//     console.log(mainCal);

//     // let mon = month - 1; // месяцы в JS идут от 0 до 11, а не от 1 до 12
//     // let d = new Date(year, mon);
//     console.log('Year - ',year);
//     console.log('Month - ',month);

//     // получить номер дня недели, от 0(пн) до 6(вс)
//     // function getDay(date) {
//     //     let day = date.getDay();
//     //     if (day == 0) day = 7;
//     //     return day - 1;
//     // }

//     // Шаблон для недели
//     let weekRow = `
//         <ul class="c-calendar__week-number"></ul>
//     `;

//     // Шаблон для дня недели без номера
//     let emptyDayCell = `        
//                 <li class="c-calendar__day-num">
//                     <span class="c-day-num"></span>
//                 </li>
//     `;

//     // Шаблон для дня недели с номером
//     let numDayCell = `        
//                 <li class="c-calendar__day-num">
//                     <span class="c-day-num">${calDate}</span>
//                 </li>
//     `;

//     // заполнить первый ряд от понедельника
//     // и до дня, с которого начинается месяц
//     // * * * | 1  2  3  4
//     // for (let i = 0; i < getDay(d); i++) {
//     //     elem.innerHTML = emptyDayCell;

//         // weekRow += emptyDayCell;
//     // }
    


// }

// createCalendar("calendar", theYear, theDate.getMonth());

// // ======== CALENDAR-MAIN-FIELD END

// //Получаем текущий день
// // let calDate = theDate.getDate();

// //Получаем DOM-элементы дней календаря
// // let calDateBg = document.querySelectorAll('.c-day-num');

// // for (let i = 0; i <= 31; i++) {
// //     if (calDateBg[i].textContent == calDate) {
// //         calDateBg[i].classList.add('c-day-num_today');
// //     }
// // }

// function Calendar2(id, year, month) {
//     var Dlast = new Date(year, month + 1, 0).getDate(), // Последний день месяца || Кол-во дней в месяце   
//         D = new Date(year, month, Dlast), // Год, месяц и последний день месяца
//         DNlast = new Date(D.getFullYear(), D.getMonth(), Dlast).getDay(), // С какого дня недели начинается месяц
//         DNfirst = new Date(D.getFullYear(), D.getMonth(), 1).getDay(),
//         calendar = '<tr>',
//         month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

//     console.log(Dlast);
//     console.log(D);
//     console.log('DNlast',DNlast);
//     console.log('DNfirst',DNfirst);

//     if (DNfirst != 0) {
//         for (var i = 1; i < DNfirst; i++) calendar += '<td>';
//     } else {
//         for (var i = 0; i < 6; i++) calendar += '<td>';
//     }
//     for (var i = 1; i <= Dlast; i++) {
//         if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
//             calendar += '<td class="today">' + i;
//         } else {
//             calendar += '<td>' + i;
//         }
//         if (new Date(D.getFullYear(), D.getMonth(), i).getDay() == 0) {
//             calendar += '<tr>';
//         }
//     }
//     for (var i = DNlast; i < 7; i++) calendar += '<td>&nbsp;';
//     document.querySelector('#' + id + ' tbody').innerHTML = calendar;
//     document.querySelector('#' + id + ' thead td:nth-child(2)').innerHTML = month[D.getMonth()] + ' ' + D.getFullYear();
//     document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.month = D.getMonth();
//     document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.year = D.getFullYear();
//     if (document.querySelectorAll('#' + id + ' tbody tr').length < 6) {  // чтобы при перелистывании месяцев не "подпрыгивала" вся страница, добавляется ряд пустых клеток. Итог: всегда 6 строк для цифр
//         document.querySelector('#' + id + ' tbody').innerHTML += '<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
//     }
// }

// Calendar2("calendar2", new Date().getFullYear(), new Date().getMonth());
// // переключатель минус месяц
// document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(1)').onclick = function () {
//     Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month) - 1);
// };

// // переключатель плюс месяц
// document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(3)').onclick = function () {
//     Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month) + 1);
// };
