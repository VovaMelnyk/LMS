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


axios('http://localhost:3000/users')
        .then(function (data) {
        	console.log(data.data)
        	var members = data.data;
        	var strip = '';
        	var stripLength = 0;
        	var memberLength = parseInt(getComputedStyle(document.getElementsByClassName('ChP_grup-strip-member')[0]).width);
        	
        	for(var i=0; i<members.length; i++){
        		if(members[i].group == "FrontEnd_1"){
        			strip+=`<div class="ChP_grup-strip-member">
                    <div class="ChP_grup-strip-member-imgDiv" style="background-image: url(img/users/${members[i].img})"></div>
                    <p class="ChP_grup-strip-member-name">${members[i].name} ${members[i].latName}</p>
                    <p class="ChP_grup-strip-member-bal">${members[i].grade}</p>
                </div>`

                document.getElementsByClassName('ChP_grup-strip')[0].innerHTML = strip;
                
                stripLength+=memberLength

        		}

        		document.getElementsByClassName('ChP_grup-strip')[0].style.width=stripLength+'px';
			}
            document.getElementsByClassName('arrowLeft')[0].onclick = turnLeft;
            document.getElementsByClassName('arrowRight')[0].onclick = turnRight;

            var some = 0; 

            function turnLeft(){
                some += 253;
                if(some<=0){
                document.getElementsByClassName('ChP_grup-strip')[0].style.left=some+'px';}
                else{
                    some=0
                }
            }
            function turnRight(){
                some += -253 
                if(some>=-(members.length*253-1265)){
                document.getElementsByClassName('ChP_grup-strip')[0].style.left=some+'px';}
                else{
                    some=-(members.length*253-1265);
                }
            }
        });