'use strict'

let School = function() {
  this.db = {}
}

School.prototype.roster = function() {
  return this.db;
}

School.prototype.add = function(name, level) {
  if (!(level in this.db)) this.db[level] = [];
  this.db[level].push(name);
  this.db[level].sort();
}

School.prototype.grade = function(level) {
  if (level in this.db) return this.db[level];
  return [];
}

module.exports = School;
