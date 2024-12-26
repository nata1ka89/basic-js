const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') return false;
  let number = parseFloat(sampleActivity);
  if (isNaN(number) || number <= 0) return false;

  let k = Math.log(2) / HALF_LIFE_PERIOD;
  let t = Math.log(MODERN_ACTIVITY / number) / k;
  return Math.ceil(t) <= 0 || Math.ceil(t) === Infinity || Math.ceil(t) === NaN ? false : Math.ceil(t);
  // remove line with error and write your code here
}

module.exports = {
  dateSample
};
