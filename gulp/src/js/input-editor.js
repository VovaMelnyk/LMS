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

    function isClassNamePresent (element, className) {
        return (element.getAttribute('class') == className)
    }

    function findElementByClassName (parent, className) {
        const each = [].forEach;
        
        if ( !isClassNamePresent(parent, className) ) return each.call(parent.children, item => {
            findElementByClassName(item, className)
        })
        console.log(parent)
        return parent

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

    function addNewArticle (node, parentNode) {
        const article = parentNode.children[0].cloneNode(true);
        article.children[0].innerHTML = 'New Article';
        parentNode.insertBefore(article, node)

    }

    function init () {
        const inputsEditors = document.getElementsByClassName('input-editor__edit');
        const inputDeleter = document.getElementsByClassName('input-editor__delete');
        const inputSaver = document.getElementsByClassName('input-editor__save');
        const paragraphInputItems = document.getElementsByClassName('input-editor__item');
        const addNew = document.getElementById('m-add-new');
        const mAdminInputs = document.getElementById('m-admin__inputs');
        const each = [].forEach;

        addInputEditorEvents(inputsEditors, inputDeleter, inputSaver)

        addNew.addEventListener('click', e => {
            addNewArticle(addNew, mAdminInputs)
            addInputEditorEvents(inputsEditors, inputDeleter, inputSaver)
        })

    }
    document.addEventListener('DOMContentLoaded', init)
})()