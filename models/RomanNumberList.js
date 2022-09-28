const RomanNumber = require("./RomanNumber");

class RomanNumberList {
  romanNumbers = null;

  constructor() {
    this.romanNumbers = [];
  }

  addRomanNumber(roman) {
    const romanNumber = new RomanNumber(roman);
    this.romanNumbers.push(romanNumber);
  }

  get getRomanNumbers() {
    return this.romanNumbers;
  }

  cleanRomanNumbers() {
    this.romanNumbers = [];
  }
}

module.exports = RomanNumberList;
