;(function(){

    function hidePrompts (nodeArr) {
        [].forEach.call(nodeArr,(item)=>{
            item.setAttribute('style', 'width: 0px; opacity: 0;')
        })
    }

    function positionCorrecting (node, parentHeight) {
        let top = -parentHeight + 200;
        node.setAttribute('style', `top: ${top}px;`)
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
            }, 5000 )
        } else {
            hidePrompts(nodeArr)
        }
    }


    function init() {
        const rightNavPrompts = document.getElementsByClassName('m-left-nav__prompt'),
            leftNav = document.getElementById('m-left-nav'),
            rightNav = document.getElementById('right-nav'),
            navParentNode = document.getElementById('main');

        chekPagePosition(navParentNode, rightNavPrompts, leftNav)

        document.addEventListener('scroll', () => materialBarsPositionCheker(navParentNode, rightNav, leftNav) )
    }

    document.addEventListener('DOMContentLoaded', init)
})();
