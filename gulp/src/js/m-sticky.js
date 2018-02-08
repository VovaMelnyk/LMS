

let folder = document.querySelector('#m-title');
let clock = document.querySelector('#m-timers');
let sticky = folder.getBoundingClientRect().top + window.pageYOffset;
let stickys = folder.getBoundingClientRect().top + window.pageYOffset;
let btnUp = document.querySelector('#invBtnUp');
let headerText = document.querySelector('.m-header__title');
let headerTextSm = document.querySelector('.caption__theme');

function myFunction() {
  if (window.pageYOffset >= sticky) {
    folder.classList.add("m-sticky");
    btnUp.classList.remove("invisible");
    headerText.classList.add("m-slall-text");
    headerTextSm.classList.add("m-slall-text");
  } if (window.pageYOffset >= stickys) {
    clock.classList.add("m-flex")
  } else {
    folder.classList.remove("m-sticky");
    clock.classList.remove("m-flex");
    btnUp.classList.add("invisible");
    headerText.classList.remove("m-slall-text");
    headerTextSm.classList.remove("m-slall-text");
  }
}
window.onscroll = () => { myFunction() };