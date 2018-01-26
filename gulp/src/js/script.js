
    let navBarIcon = document.getElementsByClassName('c-header__icon');

    for (let i = 0; i < navBarIcon.length; i++) {
    	navBarIcon[i].onclick = displayNotifications;
    }

    function displayNotifications() {
        let notifications = document.getElementsByClassName('c-notifications');
        for (let i = 0; i < notifications.length; i++) {
            notifications[i].style.display = 'block';
        }
        console.log(notifications[0]);
    }
