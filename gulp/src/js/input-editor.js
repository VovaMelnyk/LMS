(function () {

    function createTextarea (text) {
        const textarea = document.createElement('textarea');
        textarea.innerHTML = text;

        return textarea
    }

    function edit (event, element) {
        event.stopPropagation();
        const node = element.parentElement.parentElement.children[0];
        const title = node.innerHTML;
        
        node.innerHTML = '';
        node.appendChild( createTextarea(title) );
        node.children[0].focus()
    }

    function saveTitle (event, element) {
        event.stopPropagation();
        const node = element.parentElement.parentElement.children[0].children[0];
        const title = node.value;
        
        node.parentElement.innerHTML = title;
    }

    function deleteElement (event, element) {
        event.stopPropagation();
        const node = element.parentElement.parentElement;
        node.remove()

    }

    function closeInputs (event, inputsEditors) {
        event.stopPropagation();

        const each = [].forEach;

        each.call(inputsEditors, item => {
            item.setAttribute('disabled', 'disabled')
        })

    }

    function init () {
        const inputsEditors = document.getElementsByClassName('input-editor__edit');
        const inputDeleter = document.getElementsByClassName('input-editor__delete');
        const inputSaver = document.getElementsByClassName('input-editor__save');
        const paragraphInputItems = document.getElementsByClassName('input-editor__item');
        const mAdminInputs = document.getElementById('m-admin__inputs');
        const each = [].forEach;

        each.call(inputsEditors, item => {
            item.addEventListener( 'click', e => edit(e, item) )
        })
        each.call(inputDeleter, item => {
            item.addEventListener( 'click', e => deleteElement(e, item) )
        })
        each.call(inputSaver, item => {
            item.addEventListener( 'click', e => saveTitle(e, item) )
        })

        mAdminInputs.addEventListener('click', e => closeInputs(e, paragraphInputItems))

    }
    document.addEventListener('DOMContentLoaded', init)
})()