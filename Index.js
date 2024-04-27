#! /usr/bin/env node
import inquirer from "inquirer";
// object that contain currency rate (base is PKR)
const currency = {
    PKR: 1,
    USD: 0.0036,
    EUR: 0.0033,
    AED: 0.013,
    SAR: 0.013,
    QAR: 0.013,
    INR: 0.30,
    KWD: 0.0011,
    BHD: 0.0013
};
// section to get user input (from currency, to currency, amount to convert)
let userInput = await inquirer.prompt([
    {
        name: "fromCurrency",
        message: "Select From Currency: ",
        type: "list",
        choices: ["PKR", "USD", "EUR", "AED", "SAR", "QAR", "INR", "KWD", "BHD"]
    },
    {
        name: "toCurrency",
        message: "Select To Currency: ",
        type: "list",
        choices: ["PKR", "USD", "EUR", "AED", "SAR", "QAR", "INR", "KWD", "BHD"]
    },
    {
        name: "amount",
        message: "Select amount to convert: ",
        type: "number",
    }
]);
// calculation to disply output (converted value)
let fromCurrencyRate = currency[userInput.fromCurrency];
let toCurrencyRate = currency[userInput.toCurrency];
let baseAmount = userInput.amount / fromCurrencyRate;
let convertedAmount = baseAmount * toCurrencyRate;
console.log(`${userInput.amount} ${userInput.fromCurrency} is equal to ${convertedAmount} ${userInput.toCurrency}`);
