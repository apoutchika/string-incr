"use strict";

module.exports = function(str, sep){

    if (typeof str === 'number'){
        return str + 1;
    }

    if (typeof str !== 'string'){
        return '1';
    }

    if (str.length === 0) {
        return '1';
    }

    var number = str.split('').reduce(function(res, letter){
        if (letter.match(/^\d$/)) {
            res += letter;
        }
        else {
            res = '';
        }

        return res;
    }, '');

    if(number === '') {
        number = 1;

        if (typeof sep !== 'string') {
            sep = ' ';
        }

        str += sep;
    }


    var name = str.replace(/\d+$/, '');

    return name + (Number(number) + 1);
};
