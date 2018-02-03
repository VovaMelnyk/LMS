//Устанавливаем имя текущего месяца
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
let calMonth = getMonthString(theDate.getMonth());
//Записываем имя месяца в DOM
document.querySelector('.c-calendar__month-name').innerHTML = `[${calMonth}`;

//Получаем текущий год
let calYear = theDate.getFullYear();
//Записываем год в DOM
document.querySelector('.c-calendar__year').innerHTML = `${calYear}_]`;

//Получаем текущий день
let calDate = theDate.getDate();
console.log(calDate);
console.log(typeof(calDate));

//Получаем элементы дат календаря
let calDateBg = document.querySelectorAll('.c-day-num');

for (let i = 0; i <= 31; i++) {
    console.log(calDateBg[i].textContent);
    console.log(typeof(calDateBg[i].textContent));
    if (calDateBg[i].textContent == calDate) {
        console.log('Hello');
        // calDateBg[i].classList.toggle('c-day-num_today');
        // calDateBg[i].classList.remove('c-day-num_today');
        calDateBg[i].classList.add('c-day-num_today');
    }
    
}

// for (let i = 0; i < calDateBg.length; i++) {
//     if (calDateBg[i].textContent==calDate) {
//         // calDateBg[i].classList.add('c-day-num_today');
//         console.log(calDateBg[i]);
//     }    
// }

// console.log(calDate);

// if (condition) {
    
// }

//Проклацивание месяца стрелками << и >>

// let arrowLeft = getComputedStyle(document.querySelector(('.c-calendar__month'),'::before'));
// let arrowLeft = getComputedStyle(document.querySelector(('.c-calendar__month'),'::before'));
// console.log(arrowLeft);
// console.log(arrowLeft.className);
// getComputedStyle(someelement, "::after").content
// let arrowRight = document.querySelector('.c-calendar__month::after');

// console.log(arrowLeft);

// document.onclick = function (event) {
//     console.log(event.target);
// };

// arrowLeft.addEventListener("click", console.log('Hello'));
// arrowRight.addEventListener("click", console.log(this));

// arrowLeft.addEventListener("click", this.smaller.bind(this);
// arrowRight.addEventListener("click", this.smaller.bind(this);