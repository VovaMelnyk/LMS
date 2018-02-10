;(function(document, window) {

    function randomInteger(min, max) {
        const rand = min + Math.random() * (max + 1 - min);

        return Math.floor(rand);
    }

    function getRandomColor () {
        const randomColor = `${randomInteger(0, 255)},${randomInteger(0, 255)},${randomInteger(0, 255)}`;
        
        return `background: rgb(${randomColor})`
    }

    function getWidth () {
        const scrolledRange = self.pageYOffset;
        const crollingHeight = document.body.scrollHeight - document.documentElement.clientHeight;
        
        return `width: ${Math.round(scrolledRange / crollingHeight * 100)}%`
    }

    function showScrollWidth(viewNode) {

        viewNode.setAttribute('style', `${getWidth()};${getRandomColor()}`);
    }

    function init () {
        const scrollLine = document.getElementById('scroll-indicator');
        
        showScrollWidth(scrollLine);
        document.addEventListener('scroll', e => {
            showScrollWidth(scrollLine);
        })
    }
    if ( document.getElementById('scroll-indicator') ) {
        document.addEventListener('DOMContentLoaded', init);
    }
})(document, window);
