

let open_login = document.getElementById('open_login');
let open_signin = document.getElementById('open_signin');
let modal_login = document.getElementsByClassName('wrapper__modal-window--entrance');
let modal_login1 = document.getElementsByClassName('wrapper__modal-window--registration');
let close_login = document.getElementsByClassName('modal-window__close');
let end_signin = document.getElementsByClassName('wrapper__modal-window--end-registration');
let but_signin  = document.getElementsByClassName('a-entrance__btn');
let end_mail = document.getElementsByClassName('end-registration__text--mail');
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

but_signin[1].addEventListener("click", function () {
  delTeg();
  event.preventDefault();

  let mail_user = document.getElementById("new_email").value;

  if (mail_user.length>0) {
    end_mail[0].innerHTML = mail_user;

  } else {
    end_mail[0].innerHTML = "[email _]";
  }
  modal_login1[0].style.display = "none";

  end_signin[0].style.display = "block";

});
close_login[2].addEventListener("click", function () {
end_signin[0].style.display = "none";
});
