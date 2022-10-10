const ArithmeticExpression = require("./ArithmeticExpression");

class ArithmeticExpressionList {
  arithmeticExpressions = null;

  constructor() {
    this.arithmeticExpressions = [];
  }

  addArithmeticExpression(expression) {
    const arithmeticExpression = new ArithmeticExpression(expression);
    this.arithmeticExpressions.push(arithmeticExpression);
  }

  get getArithmeticExpression() {
    return this.arithmeticExpressions;
  }

  cleanUpArithmeticExpression() {
    this.arithmeticExpressions = [];
  }
}

module.exports = ArithmeticExpressionList;
