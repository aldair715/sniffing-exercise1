import chalk from "chalk";
import RL from "./RL.js";
import displayMenu from "./displayMenu.js";
import choiceOption from "./choiceOption.js";
import sniffer from "./sniffer.js";
const sniffer_Exercise = () => {
  try {
    const OPTIONS = {};
    RL.question(chalk.black.bgCyanBright("Escribe el Host"), (host) => {
      OPTIONS.host = host;
      RL.question(chalk.black.bgCyanBright("Escribe el Puerto"), (port) => {
        OPTIONS.port = port;
        RL.question(chalk.black.bgCyanBright("Escribe el Path"), (path) => {
          OPTIONS.path = path;
          sniffer(OPTIONS);
          displayMenu();
          choiceOption();
        });
      });
    });
  } catch (error) {
    console.log(chalk.black.bgRed("ERROR EN EL PROCESO DE TAREAS"));
    displayMenu();
    choiceOption();
  }
};
export default sniffer_Exercise;
