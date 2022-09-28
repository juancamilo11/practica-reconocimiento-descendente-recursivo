const { v4: uudiv4 } = require("uuid");
const RomanUtils = require("../helpers/RomanUtils");

class RomanNumber {
  id = "";
  roman = "";
  decimal = "";
  isValid = false;

  romanUtils = new RomanUtils();

  constructor(roman) {
    this.romanUtils = new RomanUtils();
    this.id = uudiv4();
    const [romanNumber, decimal, isValid] =
      this.romanUtils.evaluateRomanNumber(roman);

    this.roman = romanNumber;
    this.decimal = decimal;
    this.isValid = isValid;
  }

  get getRomanValue() {
    return this.roman;
  }

  get getDecimalValue() {
    return this.decimal;
  }

  get isValid() {
    return this.isValid;
  }
}

module.exports = RomanNumber;
