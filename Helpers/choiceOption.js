import chalk from "chalk";
import RL from "./RL.js";
const choiceOption = () => {
  RL.question(`${chalk.black.bgBlue("DIGITE UNA OPCION")}`, (option) => {
    const OPTIONS = {
      1: () => console.log("1."),
      2: () => {
        console.log(chalk.black.bgRed("ADIOS 🖐️🖐️🖐️🖐️🖐️🖐️ "));
        RL.close();
      },
    };
  });
};
export default choiceOption;
