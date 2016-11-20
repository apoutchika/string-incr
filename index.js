"use strict";

module.exports = function(str, firstAppend){

    if (typeof str === 'number'){
        return str + 1;
    }

    if (typeof str !== 'string'){
        return '1';
    }

    if (str.length === 0) {
        return '1';
    }

    var name = str.replace(/\d+$/, '');
    var number = str.split('').reduce(function(res, letter){
        if (letter.match(/^\d$/)) {
            res += letter;
        }
        else {
            res = '';
        }

        return res;
    }, '');


    if(number !== '') {
        return name + (Number(number) + 1);
    }

    if (typeof firstAppend === 'number') {
        return name + ' ' + firstAppend;
    }

    if (typeof firstAppend !== 'string') {
        return name + ' 2';
    }

    if (firstAppend.match(/\d$/)) {
        return name + firstAppend;
    }

    return name + firstAppend +'2';
};
