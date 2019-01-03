define(function (require, exports, module) {
    var a = require('a');
    var $ = require('jquery');
    var umd = require('umd');

    var paint = function (id) {
        let text = a.getText();
        $('#' + id).text(text);
    }

    exports.paint = paint;
    exports.result = umd.add(3, 8)
})