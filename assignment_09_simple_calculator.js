// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 9
// =============================================================================
//
// TASK: Console-Based Simple Calculator
//
// Build a calculator program that runs in the console and performs basic
// arithmetic operations based on the user's input.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_09_simple_calculator.js
//
// -----------------------------------------------------------------------------
// OPERATIONS YOUR CALCULATOR MUST SUPPORT
// -----------------------------------------------------------------------------
//
//   1. Addition          ( + )    e.g.  10 + 3  =  13
//   2. Subtraction       ( - )    e.g.  10 - 3  =  7
//   3. Multiplication    ( * )    e.g.  10 * 3  =  30
//   4. Division          ( / )    e.g.  10 / 3  =  3.33
//   5. Modulus           ( % )    e.g.  10 % 3  =  1  (remainder)
//   6. Exponentiation    ( ** )   e.g.  2 ** 8  =  256
//   7. Quit
//
// -----------------------------------------------------------------------------
// HOW THE MENU SHOULD LOOK
// -----------------------------------------------------------------------------
//
//   ============================
//        SIMPLE CALCULATOR
//   ============================
//   1. Addition
//   2. Subtraction
//   3. Multiplication
//   4. Division
//   5. Modulus
//   6. Exponentiation
//   7. Quit
//   Select an operation (1-7):
//
// -----------------------------------------------------------------------------
// EXPECTED INTERACTION EXAMPLE
// -----------------------------------------------------------------------------
//
//   Select an operation (1-7): 4
//   Enter first number : 10
//   Enter second number: 3
//   Result: 10 / 3 = 3.33
//
//   Select an operation (1-7): 4
//   Enter first number : 5
//   Enter second number: 0
//   Error: Cannot divide by zero.
//
//   Select an operation (1-7): 7
//   Goodbye!
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Each arithmetic operation MUST be written as its own function.
// - Use a loop so the calculator keeps running until the user selects Quit.
// - Division by zero must be caught and handled with a clear error message
//   (do NOT let the program crash).
// - Display results to 2 decimal places using .toFixed(2).
// - Handle invalid menu choices gracefully.
//

//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================


// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 9
// =============================================================================
//
// TASK: Console-Based Simple Calculator
// =============================================================================

const readlineSync = require('readline-sync');

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero.");
    }
    return a / b;
}

function modulus(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero.");
    }
    return a % b;
}

function exponentiate(a, b) {
    return a ** b;
}

function getTwoNumbers() {
    const first = readlineSync.questionFloat("Enter first number : ");
    const second = readlineSync.questionFloat("Enter second number: ");
    return [first, second];
}

function printMenu() {
    console.log("\n============================");
    console.log("     SIMPLE CALCULATOR");
    console.log("============================");
    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");
    console.log("5. Modulus");
    console.log("6. Exponentiation");
    console.log("7. Quit");
}

function main() {
    const operations = {
        "1": { symbol: "+", func: add },
        "2": { symbol: "-", func: subtract },
        "3": { symbol: "*", func: multiply },
        "4": { symbol: "/", func: divide },
        "5": { symbol: "%", func: modulus },
        "6": { symbol: "**", func: exponentiate },
    };

    while (true) {
        printMenu();
        const choice = readlineSync.question("Select an operation (1-7): ").trim();

        if (choice === "7") {
            console.log("Goodbye!");
            break;
        }

        if (!operations[choice]) {
            console.log("Error: Invalid choice. Please enter a number between 1 and 7.");
            continue;
        }

        const { symbol, func } = operations[choice];
        const [a, b] = getTwoNumbers();

        try {
            const result = func(a, b);
            console.log(`Result: ${a} ${symbol} ${b} = ${result.toFixed(2)}`);
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    }
}

main();