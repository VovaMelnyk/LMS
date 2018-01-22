function select(name) {
    return document.querySelector(name);
}

function checkRegistrationFields() {
    let name = select("#name").value;
    let surname = select("#surname").value;
    let email = select("#new-email").value;
    let password = select("#new_pass").value;
    let errorMessage = select("#error-message");
    let inputEmail = select('.input-wrapper-email');
    let inputName = select(".input-wrapper-name");
    let inputSurname = select(".input-wrapper-surname");
    let inputPassword = select(".input-wrapper-pass");
    let nameString = "";
    let surnameString = "";
    let emailString = "";

    let namePattern = /^[A-Z]{1}([^а-яёєіїґ’'`]i?)[a-z]+((\s[A-Z]{1}([^а-яёєіїґ’'`]i?)[a-z]+)+)?$|^[А-ЯЁ]{1}([^a-zєіїґ’'`]i?)[а-яё]+((\s[А-ЯЁ]{1}([^a-zєіїґ’'`]i?)[а-яё]+)+)?$|^[А-ЯЄІЇҐ’'`]{1}([^a-zыэъ]i?)[а-яєіїґ’'`]+((\s[А-ЯЄІЇҐ’'`]{1}([^a-zыэъ]i?)[а-яєіїґ’'`]+)+)?$/;
    let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;
    let surnamePattern = /^[A-Z]{1}([^а-яёєіїґ’'`]i?)[a-z]+((-[A-Z]{1}([^а-яёєіїґ’'`]i?)[a-z]+)+)?$|^[А-ЯЁ]{1}([^a-zєіїґ’'`]i?)[а-яё]+((-[А-ЯЁ]{1}([^a-zєіїґ’'`]i?)[а-яё]+)+)?$|^[А-ЯЄІЇҐ’'`]{1}([^a-zыэъ]i?)[а-яєіїґ’'`]+((-[А-ЯЄІЇҐ’'`]{1}([^a-zыэъ]i?)[а-яєіїґ’'`]+)+)?$/;
    let passwordPattern = /\s+/;

    let checkEmail = emailPattern.test(email);
    let checkName = namePattern.test(name);
    let checkSurname = surnamePattern.test(surname);
    let checkPassword = !(passwordPattern.test(password)||password.length<4||password.length>32);

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

    if (!checkEmail){
        inputEmail.classList.add("input-wrapper--wrong-data");
        emailString = "E-mail, ";
    } else {
        inputEmail.classList.remove("input-wrapper--wrong-data");
    }

    if (!checkPassword){
        inputPassword.classList.add("input-wrapper--wrong-data");
        passwordString = "пароль, ";
    } else {
        inputPassword.classList.remove("input-wrapper--wrong-data");
    }

    if (!(checkName && checkSurname && checkEmail && checkPassword)) {
        errorMessage.textContent = `Неверно введены: ${nameString} ${surnameString} ${emailString} ${passwordString}`;
    } else {
        errorMessage.textContent = "";
    }
}
