let btnGoToCreateTest = document.querySelector("#main-create-test"),
	  btnGoToShowTests = document.querySelector("#main-show-tests");


let testWrapper = document.querySelector("#constructor-test-wrapper");


const basicUrl = 'http://localhost:3000/tests/';
// const basicUrl = 'http://localhost:3000/course/';

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

const compiledCreateTestPage = _.template(document.querySelector("#constructor-test-create-test-page").textContent.trim());

const goToCreateTestPage = test => {
	let htmlString = "";

	htmlString = compiledCreateTestPage(test);

	testWrapper.innerHTML = htmlString;

	btnAddTest = document.querySelector("#btnAddTest");
	btnAddTest.addEventListener("click", AddTest);
	// backToCreateTestMenu();
};


const goToAddTest = () => {

	fetch(basicUrl)
	.then(status)
	.then(json)
	.then(data => {
		goToCreateTestPage(data);
		backToCreateTestMenu();
	})
	.catch(error => {
		console.log('Fetch Error :-S', error);
	});


};

btnGoToCreateTest.addEventListener("click", goToAddTest);


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


// --------------------------------------------------------------

const compiledChangeTestPage = _.template(document.querySelector("#constructor-test-change-test-page").textContent.trim());

const goToChangeTestPage = tests => {
	let htmlString = "";

	htmlString = compiledChangeTestPage(tests);

	testWrapper.innerHTML = htmlString;

};


const goToUpdateTest = () => {

	fetch(basicUrl)
	.then(status)
	.then(json)
	.then(data => {
		goToChangeTestPage(data);
		backToCreateTestMenu();
	})
	.catch(error => {
		console.log('Fetch Error :-S', error);
	});

	getTests();

};

btnGoToShowTests.addEventListener("click", goToUpdateTest);


const sampleGetTests = tests => {
	const compiledChangeTestForm = _.template(document.querySelector("#constructor-test-change-test-input").textContent.trim());


	let htmlString = "";

	tests.forEach(test => {
	htmlString += compiledChangeTestForm(test);
	});

	const testForm = document.querySelector("#change-form-module__former");

	testForm.innerHTML = htmlString;

};


const getTests = () => {
	fetch(basicUrl)
	.then(status)
	.then(json)
	.then(data => {
		sampleGetTests(data);
		updateFunction();
		removeFunction();
	})
	.catch(error => {
		console.log('Fetch Error :-S', error);
	});

};

// --------------------------------------------------------------

const updateTest = function ()  {

	let btnId = this.id;

	let endId = btnId.split('_')[1];

	let updateUrl = `${basicUrl}${endId}`;

	let changedQuestion = document.querySelectorAll(`.change-test-form__answer_${endId}`);
	let changedQuestionRadio = document.querySelectorAll(`.change-test-form__radio_${endId}`);
	let chosenAnswer;
	for (let i=0; i<4; i++) {
		changedQuestionRadio[i].value = changedQuestion[i].value;
		if (changedQuestionRadio[i].checked) {
			chosenAnswer = changedQuestionRadio[i].value;
		}
	}

	console.log(chosenAnswer);

	fetch(updateUrl, {
	    method: 'PUT',
	    body: JSON.stringify({
			title: `${document.querySelector(`#changeTestName_${endId}`).value}`,
			answer1: `${document.querySelector(`#changeQuestion1_${endId}`).value}`,
			answer2: `${document.querySelector(`#changeQuestion2_${endId}`).value}`,
			answer3: `${document.querySelector(`#changeQuestion3_${endId}`).value}`,
			answer4: `${document.querySelector(`#changeQuestion4_${endId}`).value}`,
			correctAnswer: `${chosenAnswer}`
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



const updateFunction = () => {
	const btnUpdateTest = document.querySelectorAll(".btnUpdateTest");
	for (let i=0; i<btnUpdateTest.length; i++) {
		btnUpdateTest[i].addEventListener("click", updateTest);
		btnUpdateTest[i].addEventListener("click", goToUpdateTest);
	}
};

// --------------------------------------------------------------

const removeTest = function () {

	let btnId = this.id;

	let endId = btnId.split('_')[1];

	let removeUrl = `${basicUrl}${endId}`;

	fetch(removeUrl, {
	  method: 'DELETE'
	});
	document.querySelector("#removeTest").reset();	

};


const removeFunction = () => {
	const btnRemoveTest = document.querySelectorAll(".btnRemoveTest");
	for (let i=0; i<btnRemoveTest.length; i++) {
		btnRemoveTest[i].addEventListener("click", removeTest);
		btnRemoveTest[i].addEventListener("click", goToUpdateTest);
	}
};

// --------------------------------------------------------------

const setCorrectAnswer = function () {
	let allQuestions = document.querySelectorAll(".create-test-form__answer");
	let allQuestionsRadio = document.querySelectorAll(".create-test-form__radio");
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

const changeCorrectAnswer = function () {
	let changedQuestion = document.querySelectorAll(`.change-test-form__answer_${endId}`);
	let changedQuestionRadio = document.querySelectorAll(`.change-test-form__radio_${endId}`);
	let chosenAnswer;
	for (let i=0; i<4; i++) {
		changedQuestionRadio[i].value = changedQuestion[i].value;
		if (changedQuestionRadio[i].checked) {
			chosenAnswer = changedQuestionRadio[i].value;
		}
	}
	return chosenAnswer;
};

// --------------------------------------------------------------

const backToCreateTestMenu = function () {
	const btnBackToCreateTestMenu = document.querySelectorAll(".create-test-caption");
	for (let i=0; i<btnBackToCreateTestMenu.length; i++) {
		btnBackToCreateTestMenu[i].addEventListener("click", functionBackToCreateTestMenu);
	}
};

const functionBackToCreateTestMenu = function () {

	let testWrapper = document.querySelector("#constructor-test-wrapper");

	testWrapper.innerHTML = `<div id="main-create-test" class="main-test-cosruct">Создать тест <img class="main-test-cosruct__arrow"src="img/right_arrow.gif" alt="right_arrow"></div>

	<div id="main-show-tests" class="main-test-cosruct">Посмотреть все тесты <img class="main-test-cosruct__arrow" src="img/right_arrow.gif" alt="right_arrow"></div>`;

	let btnGoToCreateTest = document.querySelector("#main-create-test");
	let btnGoToShowTests = document.querySelector("#main-show-tests");

	btnGoToCreateTest.addEventListener("click", goToAddTest);

	btnGoToShowTests.addEventListener("click", goToUpdateTest);
};


// --------------------------------------------------------------



// ПОДСКАЗКИ



 // http://localhost:3000/tests/1 

 // $ json-server --watch full.json 
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