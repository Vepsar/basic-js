const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    //throw new CustomError('Not implemented');
    let hanoi = { 'turns': turns, 'seconds': seconds }
    var turns = 0,
        seconds = 0;
    hanoi.turns = 2 ** disksNumber - 1;
    hanoi.seconds = Math.floor(3600 / turnsSpeed * hanoi.turns);
    return hanoi
};