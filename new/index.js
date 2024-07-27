
/*
Coding Exercise 1: Simple Calculator

Description:
Build a basic calculator that performs arithmetic operations (addition, subtraction, multiplication, and division) on two numbers.
Concepts Covered:

1. Variables
2. Arithmetic operators
3. User input (prompt)
4. Conditional statements (if/else)

Real-life Problem:
This exercise simulates a simple calculator application, which is a fundamental tool for performing basic calculations.

Steps to Solution:
1. Prompt the user to enter two numbers and the desired operation.
2. Convert the input strings to numbers using parseInt.
3. Use conditional statements to determine the operation based on the user's input.
4. Perform the calculation and store the result.
5. Display the result to the user.

*/

console.log("Program start............")

// collect user input for the first number
let num01 = prompt("Enter the first number");
console.log("The first number is: " + num01);
console.log(typeof num01);

// collect user input for the second number
let num02 = prompt("Enter the second number");
console.log("The second number is: " + num02);

// collect user input for the operation
let operation = prompt("Enter the operation: +, -, *, /");
console.log("The operation is: " + operation);

// declare a variable to store the result
let result = 0;
console.log(result)

// check the operation and perform the calculation
if (operation == "+") {
    result = parseInt(num01) + parseInt(num02);
    console.log("The result is: " + result);
} else if (operation == "-") {
    result = parseInt(num01) - parseInt(num02);
    console.log("The result is: " + result);
} else if (operation == "*") {
    result = parseInt(num01) * parseInt(num02);
    console.log("The result is: " + result);
} else if (operation == "/") {
    result = parseInt(num01) / parseInt(num02);
    console.log("The result is: " + result);
} else {
    console.log("Invalid operation");
}