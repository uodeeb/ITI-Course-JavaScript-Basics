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
var pass = 1234;
var balance = 1000;

var pin = prompt("Enter your password");
var date = prompt("Enter today's date");
if(pin == pass && date < 30){
    //true statement
    console.log("welcome", "your account balance is ", balance)
    var amount = prompt("Enter amount to withdraw");
    if(amount <= balance ){
        balance = balance - amount;
        console.log("please collect your cash", "you have ", amount)
        console.log("your account balance is ", balance)
    }else{
        console.log("insufficient balance")
    }
}else if(pin == pass && date == 30){
    console.log("Sorry!", "Withdraw is not allowed on this day")

}else{
    //false statement
    console.log("wrong password", "please try again")
}

