;(function(){

    function init() {
        const cross = document.querySelector('#cross');
        const endBtn = document.querySelector('#endBtn');
        const btnSave = document.querySelector('.m-btn-admin__save');
        const btnNonSave = document.querySelector('.m-btn-admin__nonsave');
        const btnCansel = document.querySelector('.m-btn-admin__cansel');
        const closerWindow = document.querySelector('.material-admin__closer-window');

            function closeAdminWindowShower() {
                closerWindow.classList.remove('hidden-block');
            };

            function closeAdminWindowHider() {
                closerWindow.classList.add('hidden-block');
            }
            cross.addEventListener("click", closeAdminWindowShower);
            endBtn.addEventListener("click", closeAdminWindowShower);
            btnSave.addEventListener("click", closeAdminWindowHider);
            btnNonSave.addEventListener("click", closeAdminWindowHider);
            btnCansel.addEventListener("click", closeAdminWindowHider);
    }
    const addThemeBtn = document.querySelector('#add-material');
    addThemeBtn.addEventListener('click', () => {
    setTimeout(init, 1000)});
    //document.addEventListener('DOMContentLoaded', init);
})();
