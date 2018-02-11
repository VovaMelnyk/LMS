(function () {
//const addThemeBtn = document.querySelector('#add-material');

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

    function addInputEditorEvents (inputsEditors, inputDeleter, inputSaver) {
        const each = [].forEach;

        each.call(inputsEditors, item => {
            item.onclick =  e => edit(e, item)
        })
        each.call(inputDeleter, item => {
            item.onclick =  e => deleteElement(e, item)
        })
        each.call(inputSaver, item => {
            item.onclick = e => saveTitle(e, item)
        })

    }

    function addNewArticle (node, parentNode, article) {
        const articleNode = article.cloneNode(true);
        articleNode.children[0].innerHTML = 'New Article';
        parentNode.insertBefore(articleNode, node)

    }

    function init () {
        const inputsEditors = document.getElementsByClassName('input-editor__edit');
        const inputDeleter = document.getElementsByClassName('input-editor__delete');
        const inputSaver = document.getElementsByClassName('input-editor__save');
        const paragraphInputItems = document.getElementsByClassName('input-editor__item');
        const addNew = document.getElementById('m-add-new');
        const mAdminInputs = document.getElementById('m-admin__inputs');

        const article = mAdminInputs.children[0].cloneNode(true);
        const each = [].forEach;

        addInputEditorEvents(inputsEditors, inputDeleter, inputSaver)

        addNew.addEventListener('click', e => {
            addNewArticle(addNew, mAdminInputs, article)
            addInputEditorEvents(inputsEditors, inputDeleter, inputSaver)
        })

    }

    if ( document.getElementById('m-admin__inputs') ) {
        document.querySelector('#add-material').addEventListener('click', init)
    }
})()
