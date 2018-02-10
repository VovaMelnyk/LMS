;(function(){

    function init() {
        const cross = document.querySelector('#cross');
        const btnEnd = document.querySelector('#end');
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
            btnEnd.addEventListener("click", closeAdminWindowShower);
            cross.addEventListener("click", closeAdminWindowShower);
            btnSave.addEventListener("click", closeAdminWindowHider);
            btnNonSave.addEventListener("click", closeAdminWindowHider);
            btnCansel.addEventListener("click", closeAdminWindowHider);
    }
    document.addEventListener('DOMContentLoaded', init);
})();
