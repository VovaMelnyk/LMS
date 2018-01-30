document.querySelector('.a-entrance [name=button]').addEventListener('click', function() {
    var email = document.querySelector('#email').value;
    var pass = document.querySelector('#pass').value;
    axios('http://localhost:3000/users?email=johnbush@mail.com')
    .then(function(data) {
        console.log(data.data);
        localStorage.setItem('lms_name', data.data[0].name);
        localStorage.setItem('lms_email', data.data[0].email);
        localStorage.setItem('lms_img', data.data[0].img);
        localStorage.setItem('lms_hash', data.data[0].hash);
        document.cookie = "name=vlad; path=/";
    });
    window.location
});