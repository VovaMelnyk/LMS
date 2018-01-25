;(function(){

    function init() {
        const rightNav = document.querySelector('.right-nav'),
            textToHideLeftContent = document.querySelectorAll('.m-left-nav__text'),
            blockLinkLeftCont = document.querySelectorAll('.m-left-nav__link'),
            contentBlockLeft = document.querySelector('.m-left-nav'),
            btnUpContent = document.querySelector('.m-btn-up');
            
        document.addEventListener('scroll', (e) => {
            if(e.path[1].scrollY > 228) {
                rightNav.classList.add('right-nav-fixed');
                contentBlockLeft.classList.add('m-left-nav-fixed');
                btnUpContent.classList.remove('invisible');
                textToHideLeftContent.forEach(function (elem){
                    elem.classList.add('invisible');
                });
                blockLinkLeftCont.forEach(function (elem){
                    elem.classList.add('m-left-nav__link-fixed');
                });
            }
            if (e.path[1].scrollY < 228) {
                rightNav.classList.remove('right-nav-fixed');
                contentBlockLeft.classList.remove('m-left-nav-fixed');
                btnUpContent.classList.add('invisible');
                textToHideLeftContent.forEach(function (elem){
                    elem.classList.remove('invisible');
                });
                blockLinkLeftCont.forEach(function (elem){
                    elem.classList.remove('m-left-nav__link-fixed');
                });
            };
        })
    }
    document.addEventListener('DOMContentLoaded', init)
})();
