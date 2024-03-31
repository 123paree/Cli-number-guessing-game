#! usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var randomNumber = Math.floor(Math.random() * 5 + 1);
var answers = await inquirer_1.default.prompt([
    {
        name: "Numberguessedbyuser",
        type: "number",
        message: "Guess a number btw 1-5:",
    },
]);
if (answers.Numberguessedbyuser === randomNumber) {
    console.log("congrats! your guess is correct");
}
else {
    console.log("Your guess is incorrect");
}
