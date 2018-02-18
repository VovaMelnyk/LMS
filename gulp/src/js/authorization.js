// if (
//     localStorage.getItem('lms_name') &&
//     localStorage.getItem('lms_lastName') &&
//     localStorage.getItem('lms_email') &&
//     localStorage.getItem('lms_img') &&
//     localStorage.getItem('lms_pass') &&
//     localStorage.getItem('lms_group')
//     ) {
//     window.location = 'http://localhost:3000/profile.html';
// }
//
// document.querySelector('#gotoprofile').addEventListener('click', function () {
//     event.preventDefault();
//     var email = document.querySelector('#email').value;
//     var pass = document.querySelector('#pass').value;
//     axios('http://localhost:3000/users?email=' + email + '&pass' + pass)
//         .then(function (data) {
//
//             if (!data.data.length) {
//                 document.querySelector('.a-entrance__error').style.visibility = 'visible';
//                 return;
//             }
//             else {
//                 if (data.data[0].email === email &&
//                     data.data[0].pass === pass) {
//                     localStorage.setItem('lms_name', data.data[0].name);
//                     localStorage.setItem('lms_lastName', data.data[0].lastName);
//                     localStorage.setItem('lms_email', data.data[0].email);
//                     localStorage.setItem('lms_img', data.data[0].img);
//                     localStorage.setItem('lms_pass', data.data[0].pass);
//                     localStorage.setItem('lms_group', data.data[0].group);
//                     localStorage.setItem('lms_facebook', data.data[0].facebook);
//                     localStorage.setItem('lms_google', data.data[0].google);
//                     localStorage.setItem('lms_linkedin', data.data[0].linkedin);
//                     localStorage.setItem('lms_profile', data.data[0].public);
//
//                     window.location = 'http://localhost:9000/';
//                     // window.location = 'http://localhost:3000/profile.html';
//                 }
//                 else {
//                     document.querySelector('.a-entrance__error').style.visibility = 'visible';
//                     return;
//                 }
//             }
//         });
// });
