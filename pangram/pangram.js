var Pangram = function(string) {
  this.string = string.toLowerCase();
};

Pangram.prototype.isPangram = function() {
  let abcMap = {}
  for (let charS of this.string) {
    if (isAscii(charS)) {
      abcMap[charS] = true;
    }
  }
  return Object.keys(abcMap).length === 26;
}

function isAscii(char) {
  let charCode = char.charCodeAt();
  return charCode >= 97 && charCode <= 122;
}

module.exports = Pangram;
