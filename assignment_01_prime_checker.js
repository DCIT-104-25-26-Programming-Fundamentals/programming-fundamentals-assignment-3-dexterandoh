// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 1
// =============================================================================
//
// TASK: Prime Number Ch

const readlineSync = require('readline-sync');

// Function to check if a number is prime
function isPrime(n) {
    if (n < 2) {
        return false; // Numbers less than 2 are NOT prime
    }
    // Check divisibility up to square root of n
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false; // Found a divisor, not prime
        }
    }
    return true; // No divisors found, prime
}

// Main function
function main() {
    const num = readlineSync.questionInt("Enter a number: ");
    if (isPrime(num)) {
        console.log(`${num} is a prime number.`);
    } else {
        console.log(`${num} is NOT a prime number.`);
    }
}

// Run the program
main();
