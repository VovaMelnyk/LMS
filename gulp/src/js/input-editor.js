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

    function addEvents (node) {
        let edit = findElementByClassName(node, 'input-editor__edit');
        const delet = findElementByClassName(node, 'input-editor__delete');
        const save = findElementByClassName(node, 'input-editor__save');
        setTimeout(()=>console.log(edit, delet, save), 1000)
    }

    function addNewArticle (node, parentNode) {
        const article = parentNode.children[0].cloneNode(true);
        article.children[0].innerHTML = 'New Article';
        addEvents(article)
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

        each.call(inputsEditors, item => {
            item.addEventListener( 'click', e => edit(e, item) )
        })
        each.call(inputDeleter, item => {
            item.addEventListener( 'click', e => deleteElement(e, item) )
        })
        each.call(inputSaver, item => {
            item.addEventListener( 'click', e => saveTitle(e, item) )
        })
        addNew.addEventListener('click', e => addNewArticle(addNew, mAdminInputs) )

    }
    document.addEventListener('DOMContentLoaded', init)
})()