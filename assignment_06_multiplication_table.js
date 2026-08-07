// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 6
// =============================================================================
//
// TASK: Multiplication Table Generator
//
// Write a JavaScript program that generates multiplication tables using loops
// and functions.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_06_multiplication_table.js
//
// -----------------------------------------------------------------------------
// PART A — Single Table
// -----------------------------------------------------------------------------
// - Ask the user to enter a number.
// - Print the multiplication table for that number from 1 to 12.
//
// Expected output (if user enters 5):
//
//   Multiplication Table for 5:
//   5  x  1  =  5
//   5  x  2  =  10
//   5  x  3  =  15
//   ...
//   5  x  12 =  60
//
// -----------------------------------------------------------------------------
// PART B — Bonus: Tables from 1 to N
// -----------------------------------------------------------------------------
// - Ask the user to enter a number N.
// - Print the full multiplication table for every number from 1 to N.
// - Add a separator line (e.g. "---") between each table.
//
// Expected output (if user enters 3):
//
//   Multiplication Table for 1:
//   1  x  1  =  1
//   ...
//   1  x  12 =  12
//   ---------------------------
//   Multiplication Table for 2:
//   2  x  1  =  2
//   ...
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - N must be a positive integer. If the user enters an invalid value,
//   print an error message and stop.
// - Each part must be in its own function (see scaffold below).
// - Complete Part A before attempting Part B.

//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================


// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 6
// =============================================================================
//
// TASK: Multiplication Table Generator
// =============================================================================

const readlineSync = require('readline-sync');

function printTable(number) {
    // Prints the multiplication table for a single number, from 1 to 12
    console.log(`Multiplication Table for ${number}:`);
    for (let i = 1; i <= 12; i++) {
        const multiplierStr = String(i).padEnd(2);
        console.log(`${number}  x  ${multiplierStr} = ${number * i}`);
    }
}

function printTablesUpTo(n) {
    // Prints multiplication tables for every number from 1 to n, separated
    for (let number = 1; number <= n; number++) {
        printTable(number);
        if (number !== n) {
            console.log("-".repeat(29));
        }
    }
}

function partA() {
    console.log("\n--- Part A: Single Table ---");
    const number = readlineSync.questionInt("Enter a number: ");
    console.log();
    printTable(number);
}

function partB() {
    console.log("\n--- Part B: Tables from 1 to N ---");
    const n = readlineSync.questionInt("Enter N: ");

    if (n <= 0) {
        console.log("Error: N must be a positive integer.");
        return;
    }

    console.log();
    printTablesUpTo(n);
}

function main() {
    partA();
    partB();
}

main();