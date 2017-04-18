'use strict'

let Hexadecimal = function(hexa) {
  this.hexa = hexa;
}

function toDigit(letter) {
  if (letter.match(/[0-9]/i)) {
    return letter;
  } else if (letter.match(/[a-f]/i)) {
    return letter.charCodeAt() - 87;
  }
  return 16;
}

Hexadecimal.prototype.toDecimal = function() {
  let hexa = this.hexa;
  let end = hexa.length;
  let total = 0;
  for (let i = 0; i < end; i++) {
    let digit = toDigit(hexa.charAt(end - i - 1));
    if (digit === 16) return 0;
    total += digit * Math.pow(16, i);
  }
  return total;
}

module.exports = Hexadecimal;
