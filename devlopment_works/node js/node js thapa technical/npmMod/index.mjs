//const chalk = require("chalk");

import chalk from "chalk";

console.log(chalk.red("hello ji aap to red ho"));

import valid from "validator";

//const validator = require("validator");

const res = valid.isEmail("thapa@thapa.com");
if (res == true) {
  console.log(chalk.green.inverse(res));
} else {
  console.log(chalk.red.inverse(res));
}
//console.log(res);
