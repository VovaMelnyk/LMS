'use strict'

var hwBase = {};
var themeNum=1;

// -----------------V---Find DIVs for insert theme details------V--------

var themeHoursDiv, themeDeadlineDiv, themeNumberDiv, themeTitleDiv, themeDescDiv, choseGroup, nextThemeBtn;
window.addEventListener('DOMContentLoaded', findHwBlocksAdm);
function findHwBlocksAdm(){
    themeNumberDiv = document.querySelector('.d-hwThemeNum__input');
    themeNumberDiv.addEventListener('change', getThemeNum);
    themeHoursDiv = document.querySelector('.d-timeAvarage__input');
    themeDeadlineDiv = document.querySelector('.d-deadLine__input');
    themeTitleDiv = document.querySelector('.d-themeTitle__input');
    themeDescDiv = document.querySelector('.d-themeDesc__textArea');
    choseGroup = document.querySelector('.d-group__select'); // "Вибір групи (disabled)"
    }

// ---------------------------------------------------------------------------------

// -------------------------V----FETCH----V-----------------------------

var url = 'db/hw_db.json';
var status = function(response) {
    if (response.status !== 200) {
        return Promise.reject(new Error(response.statusText))
    }
    return Promise.resolve(response)
}
var json = function(response) {
    return response.json()
}
window.addEventListener('DOMContentLoaded', function() {
    fetch(url)
        .then(status)
        .then(json)
        .then(function(data) {
            console.log('GET data:', data);
            hwBase = data.themes;
            showThemDetailsAdm(hwBase[themeNum])
            themeNumberDiv.max = Object.keys(hwBase).length;
        })
        .catch(function(error) {
            console.log('error', error)
        })
})
// ---------------------------------------------------------------

// ---------V-----SHOW & TOGLE theme details-----V----------------
function getThemeNum(){
    themeNum = themeNumberDiv.value;
    showThemDetailsAdm(hwBase[themeNum]);
}

function showThemDetailsAdm(data) {
    themeHoursDiv.value = data.hours;
    themeDeadlineDiv.value = data.deadline;
    themeNumberDiv.value = themeNum;
    themeTitleDiv.value = data.title;
    themeDescDiv.value = data.text;
}
// ------------------------------------------------------------------
