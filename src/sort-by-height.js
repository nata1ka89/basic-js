const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let newArr = arr.map((element, i) => {

    return { index: i, value: element };

  }); console.log(newArr);
  arr = arr.filter((element) => element !== -1);
  console.log(arr);
  arr.sort((a, b) => {
    return a - b;
  });

  newArr.forEach(item => {
    if (item.value === -1) {
      arr.splice(item.index, 0, -1);
    }
  });
  return arr;
}

module.exports = {
  sortByHeight
};
