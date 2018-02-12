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

    const btnTheoryRender = document.querySelectorAll("li[data='theory']");
        if (btnTheoryRender) {
            btnTheoryRender.forEach(elem => {
                elem.addEventListener('click', () => {
                setTimeout(init, 1000)
                })
            })
        };

})(document);
