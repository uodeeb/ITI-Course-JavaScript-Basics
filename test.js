// console.log("hello world");
// number datatype
var num01 = 10;
var num02 = 20;
console.log(num01 + num02)
// string datatype
var str01 = "hello";
var str02 = "world";
console.log(str01 + " " + str02)
console.log(str01.toUpperCase(), str01.length)
console.log(str02[2])
console.log(typeof str01, typeof num01)
// boolean datatype
var bool01 = true;
var bool02 = false;
console.log(bool01 + " " + bool02)
// null datatype
var null01 = null;
console.log(null01)
console.log(typeof null01)
// undefined datatype
var undef01 = undefined;
console.log(undef01)
var x;
console.log(x)
x = 5;
console.log(x)

// objects
var carColor = "red";
var carSpeed = 200;
var carWheels = true;
var carGlass = true;

var car = {
    // properties
    color: "red",
    speed: 200,
    wheels: true,
    glass: true,
    canMove: function () {
        console.log("The" + this.color + "car is moving!!" + "its speed is " + this.speed)
    },
    canTurn: function () {
        console.log("Car is turning!!")
    }
}
console.log(car)

console.log(car.color)
car.color = "blue"
console.log(car)
car.canMove()
car.canTurn()

// compare null and undefined
console.log(null == undefined)
console.log(null === undefined)

console.log(null + 5)
console.log(undefined + 1)

// Array
var colors = ["red", "blue", "green", 12, true]
console.log(colors)
console.log(colors[1])
console.log(colors[2])
console.log(colors[3])

console.log(str01[3])
str01[3] = "z"
console.log(str01)
colors[2] = "yellow"
console.log(colors.push("purple"))
console.log(colors)
colors.pop()
console.log(colors)
console.log(colors.includes("red"))
console.log(this)

//variable
var hello = "5"
var world = "world"
console.log(hello + " " + world)
var myName = "Mohammad"; // camelCase
var my_name = "Mohammad"; // snake_case
var My_Name = "Mohammad"; // PascalCase

// loose equality
console.log(1 + "1")
console.log(1 == "1")
console.log(1 === "1")

// force datatype
// console.log(Number("1")+ 1)
// console.log(String(1) + "gjojlk")

// js comment
/* js comment
test
test
*/

// function
function test() {
    console.log("hello world!")
}
// call function
test()


function add(a, b) {
    return a + b
}
console.log(add(15,5))
var val01 = add(8,7);
var val02 = add(10,10);
console.log(add(val01, val02))
console.log(add(15,5) + add(8,7) + add(10,10))

// variable scope

// global scope
var x = 5;
console.log(x)
function testScope() {
    x = 10;
    console.log(x)
}
testScope()
// block scope
function testScope1() {
    const z = 15;
    console.log(z)
}


z=2;
console.log(z)
testScope1()


// two level scope
function one() {
    const personName = "Ali";
    const personAge = 20;
    console.log("Hi "+personName+", I know you are "+personAge+" years old!")
    function two() {
        personName = "Adel";
        personAge = 25;
        console.log("Hi "+personName+", I know you are "+personAge+" years old!")
    }
    two()
}

// one()

// conditional statement
var num = 10;
if(num > 15){
    //true statement
    console.log("yes")
}else{
    //false statement
    console.log("no")
}

// ATM machine example
// var pass = 1234;
// var balance = 1000;

// var pin = prompt("Enter your password");
// var date = prompt("Enter today's date");
// if(pin == pass && date < 30){
//     //true statement
//     console.log("welcome", "your account balance is ", balance)
//     var amount = prompt("Enter amount to withdraw");
//     if(amount <= balance ){
//         balance = balance - amount;
//         console.log("please collect your cash", "you have ", amount)
//         console.log("your account balance is ", balance)
//     }else{
//         console.log("insufficient balance")
//     }
// }else if(pin == pass && date == 30){
//     console.log("Sorry!", "Withdraw is not allowed on this day")

