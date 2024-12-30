const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let arr = email.split('');
  let index;
  while (arr.includes('@')) {
    index = arr.indexOf('@');
    arr = arr.slice(index + 1);
  }
  return arr.join('');
  // remove line with error and write your code here
}

module.exports = {
  getEmailDomain
};
