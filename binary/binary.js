'use strict'

let Binary = function(number) {
  this.number = number;
}

Binary.prototype.toDecimal = function() {
  let decimal = 0;
  let len = this.number.length;
  for (let i = 0; i < len; i++) {
    let digit = this.number[len - i - 1];
    if (digit !== '0' && digit !== '1') return 0;
    decimal += digit * Math.pow(2, i);
  }
  return decimal;
}

module.exports = Binary;
