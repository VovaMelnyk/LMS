function hideLeftContentMenu() {
  let pageY = window.pageYOffset || document.documentElement.scrollTop;
  let  innerHeight = document.documentElement.clientHeight;
  let textToHide = document.querySelectorAll('.m-left-nav__text');
  let contentBlock = document.querySelector('.m-left-nav');

     if (pageY > 300) {
        textToHide.forEach(function (elem){
            elem.classList.add('invisible');
        });
    contentBlock.classList.add('width');
    }else if (pageY < 300) {
        textToHide.forEach(function (elem){
            elem.classList.remove('invisible');
        });
        contentBlock.classList.remove('width');
    }
  }
document.addEventListener('scroll', ()=>hideLeftContentMenu());
