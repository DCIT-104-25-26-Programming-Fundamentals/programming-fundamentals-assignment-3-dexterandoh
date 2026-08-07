// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 8
// =============================================================================
//
// TASK: Student Record Management System
//
// Build a console-based program that stores and manages student information.
// Each student is represented as a JavaScript object containing:
//
//   - name   : the student's full name  (string)
//   - id     : a unique student ID number (number, e.g. 20240001)
//   - scores : an array of scores from multiple assessments (e.g. [75, 88, 90])
//
// Example object:
//   { name: "Alice Mensah", id: 20240001, scores: [78, 85, 90] }
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_08_student_records.js
//
// -----------------------------------------------------------------------------
// FEATURES YOUR PROGRAM MUST SUPPORT
// -----------------------------------------------------------------------------
//
//   1. Add a Student
//      - Ask the user to enter the student's name and ID.
//      - Ask how many scores to enter, then collect each score one by one.
//      - Save the student object and confirm it was added.
//
//   2. Display All Students
//      - Print a formatted table showing every student's:
//          Name, ID, individual scores, and their average score.
//      - If no students have been added yet, print a message saying so.
//
//   3. Calculate Average Score for a Specific Student
//      - Ask the user to enter a student ID.
//      - Find the student and print their average score.
//      - If the ID is not found, print an error message.
//
//   4. Quit
//
// -----------------------------------------------------------------------------
// HOW THE MENU SHOULD LOOK
// -----------------------------------------------------------------------------
//
//   ================================
//      STUDENT RECORD SYSTEM MENU
//   ================================
//   1. Add student
//   2. Display all students
//   3. Calculate average score
//   4. Quit
//   Enter your choice (1-4):
//
// -----------------------------------------------------------------------------
// EXPECTED INTERACTION EXAMPLE
// -----------------------------------------------------------------------------
//
//   Enter your choice (1-4): 1
//   Student name: Alice Mensah
//   Student ID: 20240001
//   How many scores? 3
//   Enter score 1: 78
//   Enter score 2: 85
//   Enter score 3: 90
//   Student "Alice Mensah" added successfully.
//
//   Enter your choice (1-4): 3
//   Enter student ID: 20240001
//   Alice Mensah's average score: 84.33
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Store all student records in an array of objects.
// - Average scores must be displayed to 2 decimal places (use .toFixed(2)).
// - Each feature MUST be in its own function (see scaffold below).
// - Handle invalid menu choices and missing student IDs gracefully.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================


// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 8
// =============================================================================
//
// TASK: Student Record Management System
// =============================================================================

const readlineSync = require('readline-sync');

function addStudent(students) {
    // Prompts for a student's name, ID, and scores, then adds the record
    const name = readlineSync.question("Student name: ");
    const idInput = readlineSync.question("Student ID: ");
    const id = parseInt(idInput, 10);

    if (isNaN(id)) {
        console.log("Error: Student ID must be a number.");
        return;
    }

    // Check for duplicate ID
    if (students.some(student => student.id === id)) {
        console.log(`Error: A student with ID ${id} already exists.`);
        return;
    }

    const numScoresInput = readlineSync.question("How many scores? ");
    const numScores = parseInt(numScoresInput, 10);

    if (isNaN(numScores) || numScores <= 0) {
        console.log("Error: Number of scores must be a positive integer.");
        return;
    }

    const scores = [];
    for (let i = 0; i < numScores; i++) {
        const score = readlineSync.questionFloat(`Enter score ${i + 1}: `);
        scores.push(score);
    }

    students.push({ name, id, scores });
    console.log(`Student "${name}" added successfully.`);
}

function calculateAverage(scores) {
    // Returns the average of an array of scores, rounded to 2 decimal places
    let total = 0;
    for (let i = 0; i < scores.length; i++) {
        total += scores[i];
    }
    return total / scores.length;
}

function displayAllStudents(students) {
    // Prints a formatted table of all students: name, ID, scores, average
    if (students.length === 0) {
        console.log("No students have been added yet.");
        return;
    }

    console.log("-".repeat(60));
    console.log(
        "Name".padEnd(15) + "ID".padEnd(12) + "Scores".padEnd(20) + "Average".padEnd(10)
    );
    console.log("-".repeat(60));

    students.forEach(student => {
        const scoresStr = student.scores.join(", ");
        const average = calculateAverage(student.scores).toFixed(2);
        console.log(
            student.name.padEnd(15) +
            String(student.id).padEnd(12) +
            scoresStr.padEnd(20) +
            average.padEnd(10)
        );
    });

    console.log("-".repeat(60));
}

function findStudentById(students, id) {
    // Returns the student object matching the given ID, or undefined
    return students.find(student => student.id === id);
}

function showAverageForStudent(students) {
    // Asks for a student ID, finds them, and displays their average score
    const idInput = readlineSync.question("Enter student ID: ");
    const id = parseInt(idInput, 10);

    if (isNaN(id)) {
        console.log("Error: Student ID must be a number.");
        return;
    }

    const student = findStudentById(students, id);

    if (!student) {
        console.log(`Error: No student found with ID ${id}.`);
        return;
    }

    const average = calculateAverage(student.scores).toFixed(2);
    console.log(`${student.name}'s average score: ${average}`);
}

function printMenu() {
    console.log("\n================================");
    console.log("   STUDENT RECORD SYSTEM MENU");
    console.log("================================");
    console.log("1. Add student");
    console.log("2. Display all students");
    console.log("3. Calculate average score");
    console.log("4. Quit");
}

function main() {
    const students = [];

    while (true) {
        printMenu();
        const choice = readlineSync.question("Enter your choice (1-4): ").trim();

        if (choice === "1") {
            addStudent(students);
        } else if (choice === "2") {
            displayAllStudents(students);
        } else if (choice === "3") {
            showAverageForStudent(students);
        } else if (choice === "4") {
            console.log("Goodbye!");
            break;
        } else {
            console.log("Error: Invalid choice. Please enter a number between 1 and 4.");
        }
    }
}

main();