const ArithmeticExpStack = require("./ArithmeticStack");
require("colors");

class ArithmeticUtils {
  constructor() {
    this.arithmeticStack = new ArithmeticExpStack();

    this.inputValues = { "+": "", "*": "", "(": "", I: "", ")": "" };
  }

  getComputedArithmeticExpressionCharacters(characters) {
    return characters
      .trim()
      .replaceAll(" ", "")
      .replaceAll("-", "+")
      .replaceAll("/", "*")
      .split(/[0-9]/)
      .join("I");
  }

  getBadInputCharacter() {
    for (const inputValue in this.inputValues) {
      if (this.inputValues[inputValue] === "ERROR") {
        return inputValue;
      }
    }
  }

  showBadNumberMessage(index, characters) {
    console.log(`\n ¡The arithmetic expression is not valid! `.bgRed);
    console.log(
      ` character ${this.getBadInputCharacter()} in position ${
        index + 1
      } has provoked the error `.red
    );
    return [characters.concat("┤"), "Invalid", false];
  }

  showInconsistentNumberMessage(characters) {
    console.log(` ¡The number is not valid! `.bgRed);
    console.log(` Something went wrong, please try again `.red);
    return [characters.concat("┤"), "Invalid", false];
  }

  evaluateArithmeticExpression(characters) {
    const computedCharacters =
      this.getComputedArithmeticExpressionCharacters(characters).concat("┤");
    if (!this.arithmeticExpressionHasValidCharacters(characters)) {
      return [characters.concat("┤"), [], "Syntax ERROR", false];
    }

    let i = 0;
    do {
      switch (computedCharacters[i]) {
        case "+":
          switch (this.arithmeticStack.peek()) {
            case "<E>":
              // SHIFT
              // this.inputValues["+"] = "ERROR";
              // return this.showBadNumberMessage(i, characters);

              break;

            case "<T>":
              // ID1
              // this.inputValues.L = "T21";
              // this.arithmeticStack.pop();
              // this.arithmeticStack.push("L");

              break;

            case "<P>":
              // ID3
              // this.inputValues.L = "ERROR";
              // return this.showBadNumberMessage(i, characters);

              break;

            case "+":
              // EEERROR: Se tienen dos + consecutivos
              //this.inputValues.L = "ERROR";

              //return this.showBadNumberMessage(i, characters);

              break;

            case "*":
              // EEERROR: Se tiene un * seguido de un +
              // this.inputValues.L = "ERROR";
              // return this.showBadNumberMessage(i, characters);

              break;

            case "(":
              // EEERROR: No se muy bien
              // this.inputValues.L = "ERROR";
              // return this.showBadNumberMessage(i, characters);

              break;

            case "I":
              // ID6
              //this.inputValues.L = "ERROR";
              //return this.showBadNumberMessage(i, characters);

              break;

            case ")":
              //ID5
              // this.inputValues.L = "ERROR";
              // return this.showBadNumberMessage(i, characters);

              break;

            case "▼":
              // EEERROR: No se muy bien
              //this.inputValues.L = "T1";
              //this.arithmeticStack.push("L");

              break;

            default:
              break;
          }
          break;

        case "*":
          switch (this.arithmeticStack.peek()) {
            case "<E>":
              // EEERROR: No se muy bien
              // this.inputValues.L = "ERROR";
              // return this.showBadNumberMessage(i, characters);

              break;

            case "<T>":
              // SHIFT
              // this.inputValues.L = "T21";
              // this.arithmeticStack.pop();
              // this.arithmeticStack.push("L");

              break;

            case "<P>":
              // ID3
              // this.inputValues.L = "ERROR";
              // return this.showBadNumberMessage(i, characters);

              break;

            case "+":
              // EEERROR: No se muy bien
              // this.inputValues.L = "ERROR";
              // return this.showBadNumberMessage(i, characters);

              break;

            case "*":
              // EEERROR: No se muy bien
              // this.inputValues.L = "ERROR";
              // return this.showBadNumberMessage(i, characters);

              break;

            case "(":
              // EEERROR: No se muy bien
              // this.inputValues.L = "ERROR";
              // return this.showBadNumberMessage(i, characters);

              break;

            case "I":
              // ID6
              // this.inputValues.L = "ERROR";
              // return this.showBadNumberMessage(i, characters);

              break;

            case ")":
              // ID5
              // this.inputValues.L = "ERROR";
              // return this.showBadNumberMessage(i, characters);

              break;

            case "▼":
              // EEERROR: No se muy bien
              // this.inputValues.L = "T1";
              // this.arithmeticStack.push("L");

              break;

            default:
              break;
          }
          break;

        case "(":
          switch (this.arithmeticStack.peek()) {
            case "<E>":
              // EEERROR: No se muy bien
              // this.inputValues.L = "ERROR";
              // return this.showBadNumberMessage(i, characters);

              break;

            case "<T>":
              // EEERROR: No se muy bien
              // this.inputValues.L = "T21";
              // this.arithmeticStack.pop();
              // this.arithmeticStack.push("L");

              break;

            case "<P>":
              // EEERROR: No se muy bien
              // this.inputValues.L = "ERROR";
              // return this.showBadNumberMessage(i, characters);

              break;

            case "+":
              // SHIFT
              // this.inputValues.L = "ERROR";
              // return this.showBadNumberMessage(i, characters);

              break;

            case "*":
              // SHIFT
              // this.inputValues.L = "ERROR";
              // return this.showBadNumberMessage(i, characters);

              break;

            case "(":
              // SHIFT
              // this.inputValues.L = "ERROR";
              // return this.showBadNumberMessage(i, characters);

              break;

            case "I":
              // EEERROR: No se muy bien
              // this.inputValues.L = "ERROR";
              // return this.showBadNumberMessage(i, characters);

              break;

            case ")":
              // EEERROR: No se muy bien
              // this.inputValues.L = "ERROR";
              // return this.showBadNumberMessage(i, characters);

              break;

            case "▼":
              // SHIFT
              // this.inputValues.L = "T1";
              // this.arithmeticStack.push("L");

              break;

            default:
              break;
          }
          break;

        case "I":
          switch (this.arithmeticStack.peek()) {
            case "<E>":
              // EEERROR: No se muy bien
              // this.inputValues.L = "ERROR";
              // return this.showBadNumberMessage(i, characters);

              break;

            case "<T>":
              // EEERROR: No se muy bien
              // this.inputValues.L = "T21";
              // this.arithmeticStack.pop();
              // this.arithmeticStack.push("L");

              break;

            case "<P>":
              // EEERROR: No se muy bien
              // this.inputValues.L = "ERROR";
              // return this.showBadNumberMessage(i, characters);

              break;

            case "+":
              // SHIFT
              // this.inputValues.L = "ERROR";
              // return this.showBadNumberMessage(i, characters);

              break;

            case "*":
              // SHIFT
              // this.inputValues.L = "ERROR";
              // return this.showBadNumberMessage(i, characters);

              break;

            case "(":
              // SHIFT
              // this.inputValues.L = "ERROR";
              // return this.showBadNumberMessage(i, characters);

              break;

            case "I":
              // EEERROR: No se muy bien
              // this.inputValues.L = "ERROR";
              // return this.showBadNumberMessage(i, characters);

              break;

            case ")":
              // EEERROR: No se muy bien
              // this.inputValues.L = "ERROR";
              // return this.showBadNumberMessage(i, characters);

              break;

            case "▼":
              // SHIFT
              // this.inputValues.L = "T1";
              // this.arithmeticStack.push("L");

              break;

            default:
              break;
          }
          break;

        case ")":
          switch (this.arithmeticStack.peek()) {
            case "<E>":
              // SHIFT
              // this.inputValues.L = "ERROR";
              // return this.showBadNumberMessage(i, characters);

              break;

            case "<T>":
              // ID1
              // this.inputValues.L = "T21";
              // this.arithmeticStack.pop();
              // this.arithmeticStack.push("L");

              break;

            case "<P>":
              // ID3
              // this.inputValues.L = "ERROR";
              // return this.showBadNumberMessage(i, characters);

              break;

            case "+":
              // EEERROR: No se muy bien
              // this.inputValues.L = "ERROR";
              // return this.showBadNumberMessage(i, characters);

              break;

            case "*":
              // EEERROR: No se muy bien
              // this.inputValues.L = "ERROR";
              // return this.showBadNumberMessage(i, characters);

              break;

            case "(":
              // EEERROR: No se muy bien
              // this.inputValues.L = "ERROR";
              // return this.showBadNumberMessage(i, characters);

              break;

            case "I":
              // ID6
              // this.inputValues.L = "ERROR";
              // return this.showBadNumberMessage(i, characters);

              break;

            case ")":
              // ID5
              // this.inputValues.L = "ERROR";
              // return this.showBadNumberMessage(i, characters);

              break;

            case "▼":
              // EEERROR: No se muy bien
              // this.inputValues.L = "T1";
              // this.arithmeticStack.push("L");

              break;

            default:
              break;
          }
          break;

        case "┤":
          switch (this.arithmeticStack.peek()) {
            case "<E>":
              // ID0 --> identification #0
              if (this.arithmeticStack.usep().match(new RegExp("^▼<E>"))) {
                return [
                  characters.concat("┤"),
                  [],
                  getArithmeticExpResult(expression),
                  true,
                ];
              } else {
                return [
                  characters.concat("┤"),
                  ["No se ha llegado finalmente a ▼<E>, hilera inválida."],
                  "Syntax ERROR",
                  false,
                ];
              }

              // this.inputValues.L = "ERROR";
              // return this.showBadNumberMessage(i, characters);

              break;

            case "<T>":
              // ID1
              // this.inputValues.L = "T21";
              // this.arithmeticStack.pop();
              // this.arithmeticStack.push("L");

              break;

            case "<P>":
              // ID3
              // this.inputValues.L = "ERROR";
              // return this.showBadNumberMessage(i, characters);

              break;

            case "+":
              // EEERROR: No se muy bien
              // this.inputValues.L = "ERROR";
              // return this.showBadNumberMessage(i, characters);

              break;

            case "*":
              // EEERROR: No se muy bien
              // this.inputValues.L = "ERROR";
              // return this.showBadNumberMessage(i, characters);

              break;

            case "(":
              // EEERROR: No se muy bien
              // this.inputValues.L = "ERROR";
              // return this.showBadNumberMessage(i, characters);

              break;

            case "I":
              // ID6
              // this.inputValues.L = "ERROR";
              // return this.showBadNumberMessage(i, characters);

              break;

            case ")":
              // ID5
              // this.inputValues.L = "ERROR";
              // return this.showBadNumberMessage(i, characters);

              break;

            case "▼":
              // EEERROR: No se muy bien
              // this.inputValues.L = "T1";
              // this.arithmeticStack.push("L");

              break;

            default:
              break;
          }
          break;

        default:
          break;
      }
      i = i + 1;
    } while (computedCharacters[i] !== "┤");
    // return [romanNumber, decimalValue, true];
    return [characters.concat("┤"), [], "RESULT", true];
  }

  arithmeticExpressionHasValidCharacters(input) {
    const characters = input.replaceAll(" ", "");
    return characters
      .split("")
      .every((char) => this.isNumber(char) || this.isOperator(char));
  }
  isNumber = (char) => new RegExp(process.env.ARITHMETIC_OPERANDS).test(char);

  isOperator = (char) =>
    new RegExp(process.env.ARITHMETIC_OPERATORS).test(char);

  getArithmeticExpResult = (expression) => {
    return expression.replaceAll(" ", "");
  };

  operands = (characters) =>
    characters.split(/[-\\+\\*\\/\\(\\)]/).filter((number) => number);

  operators = (characters) =>
    characters.split(new RegExp(/[0-9]/)).filter((operator) => operator);
}

module.exports = ArithmeticUtils;
