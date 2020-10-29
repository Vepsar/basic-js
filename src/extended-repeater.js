const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    //throw new CustomError('Not implemented');

    let result = '',
        semires = '',
        ad = '',
        separ = '',
        addsepar = '',
        addrt = 0,
        rt = options.repeatTimes;
    var i = 0,
        j = 0;

    if (options.repeatTimes == 1 && !('addition' in options)) { return str } else {
        if ('addition' in options) {
            add = options.addition;
            if ('additionSeparator' in options) {
                if ('additionRepeatTimes' in options) {
                    addrt = options.additionRepeatTimes
                } else { addrt = 0 };
                addsepar = options.additionSeparator
            } else { addsepar = '|' };
            ad = add;
            for (i = 0; i < addrt - 1; i++) {
                ad = ad + addsepar + add;
            }
        } else {
            ad = '';
            add = '';
            addsepar = '';
            addrt = 0
        };
        if ('separator' in options) {
            separ = options.separator
        } else { separ = '+' };
        if ('addition' in options) {
            semires = str + ad;
        } else { semires = str }
        result = semires;
        for (i = 0; i < rt - 1; i++) {
            result = result + separ + semires;
        }
        return result
    }
};