
    let navBarIcon = document.getElementsByClassName('c-header__icon-nonclicked');
    let i;

    for (let i = 0; i < navBarIcon.length; i++) {
    	navBarIcon[i].addEventListener('click', function () {
            //this.classList.toggle('c-header__icon-clicked');
            let notification = this.nextElementSibling;

            let tooltips = document.getElementsByClassName('c-header__tooltip');
            console.log(this);
            console.log(notification);

            let notifications = document.getElementsByClassName('c-notifications');
            console.log(notifications);

            if (notification.style.display === 'block') {
                notification.style.display = 'none';
                this.classList.remove('c-header__icon-clicked');
            }
            else {
                for (let i = 0; i < notifications.length; i++) {
                     notifications[i].style.display = 'none';
                     navBarIcon[i].classList.remove('c-header__icon-clicked');

                }
                notification.style.display = 'block';
                this.classList.add('c-header__icon-clicked');

                tooltips[i].classList.add('c-header__tooltip-clicked');
            }

        });
    }
