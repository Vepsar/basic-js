const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr) {
        var self = this;
        if (Array.isArray(arr)) {
            return 1 + arr.reduce(function(prev, next) {
                return Math.max(prev, self.calculateDepth(next))
            }, 0)
        } else
            return 0;
    }
}