(function () {
    function findInput (node) {

    }
    function edit (element) {
        element.parentElement.parentElement.children[0].removeAttribute('disabled')
    }

    function init () {
        const inputsEditors = document.getElementsByClassName('input-editor__edit');
        
        const each = [].forEach;
        each.call(inputsEditors, item => {
            item.addEventListener( 'click', () => edit(item) )
        })

    }
    document.addEventListener('DOMContentLoaded', init)
})()