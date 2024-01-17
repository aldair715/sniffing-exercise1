import chalk from "chalk";
import RL from "./RL.js";
import displayMenu from "./displayMenu.js";
import sniffer_Exercise from "./sniffer-exercise.mjs";
const choiceOption = () => {
  RL.question(`${chalk.black.bgBlue("DIGITE UNA OPCION")}`, (option) => {
    const OPTIONS = {
        1: () => sniffer_Exercise(),
        2: () => {
          console.log(chalk.black.bgRed("ADIOS 🖐️🖐️🖐️🖐️🖐️🖐️ "));
          RL.close();
        },
      },
      OPTION_DEFAULT = () => {
        console.log(chalk.black.bgRed("OPCION INVALIDA, ESCRIBA NUEVAMENTE"));
        displayMenu();
        choiceOption();
      };
    let integ = parseInt(option),
      ejecutar = OPTIONS[integ] || OPTION_DEFAULT;
    ejecutar();
  });
};
export default choiceOption;
