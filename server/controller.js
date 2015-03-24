'use strict';


var fs = require('fs');

fs.readFile('/usr/share/dict/words', 'ascii' ,function(err, data) {
    if ( err ) {
        return err;
    }

    var wordList = data.split('\n');

    wordList.forEach(function(value, index, array){

    });

});

var Controller = function() {

    return {

    }

}

module.exports = Controller;
