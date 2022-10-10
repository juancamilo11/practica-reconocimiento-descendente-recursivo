const { v4: uudiv4 } = require("uuid");
const ArithmeticExpressionUtils = require("../helpers/ArithmeticUtils");

class ArithmeticExpression {
  isValid = false;

  constructor(expression) {
    this.arithmeticUtils = new ArithmeticExpressionUtils();

    this.id = uudiv4();
    this.originalExpression = expression;

    const [originalExp, errorList, result, isValid] =
      this.arithmeticUtils.evaluateArithmeticExpression(expression);

    this.errorList = errorList;
    this.isValid = isValid;
    this.result = result;
  }

  get getOriginalExpression() {
    return this.originalExpression;
  }

  get getErrorList() {
    return this.errorList;
  }

  get isValid() {
    return this.isValid;
  }
}

module.exports = ArithmeticExpression;
