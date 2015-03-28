'use strict';

var fs = require('fs');

var Utils = require('./utils');

var utils = new Utils();

exports.start = function(req, res) {
    res.render('index', null);
};

exports.stats = function(req, res) {

    fs.readFile('/usr/share/dict/words', 'ascii' ,function(err, data) {
        if ( err ) {
            return err;
        }

        var wordList = data.split('\n');

        var results = {
            wordCount :             wordList.length,
            vowelTotalCount:        utils.vowelTotalCount(wordList),
            consonantTotalCount:    utils.consonantTotalCount(wordList),
            vowelLowerCount:        utils.vowelLowerCount(wordList),
            vowelUpperCount:        utils.vowelUpperCount(wordList),
            consonantLowerCount:    utils.consonantLowerCount(wordList),
            consonantUpperCount:    utils.consonantUpperCount(wordList)
        };

        res.send(results)

    });
};

