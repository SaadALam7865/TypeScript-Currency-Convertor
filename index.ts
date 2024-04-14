import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.magenta(`\n \t \t <<<<<======================================================>>>>>>>>`));
console.log(chalk.bold.blue(` \t \t \t Welcome to 'CodeWithSaad' - Currency Convertor`));
console.log(chalk.bold.magenta(" \t \t <<<<<====================================================>>>>>>> \t \t"));
//==== Define the list of curreicies and their exchange rates.=====
let exchange_rate: any = {
    "USD": 1,   // Base currency
    "EUR": 0.9, // Europe currency
    "JYP": 113,  // Japnes currency 
    "CAD": 1.3,   // Canadian Dollar
    "AUD": 1.65,  // Australian Dollar
    "PKR": 280,     // Pakistan Rupees
    //====== Add more currencies and their exchange rates here===========
}
    
//============ Propmt the user to select currecncies to convert from and to= ========
let user_answer = await inquirer.prompt([
    {
        "name": "from_currency",
        "type": "list",
        "message": "Select the currency to convert  from :",
        "choices": ["USD", "EUR" , "JYP", "CAD" , "AUD" , "PKR"]
    },
    {
        "name": "to_currency",
        "type": "list",
        "message": chalk.green("Select the currency to convert into :"),
        "choices": ["USD", "EUR" , "JYP", "CAD" , "AUD" , "PKR"]
    },
    {
        "name": "amount",
        "type": "input",
        "message": chalk.green("Enter the amount to convert :"),

    }
]);

//========== Perform currency conversion by using Formula=========
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];    
let amount = user_answer.amount

//========== Formula of conversion==========
let base_amount = amount / from_amount    
let converted_amount = base_amount * to_amount 

//=========== Display the converted amount=======
console.log(`Converted amount = ${chalk.green(converted_amount.toFixed(2))}`);




