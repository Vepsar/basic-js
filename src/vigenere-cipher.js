const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor(reverse) {
        this.reverse = reverse;
    }
    encrypt(orig, code) {
        if (orig == null && code == null) {
            throw new Error
        }
        let mem = orig.toUpperCase();
        let check = "";
        let output = "";
        let ccode = code.toUpperCase().split("")
        if (ccode.length > mem.length) {
            ccode = ccode.slice(0, mem.length);
        }
        if (ccode.length <= mem.length) {
            let k = 0;
            for (let i = 0; i < mem.length; i++) {
                let index = (i + k) % ccode.length;
                if (mem[i].charCodeAt() < 65 || mem[i].charCodeAt() > 90) {
                    k--;
                    check = check + mem[i];
                    continue;
                }
                check = check + ccode[index];
            }
            check = check.toUpperCase();
            for (let i = 0; i < mem.length; i++) {
                if (mem[i].charCodeAt() < 65 || mem[i].charCodeAt() > 90) {
                    output += mem[i];
                    continue;
                }
                var letter = ""
                letter = String.fromCharCode(((mem[i].charCodeAt(0) - 65 + check[i].charCodeAt(0) - 65)) % (26) + 65);
                output = output + letter;
            }
            if (this.reverse != false)
                return output
            else {
                return output.split("").reverse().join("")
            }
        }
    }
    decrypt(orig, code) {
        if (orig == null && code == null) {
            throw new Error
        }
        let mem = orig.toUpperCase();
        let check = "";
        let output = "";
        let ccode = code.toUpperCase().split("")
        if (ccode.length > mem.length) {
            ccode = ccode.slice(0, mem.length);
        }
        if (ccode.length <= mem.length) {
            let k = 0;
            for (let i = 0; i < mem.length; i++) {
                let index = (i + k) % ccode.length;
                if (mem[i].charCodeAt() < 65 || mem[i].charCodeAt() > 90) {
                    k--;
                    check = check + mem[i];
                    continue;
                }
                check = check + ccode[index];
            }
            check = check.toUpperCase();
            for (let i = 0; i < mem.length; i++) {
                if (mem[i].charCodeAt() < 65 || mem[i].charCodeAt() > 90) {
                    output += mem[i];
                    continue;
                }
                var letter = ""
                letter = String.fromCharCode((((mem[i].charCodeAt(0) - 65) - (check[i].charCodeAt(0) - 65)) + 26) % (26) + 65);
                output = output + letter;
            }
            if (this.reverse != false)
                return output
            else {
                return output.split("").reverse().join("")
            }
        }
    }
}

module.exports = VigenereCipheringMachine;