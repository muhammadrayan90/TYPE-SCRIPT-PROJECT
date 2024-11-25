"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer"); // npm i inquirer
var chalk_1 = require("chalk"); // npm i chalk 
var button = document.querySelectorAll(".button");
var secretnumber = Math.floor(Math.random() * 3) + 1;
console.log(chalk_1.default.bold.underline("pick number"));
var userinput = await inquirer_1.default.prompt({
    type: "list",
    name: "num",
    message: "plz select the number: ", choices: ["1", "2"]
});
var GAME = parseInt(userinput.num);
switch (true) {
    case GAME === secretnumber:
        console.log(chalk_1.default.bold.green("you winner"));
        break;
    default:
        console.log(chalk_1.default.bold.red("you loser"));
        break;
}
