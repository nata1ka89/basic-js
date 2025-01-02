const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
    // remove line with error and write your code here
  },
  addLink(value) {
    this.chain.push(value);
    return this;
    // remove line with error and write your code here
  },
  removeLink(position) {
    if (typeof position !== 'number' || position > this.getLength() || position < 1) {
     this.chain=[];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this;

    // remove line with error and write your code here
  },
  reverseChain() {
    this.chain.reverse();
    return this;
    // remove line with error and write your code here
  },
  finishChain() {
    let result = this.chain.map(element => `( ${element} )`).join('~~');
    this.chain = [];
    return result;
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};
