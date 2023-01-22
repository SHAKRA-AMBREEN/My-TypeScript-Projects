#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow('-------------Lets Start Calculation-------------');
    await sleep();
    rainbowTitle.stop();
    console.log(chalk.yellow(`  
     _____________________
    |  _________________  |
    | |               0 | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|`));
}
console.log(chalk.blue(`
·▄▄▄▄  ▄▄▄ . ▌ ▐·▄▄▄ .▄▄▌         ▄▄▄·  ▄▄▄▄·  ▄· ▄▌  .▄▄ ·  ▄ .▄ ▄▄▄· ▄ •▄ ▄▄▄   ▄▄▄· 
██· ██ ▀▄.▀·▪█·█▌▀▄.▀·██•   ▄█▀▄ ▐█ ▄█  ▐█ ▀█▪▐█▪██▌  ▐█ ▀. ██▪▐█▐█ ▀█ █▌▄▌▪▀▄ █·▐█ ▀█ 
▐█▪ ▐█▌▐▀▀▪▄▐█▐█•▐▀▀▪▄██ ▪ ▐█▌.▐▌ ██▀·  ▐█▀▀█▄▐█▌▐█▪  ▄▀▀▀█▄██▀▀█▄█▀▀█ ▐▀▀▄·▐▀▀▄ ▄█▀▀█ 
██. ██ ▐█▄▄▌ ███ ▐█▄▄▌▐█▌ ▄▐█▌.▐▌▐█▪·•  ██▄▪▐█ ▐█▀·.  ▐█▄▪▐███▌▐▀▐█▪ ▐▌▐█.█▌▐█•█▌▐█▪ ▐▌
▀▀▀▀▀•  ▀▀▀ . ▀   ▀▀▀ .▀▀▀  ▀█▄▀▪.▀     ·▀▀▀▀   ▀ •    ▀▀▀▀ ▀▀▀ · ▀  ▀ ·▀  ▀.▀  ▀ ▀  ▀ 
              
`));
await welcome();
async function askQuestion() {
    let answers = await inquirer
        .prompt([
        {
            type: "list",
            name: "operator",
            message: "which operation you want to perform? \n",
            choices: ["Addition", "Substraction", "Multiplication", "Division"]
        },
        {
            type: "number",
            name: "num1",
            message: "Enter Number 1: ",
            validate: (answer) => {
                let valid = !isNaN(answer);
                return valid || 'Enter a valid number';
            }
        },
        {
            type: "number",
            name: "num2",
            message: "Enter Number 2: ",
            validate: (answer) => {
                let valid = !isNaN(answer);
                return valid || 'Enter a valid number';
            }
        }
    ]);
    if (answers.operator == "Addition") {
        console.log(chalk.green(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`));
    }
    else if (answers.operator == "Substraction") {
        console.log(chalk.green(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`));
    }
    else if (answers.operator == "Multiplication") {
        console.log(chalk.green(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`));
    }
    else if (answers.operator == "Division") {
        console.log(chalk.green(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`));
    }
}
;
// askQuestion();
async function startAgain() {
    do {
        await askQuestion();
        var again = await inquirer
            .prompt({
            type: "input",
            name: "restart",
            message: chalk.red("Do you want to continue? Press y or n: ")
        });
    } while (again.restart == 'y' || again.restart == 'Y' || again.restart == 'yes' || again.restart == 'YES');
}
startAgain();
