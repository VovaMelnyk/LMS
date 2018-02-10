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

    var counter = 0,
    left = 0,
    right = 0,
    margin = 0;

    var slides = [];
    
    axios('http://localhost:3000/users').then(
        function (data) {

           for(var i=0; i<data.data.length; i++){
              if(data.data[i].group == "FrontEnd_1"){
                 slides.push(`
                     <div class="slider-item">
                     <p class="item-img"><img src="img/users/${data.data[i].img}" alt=""></p>
                     <p class="item-name">${data.data[i].name} ${data.data[i].lastName}</p>
                     <p class="item-score">${data.data[i].grade}</p>
                     </div>`);
                 counter++;
             }
         }

         document.querySelector('.slider-stripe').innerHTML = slides.join('');
         document.querySelector('.arrowLeft').addEventListener('click', left);
         document.querySelector('.arrowRight').addEventListener('click', right);

         function left() {

            margin -= 150;

            if (margin < -150 * (counter -5 )) {
                margin = 0
            }
            document.querySelector('.slider-stripe').style.marginLeft = margin + 'px';
        }

        function right() {

            margin += 150;
            if (margin > 0) {
                margin = -150 * (counter -5 );
            }

            document.querySelector('.slider-stripe').style.marginLeft = margin + 'px';
        }
    });
}

slider();

