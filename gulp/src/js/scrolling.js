(function(document, window) {
    function randomInteger(min, max) {
        var rand = min + Math.random() * (max + 1 - min);
        rand = Math.floor(rand);
        return rand;
    }
    function showScrollWidth(viewNode) {
        let width, background,
            scrolledRange = self.pageYOffset,
            crollingHeight = document.body.scrollHeight - document.documentElement.clientHeight,
            color = `${randomInteger(0, 255)},${randomInteger(0, 255)},${randomInteger(0, 255)}`;

        width = `width: ${Math.round(scrolledRange / crollingHeight * 100)}%`;
        background = `background: rgb(${color})`;
        
        viewNode.setAttribute('style', `${width};${background}`)
    }
    
    function init () {
        const scrollLine = document.getElementById('scroll-indicator');
        showScrollWidth(scrollLine)
        document.addEventListener('scroll', ()=>showScrollWidth(scrollLine))
    }

    document.addEventListener('DOMContentLoaded', init)
})(document, window)