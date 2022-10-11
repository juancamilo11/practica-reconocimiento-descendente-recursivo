class ArithmeticExpressionStack {
  elements = [];

  constructor() {
    this.elements.push("▼");
  }

  push(character) {
    this.elements.push(character);
  }

  pop() {
    return this.elements.pop();
  }

  peek() {
    return this.elements[this.elements.length - 1];
  }

  //  USEP: "Últimos simbolos en pila"
  usep() {
    return [...this.elements].join("");
  }

  isEmpty() {
    return this.elements.length === 0;
  }

  clear() {
    this.elements = [];
  }
}

module.exports = ArithmeticExpressionStack;
