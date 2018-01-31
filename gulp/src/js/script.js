
    let navBarIcon = document.getElementsByClassName('c-header__icon-nonclicked');
    let i;

    for (let i = 0; i < navBarIcon.length; i++) {
    	navBarIcon[i].addEventListener('click', function () {
            this.classList.toggle('c-header__icon-clicked');
            let tooltips = document.getElementsByClassName('c-header__tooltip');

            console.log(this);
            let notification = document.getElementsByClassName('c-notifications');
            //console.log(notification);
            let notifications = this.nextElementSibling;
            //console.log(this.nextElementSibling);
                 for (let i = 0; i < notifications.length; i++) {
                        notifications[i].style.display = 'none';
                    }
                    if (notifications.style.display === 'block') {
                        notifications.style.display = 'none';
                        //this.classList.remove('c-header__icon-clicked');
                        //this.classList.add('c-header__icon-nonclicked');
                        //this.classList.toggle('c-header__icon-clicked');
                    } else {
                        notifications.style.display = 'block';
                        tooltips[i].classList.add('c-header__tooltip-clicked');
                        //this.classList.remove('c-header__icon-nonclicked');
                        //this.classList.add('c-header__icon-clicked');
                        //this.classList.toggle('c-header__icon-clicked');

                    }
        });
        }
/*
    function displayNotifications() {
        let notifications = document.getElementsByClassName('c-notifications');
        for (let i = 0; i < notifications.length; i++) {
            notifications[i].style.display = 'block';
        }
        console.log(notifications[0]);
    }
*/
