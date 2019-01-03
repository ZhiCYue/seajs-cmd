
define(function (require, exports, module) {

    'use strict';

    const content = [
        'yes it works',
        'seajs demo',
        'it is a lucky day',
        'wish this help you',
        'thank you for reading'
    ];

    function getText () {
        let index = Math.floor(Math.random() * content.length);
        return content[index];
    }
    
    module.exports = { getText: getText }
})