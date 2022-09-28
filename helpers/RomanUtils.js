const RomanQueue = require("./RomanQueue");
const { romanToArab } = require("roman-numbers");

class RomanUtils {
  romanQueue = new RomanQueue();

  state = "S1"; // S1 is the initial state
  inputValues = { L: "", X: "", V: "", I: "" };

  constructor() {}

  getComputedRomanCharacters(characters) {
    return characters.trim().toUpperCase().replaceAll(" ", "");
  }

  getBadInputCharacter() {
    for (const inputValue in this.inputValues) {
      if (this.inputValues[inputValue] === "ERROR") {
        return inputValue;
      }
    }
  }

  showBadNumberMessage(index, characters) {
    console.log(`\n¡El número romano no es válido!`.bgRed);
    console.log(
      `character ${this.getBadInputCharacter()} in position ${
        index + 1
      } has provoked the error`.red
    );
    return [characters.concat("┤"), "Invalid", false];
  }

  showInconsistentNumberMessage(characters) {
    console.log(`¡The number is not valid!`.bgRed);
    console.log(`Something went wrong, please try again`.red);
    return [characters.concat("┤"), "Invalid", false];
  }

  evaluateRomanNumber(characters) {
    const computedCharacters = this.getComputedRomanCharacters(characters);
    if (!this.romanNumberHasValidCharacters(computedCharacters)) {
      return [characters.concat("┤"), "Invalid", false];
    }
    const decimalValue = romanToArab(computedCharacters);

    const romanNumber = computedCharacters.concat("┤");

    let i = 0;
    do {
      switch (romanNumber[i]) {
        case "L":
          switch (this.romanQueue.peek()) {
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
                this.romanQueue.pop();
                this.romanQueue.push("L");
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
                this.romanQueue.push("L");
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
          switch (this.romanQueue.peek()) {
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
                this.romanQueue.pop();
                this.romanQueue.push("X1");
              }
              break;

            case "X1":
              if (this.state === "S1") {
                this.state = "S1";
                this.inputValues.X = "T22";
                this.romanQueue.pop();
                this.romanQueue.push("X2");
              } else if (this.state === "S2") {
                this.state = "S2";
                this.inputValues.X = "ERROR";
                return this.showBadNumberMessage(i, characters);
              } else if (this.state === "S3") {
                this.state = "S3";
                this.inputValues.X = "T3";
                this.romanQueue.pop();
                this.romanQueue.push("X2");
              }
              break;

            case "X2":
              if (this.state === "S1") {
                this.state = "S1";
                this.inputValues.X = "T25";
                this.romanQueue.pop();
                this.romanQueue.push("X3");
              } else if (this.state === "S2") {
                this.state = "S2";
                this.inputValues.X = "ERROR";
                return this.showBadNumberMessage(i, characters);
              } else if (this.state === "S3") {
                this.state = "S3";
                this.inputValues.X = "T4";
                this.romanQueue.pop();
                this.romanQueue.push("X3");
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
                this.romanQueue.pop();
                this.romanQueue.push("X1");
              } else if (this.state === "S2") {
                this.state = "S2";
                this.inputValues.X = "ERROR";
                return this.showBadNumberMessage(i, characters);
              } else if (this.state === "S3") {
                this.state = "S2";
                this.inputValues.X = "T12";
                this.romanQueue.pop();
                this.romanQueue.push("X1");
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
                this.romanQueue.push("X1");
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
          switch (this.romanQueue.peek()) {
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
                this.romanQueue.pop();
                this.romanQueue.push("V");
              }
              break;

            case "X1":
              if (this.state === "S1") {
                this.state = "S1";
                this.inputValues.V = "T23";
                this.romanQueue.pop();
                this.romanQueue.push("V");
              } else if (this.state === "S2") {
                this.state = "S2";
                this.inputValues.V = "ERROR";
                return this.showBadNumberMessage(i, characters);
              } else if (this.state === "S3") {
                this.state = "S3";
                this.inputValues.V = "T6";
                this.romanQueue.pop();
                this.romanQueue.push("V");
              }
              break;

            case "X2":
              if (this.state === "S1") {
                this.state = "S1";
                this.inputValues.V = "T26";
                this.romanQueue.pop();
                this.romanQueue.push("V");
              } else if (this.state === "S2") {
                this.state = "S2";
                this.inputValues.V = "ERROR";
                return this.showBadNumberMessage(i, characters);
              } else if (this.state === "S3") {
                this.state = "S3";
                this.inputValues.V = "T7";
                this.romanQueue.pop();
                this.romanQueue.push("V");
              }
              break;

            case "X3":
              if (this.state === "S1") {
                this.state = "S1";
                this.inputValues.V = "T28";
                this.romanQueue.pop();
                this.romanQueue.push("V");
              } else if (this.state === "S2") {
                this.state = "S2";
                this.inputValues.V = "ERROR";
                return this.showBadNumberMessage(i, characters);
              } else if (this.state === "S3") {
                this.state = "S3";
                this.inputValues.V = "T8";
                this.romanQueue.pop();
                this.romanQueue.push("V");
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
                this.romanQueue.pop();
                this.romanQueue.push("V");
              } else if (this.state === "S2") {
                this.state = "S2";
                this.inputValues.V = "ERROR";
                return this.showBadNumberMessage(i, characters);
              } else if (this.state === "S3") {
                this.state = "S2";
                this.inputValues.V = "T13";
                this.romanQueue.pop();
                this.romanQueue.push("V");
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
                this.romanQueue.push("V");
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
          switch (this.romanQueue.peek()) {
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
                this.romanQueue.pop();
                this.romanQueue.push("I1");
              }
              break;

            case "X1":
              if (this.state === "S1") {
                this.state = "S1";
                this.inputValues.I = "T24";
                this.romanQueue.pop();
                this.romanQueue.push("I1");
              } else if (this.state === "S2") {
                this.state = "S2";
                this.inputValues.I = "ERROR";
                return this.showBadNumberMessage(i, characters);
              } else if (this.state === "S3") {
                this.state = "S3";
                this.inputValues.I = "T17";
                this.romanQueue.pop();
                this.romanQueue.push("I1");
              }
              break;

            case "X2":
              if (this.state === "S1") {
                this.state = "S1";
                this.inputValues.I = "T27";
                this.romanQueue.pop();
                this.romanQueue.push("I1");
              } else if (this.state === "S2") {
                this.state = "S2";
                this.inputValues.I = "ERROR";
                return this.showBadNumberMessage(i, characters);
              } else if (this.state === "S3") {
                this.state = "S3";
                this.inputValues.I = "T18";
                this.romanQueue.pop();
                this.romanQueue.push("I1");
              }
              break;

            case "X3":
              if (this.state === "S1") {
                this.state = "S1";
                this.inputValues.I = "T29";
                this.romanQueue.pop();
                this.romanQueue.push("I1");
              } else if (this.state === "S2") {
                this.state = "S2";
                this.inputValues.I = "ERROR";
                return this.showBadNumberMessage(i, characters);
              } else if (this.state === "S3") {
                this.state = "S3";
                this.inputValues.I = "T19";
                this.romanQueue.pop();
                this.romanQueue.push("I1");
              }
              break;

            case "V":
              if (this.state === "S1") {
                this.state = "S1";
                this.inputValues.I = "T30";
                this.romanQueue.pop();
                this.romanQueue.push("I1");
              } else if (this.state === "S2") {
                this.state = "S2";
                this.inputValues.I = "ERROR";
                return this.showBadNumberMessage(i, characters);
              } else if (this.state === "S3") {
                this.state = "S3";
                this.inputValues.I = "T20";
                this.romanQueue.pop();
                this.romanQueue.push("I1");
              }
              break;

            case "I1":
              if (this.state === "S1") {
                this.state = "S1";
                this.inputValues.I = "T31";
                this.romanQueue.pop();
                this.romanQueue.push("I2");
              } else if (this.state === "S2") {
                this.state = "S2";
                this.inputValues.I = "ERROR";
                return this.showBadNumberMessage(i, characters);
              } else if (this.state === "S3") {
                this.state = "S3";
                this.inputValues.I = "T14";
                this.romanQueue.pop();
                this.romanQueue.push("I2");
              }
              break;

            case "I2":
              if (this.state === "S1") {
                this.state = "S1";
                this.inputValues.I = "T32";
                this.romanQueue.pop();
                this.romanQueue.push("I3");
              } else if (this.state === "S2") {
                this.state = "S2";
                this.inputValues.I = "ERROR";
                return this.showBadNumberMessage(i, characters);
              } else if (this.state === "S3") {
                this.state = "S3";
                this.inputValues.I = "T15";
                this.romanQueue.pop();
                this.romanQueue.push("I3");
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
                this.romanQueue.push("I1");
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
          switch (this.romanQueue.peek()) {
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

  romanNumberHasValidCharacters(characters) {
    return characters.split("").every((character) => {
      return (
        character === "L" ||
        character === "X" ||
        character === "V" ||
        character === "I"
      );
    });
  }
}

module.exports = RomanUtils;
