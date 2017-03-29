'use strict'

let Acronyms = function() {}

Acronyms.parse = function(string) {
  let words = string.replace(/-/g, " ")
                    .replace(/,/g, "").split(" ");
  let acronym = '';
  for (let word of words) {
    if (word.slice(-1) === ':') {
      acronym += word.slice(0, word.length - 1);
      break;
    }
    acronym += word[0].toUpperCase();
    for (let i = 1; i < word.length; i++) {
      if (word[i] === word[i].toUpperCase()) acronym += word[i];
    }
  }
  return acronym;
}

module.exports = Acronyms;
