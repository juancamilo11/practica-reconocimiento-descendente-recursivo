const ArithmeticExpStack = require("./ArithmeticStack");
require("colors");

class ArithmeticUtils {
  constructor() {
    this.arithmeticQueue = new ArithmeticExpStack();

    this.state = "▼"; // ▼ is the initial state
    this.inputValues = { L: "", X: "", V: "", I: "" };
  }

  getComputedArithmeticExpressionCharacters(characters) {
    return characters.trim().replaceAll(" ", "");
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
      this.getComputedArithmeticExpressionCharacters(characters);
    if (!this.arithmeticExpressionHasValidCharacters(computedCharacters)) {
      console.log(
        "ERROR: Llegamos hasta aquí: ".bgRed + characters.concat("┤")
      );
      return [characters.concat("┤"), "Invalid", false];
    }

    console.log(
      "EXITO: Llegamos hasta aquí: ".bgGreen + characters.concat("┤")
    );

    let i = 0;
    do {
      switch (characters[i]) {
        case "L":
          switch (this.arithmeticQueue.peek()) {
            case "L":
              if (this.state === "S1") {
                this.state = "S1";
                this.inputValues.L = "ERROR";
                return this.showBadNumberMessage(i, characters);
              } else if (this.state === "S2") {
                this.state = "S2";
                this.inputValues.L = "ERROR";
                return this.showBadNumberMessage(i, characters);
              } else if (this.state === "S3") {
                this.state = "S3";
                this.inputValues.L = "ERROR";
                return this.showBadNumberMessage(i, characters);
              }
              break;

            case "X1":
              if (this.state === "S1") {
                this.state = "S3";
                this.inputValues.L = "T21";
                this.arithmeticQueue.pop();
                this.arithmeticQueue.push("L");
              } else if (this.state === "S2") {
                this.state = "S2";
                this.inputValues.L = "ERROR";
                return this.showBadNumberMessage(i, characters);
              } else if (this.state === "S3") {
                this.state = "S3";
                this.inputValues.L = "ERROR";
                return this.showBadNumberMessage(i, characters);
              }
              break;

            case "X2":
              if (this.state === "S1") {
                this.state = "S1";
                this.inputValues.L = "ERROR";
                return this.showBadNumberMessage(i, characters);
              } else if (this.state === "S2") {
                this.state = "S2";
                this.inputValues.L = "ERROR";
                return showBadNumberMessage(i, characters);
              } else if (this.state === "S3") {
                this.state = "S3";
                this.inputValues.L = "ERROR";
                return showBadNumberMessage(i, characters);
              }
              break;

            case "X3":
              if (this.state === "S1") {
                this.state = "S1";
                this.inputValues.L = "ERROR";
                return this.showBadNumberMessage(i, characters);
              } else if (this.state === "S2") {
                this.state = "S2";
                this.inputValues.L = "ERROR";
                return showBadNumberMessage(i, characters);
              } else if (this.state === "S3") {
                this.state = "S3";
                this.inputValues.L = "ERROR";
                return showBadNumberMessage(i, characters);
              }
              break;

            case "V":
              if (this.state === "S1") {
                this.state = "S1";
                this.inputValues.L = "ERROR";
                return this.showBadNumberMessage(i, characters);
              } else if (this.state === "S2") {
                this.state = "S2";
                this.inputValues.L = "ERROR";
                return showBadNumberMessage(i, characters);
              } else if (this.state === "S3") {
                this.state = "S3";
                this.inputValues.L = "ERROR";
                return showBadNumberMessage(i, characters);
              }
              break;

            case "I1":
              if (this.state === "S1") {
                this.state = "S1";
                this.inputValues.L = "ERROR";
                return this.showBadNumberMessage(i, characters);
              } else if (this.state === "S2") {
                this.state = "S2";
                this.inputValues.L = "ERROR";
                return showBadNumberMessage(i, characters);
              } else if (this.state === "S3") {
                this.state = "S3";
                this.inputValues.L = "ERROR";
                return showBadNumberMessage(i, characters);
              }
              break;

            case "I2":
              if (this.state === "S1") {
                this.state = "S1";
                this.inputValues.L = "ERROR";
                return this.showBadNumberMessage(i, characters);
              } else if (this.state === "S2") {
                this.state = "S2";
                this.inputValues.L = "ERROR";
                return showBadNumberMessage(i, characters);
              } else if (this.state === "S3") {
                this.state = "S3";
                this.inputValues.L = "ERROR";
                return showBadNumberMessage(i, characters);
              }
              break;

            case "I3":
              if (this.state === "S1") {
                this.state = "S1";
                this.inputValues.L = "ERROR";
                return this.showBadNumberMessage(i, characters);
              } else if (this.state === "S2") {
                this.state = "S2";
                this.inputValues.L = "ERROR";
                return showBadNumberMessage(i, characters);
              } else if (this.state === "S3") {
                this.state = "S3";
                this.inputValues.L = "ERROR";
                return showBadNumberMessage(i, characters);
              }
              break;

            case "▼":
              if (this.state === "S1") {
                this.state = "S3";
                this.inputValues.L = "T1";
                this.arithmeticQueue.push("L");
              } else if (this.state === "S2") {
                this.state = "S2";
                this.inputValues.L = "ERROR";
                return this.showBadNumberMessage(i, characters);
              } else if (this.state === "S3") {
                this.state = "S3";
                this.inputValues.L = "ERROR";
                return showBadNumberMessage(i, characters);
              }
              break;

            default:
              break;
          }
          break;

        case "X":
          switch (this.arithmeticQueue.peek()) {
            case "L":
              if (this.state === "S1") {
                this.state = "S1";
                this.inputValues.X = "ERROR";
                return this.showBadNumberMessage(i, characters);
              } else if (this.state === "S2") {
                this.state = "S2";
                this.inputValues.X = "ERROR";
                return this.showBadNumberMessage(i, characters);
              } else if (this.state === "S3") {
                this.state = "S3";
                this.inputValues.X = "T2";
                this.arithmeticQueue.pop();
                this.arithmeticQueue.push("X1");
              }
              break;

            case "X1":
              if (this.state === "S1") {
                this.state = "S1";
                this.inputValues.X = "T22";
                this.arithmeticQueue.pop();
                this.arithmeticQueue.push("X2");
              } else if (this.state === "S2") {
                this.state = "S2";
                this.inputValues.X = "ERROR";
                return this.showBadNumberMessage(i, characters);
              } else if (this.state === "S3") {
                this.state = "S3";
                this.inputValues.X = "T3";
                this.arithmeticQueue.pop();
                this.arithmeticQueue.push("X2");
              }
              break;

            case "X2":
              if (this.state === "S1") {
                this.state = "S1";
                this.inputValues.X = "T25";
                this.arithmeticQueue.pop();
                this.arithmeticQueue.push("X3");
              } else if (this.state === "S2") {
                this.state = "S2";
                this.inputValues.X = "ERROR";
                return this.showBadNumberMessage(i, characters);
              } else if (this.state === "S3") {
                this.state = "S3";
                this.inputValues.X = "T4";
                this.arithmeticQueue.pop();
                this.arithmeticQueue.push("X3");
              }
              break;

            case "X3":
              if (this.state === "S1") {
                this.state = "S1";
                this.inputValues.X = "ERROR";
                return this.showBadNumberMessage(i, characters);
              } else if (this.state === "S2") {
                this.state = "S2";
                this.inputValues.X = "ERROR";
                return this.showBadNumberMessage(i, characters);
              } else if (this.state === "S3") {
                this.state = "S3";
                this.inputValues.X = "ERROR";
                return showBadNumberMessage(i, characters);
              }
              break;

            case "V":
              if (this.state === "S1") {
                this.state = "S1";
                this.inputValues.X = "ERROR";
                return this.showBadNumberMessage(i, characters);
              } else if (this.state === "S2") {
                this.state = "S2";
                this.inputValues.X = "ERROR";
                return this.showBadNumberMessage(i, characters);
              } else if (this.state === "S3") {
                this.state = "S3";
                this.inputValues.X = "ERROR";
                return showBadNumberMessage(i, characters);
              }
              break;

            case "I1":
              if (this.state === "S1") {
                this.state = "S2";
                this.inputValues.X = "T12";
                this.arithmeticQueue.pop();
                this.arithmeticQueue.push("X1");
              } else if (this.state === "S2") {
                this.state = "S2";
                this.inputValues.X = "ERROR";
                return this.showBadNumberMessage(i, characters);
              } else if (this.state === "S3") {
                this.state = "S2";
                this.inputValues.X = "T12";
                this.arithmeticQueue.pop();
                this.arithmeticQueue.push("X1");
              }
              break;

            case "I2":
              if (this.state === "S1") {
                this.state = "S1";
                this.inputValues.X = "ERROR";
                return this.showBadNumberMessage(i, characters);
              } else if (this.state === "S2") {
                this.state = "S2";
                this.inputValues.X = "ERROR";
                return this.showBadNumberMessage(i, characters);
              } else if (this.state === "S3") {
                this.state = "S3";
                this.inputValues.X = "ERROR";
                return showBadNumberMessage(i, characters);
              }
              break;

            case "I3":
              if (this.state === "S1") {
                this.state = "S1";
                this.inputValues.X = "ERROR";
                return this.showBadNumberMessage(i, characters);
              } else if (this.state === "S2") {
                this.state = "S2";
                this.inputValues.X = "ERROR";
                return this.showBadNumberMessage(i, characters);
              } else if (this.state === "S3") {
                this.state = "S3";
                this.inputValues.X = "ERROR";
                return showBadNumberMessage(i, characters);
              }
              break;

            case "▼":
              if (this.state === "S1") {
                this.state = "S1";
                this.inputValues.X = "T9";
                this.arithmeticQueue.push("X1");
              } else if (this.state === "S2") {
                this.state = "S2";
                this.inputValues.X = "ERROR";
                return this.showBadNumberMessage(i, characters);
              } else if (this.state === "S3") {
                this.state = "S3";
                this.inputValues.X = "ERROR";
                return showBadNumberMessage(i, characters);
              }
              break;

            default:
              break;
          }
          break;

        case "V":
          switch (this.arithmeticQueue.peek()) {
            case "L":
              if (this.state === "S1") {
                this.state = "S1";
                this.inputValues.V = "ERROR";
                return this.showBadNumberMessage(i, characters);
              } else if (this.state === "S2") {
                this.state = "S2";
                this.inputValues.V = "ERROR";
                return this.showBadNumberMessage(i, characters);
              } else if (this.state === "S3") {
                this.state = "S3";
                this.inputValues.V = "T5";
                this.arithmeticQueue.pop();
                this.arithmeticQueue.push("V");
              }
              break;

            case "X1":
              if (this.state === "S1") {
                this.state = "S1";
                this.inputValues.V = "T23";
                this.arithmeticQueue.pop();
                this.arithmeticQueue.push("V");
              } else if (this.state === "S2") {
                this.state = "S2";
                this.inputValues.V = "ERROR";
                return this.showBadNumberMessage(i, characters);
              } else if (this.state === "S3") {
                this.state = "S3";
                this.inputValues.V = "T6";
                this.arithmeticQueue.pop();
                this.arithmeticQueue.push("V");
              }
              break;

            case "X2":
              if (this.state === "S1") {
                this.state = "S1";
                this.inputValues.V = "T26";
                this.arithmeticQueue.pop();
                this.arithmeticQueue.push("V");
              } else if (this.state === "S2") {
                this.state = "S2";
                this.inputValues.V = "ERROR";
                return this.showBadNumberMessage(i, characters);
              } else if (this.state === "S3") {
                this.state = "S3";
                this.inputValues.V = "T7";
                this.arithmeticQueue.pop();
                this.arithmeticQueue.push("V");
              }
              break;

            case "X3":
              if (this.state === "S1") {
                this.state = "S1";
                this.inputValues.V = "T28";
                this.arithmeticQueue.pop();
                this.arithmeticQueue.push("V");
              } else if (this.state === "S2") {
                this.state = "S2";
                this.inputValues.V = "ERROR";
                return this.showBadNumberMessage(i, characters);
              } else if (this.state === "S3") {
                this.state = "S3";
                this.inputValues.V = "T8";
                this.arithmeticQueue.pop();
                this.arithmeticQueue.push("V");
              }
              break;

            case "V":
              if (this.state === "S1") {
                this.state = "S1";
                this.inputValues.V = "ERROR";
                return this.showBadNumberMessage(i, characters);
              } else if (this.state === "S2") {
                this.state = "S2";
                this.inputValues.V = "ERROR";
                return this.showBadNumberMessage(i, characters);
              } else if (this.state === "S3") {
                this.state = "S3";
                this.inputValues.V = "ERROR";
                return showBadNumberMessage(i, characters);
              }
              break;
            case "I1":
              if (this.state === "S1") {
                this.state = "S2";
                this.inputValues.V = "T13";
                this.arithmeticQueue.pop();
                this.arithmeticQueue.push("V");
              } else if (this.state === "S2") {
                this.state = "S2";
                this.inputValues.V = "ERROR";
                return this.showBadNumberMessage(i, characters);
              } else if (this.state === "S3") {
                this.state = "S2";
                this.inputValues.V = "T13";
                this.arithmeticQueue.pop();
                this.arithmeticQueue.push("V");
              }
              break;

            case "I2":
              if (this.state === "S1") {
                this.state = "S1";
                this.inputValues.V = "ERROR";
                return this.showBadNumberMessage(i, characters);
              } else if (this.state === "S2") {
                this.state = "S2";
                this.inputValues.V = "ERROR";
                return this.showBadNumberMessage(i, characters);
              } else if (this.state === "S3") {
                this.state = "S3";
                this.inputValues.V = "ERROR";
                return showBadNumberMessage(i, characters);
              }
              break;
            case "I3":
              if (this.state === "S1") {
                this.state = "S1";
                this.inputValues.V = "ERROR";
                return this.showBadNumberMessage(i, characters);
              } else if (this.state === "S2") {
                this.state = "S2";
                this.inputValues.V = "ERROR";
                return this.showBadNumberMessage(i, characters);
              } else if (this.state === "S3") {
                this.state = "S3";
                this.inputValues.V = "ERROR";
                return showBadNumberMessage(i, characters);
              }
              break;
            case "▼":
              if (this.state === "S1") {
                this.state = "S1";
                this.inputValues.V = "T10";
                this.arithmeticQueue.push("V");
              } else if (this.state === "S2") {
                this.state = "S2";
                this.inputValues.V = "ERROR";
                return this.showBadNumberMessage(i, characters);
              } else if (this.state === "S3") {
                this.state = "S3";
                this.inputValues.V = "ERROR";
                return showBadNumberMessage(i, characters);
              }
              break;

            default:
              break;
          }
          break;

        case "I":
          switch (this.arithmeticQueue.peek()) {
            case "L":
              if (this.state === "S1") {
                this.state = "S1";
                this.inputValues.I = "ERROR";
                return this.showBadNumberMessage(i, characters);
              } else if (this.state === "S2") {
                this.state = "S2";
                this.inputValues.I = "ERROR";
                return this.showBadNumberMessage(i, characters);
              } else if (this.state === "S3") {
                this.state = "S3";
                this.inputValues.I = "T16";
                this.arithmeticQueue.pop();
                this.arithmeticQueue.push("I1");
              }
              break;

            case "X1":
              if (this.state === "S1") {
                this.state = "S1";
                this.inputValues.I = "T24";
                this.arithmeticQueue.pop();
                this.arithmeticQueue.push("I1");
              } else if (this.state === "S2") {
                this.state = "S2";
                this.inputValues.I = "ERROR";
                return this.showBadNumberMessage(i, characters);
              } else if (this.state === "S3") {
                this.state = "S3";
                this.inputValues.I = "T17";
                this.arithmeticQueue.pop();
                this.arithmeticQueue.push("I1");
              }
              break;

            case "X2":
              if (this.state === "S1") {
                this.state = "S1";
                this.inputValues.I = "T27";
                this.arithmeticQueue.pop();
                this.arithmeticQueue.push("I1");
              } else if (this.state === "S2") {
                this.state = "S2";
                this.inputValues.I = "ERROR";
                return this.showBadNumberMessage(i, characters);
              } else if (this.state === "S3") {
                this.state = "S3";
                this.inputValues.I = "T18";
                this.arithmeticQueue.pop();
                this.arithmeticQueue.push("I1");
              }
              break;

            case "X3":
              if (this.state === "S1") {
                this.state = "S1";
                this.inputValues.I = "T29";
                this.arithmeticQueue.pop();
                this.arithmeticQueue.push("I1");
              } else if (this.state === "S2") {
                this.state = "S2";
                this.inputValues.I = "ERROR";
                return this.showBadNumberMessage(i, characters);
              } else if (this.state === "S3") {
                this.state = "S3";
                this.inputValues.I = "T19";
                this.arithmeticQueue.pop();
                this.arithmeticQueue.push("I1");
              }
              break;

            case "V":
              if (this.state === "S1") {
                this.state = "S1";
                this.inputValues.I = "T30";
                this.arithmeticQueue.pop();
                this.arithmeticQueue.push("I1");
              } else if (this.state === "S2") {
                this.state = "S2";
                this.inputValues.I = "ERROR";
                return this.showBadNumberMessage(i, characters);
              } else if (this.state === "S3") {
                this.state = "S3";
                this.inputValues.I = "T20";
                this.arithmeticQueue.pop();
                this.arithmeticQueue.push("I1");
              }
              break;

            case "I1":
              if (this.state === "S1") {
                this.state = "S1";
                this.inputValues.I = "T31";
                this.arithmeticQueue.pop();
                this.arithmeticQueue.push("I2");
              } else if (this.state === "S2") {
                this.state = "S2";
                this.inputValues.I = "ERROR";
                return this.showBadNumberMessage(i, characters);
              } else if (this.state === "S3") {
                this.state = "S3";
                this.inputValues.I = "T14";
                this.arithmeticQueue.pop();
                this.arithmeticQueue.push("I2");
              }
              break;

            case "I2":
              if (this.state === "S1") {
                this.state = "S1";
                this.inputValues.I = "T32";
                this.arithmeticQueue.pop();
                this.arithmeticQueue.push("I3");
              } else if (this.state === "S2") {
                this.state = "S2";
                this.inputValues.I = "ERROR";
                return this.showBadNumberMessage(i, characters);
              } else if (this.state === "S3") {
                this.state = "S3";
                this.inputValues.I = "T15";
                this.arithmeticQueue.pop();
                this.arithmeticQueue.push("I3");
              }
              break;

            case "I3":
              if (this.state === "S1") {
                this.state = "S1";
                this.inputValues.I = "ERROR";
                return this.showBadNumberMessage(i, characters);
              } else if (this.state === "S2") {
                this.state = "S2";
                this.inputValues.I = "ERROR";
                return this.showBadNumberMessage(i, characters);
              } else if (this.state === "S3") {
                this.state = "S3";
                this.inputValues.I = "ERROR";
                return showBadNumberMessage(i, characters);
              }
              break;

            case "▼":
              if (this.state === "S1") {
                this.state = "S1";
                this.inputValues.I = "T11";
                this.arithmeticQueue.push("I1");
              } else if (this.state === "S2") {
                this.state = "S2";
                this.inputValues.I = "ERROR";
                return this.showBadNumberMessage(i, characters);
              } else if (this.state === "S3") {
                this.state = "S3";
                this.inputValues.I = "ERROR";
                return showBadNumberMessage(i, characters);
              }
              break;

            default:
              break;
          }
          break;

        case "┤":
          switch (this.arithmeticQueue.peek()) {
            case "L":
              if (this.state === "S1") {
                this.state = "S1";
                this.inputValues.L = "ERROR";
                return showBadNumberMessage(i, characters);
              } else if (this.state === "S2") {
                this.state = "S2";
                this.inputValues.L = "ERROR";
                return showBadNumberMessage(i, characters);
              } else if (this.state === "S3") {
                this.state = "S3";
              }
              break;

            case "X1":
              if (this.state === "S1") {
                this.state = "S1";
              } else if (this.state === "S2") {
                this.state = "S2";
              } else if (this.state === "S3") {
                this.state = "S3";
              }
              break;

            case "X2":
              if (this.state === "S1") {
                this.state = "S1";
              } else if (this.state === "S2") {
                this.state = "S2";
                this.inputValues.X = "ERROR";
                return this.showBadNumberMessage(i, characters);
              } else if (this.state === "S3") {
                this.state = "S3";
              }
              break;

            case "X3":
              if (this.state === "S1") {
                this.state = "S1";
              } else if (this.state === "S2") {
                this.state = "S2";
                this.inputValues.X = "ERROR";
                return this.showBadNumberMessage(i, characters);
              } else if (this.state === "S3") {
                this.state = "S3";
              }
              break;

            case "V":
              if (this.state === "S1") {
                this.state = "S1";
              } else if (this.state === "S2") {
                this.state = "S2";
              } else if (this.state === "S3") {
                this.state = "S3";
              }
              break;

            case "I1":
              if (this.state === "S1") {
                this.state = "S1";
              } else if (this.state === "S2") {
                this.state = "S2";
                this.inputValues.I = "ERROR";
                return this.showBadNumberMessage(i, characters);
              } else if (this.state === "S3") {
                this.state = "S3";
              }
              break;

            case "I2":
              if (this.state === "S1") {
                this.state = "S1";
              } else if (this.state === "S2") {
                this.state = "S2";
                this.inputValues.I = "ERROR";
                return this.showBadNumberMessage(i, characters);
              } else if (this.state === "S3") {
                this.state = "S3";
              }
              break;

            case "I3":
              if (this.state === "S1") {
                this.state = "S1";
              } else if (this.state === "S2") {
                this.state = "S2";
                this.inputValues.I = "ERROR";
                return this.showBadNumberMessage(i, characters);
              } else if (this.state === "S3") {
                this.state = "S3";
              }
              break;

            case "▼":
              if (this.state === "S1") {
                this.state = "S1";
                return this.showInconsistentNumberMessage(characters);
              } else if (this.state === "S2") {
                this.state = "S2";
                return this.showInconsistentNumberMessage(characters);
              } else if (this.state === "S3") {
                this.state = "S3";
                return this.showInconsistentNumberMessage(characters);
              }
              break;

            default:
              break;
          }
          break;

        default:
          break;
      }
      i = i + 1;
    } while (romanNumber[i] !== "┤");
    return [romanNumber, decimalValue, true];
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
}

module.exports = ArithmeticUtils;
