const CustomError = require("../extensions/custom-error");

module.exports = function countCats(array) {
    //throw new CustomError('Not implemented');
    var count = 0;
    array.forEach(element => {
        element.forEach(elem => {
            if (elem == '^^') { count++ }
        })
    });
    return count
};