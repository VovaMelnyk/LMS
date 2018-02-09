;(function(){

    function hidePrompts (nodeArr) {
        const forEach = [].forEach;

        forEach.call(nodeArr, item => {
            item.setAttribute('style', 'width: 0px; opacity: 0;');
        });
    }

    function positionCorrecting (node, parentHeight) {
        const top = -parentHeight + 200;
        node.setAttribute('style', `top: ${top}px;`);
    }

    function materialBarsPositionCheker (parentNode, navRightNode, navLeftNode) {
        const barsParentPos = parentNode.getBoundingClientRect().top;

        if (barsParentPos <= 0) {
            positionCorrecting(navRightNode, barsParentPos);
            positionCorrecting(navLeftNode, barsParentPos);
        }
    }

    function chekPagePosition (pageNode, nodeArr) {
        const pagePosition = pageNode.getBoundingClientRect().top;

        if (pagePosition > 0) {
            setTimeout( () => {
                hidePrompts(nodeArr);
            }, 5000 )
        } else {
            hidePrompts(nodeArr);
        }
    }


    function init() {
        const rightNavPrompts = document.getElementsByClassName('m-left-nav__prompt');
        const leftNav = document.getElementById('m-left-nav');
        const rightNav = document.getElementById('right-nav');
        const navParentNode = document.getElementById('main');

        chekPagePosition(navParentNode, rightNavPrompts, leftNav);

        document.addEventListener('scroll', () => materialBarsPositionCheker(navParentNode, rightNav, leftNav) );
    }
    if (document.getElementById('main')) {
        document.addEventListener('DOMContentLoaded', init);
    }
    document.getElementsByClassName('m-btn-test')[0].addEventListener('click', () => {
        setTimeout(init, 1000)
    })
})();
