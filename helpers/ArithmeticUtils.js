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
      .split(/[0-9]*/)
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
      return [
        characters.concat("┤"),
        ["Invalid characters"],
        "Syntax ERROR",
        false,
      ];
    }

    let i = 0;
    do {
      switch (computedCharacters[i]) {
        case "+":
          switch (this.arithmeticStack.peek()) {
            case "<E>":
              // SHIFT
              console.log(` SHIFT: APILE '+', AVANCE `.bgGreen);
              this.arithmeticStack.push("+");
              i++;

              break;

            case "<T>":
              // ID1
              if (this.arithmeticStack.usep().match(new RegExp("<E>+<T>$"))) {
                this.reduce1();
              } else {
                this.reduce2();
              }

              break;

            case "<P>":
              // ID3
              if (this.arithmeticStack.usep().match(new RegExp("<T>*<P>$"))) {
                this.reduce3();
              } else {
                this.reduce4();
              }

              break;

            case "+":
              // ERROR
              return [
                characters.concat("┤"),
                [`Error at position ${i + 1}, invalid '+' sign.`.bgRed],
                "Arithmetic ERROR",
                false,
              ];

            case "*":
              // ERROR
              return [
                characters.concat("┤"),
                [`Error at position ${i + 1}, invalid '+' sign.`.bgRed],
                "Arithmetic ERROR",
                false,
              ];

            case "(":
              // ERROR
              return [
                characters.concat("┤"),
                [`Error at position ${i + 1}, invalid '+' sign.`.bgRed],
                "Arithmetic ERROR",
                false,
              ];

            case "I":
              // ID6
              this.reduce6();

              break;

            case ")":
              // ID5
              if (this.arithmeticStack.usep().match(new RegExp("(<E>)$"))) {
                this.reduce5();
              } else {
                // RECHACE
                return [
                  characters.concat("┤"),
                  [`Error at position ${i + 1}, invalid '+' sign.`.bgRed],
                  "Arithmetic ERROR",
                  false,
                ];
              }

              break;

            case "▼":
              // ERROR
              return [
                characters.concat("┤"),
                [`Error at position ${i + 1}, invalid '+' sign.`.bgRed],
                "Arithmetic ERROR",
                false,
              ];

            default:
              break;
          }
          break;

        case "*":
          switch (this.arithmeticStack.peek()) {
            case "<E>":
              // ERROR
              return [
                characters.concat("┤"),
                [`Error at position ${i + 1}, invalid '*' sign.`.bgRed],
                "Arithmetic ERROR",
                false,
              ];

            case "<T>":
              // SHIFT
              console.log(` SHIFT: APILE '*', AVANCE `.bgGreen);
              this.arithmeticStack.push("*");
              i++;
              break;

            case "<P>":
              // ID3
              if (this.arithmeticStack.usep().match(new RegExp("<T>*<P>$"))) {
                this.reduce3();
              } else {
                this.reduce4();
              }

              break;

            case "+":
              // ERROR
              return [
                characters.concat("┤"),
                [`Error at position ${i + 1}, invalid '*' sign.`.bgRed],
                "Arithmetic ERROR",
                false,
              ];

            case "*":
              // ERROR
              return [
                characters.concat("┤"),
                [`Error at position ${i + 1}, invalid '*' sign.`.bgRed],
                "Arithmetic ERROR",
                false,
              ];

            case "(":
              // ERROR
              return [
                characters.concat("┤"),
                [`Error at position ${i + 1}, invalid '*' sign.`.bgRed],
                "Arithmetic ERROR",
                false,
              ];

            case "I":
              // ID6
              this.reduce6();

              break;

            case ")":
              // ID5
              if (this.arithmeticStack.usep().match(new RegExp("(<E>)$"))) {
                this.reduce5();
              } else {
                // RECHACE
                return [
                  characters.concat("┤"),
                  [`Error at position ${i + 1}, invalid '*' sign.`.bgRed],
                  "Arithmetic ERROR",
                  false,
                ];
              }

              break;

            case "▼":
              // ERROR
              return [
                characters.concat("┤"),
                [`Error at position ${i + 1}, invalid '*' sign.`.bgRed],
                "Arithmetic ERROR",
                false,
              ];

            default:
              break;
          }
          break;

        case "(":
          switch (this.arithmeticStack.peek()) {
            case "<E>":
              // ERROR
              return [
                characters.concat("┤"),
                [`Error at position ${i + 1}, invalid '(' sign.`.bgRed],
                "Arithmetic ERROR",
                false,
              ];

            case "<T>":
              // ERROR
              return [
                characters.concat("┤"),
                [`Error at position ${i + 1}, invalid '(' sign.`.bgRed],
                "Arithmetic ERROR",
                false,
              ];

            case "<P>":
              // ERROR
              return [
                characters.concat("┤"),
                [`Error at position ${i + 1}, invalid '(' sign.`.bgRed],
                "Arithmetic ERROR",
                false,
              ];

            case "+":
              // SHIFT
              console.log(` SHIFT: APILE '(', AVANCE `.bgGreen);
              this.arithmeticStack.push("(");
              i++;
              break;

            case "*":
              // SHIFT
              console.log(` SHIFT: APILE '(', AVANCE `.bgGreen);
              this.arithmeticStack.push("(");
              i++;
              break;

            case "(":
              // SHIFT
              console.log(` SHIFT: APILE '(', AVANCE `.bgGreen);
              this.arithmeticStack.push("(");
              i++;
              break;

            case "I":
              // ERROR
              return [
                characters.concat("┤"),
                [`Error at position ${i + 1}, invalid '(' sign.`.bgRed],
                "Arithmetic ERROR",
                false,
              ];

            case ")":
              // ERROR
              return [
                characters.concat("┤"),
                [`Error at position ${i + 1}, invalid '(' sign.`.bgRed],
                "Arithmetic ERROR",
                false,
              ];

            case "▼":
              // SHIFT
              console.log(` SHIFT: APILE '(', AVANCE `.bgGreen);
              this.arithmeticStack.push("(");
              i++;
              break;

            default:
              break;
          }
          break;

        case "I":
          switch (this.arithmeticStack.peek()) {
            case "<E>":
              // ERROR
              return [
                characters.concat("┤"),
                [`Error at position ${i + 1}, invalid 'I' sign.`.bgRed],
                "Arithmetic ERROR",
                false,
              ];

            case "<T>":
              // ERROR
              return [
                characters.concat("┤"),
                [`Error at position ${i + 1}, invalid 'I' sign.`.bgRed],
                "Arithmetic ERROR",
                false,
              ];

            case "<P>":
              // ERROR
              return [
                characters.concat("┤"),
                [`Error at position ${i + 1}, invalid 'I' sign.`.bgRed],
                "Arithmetic ERROR",
                false,
              ];

            case "+":
              // SHIFT
              console.log(` SHIFT: APILE 'I', AVANCE `.bgGreen);
              this.arithmeticStack.push("I");
              i++;
              break;

            case "*":
              // SHIFT
              console.log(` SHIFT: APILE 'I', AVANCE `.bgGreen);
              this.arithmeticStack.push("I");
              i++;
              break;

            case "(":
              // SHIFT
              console.log(` SHIFT: APILE 'I', AVANCE `.bgGreen);
              this.arithmeticStack.push("I");
              i++;
              break;

            case "I":
              // ERROR
              return [
                characters.concat("┤"),
                [`Error at position ${i + 1}, invalid 'I' sign.`.bgRed],
                "Arithmetic ERROR",
                false,
              ];

            case ")":
              // ERROR
              return [
                characters.concat("┤"),
                [`Error at position ${i + 1}, invalid 'I' sign.`.bgRed],
                "Arithmetic ERROR",
                false,
              ];

            case "▼":
              // SHIFT
              console.log(` SHIFT: APILE 'I', AVANCE `.bgGreen);
              this.arithmeticStack.push("I");
              i++;
              break;

            default:
              break;
          }
          break;

        case ")":
          switch (this.arithmeticStack.peek()) {
            case "<E>":
              // SHIFT
              console.log(` SHIFT: APILE ')', AVANCE `.bgGreen);
              this.arithmeticStack.push(")");
              i++;
              break;

            case "<T>":
              // ID1
              if (this.arithmeticStack.usep().match(new RegExp("<E>+<T>$"))) {
                this.reduce1();
              } else {
                this.reduce2();
              }

              break;

            case "<P>":
              // ID3
              if (this.arithmeticStack.usep().match(new RegExp("<T>*<P>$"))) {
                this.reduce3();
              } else {
                this.reduce4();
              }

              break;

            case "+":
              // ERROR
              return [
                characters.concat("┤"),
                [`Error at position ${i + 1}, invalid ')' sign.`.bgRed],
                "Arithmetic ERROR",
                false,
              ];

            case "*":
              // ERROR
              return [
                characters.concat("┤"),
                [`Error at position ${i + 1}, invalid ')' sign.`.bgRed],
                "Arithmetic ERROR",
                false,
              ];

            case "(":
              // ERROR
              return [
                characters.concat("┤"),
                [`Error at position ${i + 1}, invalid ')' sign.`.bgRed],
                "Arithmetic ERROR",
                false,
              ];

            case "I":
              // ID6
              this.reduce6();

              break;

            case ")":
              // ID5
              if (this.arithmeticStack.usep().match(new RegExp("(<E>)$"))) {
                this.reduce5();
              } else {
                // RECHACE
                return [
                  characters.concat("┤"),
                  [`Error at position ${i + 1}, invalid ')' sign.`.bgRed],
                  "Arithmetic ERROR",
                  false,
                ];
              }

              break;

            case "▼":
              // ERROR
              return [
                characters.concat("┤"),
                [`Error at position ${i + 1}, invalid ')' sign.`.bgRed],
                "Arithmetic ERROR",
                false,
              ];

            default:
              break;
          }
          break;

        case "┤":
          switch (this.arithmeticStack.peek()) {
            case "<E>":
              // ID0 --> identification #0
              if (this.arithmeticStack.usep().match(new RegExp("▼<E>$"))) {
                // ACEPTE
                return [
                  characters.concat("┤"),
                  [],
                  this.getArithmeticExpResult(characters, 1),
                  true,
                ];
              } else {
                // RECHACE
                return [
                  characters.concat("┤"),
                  [`Error at position ${i + 1}, invalid '┤' sign.`.bgRed],
                  "Arithmetic ERROR",
                  false,
                ];
              }

            case "<T>":
              // ID1
              if (this.arithmeticStack.usep().match(new RegExp("<E>+<T>$"))) {
                this.reduce1();
              } else {
                this.reduce2();
              }

              break;

            case "<P>":
              // ID3
              if (this.arithmeticStack.usep().match(new RegExp("<T>*<P>$"))) {
                this.reduce3();
              } else {
                this.reduce4();
              }

              break;

            case "+":
              // ERROR
              return [
                characters.concat("┤"),
                [`Error at position ${i + 1}, invalid '┤' sign.`.bgRed],
                "Arithmetic ERROR",
                false,
              ];

            case "*":
              // ERROR
              return [
                characters.concat("┤"),
                [`Error at position ${i + 1}, invalid '┤' sign.`.bgRed],
                "Arithmetic ERROR",
                false,
              ];

            case "(":
              // ERROR
              return [
                characters.concat("┤"),
                [`Error at position ${i + 1}, invalid '┤' sign.`.bgRed],
                "Arithmetic ERROR",
                false,
              ];

            case "I":
              // ID6
              this.reduce6();

              break;

            case ")":
              // ID5
              if (this.arithmeticStack.usep().match(new RegExp("(<E>)$"))) {
                this.reduce5();
              } else {
                // RECHACE
                return [
                  characters.concat("┤"),
                  [`Error at position ${i + 1}, invalid '┤' sign.`.bgRed],
                  "Arithmetic ERROR",
                  false,
                ];
              }

              break;

            case "▼":
              // ERROR
              return [
                characters.concat("┤"),
                [`Error at position ${i + 1}, invalid '┤' sign.`.bgRed],
                "Arithmetic ERROR",
                false,
              ];

            default:
              break;
          }
          break;

        default:
          break;
      }
    } while (computedCharacters[i] !== "┤");
    return [
      characters.concat("┤"),
      [],
      this.getArithmeticExpResult(characters, -1),
      true,
    ];
  }

  arithmeticExpressionHasValidCharacters(input) {
    const characters = input.replaceAll(" ", "");
    return (
      characters
        .split("")
        .every((char) => this.isNumber(char) || this.isOperator(char)) &&
      !this.hasRepeatedOperators(characters)
    );
  }

  hasRepeatedOperators = (characters) => {
    const value = characters
      .replaceAll(" ", "")
      .replaceAll("-", "+")
      .replaceAll("/", "*");

    return (
      value.match("\\+\\+") ||
      value.match("\\*\\*") ||
      value.match("\\+\\*") ||
      value.match("\\*\\*") ||
      value.match("^\\+") ||
      value.match("^\\*") ||
      value.match("\\+$") ||
      value.match("\\*$")
    );
  };

  isNumber = (char) => new RegExp(/[0-9]/).test(char);

  isOperator = (char) => new RegExp(/[-\\+\\*\\/\\(\\)]/).test(char);

  reduce1() {
    console.log(" REDUCE #1: DESAPILE (3), APILE '<E>', RETENGA ".bgGreen);
    this.arithmeticStack.pop();
    this.arithmeticStack.pop();
    this.arithmeticStack.pop();
    this.arithmeticStack.push("<E>");
  }

  reduce2() {
    console.log(" REDUCE #2: DESAPILE (1), APILE '<E>', RETENGA ".bgGreen);
    this.arithmeticStack.pop();
    this.arithmeticStack.push("<E>");
  }

  reduce3() {
    console.log(" REDUCE #3: DESAPILE (3), APILE '<T>', RETENGA ".bgGreen);
    this.arithmeticStack.pop();
    this.arithmeticStack.pop();
    this.arithmeticStack.pop();
    this.arithmeticStack.push("<T>");
  }

  reduce4() {
    console.log(" REDUCE #4: DESAPILE (1), APILE '<T>', RETENGA ".bgGreen);
    this.arithmeticStack.pop();
    this.arithmeticStack.push("<T>");
  }

  reduce5() {
    console.log(" REDUCE #5: DESAPILE (3), APILE '<P>', RETENGA ".bgGreen);
    this.arithmeticStack.pop();
    this.arithmeticStack.pop();
    this.arithmeticStack.pop();
    this.arithmeticStack.push("<P>");
  }

  reduce6() {
    console.log(" REDUCE #6: DESAPILE (1), APILE '<P>', RETENGA ".bgGreen);
    this.arithmeticStack.pop();
    this.arithmeticStack.push("<P>");
  }

  getArithmeticExpResult = (_expression, res) => {
    //return expression.replaceAll(" ", "");
    return Number(res);
  };

  operands = (characters) =>
    characters.split(/[-\\+\\*\\/\\(\\)]/).filter((number) => number);

  operators = (characters) =>
    characters.split(new RegExp(/[0-9]/)).filter((operator) => operator);
}

module.exports = ArithmeticUtils;
