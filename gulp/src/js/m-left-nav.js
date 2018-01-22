function hideLeftContentMenu() {
  let pageY = window.pageYOffset || document.documentElement.scrollTop;
  let  innerHeight = document.documentElement.clientHeight;
  let textToHide = document.querySelectorAll('.m-left-nav__text');
      // if (pageY > 300) {
      //   textToHide.forEach(function (elem){
      //       elem.classList.add('invisible');
      //   }
      // }
      if (pageY > 300) {
      console.log (pageY);
      console.log(textToHide);
      textToHide.forEach(function (elem){
        elem.classList.add('invisible');
        });
      }

  }
document.addEventListener('scroll', ()=>hideLeftContentMenu());
