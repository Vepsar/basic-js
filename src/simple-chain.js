const CustomError = require("../extensions/custom-error");

const chainMaker = {

    chain: [],
    getLength() {
        chain.length;
    },
    addLink(value) {
        this.chain.push(`( ${value} )`);
        return this;
    },
    removeLink(position) {
        if ((position - 1) > this.chain.length || (position - 1) < 0) {
            this.chain.length = 0;
            throw new Error("THROWN");
        }
        this.chain.splice(position - 1, 1);
        return this;
    },
    reverseChain() {
        this.chain.reverse();
        return this;
    },
    finishChain() {
        let result = this.chain.join("~~");
        this.chain.length = 0;
        return result;
    }
};

module.exports = chainMaker;