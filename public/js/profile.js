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

document.querySelector('#profile_photo').setAttribute('src', 'img/users/' + img);
document.querySelector('#header_photo-profile').setAttribute('src', 'img/users/' + img);
document.querySelector('#user-name').innerHTML = name + ' ' + lastName + '&#8194;';
document.querySelector('#user-email').innerHTML = email; 
document.querySelector('#user-facebook').setAttribute('href', facebook); 
document.querySelector('#user-google').setAttribute('href', google); 
document.querySelector('#user-linkedin').setAttribute('href', linkedin); 

function slider() {

    var slides = [];
    
    axios('http://localhost:3000/users')
    .then(function (data) {

       for(var i=0; i<data.data.length; i++){
          if(data.data[i].group == "FrontEnd_1"){
             slides.push(`
                 <div class="slider-item">
                 <p class="item-img"><img src="img/users/${data.data[i].img}" alt=""></p>
                 <p class="item-name">${data.data[i].name} ${data.data[i].lastName}</p>
                 <p class="item-score">${data.data[i].grade}</p>
                 </div>`);
         }
     }
     document.querySelector('.slider-stripe').innerHTML = slides.join('');
     document.querySelector('.arrowLeft').addEventListener('click', left);
     document.querySelector('.arrowRight').addEventListener('click', right);

     function left() {
        var items = document.querySelectorAll('.slider-item');
        slides.push(slides.shift());
        document.querySelector('.slider-stripe').innerHTML = slides.join('');
    }

    function right() {
        var items = document.querySelectorAll('.slider-item');
        slides.unshift(slides.pop());
        document.querySelector('.slider-stripe').innerHTML = slides.join('');
    }
});
}

slider();

