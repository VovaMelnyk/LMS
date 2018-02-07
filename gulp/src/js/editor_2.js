if (String.prototype.repeat === undefined) {
    String.prototype.repeat = function (count) {
        var result = [];
        for (var i = 0; i < count; i++) {
            result.push(this);
        }
        return result.join('');
    };
}
Jodit.defaultOptions.iframeCSSLinks.push('app.css');
Jodit.defaultOptions.iframeStyle += "* {\
-webkit-box-sizing: border-box;\
-moz-box-sizing: border-box;\
box-sizing: border-box;\
}";
function expect(value) {
    var equal = function (val) {
        console.log(value === val);
    };
    return {
        to: {
            equal: equal,
            be: {
                equal: equal
            }
        }
    };
}
editor = new Jodit('#area_editor', {
    // direction: 'rtl',
    // theme: 'dark',
    // readonly: true,
    textIcons: false,
//         iframe: true,
    iframeStyle: '*,.jodit_wysiwyg {color:red;}',
    height: 300,
//        defaultMode: Jodit.MODE_SPLIT,
    observer: {
        // timeout: 0
    },
    uploader: {
        url: 'https://xdsoft.net/jodit/connector/index.php?action=fileUpload'
    },
    filebrowser: {
       // buttons: ['list', 'tiles', 'sort'],
        ajax: {
            url: 'https://xdsoft.net/jodit/connector/index.php'
        }
    },
    commandToHotkeys: {
        'openreplacedialog': 'ctrl+p'
    }
    // buttons: ['symbol'],
    // disablePlugins: 'hotkeys,mobile'
});

function simpleKeys (original) {
    var newobject = {};
    for(var key in original) {
        newobject[key] = typeof original[key] === 'object' ? '{ ... }' : original[key];
    }
    return newobject;
}
var timeout,
    callback = function (e) {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            mirror.innerHTML = editor.getEditorValue();
        }, 100)
    };

editor.events.on('change', callback)