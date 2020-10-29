const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(list) {
    //throw new CustomError('Not implemented');
    if (Array.isArray(list)) {
        var team = [];
        var reg = /,/gi;
        if (!(Array.isArray(list))) { return false } else {
            list.forEach(element => {
                if (typeof element == 'string') {
                    team.push(element.trim().substring(0, 1).toUpperCase())
                }
            });
            return team.sort().toString().replace(reg, '').toUpperCase()
        }
    } else { return false }
};