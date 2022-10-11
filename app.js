require("dotenv").config();
const ArithmeticExpressionList = require("./models/ArithmeticExpressionList");
const fs = require("fs");
const transitionsTable = require("./documentation/transitions-table.json");
const tableDebajosDe = require("./documentation/debajos-de-table.json");
const { inquirerMenu, pause, readInput } = require("./helpers/inquirer");
require("colors");

const main = async () => {
  let opt = "";

  const arithmeticExpressions = new ArithmeticExpressionList();

  do {
    // Print out the menu
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        const input = await readInput(
          "Arithmetic expression (0 ~ 9, +, -, *, /, () are allowed):  EJ: 32+4-50, (13+4-10), 30-3*500"
        );
        arithmeticExpressions.addArithmeticExpression(input);
        break;

      case "2":
        arithmeticExpressions.getArithmeticExpressions.forEach(
          (arithExpression, i) => {
            const index = `${i + 1}`.green;
            const { originalExpression, errorList, result, isValid } =
              arithExpression;
            console.log(
              `${index}. ${` ${originalExpression} `.bgBlue} - ${
                isValid
                  ? " This expression is correct ".bgGreen
                  : " This expression is not correct ".bgRed
              } - ${
                isValid ? `Result: ${result}`.green : `Result: ${result}`.red
              }
              ${!isValid ? `  ERROR: ${errorList}`.red : ""}`
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

      case "4":
        console.log(" Autor: Juan Camilo Cardona Calderón ".bgGreen);
        console.log(" ---- Universidad de Antioquia ----  ".bgGreen);
        console.log(" " + " Curso: Teoría de Lenguajes & Lab. ".green);

      default:
        break;
    }

    await pause();
  } while (opt !== "0");

  fs.writeFileSync(
    `generated/arithmetic-expressions-${new Date()
      .toString()
      .replaceAll(":", "-")}.json`,
    JSON.stringify(
      arithmeticExpressions.arithmeticExpressions.map(
        ({ originalExpression, isValid, errorList, result }) => ({
          originalExpression,
          isValid,
          errorList,
          result,
        })
      )
    )
  );
};

main();
