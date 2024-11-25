import inquirer from "inquirer"; // npm i inquirer
import chalk from "chalk"; // npm i chalk 

let button = document.querySelectorAll(".button")

const secretnumber:number = Math.floor(Math.random()*3)+1

console.log(chalk.bold.underline("pick number"));


let userinput = await inquirer.prompt ({
    type :"list",
    name: "num",
    message: "plz select the number: ", choices:["1","2"]
})

let GAME:number = parseInt(userinput.num)


switch (true) {
    case GAME === secretnumber:
        console.log(chalk.bold.green("you winner"));
        
        break;

    default:
        console.log(chalk.bold.red("you loser"));
        
        break;
}

