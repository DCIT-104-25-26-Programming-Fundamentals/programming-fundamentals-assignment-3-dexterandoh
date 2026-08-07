// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 1
// =============================================================================
//
// TASK: Prime Number Checker
// =============================================================================

const readlineSync = require('readline-sync');

function isPrime(n) {
    // Numbers less than 2 are not prime
    if (n < 2) {
        return false;
    }

    // Only need to check divisors up to the square root of n
    for (let divisor = 2; divisor <= Math.sqrt(n); divisor++) {
        if (n % divisor === 0) {
            return false;
        }
    }

    return true;
}

function main() {
    const number = readlineSync.questionInt("Enter a number: ");

    if (isPrime(number)) {
        console.log(`${number} is a prime number.`);
    } else {
        console.log(`${number} is NOT a prime number.`);
    }
}

main();