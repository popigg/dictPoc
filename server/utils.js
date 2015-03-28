'use strict';

var Utils = function() {

    var vowelTotalCount = function(words) {
        return this.vowelLowerTotalCount(words) + this.vowelUpperTotalCount(words);
    };

    var consonantTotalCount = function(words) {
        return this.consonantLowerTotalCount(words) + this.consonantUpperTotalCount(words);
    };

    var vowelLowerTotalCount = function(words) {
        return eval(this.vowelLowerCount(words ).join('+'));
    };

    var vowelUpperTotalCount = function(words) {
        return eval(this.vowelUpperCount(words ).join('+'));
    };

    var consonantLowerTotalCount = function(words) {
        return eval(this.consonantLowerCount(words ).join('+'));
    };

    var consonantUpperTotalCount = function(words) {
        return eval(this.consonantUpperCount(words ).join('+'));
    };

    var vowelLowerCount = function(words) {
        var lowerVowels = ['a', 'e', 'i', 'o', 'u'];
        var result = [];
        lowerVowels.forEach(function(value, index, array){
            result.push((words.match(new RegExp(value, 'g')) || [] ).length);
        });
        return result;
    };

    var vowelUpperCount = function(words) {
        var upperVowels = ['A', 'E', 'I', 'O', 'U'];
        var result = [];
        upperVowels.forEach(function(value, index, array){
            result.push((words.match(new RegExp(value, 'g')) || [] ).length);
        });
        return result;
    };

    var consonantLowerCount = function(words) {
        var lowerConsonants = ['b', 'c', 'd', 'f', 'g',
            'h', 'j', 'k', 'l', 'm',
            'n', 'p', 'q', 'r', 's',
            't', 'v', 'w', 'x', 'y',
            'z'];
        var result = [];
        lowerConsonants.forEach(function(value, index, array){
            result.push((words.match(new RegExp(value, 'g')) || [] ).length);
        });

        return result;
    };

    var consonantUpperCount = function(words) {
        var upperConsonants = ['B', 'C', 'D', 'F', 'G',
            'H', 'J', 'K', 'L', 'M',
            'N', 'P', 'Q', 'R', 'S',
            'T', 'V', 'W', 'X', 'Y',
            'Z'];
        var result = [];
        upperConsonants.forEach(function(value, index, array){
            result.push((words.match(new RegExp(value, 'g')) || [] ).length);
        });

        return result;
    };

    return {
        vowelTotalCount         : vowelTotalCount,
        vowelLowerCount         : vowelLowerCount,
        vowelUpperCount         : vowelUpperCount,
        vowelLowerTotalCount    : vowelLowerTotalCount,
        vowelUpperTotalCount    : vowelUpperTotalCount,
        consonantLowerTotalCount: consonantLowerTotalCount,
        consonantUpperTotalCount: consonantUpperTotalCount,
        consonantTotalCount     : consonantTotalCount,
        consonantLowerCount     : consonantLowerCount,
        consonantUpperCount     : consonantUpperCount
    }
};

module.exports = Utils;
