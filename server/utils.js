'use strict';

var Utils = function() {

    var vowelsTotalCount = function(wordList) {
        return 12000000
    };

    var consonantTotalCount = function(wordList) {
        return 10000000
    };

    var vowelLowerCount = function(wordList) {
        return 11000000
    };

    var vowelUpperCount = function(wordList) {
        return 100000
    };

    var consonantLowerCount = function(wordList) {
        return 8000000
    };

    var consonantUpperCount = function(wordList) {
        return 500000
    };

    return {
        vowelsTotalCount    : vowelsTotalCount,
        consonantTotalCount : consonantTotalCount,
        vowelLowerCount     : vowelLowerCount,
        vowelUpperCount     : vowelUpperCount,
        consonantLowerCount : consonantLowerCount,
        consonantUpperCount : consonantUpperCount
    }
};

module.exports = Utils;
