if (!localStorage.getItem('lms_img') &&
    !localStorage.getItem('lms_name') &&
    !localStorage.getItem('lms_email')
) {
    window.location = 'http://localhost:3000/index.html';
}


var img = localStorage.getItem('lms_img');
var name = localStorage.getItem('lms_name');
var lastName = localStorage.getItem('lms_lastName');
var email = localStorage.getItem('lms_email');
var facebook = localStorage.getItem('lms_facebook');
var google = localStorage.getItem('lms_google');
var linkedin = localStorage.getItem('lms_linkedin');
var open = localStorage.getItem('lms_profile');


document.querySelector('#profile_photo').setAttribute('src', 'img/users/' + img);
document.querySelector('#header_photo-profile').setAttribute('src', 'img/users/' + img);
document.querySelector('#user-name').value = name;
document.querySelector('#user-secondname').value = lastName;
document.querySelector('#user-email').value = email; 
document.querySelector('#user-facebook').value = facebook; 
document.querySelector('#user-google').value = google; 
document.querySelector('#user-linkedin').value = linkedin;
document.querySelector('.profile-public-icon').setAttribute('src', open ? 'img/open.svg' : 'img/close.svg')
document.querySelector('.profile-public-message').innerHTML = open ? 'Мой профиль открыт для всех' : 'Данные моего профиля закрыты';
document.querySelector('.profile-public-message').style.color = open ? '#00ff00' : '#ff0000';

document.querySelector('#old-pass').addEventListener('change', (e) => {
	let pass = e.target.value;
	let pass2 = localStorage.getItem('lms_pass');

	if (pass != pass2) {
		document.querySelector('.alert').innerHTML = 'Неверный старый пароль';
	}
	else {
		document.querySelector('.alert').innerHTML = '';
	}
}) 

document.querySelector('#new-pass').addEventListener('change', (e) => {

	let pass = document.querySelector('#new-pass').value;

	if (pass.search(/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g)) {
		document.querySelector('.alert').innerHTML = 'Пароль слишком короткий  <br> или недоступный символ';
	}
	else {
		document.querySelector('.alert').innerHTML = '';
	}
});

document.querySelector('#repeat-new-pass').addEventListener('change', function(e) {

	let pass = document.querySelector('#new-pass').value;
	let pass2 = document.querySelector('#repeat-new-pass').value;

	if (pass.search(/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g)) {
		document.querySelector('.alert').innerHTML = 'Пароль слишком короткий <br> или недоступный символ';
	}
	else {
		document.querySelector('.alert').innerHTML = '';
	}

	if (pass != pass2) {
		document.querySelector('.alert').innerHTML = 'Пароли не совпадают';
	}
	else {
		document.querySelector('.alert').innerHTML = '';
	}
}) 

function publicFunction() {
	return function() {
		document.querySelector('.profile-public-icon').setAttribute('src', !open ? 'img/open.svg' : 'img/close.svg')
		document.querySelector('.profile-public-message').innerHTML = !open ? 'Мой профиль открыт для всех' : 'Данные моего профиля закрыты';
		document.querySelector('.profile-public-message').style.color = !open ? '#00ff00' : '#ff0000';
		localStorage.setItem('lms_profile', open ? '' : 1);
		open = !open;
	}
}

document.querySelector('.profile-public-icon').addEventListener('click', publicFunction());


document.querySelector('#header_photo-profile').addEventListener('click', e => {
    localStorage.clear();
    window.location = 'http://localhost:3000/index.html';
})