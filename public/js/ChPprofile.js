axios('http://localhost:3000/users')
        .then(function (data) {
        	console.log(data.data)
        });