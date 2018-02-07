document.querySelector('.c-header-photo-profile__photo').onclick = ()=>{
	let formLogin = document.querySelector('.c-header-photo-profile__form-login');
	if(formLogin.style.display == 'none'){
        formLogin.style.display = 'block';
    } else {
		formLogin.style.display = 'none';
    }
};
