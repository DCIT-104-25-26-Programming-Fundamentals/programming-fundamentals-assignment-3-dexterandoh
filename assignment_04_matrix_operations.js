// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');

// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
// =============================================================================

const readlineSync = require('readline-sync');

function readMatrix(rows, cols, label = "") {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
        let values;
        while (true) {
            const line = readlineSync.question(`Enter row ${i + 1}${label}: `);
            values = line.trim().split(/\s+/).map(Number);
            if (values.length !== cols || values.some(isNaN)) {
                console.log(`Error: expected ${cols} value(s). Try again.`);
                continue;
            }
            break;
        }
        matrix.push(values);
    }
    return matrix;
}

function printMatrix(matrix, title = "") {
    if (title) {
        console.log(title);
    }

    // Determine widest formatted number so columns line up
    const formatted = matrix.map(row => row.map(val => String(val)));
    let width = 0;
    for (const row of formatted) {
        for (const val of row) {
            width = Math.max(width, val.length);
        }
    }

    for (const row of formatted) {
        console.log(row.map(val => val.padStart(width)).join("  "));
    }
    console.log();
}

function transposeMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    const result = [];
    for (let j = 0; j < cols; j++) {
        result.push(new Array(rows).fill(0));
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            result[j][i] = matrix[i][j];
        }
    }

    return result;
}

function addMatrices(a, b) {
    const rows = a.length;
    const cols = a[0].length;

    const result = [];
    for (let i = 0; i < rows; i++) {
        result.push(new Array(cols).fill(0));
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            result[i][j] = a[i][j] + b[i][j];
        }
    }

    return result;
}

function multiplyMatrices(a, b) {
    const rowsA = a.length;
    const colsA = a[0].length;
    const colsB = b[0].length;

    const result = [];
    for (let i = 0; i < rowsA; i++) {
        result.push(new Array(colsB).fill(0));
    }

    for (let i = 0; i < rowsA; i++) {
        for (let j = 0; j < colsB; j++) {
            let total = 0;
            for (let k = 0; k < colsA; k++) {
                total += a[i][k] * b[k][j];
            }
            result[i][j] = total;
        }
    }

    return result;
}

function partA_transpose() {
    console.log("\n--- Part A: Transpose a Matrix ---");
    const rows = readlineSync.questionInt("Enter number of rows: ");
    const cols = readlineSync.questionInt("Enter number of columns: ");

    const matrix = readMatrix(rows, cols);

    printMatrix(matrix, "\nOriginal Matrix:");
    printMatrix(transposeMatrix(matrix), "Transposed Matrix:");
}

function partB_addition() {
    console.log("\n--- Part B: Add Two Matrices ---");
    const rows = readlineSync.questionInt("Enter number of rows: ");
    const cols = readlineSync.questionInt("Enter number of columns: ");

    console.log("\nMatrix A:");
    const matrixA = readMatrix(rows, cols);

    console.log("\nMatrix B:");
    const matrixB = readMatrix(rows, cols);

    const result = addMatrices(matrixA, matrixB);

    printMatrix(matrixA, "\nMatrix A:");
    printMatrix(matrixB, "Matrix B:");
    printMatrix(result, "Sum (A + B):");
}

function partC_multiplication() {
    console.log("\n--- Part C: Multiply Two Matrices ---");
    const m = readlineSync.questionInt("Enter rows of Matrix A: ");
    const n = readlineSync.questionInt("Enter columns of Matrix A (= rows of Matrix B): ");
    const p = readlineSync.questionInt("Enter columns of Matrix B: ");

    console.log("\nMatrix A:");
    const matrixA = readMatrix(m, n);

    console.log("\nMatrix B:");
    const matrixB = readMatrix(n, p);

    const result = multiplyMatrices(matrixA, matrixB);

    printMatrix(matrixA, "\nMatrix A:");
    printMatrix(matrixB, "Matrix B:");
    printMatrix(result, "Product (A x B):");
}

function main() {
    console.log("Matrix Operations");
    console.log("1. Transpose a Matrix");
    console.log("2. Add Two Matrices");
    console.log("3. Multiply Two Matrices");

    const choice = readlineSync.question("Choose an operation (1-3): ").trim();

    if (choice === "1") {
        partA_transpose();
    } else if (choice === "2") {
        partB_addition();
    } else if (choice === "3") {
        partC_multiplication();
    } else {
        console.log("Error: Invalid choice.");
    }
}

main();