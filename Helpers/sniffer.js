import chalk from "chalk";
import displayMenu from "./displayMenu.js";
import choiceOption from "./choiceOption.js";
import { createServer, get } from "https";
import saveHTML from "./saveHTML.js";
const sniffer = (OPTIONS) => {
  try {
    const HOST_NAME = "localhost",
      PORT = 3000;
    let htmlCode = "";
    // FUNCION PARA EJECUTAR UN CLIENTE HTTPS
    const HTTP_CLIENT = (res) => {
      console.log(
        chalk.black.bgGreen(`
          El sitio ${OPTIONS.host} ha respondido. \n
          Codigo: ${res.statusCode} \n
          Mensaje: ${res.statusMessage}.
        `)
      );
      let sli = `${OPTIONS.path}`,
        result = sli.slice(1);
      res.on("data", (data) => {
        htmlCode += data;
        //console.log(data, data.toString());
        saveHTML(`${OPTIONS.host}_${result}`, htmlCode);
      });
    };
    // FUNCION PARA EL ERROR EN EL CLIENTE HTTPS
    const HTTP_ERROR = (error) => {
      console.error(
        chalk.black.bgRed(`El sitio ${OPTIONS.host} no ha respondido. \n 
        Codigo: ${error.code} \n 
        Mensaje: ${error.message}`)
      );
    };
    // FUNCION PARA CREAR SERVIDOR
    const WEB_SERVER = (req, res) => {
      res.statusCode = 200;
      res.setHeader("Content-type", "text/html;charset=utf-8");
      res.end(htmlCode);
    };
    // instancia cliente HTTP
    get(OPTIONS, HTTP_CLIENT).on("error", HTTP_ERROR);
    createServer(WEB_SERVER).listen(PORT, HOST_NAME, () => {
      console.log(`Servidor Corriendo en https://${HOST_NAME}:${PORT}`);
    });
  } catch (error) {
    console.log(chalk.black.bgRed("Error en el paso de parametros"));
    displayMenu();
    choiceOption();
  }
};
export default sniffer;
