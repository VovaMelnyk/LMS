var goToProfile = document.querySelector('.c-header__profile-block_my-profile');

if (!localStorage.getItem('lms_img') &&
    !localStorage.getItem('lms_name') &&
    !localStorage.getItem('lms_email')
    ) {
    //window.location = 'http://localhost:3000/index.html';
}

var img = localStorage.getItem('lms_img');
var name = localStorage.getItem('lms_name');
var lastName = localStorage.getItem('lms_lastName');
var email = localStorage.getItem('lms_email');
var facebook = localStorage.getItem('lms_facebook');
var google = localStorage.getItem('lms_google');
var linkedin = localStorage.getItem('lms_linkedin');

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

goToProfile.addEventListener('click', () => {
    // localStorage.clear();
    // window.location = 'http://localhost:3000/index.html';
    document.querySelector('.main-board').style.display = "none";
    main.style.display = "block";
    main.innerHTML = profile1;
    document.querySelector('#profile_photo').setAttribute('src', 'img/users/' + img);
    document.querySelector('#user-name').innerHTML = name + ' ' + lastName + '&#8194;';
    document.querySelector('#user-email').innerHTML = email;
    document.querySelector('#user-facebook').setAttribute('href', facebook);
    document.querySelector('#user-google').setAttribute('href', google);
    document.querySelector('#user-linkedin').setAttribute('href', linkedin);
});

var profile1 = `
<div class="profile">

    <div class="profile__photo-profile">
        <img id="profile_photo" class='accountPhoto' src="img/photo.png">
    </div>
    <div class="name">

        <p class="name" id="user-name">Александр Разумовський&#8194;</p>
        <sup><small><a href="profile2.html">
            <img class="" src="img/pensil.png"></a></small>
        </sup>

    </div>

    <p class="p-mail" id="user-email">ivan123@gmail.com</p>

    <div class="social_icon">
        <div class="social-block--inputs-block">
            <div class="social-block--inputs-block--icon icon icon-profile1">
                <a id="user-facebook" class="a-social__link" href="#">
                    <svg class="social-block--inputs-block--icon--svg svg-social-icon" viewBox="0 0 56.693 56.693">
                        <path d="M40.43,21.739h-7.645v-5.014c0-1.883,1.248-2.322,2.127-2.322c0.877,0,5.395,0,5.395,0V6.125l-7.43-0.029  c-8.248,0-10.125,6.174-10.125,10.125v5.518h-4.77v8.53h4.77c0,10.947,0,24.137,0,24.137h10.033c0,0,0-13.32,0-24.137h6.77  L40.43,21.739z"
                        />
                    </svg>
                </a>
            </div>
            <div class="social-block--inputs-block--icon icon icon-profile1 icon-profile1Left">
                <a id="user-google" class="a-social__link" href="#">
                    <svg class="social-block--inputs-block--icon--svg svg-social-icon" viewBox="0 0 56.6934 56.6934">
                        <g>
                            <path d="M19.6671,25.7867c-0.0075,1.7935,0,3.5869,0.0076,5.3803c3.0067,0.098,6.0208,0.0527,9.0275,0.098   c-1.3262,6.6689-10.3989,8.8315-15.199,4.4761C8.5674,31.9206,8.801,23.5412,13.9327,19.992   c3.5869-2.8635,8.6884-2.1552,12.2752,0.324c1.4092-1.3036,2.7278-2.6977,4.0013-4.1445   c-2.984-2.3812-6.6462-4.0767-10.5421-3.8958c-8.1307-0.2713-15.6059,6.8497-15.7415,14.9805   c-0.52,6.6462,3.8506,13.1644,10.0222,15.5155c6.1489,2.3661,14.031,0.7535,17.957-4.77c2.5922-3.4889,3.1498-7.98,2.8484-12.1999   C29.7194,25.7641,24.6933,25.7716,19.6671,25.7867z"
                            />
                            <path d="M49.0704,25.7641c-0.0151-1.4996-0.0226-3.0067-0.0301-4.5062c-1.4996,0-2.9916,0-4.4836,0   c-0.0151,1.4996-0.0301,2.9991-0.0377,4.5062c-1.5071,0.0075-3.0067,0.0151-4.5062,0.0302c0,1.4995,0,2.9915,0,4.4836   c1.4995,0.0151,3.0066,0.0302,4.5062,0.0452c0.0151,1.4996,0.0151,2.9991,0.0302,4.4987c1.4996,0,2.9916,0,4.4911,0   c0.0075-1.4996,0.015-2.9991,0.0301-4.5062c1.5071-0.0151,3.0067-0.0226,4.5062-0.0377c0-1.4921,0-2.9916,0-4.4836   C52.0771,25.7792,50.57,25.7792,49.0704,25.7641z"
                            />
                        </g>
                    </svg>
                </a>
            </div>
            <div class="social-block--inputs-block--icon icon icon-profile1 icon-profile1Left">
                <a id="user-linkedin" class="a-social__link" href="#">
                    <svg class="social-block--inputs-block--icon--svg svg-social-icon" viewBox="0 0 100 100">
                        <g>
                            <path d="M95,59.727V93H75.71V61.955c0-7.799-2.79-13.121-9.771-13.121   c-5.331,0-8.503,3.587-9.898,7.057c-0.509,1.24-0.64,2.967-0.64,4.703V93H36.104c0,0,0.26-52.58,0-58.028h19.294v8.225   c-0.039,0.062-0.09,0.128-0.127,0.188h0.127v-0.188c2.563-3.948,7.142-9.588,17.389-9.588C85.482,33.609,95,41.903,95,59.727    M15.919,7C9.318,7,5,11.33,5,17.024c0,5.57,4.193,10.031,10.663,10.031h0.129c6.729,0,10.914-4.46,10.914-10.031   C26.579,11.33,22.521,7,15.919,7 M6.146,93h19.289V34.972H6.146V93z"
                            />
                        </g>
                    </svg>
                </a>
            </div>
        </div>
    </div>
    <div class="slider-wrap">
        <div class="profile-slider">
            <p class="slider-title">[ Група FE#1_]</p>
            <div class="slider-stripe">
                <div class="slider-item">
                    <div class="item-img" style="background-image: url(img/users/johnbush.jpg)"></div>
                    <p class="item-name">Blabla BlaBlovich</p>
                    <p class="item-score">333</p>
                </div>
            </div>
        </div>
        <img class="arrowLeft arrow" src="img/left_arrow.gif" alt="">
        <img class="arrowRight arrow" src="img/right_arrow.gif" alt="">
    </div>
</div>
`
