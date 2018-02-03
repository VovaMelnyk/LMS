const btnGetTest = document.querySelector("#btnGetTest"),
	  btnAddTest = document.querySelector("#btnAddTest"),
	  btnRemoveTest = document.querySelector("#btnRemoveTest"),
	  btnUpdateTest = document.querySelector("#btnUpdateTest");

const testTable = document.querySelector("#testTable");

// --------------------------------------------------------------

const testSimple = document.querySelector("#testSimple").textContent.trim();
const compiled = _.template(testSimple);

const basicUrl = 'http://localhost:3000/tests/';

const updateView = tests => {
  let htmlString = "";

  tests.forEach(test => {
    htmlString += compiled(test);
  });

  testTable.innerHTML = htmlString;
};

// --------------------------------------------------------------
const singleUpdateView = test => {
  let htmlString = "";

  htmlString = compiled(test);

  testTable.innerHTML = htmlString;
};

// --------------------------------------------------------------

function status(response) {
	if (response.status >= 200 && response.status < 300) {
		return Promise.resolve(response)
	} else {
		return Promise.reject(new Error(response.statusText))
	}
}

function json(response) {
	return response.json()
}

// --------------------------------------------------------------

const getTests = () => 
	fetch(basicUrl)
	.then(status)
	.then(json)
	.then(data => {
		updateView(data);
	})
	.catch(error => {
		console.log('Fetch Error :-S', error);
	});



btnGetTest.addEventListener("click", getTests);

// --------------------------------------------------------------

const btnSingleTest = document.querySelector("#btnSingleTest");

const getSingleTest = () => {
	let singleTestUrl = `${basicUrl}${document.querySelector("#showSingletest").value}`;
	fetch(singleTestUrl)
	.then(status)
	.then(json)
	.then(data => {
		singleUpdateView(data);
	})
	.catch(error => {
		console.log('Fetch Error :-S', error);
		testTable.innerHTML = `Fetch Error : ${error}`;
	});
	document.querySelector("#singleTest").reset();

};

btnSingleTest.addEventListener("click", getSingleTest);

// --------------------------------------------------------------

const AddTest = () => {

	let addUrl = `${basicUrl}`;
	fetch(addUrl, {
	    method: 'POST',
	    body: JSON.stringify({
	      title: `${document.querySelector("#testName").value}`,
	      answer1: `${document.querySelector("#question1").value}`,
	      answer2: `${document.querySelector("#question2").value}`,
	      answer3: `${document.querySelector("#question3").value}`,
	      answer4: `${document.querySelector("#question4").value}`,
	      correctAnswer: `${setCorrectAnswer()}`
	    }),
	    headers: {
	      "Content-type": "application/json; charset=UTF-8"
	    }
	})
	.catch(error => {
		console.log('Fetch Error :-S', error);
	});
	document.querySelector("#addTest").reset();	

};

btnAddTest.addEventListener("click", AddTest);
// btnAddTest.addEventListener("click", getTests);

// --------------------------------------------------------------

const updateTest = () => {

	let updateUrl = `${basicUrl}${document.querySelector("#changeTestId").value}`;
	fetch(updateUrl, {
	    method: 'PUT',
	    body: JSON.stringify({
			title: `${document.querySelector("#changeTestName").value}`,
			answer1: `${document.querySelector("#changeQuestion1").value}`,
			answer2: `${document.querySelector("#changeQuestion2").value}`,
			answer3: `${document.querySelector("#changeQuestion3").value}`,
			answer4: `${document.querySelector("#changeQuestion4").value}`,
			correctAnswer: `${changeCorrectAnswer()}`
	    }),
	    headers: {
	      "Content-type": "application/json; charset=UTF-8"
	    }
	 })
	.catch(error => {
		console.log('Fetch Error :-S', error);
	});
	document.querySelector("#updateTest").reset();	

};

btnUpdateTest.addEventListener("click", updateTest);
// btnUpdateTest.addEventListener("click", getTests);

// --------------------------------------------------------------

const removeTest = () => {

	let removeUrl = `${basicUrl}${document.querySelector("#removeTestId").value}`;
	fetch(removeUrl, {
	  method: 'DELETE'
	});
	document.querySelector("#removeTest").reset();	

};

btnRemoveTest.addEventListener("click", removeTest);
// btnRemoveTest.addEventListener("click", getTests);

// --------------------------------------------------------------

const setCorrectAnswer = () => {
	let allQuestions = document.querySelectorAll(".question");
	let allQuestionsRadio = document.querySelectorAll(".questionRadio");
	let chosenAnswer;
	for (let i=0; i<4; i++) {
		allQuestionsRadio[i].value = allQuestions[i].value;
		if (allQuestionsRadio[i].checked) {
			chosenAnswer = allQuestionsRadio[i].value;
		}
	}
	return chosenAnswer;
};

// --------------------------------------------------------------

const changeCorrectAnswer = () => {
	let changedQuestion = document.querySelectorAll(".changedQuestion");
	let changeQuestionRadio = document.querySelectorAll(".changeQuestionRadio");
	let chosenAnswer;
	for (let i=0; i<4; i++) {
		changeQuestionRadio[i].value = changedQuestion[i].value;
		if (changeQuestionRadio[i].checked) {
			chosenAnswer = changeQuestionRadio[i].value;
		}
	}
	return chosenAnswer;
};


// ПОДСКАЗКИ



 // http://localhost:3000/tests/1 

 // $ json-server --watch db.json 

 // Common Code for all fetch calls

//  function status(response) {
//   if (response.status >= 200 && response.status < 300) {
//     return Promise.resolve(response)
//   } else {
//     return Promise.reject(new Error(response.statusText))
//   }
// }

// function json(response) {
//   return response.json()
// }


 // Showing a resource

 // fetch('https://jsonplaceholder.typicode.com/posts/1')
	//   .then(status)
	//   .then(json)
	//   .then(function(data) {
	//     console.log(data);
	//   })
	//   .catch(function(error) {
	//     console.log('Fetch Error :-S', error);
	//   });

  // Creating a resource

  // fetch('https://jsonplaceholder.typicode.com/posts', {
	 //    method: 'POST',
	 //    body: JSON.stringify({
	 //      title: 'foo',
	 //      body: 'bar',
	 //      userId: 1
	 //    }),
	 //    headers: {
	 //      "Content-type": "application/json; charset=UTF-8"
	 //    }
	 //  })
	 //  .then(json)
	 //  .then(function(data) {
	 //    console.log(data);
	 //  })
	 //  .catch(function(error) {
	 //    console.log('Fetch Error :-S', error);
	 //  });

  // Updating a resource

  // fetch('https://jsonplaceholder.typicode.com/posts/1', {
	 //    method: 'PUT',
	 //    body: JSON.stringify({
	 //      id: 1,
	 //      title: 'foo',
	 //      body: 'bar',
	 //      userId: 1
	 //    }),
	 //    headers: {
	 //      "Content-type": "application/json; charset=UTF-8"
	 //    }
	 //  })
	 //  .then(json)
	 //  .then(function(data) {
	 //    console.log(data);
	 //  })
	 //  .catch(function(error) {
	 //    console.log('Fetch Error :-S', error);
	 //  });

  // Deleting a resource

 //  fetch('https://jsonplaceholder.typicode.com/posts/1', {
	//   method: 'DELETE'
	// });

  // Filtering resources

  // fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
	 //  .then(status)
	 //  .then(json)
	 //  .then(function(data) {
	 //    console.log(data);
	 //  })
	 //  .catch(function(error) {
	 //    console.log('Fetch Error :-S', error);
	 //  });