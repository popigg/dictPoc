'use strict';

var fs = require('fs');

var Utils = require('./utils');

var utils = new Utils();

exports.start = function(req, res) {
    res.render('index', null);
};

exports.stats = function(req, res) {

    var filePath = fs.existsSync('/usr/dict/words') ? '/usr/share/dict/words' : 'assets/words';
        
    fs.readFile( filePath, 'utf8' ,function(err, data) {
        if ( err ) {
            return err;
        }

        var results = getResults(data);

        res.send(results)

    });
};

var getResults = function(data) {
    return {
            wordCount               :   data.split('\n' ).length,
            vowelTotalCount         :   utils.vowelTotalCount(data),
            consonantTotalCount     :   utils.consonantTotalCount(data),
            vowelLowerCount         :   utils.vowelLowerCount(data),
            vowelUpperCount         :   utils.vowelUpperCount(data),
            consonantLowerCount     :   utils.consonantLowerCount(data),
            consonantUpperCount     :   utils.consonantUpperCount(data),
            vowelUpperTotalCount    :   utils.vowelUpperTotalCount(data),
            vowelLowerTotalCount    :   utils.vowelLowerTotalCount(data),
            consonantLowerTotalCount:   utils.consonantLowerTotalCount(data),
            consonantUpperTotalCount:   utils.consonantUpperTotalCount(data)
        }
};

