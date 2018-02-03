;(function(){

    function init() {
        const cross = document.querySelector('#cross');
        const btnSave = document.querySelector('.m-btn-admin__save');
        const closerWindow = document.querySelector('.material-admin__closer-window');

            function closeAdminWindowShower() {
                closerWindow.classList.remove('hidden-block');
                alert("dsd");
            };

            function closeAdminWindowHider() {
                closerWindow.classList.add('hidden-block');
            }
            cross.addEventListener("click", closeAdminWindowShower);
            btnSave.addEventListener("click", closeAdminWindowHider);
    }
    document.addEventListener('DOMContentLoaded', init);
})();
