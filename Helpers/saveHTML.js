import chalk from "chalk";
import fs from "fs";
import displayMenu from "./displayMenu.js";
import choiceOption from "./choiceOption.js";
const saveHTML = (name, data) => {
  fs.appendFile(`Files/${name}.html`, data, (error) => {
    if (error) throw error;
    console.log(chalk.black.bgGreen("Archivo Transferido"));
    displayMenu();
    choiceOption();
  });
};
export default saveHTML;
