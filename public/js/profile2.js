if (!localStorage.getItem('lms_img') &&
    !localStorage.getItem('lms_name') &&
    !localStorage.getItem('lms_email')
) {
    window.location = 'http://localhost:3000/index.html';
}


var img = localStorage.getItem('lms_img');
var name = localStorage.getItem('lms_name');
var email = localStorage.getItem('lms_email');
var facebook = localStorage.getItem('lms_facebook');
var google = localStorage.getItem('lms_google');
var linkedin = localStorage.getItem('lms_linkedin');

console.log('img/' + img);

document.querySelector('#profile_photo').setAttribute('src', 'img/users/' + img);
document.querySelector('#header_photo-profile').setAttribute('src', 'img/users/' + img);
document.querySelector('#user-name').value = name.split(' ')[0];
document.querySelector('#user-secondname').value = name.split(' ')[1];
document.querySelector('#user-email').value = email; 
document.querySelector('#user-facebook').value = facebook; 
document.querySelector('#user-google').value = google; 
document.querySelector('#user-linkedin').value = linkedin; 