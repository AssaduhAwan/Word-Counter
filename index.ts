#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";


const answers:{
  sentence:string
}=await inquirer.prompt([
  {
    name:"sentence",
    type:"input",
    message:(chalk.blue(`Enter your sentence count to the word `))
  }
]) ;
 const words=answers.sentence.trim().split(" ")
console.log(chalk.cyan(`your sentence word count is ${words.length}`))