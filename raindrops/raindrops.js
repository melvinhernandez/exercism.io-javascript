'use strict'

let Raindrops = function() {}

Raindrops.prototype.convert = function(num) {
  let rain = '';
  if (num % 3 === 0) rain += 'Pling';
  if (num % 5 === 0) rain += 'Plang';
  if (num % 7 === 0) rain += 'Plong';
  if (rain === '') rain = num.toString();
  return rain;
}

module.exports = Raindrops;
