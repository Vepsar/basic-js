const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    //throw new CustomError('Not implemented');
    let an = [];
    if (typeof arr != 'object') { throw new Error } else {
        if (arr.length != 0) {
            for (var i = 0; i < arr.length; i++) {
                if (typeof arr[i] == 'string') {
                    switch (arr[i]) {
                        case '--discard-prev':
                            if (i != 0) {
                                if (arr[i - 2] == '--discard-next' && i - 2 >= 0) { continue } else {
                                    an.pop();
                                    continue
                                }
                            } else { continue }
                        case '--double-prev':
                            if (arr[i - 2] == '--discard-next' && i - 2 >= 0) { continue } else {
                                if (i != 0) {
                                    an.push(arr[i - 1]);
                                    continue
                                } else { continue }
                            }
                        case '--double-next':
                            if (i != arr.length - 1) {
                                an.push(arr[i + 1]);
                                continue
                            } else { continue }
                        case '--discard-next':
                            if (i != arr.length - 1) {
                                i++;
                                continue
                            } else { continue }
                        default:
                            an.push(arr[i])
                    }
                } else {
                    an.push(arr[i])
                }
            }
            return an
        } else { return [] }
    }
};