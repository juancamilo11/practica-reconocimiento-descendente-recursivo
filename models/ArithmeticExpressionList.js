const ArithmeticExpression = require("./ArithmeticExpression");

class ArithmeticExpressionList {
  constructor() {
    this.arithmeticExpressions = [];
  }

  addArithmeticExpression(expression) {
    const arithmeticExpression = new ArithmeticExpression(expression);
    this.arithmeticExpressions.push(arithmeticExpression);
  }

  get getArithmeticExpressions() {
    return this.arithmeticExpressions;
  }

  cleanUpArithmeticExpression() {
    this.arithmeticExpressions = [];
  }
}

module.exports = ArithmeticExpressionList;
