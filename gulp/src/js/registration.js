'use strict';

let confirmPassInput = document.getElementById('confpass');
let passwordInput = document.getElementById('new_pass');

let confirm = (event) => {

    let password = document.getElementById('new_pass').value;
    let arrow = document.querySelector('.correctpass');
    let confirmPass = document.getElementById('confpass').value;
    let fail = false

    if (password === confirmPass && password.lenght === confirmPass.lenght && password !== "" && confirmPass !== "") {
        arrow.style.display = 'block';
    } else {
        fail = true;
        arrow.style.display = 'none';
    }
}

passwordInput.addEventListener('input', confirm);
confirmPassInput.addEventListener('input', confirm);
