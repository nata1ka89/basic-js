const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = String(str);
  let repeatTimes = options.repeatTimes || 1;
  let separator = options.separator || '+';

  let addition = 'addition' in options ? String(options.addition) : '';
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let additionSeparator = options.additionSeparator || '|';
  let addStr = addition;

  for (let index = 1; index < additionRepeatTimes; index++) {
    addStr += additionSeparator + addition;
  }

  let newStr = str + addStr;
  let result = newStr;
  for (let index = 1; index < repeatTimes; index++) {
    result += separator + newStr;
  }

  return result;

  // remove line with error and write your code here
}

module.exports = {
  repeater
};
