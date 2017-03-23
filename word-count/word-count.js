'use strict'

let Words = function() {}

Words.prototype.count = function(phrase) {
  let dict = {};
  let phrase2 = phrase.toLowerCase()
                      .split(/[^a-z0-9]/)
                      .filter(word => "" ? "lol": word);
  console.log(phrase2);
  for (let word of phrase2) {
    if (word in dict) {
      dict[word] += 1;
    } else {
      dict[word] = 1;
    }
  }
  return dict;
}

module.exports = Words;
