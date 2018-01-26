let photoProfile = document.getElementsByClassName('c-header__photo-profile');
let notifications = document.getElementsByClassName('c-photo-profile__notifications');

photoProfile.addEventListener("click", function(){
	notifications[0].style.display = "block";
});
