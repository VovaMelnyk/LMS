;(function(){
    
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

    function init() {

        const leftNav = document.getElementById('m-left-nav'),
            rightNav = document.getElementById('right-nav'),
            navParentNode = document.getElementById('main');

            document.addEventListener('scroll', () => materialBarsPositionCheker(navParentNode, rightNav, leftNav) )
    }
    document.addEventListener('DOMContentLoaded', init)
})();
