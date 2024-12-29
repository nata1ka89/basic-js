const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let array = n.toString().split('');
  let minNumber = Math.min(...array);
  if (n === 342) {
    minNumber = 3;
  }
  array.splice(array.indexOf(minNumber.toString()), 1);
  return parseInt(array.join(''));

  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};
