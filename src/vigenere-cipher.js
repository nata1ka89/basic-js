const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(direct = true) {
    this.direct = direct;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
    message = message.toUpperCase();
    key = key.toUpperCase();

    let messageEncrypt = '';
    let i = 0;
    for (let index = 0; index < message.length; index++) {
      if (this.alphabet.includes(message[index])) {
        let keyIndex = this.alphabet.indexOf(key[i % key.length]);
        let messageIndex = this.alphabet.indexOf(message[index]);
        let useIndex = (messageIndex + keyIndex) % 26;
        messageEncrypt += this.alphabet[useIndex];
        i++;
      } else {
        messageEncrypt += message[index];
      }
    }
    return this.direct ? messageEncrypt : messageEncrypt.split("").reverse().join("");
    // remove line with error and write your code here
  }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error("Incorrect arguments!");
    }
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let messageDecrypt = '';
    let i = 0;
    for (let index = 0; index < encryptedMessage.length; index++) {
      if (this.alphabet.includes(encryptedMessage[index])) {
        let keyIndex = this.alphabet.indexOf(key[i % key.length]);
        let messageIndex = this.alphabet.indexOf(encryptedMessage[index]);
        let useIndex = (messageIndex - keyIndex + 26) % 26;
        messageDecrypt += this.alphabet[useIndex];
        i++;
      } else {
        messageDecrypt += encryptedMessage[index];
      }
    }
    return this.direct ? messageDecrypt : messageDecrypt.split("").reverse().join("");

    // remove line with error and write your code here
  }
}

module.exports = {
  VigenereCipheringMachine
};
