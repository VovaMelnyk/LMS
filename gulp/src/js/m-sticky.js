let mStickyHeader = () => {

    function mSticky (folder,clock,sticky,stickys,btnUp,headerText,headerTextSm) {
      if (window.pageYOffset >= sticky) {
        if (folder) {
          folder.classList.add("m-sticky");
        }
        if (btnUp) {
          btnUp.classList.remove("invisible");
        }
        if (headerText) {
          headerText.classList.add("m-slall-text");
        }
        if (headerTextSm) {
          headerTextSm.classList.add("m-slall-text");
        }
      } if (window.pageYOffset >= stickys) {
        if (clock) {
          clock.classList.add("m-flex")
        }
      } else {
        if (folder) {
          folder.classList.remove("m-sticky");
        }
        if (clock) {
          clock.classList.remove("m-flex");
        }
        if (btnUp) {
          btnUp.classList.add("invisible");
        }
        if (headerText) {
          headerText.classList.remove("m-slall-text");
        }
        if (headerTextSm) {
          headerTextSm.classList.remove("m-slall-text");
        }
      }
    }
//window.onscroll = () => { myFunction(folder,clock,sticky,stickys,btnUp,headerText,headerTextSm) };
    function init() {
        const folder = document.querySelector('#m-title');
        const clock = document.querySelector('#m-timers');
        const sticky = folder.getBoundingClientRect().top + window.pageYOffset;
        const stickys = folder.getBoundingClientRect().top + window.pageYOffset;
        const btnUp = document.querySelector('#invBtnUp');
        const headerText = document.querySelector('.m-header__title');
        const headerTextSm = document.querySelector('.caption__theme');

          window.onscroll = () => {
            mSticky(folder,clock,sticky,stickys,btnUp,headerText,headerTextSm)
           };
    }

    const btnTheorRender = document.querySelector(".wrapper_theory");
        if (btnTheorRender) {
            init();
    }
}
