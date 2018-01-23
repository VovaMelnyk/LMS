// function select(name) {
//     return document.querySelector(name);
// }

// function checkRegistrationFields() {
//     let name = select("#name").value;
//     let surname = select("#surname").value;
//     let email = select("#new-email").value;
//     let password = select("#new_pass").value;
//     let errorMessage = select("#error-message");
//     let inputEmail = select('.input-wrapper-email');
//     let inputName = select(".input-wrapper-name");
//     let inputSurname = select(".input-wrapper-surname");
//     let inputPassword = select(".input-wrapper-pass");
//     let nameString = "";
//     let surnameString = "";
//     let emailString = "";
//     let passwordString = "";

//     let namePattern = /^[A-Z]{1}([^а-яёєіїґ’'`]i?)[a-z]+((\s[A-Z]{1}([^а-яёєіїґ’'`]i?)[a-z]+)+)?$|^[А-ЯЁ]{1}([^a-zєіїґ’'`]i?)[а-яё]+((\s[А-ЯЁ]{1}([^a-zєіїґ’'`]i?)[а-яё]+)+)?$|^[А-ЯЄІЇҐ’'`]{1}([^a-zыэъ]i?)[а-яєіїґ’'`]+((\s[А-ЯЄІЇҐ’'`]{1}([^a-zыэъ]i?)[а-яєіїґ’'`]+)+)?$/;
//     let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;
//     let surnamePattern = /^[A-Z]{1}([^а-яёєіїґ’'`]i?)[a-z]+((-[A-Z]{1}([^а-яёєіїґ’'`]i?)[a-z]+)+)?$|^[А-ЯЁ]{1}([^a-zєіїґ’'`]i?)[а-яё]+((-[А-ЯЁ]{1}([^a-zєіїґ’'`]i?)[а-яё]+)+)?$|^[А-ЯЄІЇҐ’'`]{1}([^a-zыэъ]i?)[а-яєіїґ’'`]+((-[А-ЯЄІЇҐ’'`]{1}([^a-zыэъ]i?)[а-яєіїґ’'`]+)+)?$/;
//     let passwordPattern = /\s+/;

//     let checkEmail = emailPattern.test(email);
//     let checkName = namePattern.test(name);
//     let checkSurname = surnamePattern.test(surname);
//     let checkPassword = !(passwordPattern.test(password)||password.length<4||password.length>32);

//     if (!checkName) {
//         inputName.classList.add("input-wrapper--wrong-data");
//         nameString = "имя,";
//     } else {
//         inputName.classList.remove("input-wrapper--wrong-data");
//     }

//     if (!checkSurname) {
//         inputSurname.classList.add("input-wrapper--wrong-data");
//         surnameString = "фамилия,";
//     } else {
//         inputSurname.classList.remove("input-wrapper--wrong-data");
//     }

//     if (!checkEmail){
//         inputEmail.classList.add("input-wrapper--wrong-data");
//         emailString = "E-mail, ";
//     } else {
//         inputEmail.classList.remove("input-wrapper--wrong-data");
//     }

//     if (!checkPassword){
//         inputPassword.classList.add("input-wrapper--wrong-data");
//         passwordString = "пароль.";
//     } else {
//         inputPassword.classList.remove("input-wrapper--wrong-data");
//     }

//     if (!(checkName && checkSurname && checkEmail && checkPassword)) {
//         errorMessage.textContent = `Неверно введены: ${nameString} ${surnameString} ${emailString} ${passwordString}`;
//     } else {
//         errorMessage.textContent = "";
//     }
// }

// function checkPassword() {

//     let passwordInput = document.getElementById('new_pass');
//     let confirmPassInput = document.getElementById('confpass');
//     let succeess;

//     let confirm = () => {
//         let passwordInput = document.getElementById('new_pass');
//         let password = document.getElementById('new_pass').value;
//         let confirmPassInput = document.getElementById('confpass');
//         let confirmPassword = document.getElementById('confpass').value;
//         let arrow = document.querySelector('.correctpass');

//         if (password.length >= 5) {
//             passwordInput.addEventListener('input', confirm);
//         }

//         if (password === confirmPassword && password.length === confirmPassword.length && password.length >= 5 && confirmPassword.length >= 5) {
//             arrow.style.visibility = "visible";
//             succeess = true;
//             return confirm;
//         } else {
//             arrow.style.visibility = "hidden";
//             succeess = false;
//             return confirm;
//         }
//     }

//     let error = () => {
//         document.getElementById('new_pass').classList.remove('input-wrapper--wrong-data');
//     }

//     let length = () => {
//         let passwordInput = document.getElementById('new_pass');
//         let password = document.getElementById('new_pass').value;

//         if (password.length <= 4) {
//             passwordInput.classList.add('input-wrapper--wrong-data');
//         } else {
//             passwordInput.classList.remove('input-wrapper--wrong-data');
//         }
//     }

//     passwordInput.addEventListener('blur', length);
//     passwordInput.addEventListener('focus', error);
//     confirmPassInput.addEventListener('input', confirm);
// }
