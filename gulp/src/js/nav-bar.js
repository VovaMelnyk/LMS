
let navBarIcon = document.querySelectorAll('.c-header__icon-nonclicked');

let submenuItem = document.querySelector('.c-accordion-menu__submenu-item');
//console.log(submenuItem);
for (let i = 0; i < submenuItem.length; i++) {
	submenuItem[i].addEventListener('click', function () {
    this.classList.toggle('rotated');
    //console.log(this);
    });
}

for (let i = 0; i < navBarIcon.length; i++) {
	navBarIcon[i].addEventListener('click', function () {
        let notification = this.nextElementSibling;
        let notificationCollection = document.querySelectorAll('.c-notifications-hidden');
        let tooltips = document.getElementsByClassName('c-header__tooltip');
        console.log(this);
        console.log(notification);
        //console.log(notificationCollection);

        if (notification.style.display === 'block') {
            notification.style.display = 'none';
            this.classList.remove('c-header__icon-clicked');
        }
        else {
            for (let i = 0; i < notificationCollection.length; i++) {
                notificationCollection[i].style.display = 'none';
                navBarIcon[i].classList.remove('c-header__icon-clicked');
            }
            notification.style.display = 'block';
            this.classList.add('c-header__icon-clicked');
            tooltips[i].classList.add('c-header__tooltip-clicked');
            }
        });
}

let formProfile = document.querySelector('.c-header__form-profile');
let photoProfile = document.querySelector('.c-header__photo-profile_photo');
let closeForm = document.querySelector('.c-header__form-profile_close');

photoProfile.onclick = () => {
	formProfile.classList.remove('c-header__form-profile_hidden');
}
closeForm.onclick = () => {
	formProfile.classList.add('c-header__form-profile_hidden');
}

