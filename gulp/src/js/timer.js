
// function timer () {
// 	var minutes = document.getElementsByClassName('t-timer__minutes')[0].innerHTML;
// 	var seconds = document.getElementsByClassName('t-timer__seconds')[0].innerHTML;
// 	var end = false;
// 	if (seconds>0) seconds--;
// 	else {
// 		seconds = 59;
// 		if(minutes>0) minutes--;
// 		else {
// 			end=true;
// 		}
// 	}

// 	if (seconds<10) {
// 		seconds='0' + seconds;
// 	}
	

// 	if(end) {
// 		clearInterval (intervalID);
// 		console.log ('время и стекло')
// 	}
// 	else {

// 	// document.getElementById('day').innerHTML=day;
	
// 	document.getElementsByClassName('t-timer__minutes')[0].innerHTML=minutes;
// 	document.getElementsByClassName('t-timer__seconds')[0].innerHTML=seconds;
// 	}

// window.intervalID = setInterval (timer, 1000);



// document.getElementById('start_test')timer();