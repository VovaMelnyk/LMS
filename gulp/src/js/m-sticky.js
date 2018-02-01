window.onscroll = () => {myFunction()};

let folder = document.querySelector('#m-title');
let clock = document.querySelector('#m-timers')
let sticky = folder.getBoundingClientRect().top + window.pageYOffset;
let stickys = folder.getBoundingClientRect().top + window.pageYOffset;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    folder.classList.add("m-sticky")
  } if (window.pageYOffset >= stickys) {
        clock.classList.add("m-flex") 
  } else {
    folder.classList.remove("m-sticky");
    clock.classList.remove("m-flex");
  }
}