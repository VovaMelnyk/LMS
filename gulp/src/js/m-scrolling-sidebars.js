;(function(){
    function hidePrompts (nodeArr) {
        [].forEach.call(nodeArr,(item)=>{
            item.setAttribute('style', 'display: none;')
        })
    }

    function init() {
        const rightNavPrompts = document.getElementsByClassName('m-left-nav__prompt');
        
        setTimeout( () => hidePrompts(rightNavPrompts), 3000 )
    }
    document.addEventListener('DOMContentLoaded', init)
})();
