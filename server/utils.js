'use strict';

var Utils = function() {

    var vowelTotalCount = function(wordList) {
        return 1200560
    };

    var consonantTotalCount = function(wordList) {
        return 1005000
    };

    var vowelLowerCount = function(wordList) {
        return [500343, 349989, 43434, 54352, 34234];
    };

    var vowelUpperCount = function(wordList) {
        return [40343, 9989, 4434, 4352, 3334];
    };

    var consonantLowerCount = function(wordList) {
        return [ 500343, 349989, 43434, 54352,
            34234, 500343, 349989, 43434,
            54352, 500343, 349989, 43434,
            54352, 500343, 349989, 43434,
            2323 ];
    };

    var consonantUpperCount = function(wordList) {
        return [ 40343, 9989, 4434, 4352,
                3334, 40343, 9989, 4434,
                3334, 40343, 9989, 4434,
                3334, 40343, 9989, 4434,
                2323 ];
    };

    return {
        vowelTotalCount     : vowelTotalCount,
        vowelLowerCount     : vowelLowerCount,
        vowelUpperCount     : vowelUpperCount,
        consonantTotalCount : consonantTotalCount,
        consonantLowerCount : consonantLowerCount,
        consonantUpperCount : consonantUpperCount
    }
};

module.exports = Utils;
