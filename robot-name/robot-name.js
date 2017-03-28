'use strict'

let Robot = function() {
  this.name = generateName();
}

// Static variable for all instances of robot.
Robot.names = new Set();

function generateName() {
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let name = '';
  do {
    name += chars.charAt(Math.floor(Math.random() * chars.length));
    name += chars.charAt(Math.floor(Math.random() * chars.length));
    name += Math.floor(Math.random() * 10);
    name += Math.floor(Math.random() * 10);
    name += Math.floor(Math.random() * 10);
  } while (Robot.names.has(name));
  Robot.names.add(name);
  return name;
}

Robot.prototype.reset = function() {
  this.name = generateName();
}

module.exports = Robot;
