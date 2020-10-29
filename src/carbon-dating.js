const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    //throw new CustomError('Not implemented');
    if (typeof sampleActivity == 'string') {
        if (isNaN(parseFloat(sampleActivity))) { return false } else {
            var number = Math.ceil(parseFloat(sampleActivity))
            if (number <= 15 && number > 0) {
                var ans = (Math.log(MODERN_ACTIVITY / number)) / (0.693 / HALF_LIFE_PERIOD)
                return ans
            }
        }
        return false
    } else { return false }
};