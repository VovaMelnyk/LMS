

let open_login = document.getElementById('open_login');
let open_signin = document.getElementById('open_signin');
let modal_login = document.getElementsByClassName('wrapper__modal-window--entrance');
let modal_login1 = document.getElementsByClassName('wrapper__modal-window--registration');
let close_login = document.getElementsByClassName('modal-window__close');

open_login.addEventListener("click", function () {

  modal_login[0].style.display = "block";
  animTT(modal_login);

});
close_login[0].addEventListener("click", function () {

    delTeg();

  modal_login[0].style.display = "none";

});
open_signin.addEventListener("click", function () {

  modal_login1[0].style.display = "block";
  animTT(modal_login1);

});

close_login[1].addEventListener("click", function () {

    delTeg();

  modal_login1[0].style.display = "none";
});
