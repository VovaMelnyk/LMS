function select(name) {
    return document.querySelector(name);
}
function checkRegistrationFields(event) {
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
    let passwordString = "";
    let confirmPasswordString = "";
    let confirm;

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
        nameString = "Имя должно начинаться с заглавной буквы и не содержать цифр.";
    } else {
        inputName.classList.remove("input-wrapper--wrong-data");
    }

    if (!checkSurname) {
        inputSurname.classList.add("input-wrapper--wrong-data");
        surnameString = "Фамилия должна начинаться с заглавной буквы и не содержать цифр";
    } else {
        inputSurname.classList.remove("input-wrapper--wrong-data");
    }

    if (!checkEmail){
        inputEmail.classList.add("input-wrapper--wrong-data");
        emailString = "Введите существующий E-mail";
    } else {
        inputEmail.classList.remove("input-wrapper--wrong-data");
    }

    if (!checkPassword){
        inputPassword.classList.add("input-wrapper--wrong-data");
        passwordString = "Пароль должен содержать минимум 5 символов";
    } else {
        inputPassword.classList.remove("input-wrapper--wrong-data");
    }

    if (select("#new_pass").value === select('#confpass').value /*&& checkPassword*/) {
        select('.correctpass').style.visibility = "visible";
        confirm = true;
        select(".input-wrapper-confpass").classList.remove("input-wrapper--wrong-data");
    } else {
        confirm = false;
        select('.correctpass').style.visibility = "hidden";
        confirmPasswordString = "Введенные Вами пароли не совпадают";
        select(".input-wrapper-confpass").classList.add("input-wrapper--wrong-data");
    }

    if (!(checkName && checkSurname && checkEmail && checkPassword)) {
        errorMessage.textContent = `Неверно введены: ${nameString} ${surnameString} ${emailString} ${passwordString}`;
    } else {
        errorMessage.textContent = "";
    }
}
//
//
//
// let checkRegistrFields = {
//     nameString: "",
//     surnameString: "",
//     emailString: "",
//     passwordString: "",
//     confirmPasswordString: "",
//     errorMessage: select("#error-message"),
//     checkRegName: function () {
//         let name = select("#name").value;
//         let namePattern = /^(\s?[A-Z]{1}[a-z]+){1,3}$|^(\s?[А-ЯЁ]{1}[а-яё]+){1,3}$|^(\s?[А-ЩЮЯЄІЇҐ’'`]{1}[а-щьюяєіїґ’'`]+){1,3}$/;
//         let checkName = namePattern.test(name);
//         if (!checkName) {
//             select(".input-wrapper-name").classList.add("input-wrapper--wrong-data");
//             this.nameString = "Имя должно начинаться с заглавной буквы и не содержать цифр;";
//
//         } else {
//             this.nameString = "";
//             select(".input-wrapper-name").classList.remove("input-wrapper--wrong-data");
//         }
//         this.checkValid();
//
//         return checkName;
//     },
//     checkRegSurname: function () {
//         let surname = select("#surname").value;
//         let surnamePattern = /^(-?[A-Z]{1}[a-z]+){1,3}$|^(-?[А-ЯЁ]{1}[а-яё]+){1,3}$|^(-?[А-ЩЮЯЄІЇҐ’'`]{1}[а-щьюяєіїґ’'`]+){1,3}$/;
//         let checkSurname = surnamePattern.test(surname);
//         if (!checkSurname) {
//             select(".input-wrapper-surname").classList.add("input-wrapper--wrong-data");
//             this.surnameString = "Фамилия должна начинаться с заглавной буквы и не содержать цифр;";
//         } else {
//             this.surnameString = "";
//             select(".input-wrapper-surname").classList.remove("input-wrapper--wrong-data");
//         }
//         this.checkValid();
//
//         return checkSurname;
//     },
//     checkRegEmail: function () {
//         let email = select("#new-email").value;
//         let emailPattern = /^\w+([\.-]?\w+)*@[a-z]+([\.-]?\w+)*(\.\w{2,6})+$/;
//         let checkEmail = emailPattern.test(email);
//         if (!checkEmail) {
//             select('.input-wrapper-email').classList.add("input-wrapper--wrong-data");
//             this.emailString = "Введите существующий E-mail;";
//
//         } else {
//             this.emailString = '';
//             select('.input-wrapper-email').classList.remove("input-wrapper--wrong-data");
//         }
//         this.checkValid();
//         return checkEmail;
//     },
//
//     checkRegPass: function () {
//         let password = select("#new_pass").value;
//         let passwordPattern = /\s+/;
//         let checkPassword = !(passwordPattern.test(password) || password.length < 5 || password.length > 32);
//         if (!checkPassword) {
//             select(".input-wrapper-pass").classList.add("input-wrapper--wrong-data");
//             this.passwordString = "Пароль должен содержать минимум 5 символов;";
//
//         } else {
//             this.passwordString = "";
//             select(".input-wrapper-pass").classList.remove("input-wrapper--wrong-data");
//         }
//
//         this.checkValid();
//         return checkPassword;
//     },
//
//     checkConfirm: function () {
//         let confirm;
//         if (select("#new_pass").value === select('#confpass').value /*&& checkPassword*/) {
//             select('.correctpass').style.visibility = "visible";
//             confirm = true;
//             this.confirmPasswordString = "";
//             select(".input-wrapper-confpass").classList.remove("input-wrapper--wrong-data");
//         } else {
//             confirm = false;
//             select('.correctpass').style.visibility = "hidden";
//             this.confirmPasswordString = "Введенные Вами пароли не совпадают";
//             select(".input-wrapper-confpass").classList.add("input-wrapper--wrong-data");
//         }
//         this.checkValid();
//     },
//
//     checkValid: function() {
//
//      return this.errorMessage.innerHTML = `<p>${this.nameString}</p><p>${this.surnameString}</p><p>${this.emailString}</p> <p>${this.passwordString} </p><p>${this.confirmPasswordString}</p>`;
//     }
// };
let submitBtn = select("#submit");
submitBtn.addEventListener("click", checkRegistrationFields);
