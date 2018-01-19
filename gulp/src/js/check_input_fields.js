function select(name) {
    return document.querySelector(name);
}

function checkRegistrationFields() {
    let name = select("#name").value;
    let surname = select("#surname").value;
    let errorMessage = select("#error-message");
    let inputName = select(".input-wrapper-name");
    let inputSurname = select(".input-wrapper-surname");
    let nameString = "";
    let surnameString = "";

    let namePattern = /^[A-Z]{1}([^а-яёєіїґ’'`]i?)[a-z]+((\s[A-Z]{1}([^а-яёєіїґ’'`]i?)[a-z]+)+)?$|^[А-ЯЁ]{1}([^a-zєіїґ’'`]i?)[а-яё]+((\s[А-ЯЁ]{1}([^a-zєіїґ’'`]i?)[а-яё]+)+)?$|^[А-ЯЄІЇҐ’'`]{1}([^a-zыэъ]i?)[а-яєіїґ’'`]+((\s[А-ЯЄІЇҐ’'`]{1}([^a-zыэъ]i?)[а-яєіїґ’'`]+)+)?$/;

    let surnamePattern = /^[A-Z]{1}([^а-яёєіїґ’'`]i?)[a-z]+((-[A-Z]{1}([^а-яёєіїґ’'`]i?)[a-z]+)+)?$|^[А-ЯЁ]{1}([^a-zєіїґ’'`]i?)[а-яё]+((-[А-ЯЁ]{1}([^a-zєіїґ’'`]i?)[а-яё]+)+)?$|^[А-ЯЄІЇҐ’'`]{1}([^a-zыэъ]i?)[а-яєіїґ’'`]+((-[А-ЯЄІЇҐ’'`]{1}([^a-zыэъ]i?)[а-яєіїґ’'`]+)+)?$/;

    let checkName = namePattern.test(name);
    let checkSurname = surnamePattern.test(surname);    

    if (!checkName) {
        inputName.classList.add("input-wrapper--wrong-data");
        nameString = "имя,";
    } else {
        inputName.classList.remove("input-wrapper--wrong-data");
    }

    if (!checkSurname) {
        inputSurname.classList.add("input-wrapper--wrong-data");
        surnameString = "фамилия,";
    } else {
        inputSurname.classList.remove("input-wrapper--wrong-data");
    }

    if (!(checkName && checkSurname)) {
        errorMessage.textContent = `Неверно введены: ${nameString} ${surnameString}`;
    } else {
        errorMessage.textContent = "";
    }
}