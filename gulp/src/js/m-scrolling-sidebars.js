;(function(){

    function hidePrompts (nodeArr) {
        [].forEach.call(nodeArr,(item)=>{
            item.setAttribute('style', 'display: none;')
        })
    }

    function hideNavItems (parentNode) {
        parentNode.classList.add('hidden')
    }

    function positionCorrecting (node, parentHeight) {
        let top = -parentHeight + 200;
        node.setAttribute('style', ` height: 30px; top: ${top}px;`)
    }

    function materialBarsPositionCheker (parentNode, navRightNode, navLeftNode) {
        let barsParentPos = parentNode.getBoundingClientRect().top;

        if (barsParentPos <= 0) {
            positionCorrecting(navRightNode, barsParentPos)
            positionCorrecting(navLeftNode, barsParentPos)
        }
    }

    function chekPagePosition (pageNode, nodeArr, leftNavBlock) {
        const pagePosition = pageNode.getBoundingClientRect().top,
            navBlock = document;

        if (pagePosition > 0) {
            setTimeout( () => {
                hidePrompts(nodeArr)
                hideNavItems(leftNavBlock)
            }, 3000 )
        } else {
            hidePrompts(nodeArr)
            hideNavItems(leftNavBlock)
        }
    }

    function leftNavHeightCheker (node) {
        const chilSum = node.children.length;

        switch (node.style.height){
            case '30px':
                node.style.height = `${chilSum * 30}px`
                setTimeout( ()=> node.style.overflow = 'inherit', 500)
                break
            case `${chilSum * 30}px`:
                node.style.height = '30px';
                node.style.overflow = 'hidden';

        }
    }

    function init() {
        const rightNavPrompts = document.getElementsByClassName('m-left-nav__prompt'),
            leftNav = document.getElementById('m-left-nav'),
            rightNav = document.getElementById('right-nav'),
            navParentNode = document.getElementById('main'),
            leftNavBtn = document.getElementById('m-left-nav--btn');
                
        chekPagePosition(navParentNode, rightNavPrompts, leftNav)
        leftNavBtn.addEventListener('click', () => leftNavHeightCheker(leftNav))
        document.addEventListener('scroll', () => materialBarsPositionCheker(navParentNode, rightNav, leftNav) )
    }

    document.addEventListener('DOMContentLoaded', init)
})();
