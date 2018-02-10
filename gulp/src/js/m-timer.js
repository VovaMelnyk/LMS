;(function (document){

    const time = document.getElementById('m-timer');

    let hour = 0;
    let second = 0;
    let minute = 26;
    let timerInterval;


    function timer(time){

        let end = false;

        if ( second > 0 ) second--;
        else {
            second = 60;

            if ( minute > 0 ) {
                minute--;
                time.innerHTML = `${minute} мин`;
            } else {
                second = 60;

                if ( hour > 0 ) hour--;
                else end = true;
            }
        }
        if (end) {
            clearInterval(timerInterval)
            alert("Время вышло!");
        }
    }

    function timerStart() {
        const time = document.getElementById('m-timer');
        timerInterval = setInterval( () => timer(time), 1000);
    }

    function timerStop() {
        clearInterval(timerInterval);
    }

    function init(){

        (!document.hidden) ? timerStart()
            : timerStop()
            
    }

    if (time) document.addEventListener("DOMContentLoaded", ()=>{
        init()
        document.addEventListener("visibilitychange", init);
    });
    
    if (document.getElementsByClassName('m-btn-test') ) {
        document.getElementsByClassName('m-btn-test')[0].addEventListener('click', () => {
            setTimeout(() => {
                clearInterval(timerInterval);
                minute = 26
                init()
            }, 1000)
        })
    }

})(document);
