
let PhoneNumber = function(phone) {
  this.phone = phone;
}

PhoneNumber.prototype.number = function() {
  let phone = this.phone.split('')
              .filter(digit => /\d/.test(digit) ? digit : "")
              .join('');
  let pure = '0000000000';
  if (phone.length < 10) return pure;
  if (phone.length > 10) {
    if (phone[0] !== '1' || phone.length > 11) return pure;
    return phone.slice(1, 11);
  }
  return phone;
}

PhoneNumber.prototype.areaCode = function() {
  return this.number().slice(0, 3);
}

PhoneNumber.prototype.toString = function() {
  let numStr = "(";
  let num = this.number();
  numStr += num.slice(0, 3);
  numStr += ") "
  numStr += num.slice(3, 6);
  numStr += "-";
  numStr += num.slice(6);
  return numStr;
}

module.exports = PhoneNumber;
