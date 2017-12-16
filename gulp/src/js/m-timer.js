(function (document){
    let time = document.getElementById('m-timer'),
        hour = 0,
        second = 0,
        minute = 26,
        timerInterval;

    function timer(){
        let end = false;
        if( second > 0 ) second--;
        else{
            second = 60;

            if( minute > 0 ) {
                minute--;
                time.innerHTML = `${minute} мин`;
            } else{
                second = 60;

                if( hour > 0 ) hour--;
                else end = true;
            }
        }
        if(end){
            clearInterval(timerInterval)
            alert("Время вышло!");
        }
    }

    function timerStart() {
        timerInterval = setInterval(timer, 1000)
    }
    function timerStop() {
        clearInterval(timerInterval)
    }

    function init(){
        (!document.hidden) ? timerStart()
        : timerStop()
    }
    document.addEventListener("DOMContentLoaded", ()=>{
        if (time) {
            init()
            document.addEventListener("visibilitychange", init);
        }
    });
})(document);
