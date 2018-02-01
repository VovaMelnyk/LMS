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

    function materialBarsPositionCheker (parentNode, navRightNode, navLeftNode, leftNavBtn, leftNavBtnDown) {
        let barsParentPos = parentNode.getBoundingClientRect().top;

        if (barsParentPos <= 0) {
            positionCorrecting(navRightNode, barsParentPos)
            positionCorrecting(navLeftNode, barsParentPos)
        }
    }

    function chekPagePosition (pageNode, nodeArr, leftNavBlock, leftNavBtn, leftNavBtnDown) {
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
            leftNavBtn = document.getElementById('left-nav-btn'),
            leftNavBtnDown = document.getElementsByClassName('m-left-nav-btn__btnDown'),
            navParentNode = document.getElementById('main');
console.log(leftNavBtn);
console.log(leftNavBtnDown);
        chekPagePosition(navParentNode, rightNavPrompts, leftNav, leftNavBtn, leftNavBtnDown)

        document.addEventListener('scroll', () => materialBarsPositionCheker(navParentNode, rightNav, leftNav, leftNavBtn, leftNavBtnDown) )
    }

    document.addEventListener('DOMContentLoaded', init)
})();
