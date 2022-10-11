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
    console.table({
      hola: this.arithmeticExpressionHasValidCharacters(characters),
    });
    const computedCharacters =
      this.getComputedArithmeticExpressionCharacters(characters).concat("┤");
    if (!this.arithmeticExpressionHasValidCharacters(characters)) {
      return [characters.concat("┤"), [], "Syntax ERROR", false];
    }

    let i = 0;
    do {
      console.table({
        computedCharacter: computedCharacters[i],
        computedCharacters,
        a: this.arithmeticStack.usep(),
      });
      switch (computedCharacters[i]) {
        case "+":
          switch (this.arithmeticStack.peek()) {
            case "<E>":
              // SHIFT
              this.arithmeticStack.push("+");

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
              // EEERROR: Se tienen dos + consecutivos
              return [
                characters.concat("┤"),
                [
                  "No se ha llegado finalmente a ▼<E>, hilera inválida [(<E>)].",
                ], // TODO
                "Arithmetic ERROR",
                false,
              ];

            case "*":
              // EEERROR: Se tiene un * seguido de un +
              return [
                characters.concat("┤"),
                [
                  "No se ha llegado finalmente a ▼<E>, hilera inválida [(<E>)].",
                ], // TODO
                "Arithmetic ERROR",
                false,
              ];

            case "(":
              // EEERROR: No se muy bien
              return [
                characters.concat("┤"),
                [
                  "No se ha llegado finalmente a ▼<E>, hilera inválida [(<E>)].",
                ], // TODO
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
                  [
                    "No se ha llegado finalmente a ▼<E>, hilera inválida [(<E>)].",
                  ], // TODO
                  "Arithmetic ERROR",
                  false,
                ];
              }

              break;

            case "▼":
              // EEERROR: No se muy bien
              return [
                characters.concat("┤"),
                [
                  "No se ha llegado finalmente a ▼<E>, hilera inválida [(<E>)].",
                ], // TODO
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
              // EEERROR: No se muy bien
              return [
                characters.concat("┤"),
                [
                  "No se ha llegado finalmente a ▼<E>, hilera inválida [(<E>)].",
                ], // TODO
                "Arithmetic ERROR",
                false,
              ];

            case "<T>":
              // SHIFT
              this.arithmeticStack.push("*");

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
              // EEERROR: No se muy bien
              return [
                characters.concat("┤"),
                [
                  "No se ha llegado finalmente a ▼<E>, hilera inválida [(<E>)].",
                ], // TODO
                "Arithmetic ERROR",
                false,
              ];

            case "*":
              // EEERROR: No se muy bien
              return [
                characters.concat("┤"),
                [
                  "No se ha llegado finalmente a ▼<E>, hilera inválida [(<E>)].",
                ], // TODO
                "Arithmetic ERROR",
                false,
              ];

            case "(":
              // EEERROR: No se muy bien
              return [
                characters.concat("┤"),
                [
                  "No se ha llegado finalmente a ▼<E>, hilera inválida [(<E>)].",
                ], // TODO
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
                  [
                    "No se ha llegado finalmente a ▼<E>, hilera inválida [(<E>)].",
                  ], // TODO
                  "Arithmetic ERROR",
                  false,
                ];
              }

              break;

            case "▼":
              // EEERROR: No se muy bien
              return [
                characters.concat("┤"),
                [
                  "No se ha llegado finalmente a ▼<E>, hilera inválida [(<E>)].",
                ], // TODO
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
              // EEERROR: No se muy bien
              return [
                characters.concat("┤"),
                [
                  "No se ha llegado finalmente a ▼<E>, hilera inválida [(<E>)].",
                ], // TODO
                "Arithmetic ERROR",
                false,
              ];

            case "<T>":
              // EEERROR: No se muy bien
              return [
                characters.concat("┤"),
                [
                  "No se ha llegado finalmente a ▼<E>, hilera inválida [(<E>)].",
                ], // TODO
                "Arithmetic ERROR",
                false,
              ];

            case "<P>":
              // EEERROR: No se muy bien
              return [
                characters.concat("┤"),
                [
                  "No se ha llegado finalmente a ▼<E>, hilera inválida [(<E>)].",
                ], // TODO
                "Arithmetic ERROR",
                false,
              ];

            case "+":
              // SHIFT
              this.arithmeticStack.push("(");

              break;

            case "*":
              // SHIFT
              this.arithmeticStack.push("(");

              break;

            case "(":
              // SHIFT
              this.arithmeticStack.push("(");
              break;

            case "I":
              // EEERROR: No se muy bien
              return [
                characters.concat("┤"),
                [
                  "No se ha llegado finalmente a ▼<E>, hilera inválida [(<E>)].",
                ], // TODO
                "Arithmetic ERROR",
                false,
              ];

            case ")":
              // EEERROR: No se muy bien
              return [
                characters.concat("┤"),
                [
                  "No se ha llegado finalmente a ▼<E>, hilera inválida [(<E>)].",
                ], // TODO
                "Arithmetic ERROR",
                false,
              ];

            case "▼":
              // SHIFT
              this.arithmeticStack.push("(");

              break;

            default:
              break;
          }
          break;

        case "I":
          switch (this.arithmeticStack.peek()) {
            case "<E>":
              // EEERROR: No se muy bien
              return [
                characters.concat("┤"),
                [
                  "No se ha llegado finalmente a ▼<E>, hilera inválida [(<E>)].",
                ], // TODO
                "Arithmetic ERROR",
                false,
              ];

            case "<T>":
              // EEERROR: No se muy bien
              return [
                characters.concat("┤"),
                [
                  "No se ha llegado finalmente a ▼<E>, hilera inválida [(<E>)].",
                ], // TODO
                "Arithmetic ERROR",
                false,
              ];

            case "<P>":
              // EEERROR: No se muy bien
              return [
                characters.concat("┤"),
                [
                  "No se ha llegado finalmente a ▼<E>, hilera inválida [(<E>)].",
                ], // TODO
                "Arithmetic ERROR",
                false,
              ];

            case "+":
              // SHIFT
              this.arithmeticStack.push("I");

              break;

            case "*":
              // SHIFT
              this.arithmeticStack.push("I");

              break;

            case "(":
              // SHIFT
              this.arithmeticStack.push("I");

              break;

            case "I":
              // EEERROR: No se muy bien
              return [
                characters.concat("┤"),
                [
                  "No se ha llegado finalmente a ▼<E>, hilera inválida [(<E>)].",
                ], // TODO
                "Arithmetic ERROR",
                false,
              ];

            case ")":
              // EEERROR: No se muy bien
              return [
                characters.concat("┤"),
                [
                  "No se ha llegado finalmente a ▼<E>, hilera inválida [(<E>)].",
                ], // TODO
                "Arithmetic ERROR",
                false,
              ];

            case "▼":
              // SHIFT
              this.arithmeticStack.push("I");

              break;

            default:
              break;
          }
          break;

        case ")":
          switch (this.arithmeticStack.peek()) {
            case "<E>":
              // SHIFT
              this.arithmeticStack.push(")");

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
              // EEERROR: No se muy bien
              return [
                characters.concat("┤"),
                [
                  "No se ha llegado finalmente a ▼<E>, hilera inválida [(<E>)].",
                ], // TODO
                "Arithmetic ERROR",
                false,
              ];

            case "*":
              // EEERROR: No se muy bien
              return [
                characters.concat("┤"),
                [
                  "No se ha llegado finalmente a ▼<E>, hilera inválida [(<E>)].",
                ], // TODO
                "Arithmetic ERROR",
                false,
              ];

            case "(":
              // EEERROR: No se muy bien
              return [
                characters.concat("┤"),
                [
                  "No se ha llegado finalmente a ▼<E>, hilera inválida [(<E>)].",
                ], // TODO
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
                  [
                    "No se ha llegado finalmente a ▼<E>, hilera inválida [(<E>)].",
                  ], // TODO
                  "Arithmetic ERROR",
                  false,
                ];
              }

              break;

            case "▼":
              // EEERROR: No se muy bien
              return [
                characters.concat("┤"),
                [
                  "No se ha llegado finalmente a ▼<E>, hilera inválida [(<E>)].",
                ], // TODO
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
                  ["No se ha llegado finalmente a ▼<E>, hilera inválida."], // TODO
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
              // EEERROR: No se muy bien
              return [
                characters.concat("┤"),
                [
                  "No se ha llegado finalmente a ▼<E>, hilera inválida [(<E>)].",
                ], // TODO
                "Arithmetic ERROR",
                false,
              ];

            case "*":
              // EEERROR: No se muy bien
              return [
                characters.concat("┤"),
                [
                  "No se ha llegado finalmente a ▼<E>, hilera inválida [(<E>)].",
                ], // TODO
                "Arithmetic ERROR",
                false,
              ];

            case "(":
              // EEERROR: No se muy bien
              return [
                characters.concat("┤"),
                [
                  "No se ha llegado finalmente a ▼<E>, hilera inválida [(<E>)].",
                ], // TODO
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
                  [
                    "No se ha llegado finalmente a ▼<E>, hilera inválida [(<E>)].",
                  ], // TODO
                  "Arithmetic ERROR",
                  false,
                ];
              }

              break;

            case "▼":
              // EEERROR: No se muy bien
              return [
                characters.concat("┤"),
                [
                  "No se ha llegado finalmente a ▼<E>, hilera inválida [(<E>)].",
                ], // TODO
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
      i = i + 1;
    } while (computedCharacters[i] !== "┤");
    // return [romanNumber, decimalValue, true];
    return [
      characters.concat("┤"),
      [],
      this.getArithmeticExpResult(characters, -1),
      true,
    ];
  }

  arithmeticExpressionHasValidCharacters(input) {
    const characters = input.replaceAll(" ", "");
    return characters
      .split("")
      .every((char) => this.isNumber(char) || this.isOperator(char));
  }

  isNumber = (char) => new RegExp(/[0-9]/).test(char);

  isOperator = (char) => new RegExp(/[-\\+\\*\\/\\(\\)]/).test(char);

  reduce1() {
    console.log("reduce1");
    this.arithmeticStack.pop();
    this.arithmeticStack.pop();
    this.arithmeticStack.pop();
    this.arithmeticStack.push("<E>");
  }

  reduce2() {
    console.log("reduce2");
    this.arithmeticStack.pop();
    this.arithmeticStack.push("<E>");
  }

  reduce3() {
    console.log("reduce3");
    this.arithmeticStack.pop();
    this.arithmeticStack.pop();
    this.arithmeticStack.pop();
    this.arithmeticStack.push("<T>");
  }

  reduce4() {
    console.log("reduce4");
    this.arithmeticStack.pop();
    this.arithmeticStack.push("<T>");
  }

  reduce5() {
    console.log("reduce5");
    this.arithmeticStack.pop();
    this.arithmeticStack.pop();
    this.arithmeticStack.pop();
    this.arithmeticStack.push("<P>");
  }

  reduce6() {
    console.log("reduce6");
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
