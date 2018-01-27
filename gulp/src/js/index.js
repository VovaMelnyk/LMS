// http://localhost:3000/users?email=sebastian@codingthesmartway.com&hash=b4af804009cb036a4ccdc33431ef9ac9


document.querySelector('#enter-button').addEventListener('click', function() {
    var email = document.querySelector('#email').value;
    var pass = document.querySelector('#pass').value;  

    if (email && pass) {        
        axios('http://localhost:3000/users', {
            params: {
                "email": email,
                "hash": pass
            }
        })
        .then(function(data) {
            document.cookie = `
            email=${data.data.email}; 
            hash=${data.data.hash}; 
            userpick=${data.data.userpick}; 
            path=/`;
        })
    }
});