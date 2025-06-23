// Program to check whether a number is positive, negative, or zero in JavaScript
// There are three methods:
// 1. Brute Force
// 2. Nested If-Else Statements
// 3. Ternary Operator

// Method 1: Brute Force
// Algorithm:
// 1. Start
// 2. Input the number
// 3. If the number is greater than zero, print "The number is Positive"
// 4. If the number is less than zero, print "The number is Negative"
// 5. Else, print "The number is Zero"
// 6. Stop

function methodOne(number) {
    if (typeof number !== 'number' || isNaN(number)) {
        console.log("Please enter a valid number.");
        return;
    }
    if (number > 0) {
        console.log("The number is Positive.");
    } else if (number < 0) {
        console.log("The number is Negative.");
    } else {
        console.log("The number is Zero.");
    }
}

console.log("Method 1: Brute Force");
methodOne(10);
methodOne(-10);
methodOne(0);
methodOne("abc"); // Example of invalid input

// Method 2: Nested If-Else Statements
function methodTwo(number) {
    if (typeof number !== 'number' || isNaN(number)) {
        console.log("Please enter a valid number.");
        return;
    }
    if (number > 0) {
        console.log("The number is Positive.");
    } else {
        if (number === 0) {
            console.log("The number is Zero.");
        } else {
            console.log("The number is Negative.");
        }
    }
}

console.log("\nMethod 2: Nested If-Else");
methodTwo(10);
methodTwo(-10);
methodTwo(0);
methodTwo(undefined); // Example of invalid input

// Method 3: Ternary Operator
function methodThree(number) {
    if (typeof number !== 'number' || isNaN(number)) {
        console.log("Please enter a valid number.");
        return;
    }
    number === 0
        ? console.log("The number is Zero.")
        : number > 0
            ? console.log("The number is Positive.")
            : console.log("The number is Negative.");
}

console.log("\nMethod 3: Ternary Operator");
methodThree(10);
methodThree(-10);
methodThree(0);
methodThree(NaN); // Example of invalid input