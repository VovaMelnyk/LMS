
    var img = localStorage.getItem('lms_img');
    var name = localStorage.getItem('lms_name');
    var email = localStorage.getItem('lms_email');

    console.log('img/' + img);

    document.querySelector('#profile_photo').setAttribute('src', 'img/' + img);
    document.querySelector('#header_photo-profile').setAttribute('src', 'img/' + img);
    document.querySelector('#user-name').innerHTML = name + '&#8194;';
    document.querySelector('#user-email').innerHTML = email;

    console.dir(document.querySelector('#profile_photo'));
