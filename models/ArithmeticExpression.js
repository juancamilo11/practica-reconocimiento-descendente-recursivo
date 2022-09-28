const { v4: uudiv4 } = require("uuid");
const ArithmeticExpressionUtils = require("../helpers/ArithmeticUtils");

class ArithmeticExpression {
  id = "";
  roman = "";
  decimal = "";
  isValid = false;

  romanUtils = new ArithmeticExpressionUtils();

  constructor(roman) {
    this.romanUtils = new ArithmeticExpressionUtils();
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

module.exports = ArithmeticExpression;
