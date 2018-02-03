if (
    localStorage.getItem('lms_name') &&
    localStorage.getItem('lms_email') &&
    localStorage.getItem('lms_img') &&
    localStorage.getItem('lms_pass') &&
    localStorage.getItem('lms_group')
    ) {
    window.location = 'http://localhost:3000/profile.html';
}

document.querySelector('#gotoprofile').addEventListener('click', function () {
    var email = document.querySelector('#email').value;
    var pass = document.querySelector('#pass').value;
    axios('http://localhost:3000/users?email=' + email + '&pass' + pass)
        .then(function (data) {

            if (!data.data[0]) {
                window.location = 'http://localhost:3000/index.html';
                return;
            }
            var name, email, img, hash;
            localStorage.setItem('lms_name', data.data[0].name);
            localStorage.setItem('lms_email', data.data[0].email);
            localStorage.setItem('lms_img', data.data[0].img);
            localStorage.setItem('lms_pass', data.data[0].pass);
            localStorage.setItem('lms_group', data.data[0].group);
        });
});