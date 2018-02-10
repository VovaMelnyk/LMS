let formLogin = document.querySelector('.c-header-photo-profile__form-profile');
let photo = document.querySelector('.c-header-photo-profile__photo');
let close = document.querySelector('.c-header-photo-profile__form-profile-close');
photo.onclick = ()=>{
	formLogin.style.display = 'block';
	close.onclick = ()=>{
		formLogin.style.display = 'none'
	};
	
};