const inquirer = require("inquirer");
require("colors");

const preguntas = [
  {
    type: "list",
    name: "opcion",
    message: "¿What do you want to do?",
    choices: [
      {
        value: "1",
        name: `${"1.".green} Input an arithmetic expression`,
      },
      {
        value: "2",
        name: `${"2.".green} See your full list of arithmetic expressions`,
      },
      {
        value: "3",
        name: `${"3.".green} See the resources used for the solution`,
      },
      {
        value: "4",
        name: `${"4.".green} See the author of the solution`,
      },
      {
        value: "0",
        name: `${
          "0.".green
        } Quit (And generate JSON file with a report of your arithmetic expressions)`,
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("============================".green);
  console.log("  Please select an option   ".white);
  console.log("============================\n".green);

  const { opcion } = await inquirer.prompt(preguntas);

  return opcion;
};

const pause = async () => {
  const question = [
    {
      type: "input",
      name: "enter",
      message: `Press ${"enter".green} to continue`,
    },
  ];

  console.log("\n");
  await inquirer.prompt(question);
};

const readInput = async (message) => {
  const question = [
    {
      type: "input",
      name: "desc",
      message,
      validate(value) {
        if (value.replaceAll(" ", "").length === 0) {
          return "Value is empty, please enter a value";
        }
        return true;
      },
    },
  ];

  const { desc } = await inquirer.prompt(question);
  return desc;
};

const confirm = async (message) => {
  const question = [
    {
      type: "confirm",
      name: "ok",
      message,
    },
  ];

  const { ok } = await inquirer.prompt(question);
  return ok;
};

module.exports = {
  inquirerMenu,
  pause,
  readInput,
  confirm,
};
