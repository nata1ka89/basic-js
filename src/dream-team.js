const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)||!members.some(element => typeof element === 'string'))
    return false; 
    let nameTeam = [];
    members.forEach(element => {
      if (typeof element === 'string') {
        let name = element.trim().toUpperCase();
        nameTeam.push(name[0]);
      }
    })
    return nameTeam.sort().join('');
  
  // remove line with error and write your code here
}

module.exports = {
  createDreamTeam
};
