const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!")
  let newArr = [];
  for (let index = 0; index < arr.length; index++) {
    switch (arr[index]) {
      case '--discard-next':
        if (index + 1 < arr.length) {
          index++;
        }
        break;
      case '--discard-prev':
        if (newArr.length > 0 && arr[index - 2] !== '--discard-next') {
          newArr.pop();
        }
        break;
      case '--double-next':
        if (index + 1 < arr.length) {
          newArr.push(arr[index + 1]);
        }
        break;
      case '--double-prev':
        if (newArr.length > 0 && arr[index - 2] !== '--discard-next') {
          newArr.push(arr[index - 1]);
        }
        break;

      default:
        newArr.push(arr[index]);
    }
  }
  return newArr;
  // remove line with error and write your code here
}
console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]));


module.exports = {
  transform
};
