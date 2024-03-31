#! usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 5 + 1);

const answers = await inquirer.prompt([
{
    name: "Numberguessedbyuser",
    type: "number",
    message: "Guess a number btw 1-5:",
},
]);

if(answers.Numberguessedbyuser === randomNumber){
    console.log("congrats! your guess is correct");
}
else{
console.log("Your guess is incorrect");
}