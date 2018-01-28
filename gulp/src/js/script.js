
    let navBarIcon = document.getElementsByClassName('c-header__icon-nonclicked');
    let i;

    for (let i = 0; i < navBarIcon.length; i++) {
    	navBarIcon[i].addEventListener('click', function () {
            console.log(this);
            let notification = document.getElementsByClassName('c-notifications');
            //console.log(notification);
            let notifications = this.nextElementSibling;
            //console.log(this.nextElementSibling);
                 //for (let i = 0; i < notifications.length; i++) {
                    if (notifications.style.display === 'block') {
                        notifications.style.display = 'none';
                        //this.classList.remove('c-header__icon-clicked');
                        this.classList.add('c-header__icon-nonclicked');
                        this.classList.toggle('c-header__icon-clicked');
                    } else {
                        notifications.style.display = 'block';
                        this.classList.remove('c-header__icon-nonclicked');
                        //this.classList.add('c-header__icon-clicked');
                        this.classList.toggle('c-header__icon-clicked');
                    }
            //}
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
