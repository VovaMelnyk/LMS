document.querySelector('#gotoprofile').addEventListener('click', function () {
    var email = document.querySelector('#email').value;
    var pass = document.querySelector('#pass').value;
    axios('http://localhost:3000/users?email=' + email)
        .then(function (data) {

            if (!data.data[0]) {
                window.location = 'http://localhost:3000/index.html';
                return;
            }
            var name, email, img, hash;
            localStorage.setItem('lms_name', data.data[0].name);
            localStorage.setItem('lms_email', data.data[0].email);
            localStorage.setItem('lms_img', data.data[0].img);
            localStorage.setItem('lms_hash', data.data[0].hash);
        });
});