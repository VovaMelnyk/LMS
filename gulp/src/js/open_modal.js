function select(name) {
    return document.querySelector(name);
}

let modalLogin = select('#modal_entrance');
let modalRegistration = select('#modal_registration');
let modal_login = document.getElementsByClassName('wrapper__modal-window--entrance');
let modal_registration = document.getElementsByClassName('wrapper__modal-window--registration');
let endRegistration = select('#modal_end_registration');
let closeEndRegistration = select('#closeEndRegistration');
let submitRegistration = select('#submit_registration');
// let but_signin  = document.getElementsByClassName('a-entrance__btn');
let endRegistrationMail = document.getElementsByClassName('end-registration__text--mail');

let buttons = {
    open_login: (event) => {
        modalLogin.style.display = "block";
        animTT(modal_login);
    },
    close_entrance: (event) => {
        delTeg();
        modalLogin.style.display = "none";
    },
    open_signin: (event) => {
        modalRegistration.style.display = "block";
        animTT(modal_registration);
    },
    close_registration: (event) => {
        delTeg();
        modalRegistration.style.display = "none";
    },
    submit_registration: (event) => {
        event.preventDefault();
        checkRegistrationFields();
    },
    closeEndRegistration: (event) => {
        endRegistration.style.display = "none";
    },
}

document.body.addEventListener("click", function(event) {
    let target = event.target;
    let targetID = target.id;

    for (let key in buttons) {
        if (targetID == key) {
            buttons[key](event);
        };
    };
});
