require("colors");
const RomanNumbers = require("./models/RomanNumberList");
const fs = require("fs");
const transitionsTable = require("./documentation/transitions-table.json");
const { inquirerMenu, pause, readInput } = require("./helpers/inquirer");
const validNumbers = require("./documentation/valid-roman-numbers.json");

const main = async () => {
  let opt = "";

  const romanNumbers = new RomanNumbers();

  do {
    // Print out the menu
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        const input = await readInput("Roman number (I,V,X,L are allowed): ");
        romanNumbers.addRomanNumber(input);
        break;

      case "2":
        romanNumbers.getRomanNumbers.forEach((romanNumber, i) => {
          const index = `${i + 1}`.green;
          const { id, roman, decimal, isValid } = romanNumber;
          console.log(
            `${index}. id: ${id.gray} - ${`${roman}`.bgBlue} - ${
              isValid ? `${decimal}`.green : `${decimal}`.red
            }`
          );
        });
        break;

      case "3":
        console.table(transitionsTable);
        break;

      case "4":
        validNumbers.forEach(({ roman }, i) => {
          romanNumbers.addRomanNumber(roman);
        });

        console.table({
          SUCCESS: "Please check out the the list of roman numbers.",
        });
        break;

      default:
        break;
    }

    await pause();
  } while (opt !== "0");

  fs.writeFileSync(
    `generated/RomanNumbers-${new Date().toString().replaceAll(":", "-")}.json`,
    JSON.stringify(romanNumbers)
  );
};

main();
