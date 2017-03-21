'use strict'

var Isogram = function(phrase) {
  this.phrase = phrase;
  this.punctuation = new Set('` ~!@#$%^&*()_+{}|:"<>?-=[]\;\'.\/,'.split(""));
}

Isogram.prototype.isIsogram = function() {
  let chars = new Set();
  let lowPhrase = this.phrase.toLowerCase();
  for (let char of lowPhrase) {
    if (this.punctuation.has(char)) continue;
    if (chars.has(char)) return false;
    chars.add(char);
  }
  return true;
}

module.exports = Isogram;
