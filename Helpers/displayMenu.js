import chalk from "chalk";
const displayMenu = () => {
  console.log(
    chalk.black.bgCyan(`
    */*/*/*/*/*/*/*/*/MENU*/*/*/*/*/*/*/*/*/* \n
    1. COMENZAR LA PRACTICA. \n
    2. SALIR. \n
    /*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/ \n 
  `)
  );
};
export default displayMenu;
