require("dotenv").config();
const RomanNumbers = require("./models/ArithmeticExpressionList");
const fs = require("fs");
const transitionsTable = require("./documentation/transitions-table.json");
const tableDebajosDe = require("./documentation/debajos-de-table.json");
const { inquirerMenu, pause, readInput } = require("./helpers/inquirer");
const validNumbers = [];
require("colors");

const main = async () => {
  let opt = "";

  const arithmeticExpressions = new RomanNumbers();

  do {
    // Print out the menu
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        const input = await readInput(
          "Arithmetic expression (0 ~ 9, +, -, *, /, () are allowed): "
        );
        arithmeticExpressions.addArithmeticExpression(input);
        break;

      case "2":
        arithmeticExpressions.getArithmeticExpressions.forEach(
          (arithExpression, i) => {
            const index = `${i + 1}`.green;
            const { id, originalExpression, errorList, result, isValid } =
              arithExpression;
            console.log(
              `${index}. ${` ${originalExpression} `.bgBlue} - ${
                isValid
                  ? " This expression is correct ".bgGreen
                  : " This expression is not correct ".bgRed
              } - ${
                isValid ? `Result: ${result}`.green : `Result: ${result}`.red
              }`
            );
          }
        );
        break;

      case "3":
        console.log(` 1. Table: ${" DebajosDe ".bgGreen} `.green.bold);
        console.table(tableDebajosDe);
        console.log(
          " --------------------------------------------------------------------------------- "
        );

        console.log(` 2. Table: ${" Transitions ".bgGreen} `.green.bold);
        console.table(transitionsTable);
        console.log(
          " ----------------------------------------------------------------- "
        );
        break;

      default:
        break;
    }

    await pause();
  } while (opt !== "0");

  fs.writeFileSync(
    `generated/arithmetic-expressions-${new Date()
      .toString()
      .replaceAll(":", "-")}.json`,
    JSON.stringify(arithmeticExpressions)
  );
};

main();
