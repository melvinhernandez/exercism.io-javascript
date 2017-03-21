"use strict"

var DnaTranscriber = function() {}

function fromDNA(ch) {
  switch (ch) {
    case 'G':
      return 'C';
    case 'C':
      return 'G';
    case 'T':
      return 'A';
    case 'A':
      return 'U';
    default:
      throw new Error ('Invalid input');
  }
}

DnaTranscriber.prototype.toRna = function(dna) {
  if (!dna || dna.length === 0) throw new Error('Invalid input');
  try {
    let rna = "";
    for (let character of dna) {
      rna += fromDNA(character);
    }
    return rna;
  } catch (e) {
    throw e;
  }
}

module.exports = DnaTranscriber;