// }else{
//     //false statement
//     console.log("wrong password", "please try again")
// }

// while loop
var i = 10;
while(i > 5){
    // executed code 
    console.log(i)

    // increment, update
    //i = i + 1;
    i--
}

// for loop
for(var i = 0; i < 5; i++){
    console.log(i)
}


// Global scope
let globalVariable = "I am global";

function myFunction() {
  // Function scope
  let functionVariable = "I am local";
  console.log(globalVariable); // Accessible
  console.log(functionVariable); // Accessible

  if (true) {
    // Block scope
    let blockVariable = "I am block scoped";
    console.log(blockVariable); // Accessible
  }
   //console.log(blockVariable); // ReferenceError: blockVariable is not defined
}

myFunction();
console.log(globalVariable); // Accessible
//console.log(functionVariable); // ReferenceError: functionVariable is not defined


// hoisting

console.log(x); // What will be the output?
var x = 10;
console.log(x); 
function myFunction01() {
  console.log(y); // What will be the output?
  var y = 20;
}

myFunction01();

// var vs let
// Using var
var message = "Hello";
if (true) {
  var message = "World"; // Redeclaration allowed, but can lead to confusion
  console.log(message); // Output: "World"
}
console.log(message); // Output: "World"

// Using let
let greeting = "Hello";
if (true) {
  let greeting = "World"; // New variable in a new scope
  console.log(greeting); // Output: "World"
}
console.log(greeting); // Output: "Hello"

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

// truthy and falsy values

// falsy values

// 0
console.log(0 == false)
if(!0){
    console.log("true")
}

// ""
console.log("" == false)
if(!""){
    console.log("true")
}

// undefined
console.log(undefined == false)
// null
console.log(null == false)
// NaN
console.log(NaN == false)

// working with array and loops

var arr = ["item01", "item02", "item03", "item04", "item05"];

for(var i = 0; i < arr.length; i++){   
    console.log(i, arr[i])

}

// for of
for( item of arr){
    // item refers to the array items
    console.log(item)  

}

// for in
for( item in arr){
    //item refers to the array index
    console.log(item)

}

// array of objects
var itemsArr = [
    {
        name: "item01",
        price: 100
    },
    {
        name: "item02",
        price: 200
    },
    {
        name: "item03",
        price: 300
    },
    {
        name: "item04",
        price: 400
    },
    {
        name: "item05",
        price: 500
    },
]

// build a function to log each item beside the price

function logItem(arrOfItems){
    // loop through the array
    for(item of arrOfItems){
        if(item.price > 200){
        console.log("This is " + item.name, "and its price is " + item.price)
    }
}
}
logItem(itemsArr)


/*
----------------school project--------------------
build a function to match each teacher with a specific 
group of students and a specific subject

- list of teachers
- list of students
- list of subjects
- list of classes

- Output
"Student + student.name + is in class + teacher.name + in subject + subject.name"

*/

let teachersList = [
    {
        name: "Ahmed",  
        subject: "Math",
        group: "Group 1"           
    },
    {
        name: "Mohamed",  
        subject: "English",
        group: "Group 2"           
    },
    {
        name: "Sayed",  
        subject: "Science",
        group: "Group 3"           
    }

]

let studentsList = [
    {
        name: "Ahmed",  
        group: "Group 1"    
    },
    {
        name: "Mohamed",  
        group: "Group 2"    
    },
    {
        name: "Sayed",  
        group: "Group 3"    
    }
]

let subjectsList = [
    {
        name: "Math",  
    },
    {
        name: "English",  
    },
    {
        name: "Science",  
    }
]

let classesList = [
    {
        teacher: "Ahmed",
        subject: "Math",    
    },
    {
        teacher: "Mohamed",
        subject: "English",    
    },
    {
        teacher: "Sayed",
        subject: "Science",    
    }
]