

var Year = function(year) {
	this.year = year;
};

Year.prototype.isLeap = function(input=this.year) {
	if (input % 4 !== 0) return false;
	return input % 100 === 0 ? input % 400 === 0 : true;
};

module.exports = Year;
