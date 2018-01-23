function select(name) {
    return document.querySelector(name);
}

let checkRegistrFields = {
    nameString: "",
    surnameString: "",
    emailString: "",
    passwordString: "",
    confirmPasswordString: "",
    errorMessage: select("#error-message"),
    checkRegName: function () {
        let name = select("#name").value;
        let namePattern = /^[A-Z]{1}([^а-яёєіїґ’'`]i?)[a-z]+((\s[A-Z]{1}([^а-яёєіїґ’'`]i?)[a-z]+)+)?$|^[А-ЯЁ]{1}([^a-zєіїґ’'`]i?)[а-яё]+((\s[А-ЯЁ]{1}([^a-zєіїґ’'`]i?)[а-яё]+)+)?$|^[А-ЯЄІЇҐ’'`]{1}([^a-zыэъ]i?)[а-яєіїґ’'`]+((\s[А-ЯЄІЇҐ’'`]{1}([^a-zыэъ]i?)[а-яєіїґ’'`]+)+)?$/;
        let checkName = namePattern.test(name);
        if (!checkName) {
            select(".input-wrapper-name").classList.add("input-wrapper--wrong-data");
            this.nameString = "Имя,";
        } else {
            this.nameString = "";
            select(".input-wrapper-name").classList.remove("input-wrapper--wrong-data");
        }
        return checkName;
    },
    checkRegSurname: function () {
        let surname = select("#surname").value;
        let surnamePattern = /^[A-Z]{1}([^а-яёєіїґ’'`]i?)[a-z]+((-[A-Z]{1}([^а-яёєіїґ’'`]i?)[a-z]+)+)?$|^[А-ЯЁ]{1}([^a-zєіїґ’'`]i?)[а-яё]+((-[А-ЯЁ]{1}([^a-zєіїґ’'`]i?)[а-яё]+)+)?$|^[А-ЯЄІЇҐ’'`]{1}([^a-zыэъ]i?)[а-яєіїґ’'`]+((-[А-ЯЄІЇҐ’'`]{1}([^a-zыэъ]i?)[а-яєіїґ’'`]+)+)?$/;
        let checkSurname = surnamePattern.test(surname);
        if (!checkSurname) {
            select(".input-wrapper-surname").classList.add("input-wrapper--wrong-data");
            this.surnameString = "Фамилия,";
        } else {
            this.surnameString = "";
            select(".input-wrapper-surname").classList.remove("input-wrapper--wrong-data");
        }
        return checkSurname;
    },
    checkRegEmail: function () {
        let email = select("#new-email").value;
        let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;
        let checkEmail = emailPattern.test(email);
        if (!checkEmail) {
            select('.input-wrapper-email').classList.add("input-wrapper--wrong-data");
            this.emailString = "E-mail, ";
        } else {
            this.emailString = '';
            select('.input-wrapper-email').classList.remove("input-wrapper--wrong-data");
        }
        return checkEmail;
    },
    checkRegPass: function () {
        let password = select("#new_pass").value;
        let confirmPassword = select('#confpass').value;
        let success = select('.correctpass');
        let passwordPattern = /\s+/;
        let checkPassword = !(passwordPattern.test(password) || password.length < 5 || password.length > 32);
        if (!checkPassword) {
            select(".input-wrapper-pass").classList.add("input-wrapper--wrong-data");
            this.passwordString = "Пароль.";
        } else {
            this.passwordString = "";
            select(".input-wrapper-pass").classList.remove("input-wrapper--wrong-data");
        }

        if (password === confirmPassword && c) {
            success.style.visibility = "visible";
        } else {
            success.style.visibility = "hidden";
        }

        return checkPassword;
    },

    checkValid: function () {
        if (!(this.checkRegName && this.checkRegSurname && this.checkRegEmail && this.checkRegPassword)) {
            this.errorMessage.textContent = `Неверно введены: ${this.nameString} ${this.surnameString} ${this.emailString} ${this.passwordString}`;
        } else {
            this.errorMessage.textContent = "";
        }
    }
};
