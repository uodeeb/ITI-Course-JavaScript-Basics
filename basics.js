console.log("hello world");
// variables
var number = 10;
console.log(number);
// number datatype
var num01 = 11;
var num02 = 22;
console.log(num01 + num02);
var sum = num01 + num02;
console.log(sum.toFixed(2));

var test = 45;
var test02 = "ALI";

console.log(typeof test);
console.log(test02.length);

console.log(test02.toLowerCase());

// string datatype
var str01 = "hello";
var str02 = "world";
console.log(str01 + " " + str02);
console.log(str01.toUpperCase())
console.log(str02.length)
console.log(str02[2])
str01[0] = "z";
console.log(str01 + str01[1]);
console.log(str01);
console.log(str02.includes("o"));

// boolean datatype
var bool01 = true;
var bool02 = false;
console.log(typeof bool01);

// undefined datatype
var x;
console.log(x);
console.log(typeof x);
console.log(x + 5);

// null datatype
var null01 = null;
console.log(null01);
console.log(typeof null01);
console.log(null01 + 5);
console.log(null01 === x);

// compound data types

// objects
var carColor = "red";
var carBrand = "bmw";
var carEngine = "v8";

var car = {
    // car object properties
    color: "red",
    brand: "bmw",
    engine: "v8",
    hasWheels: true,
    wheelsCount: 4,
    // car object methods
    canMove: function () {
        console.log("The " + this.color + " car is moving!!");
    }
}

console.log(car);
car.canMove();
console.log(car.brand);
car.color = "blue";
console.log(car);
car.hasGlass = true;
console.log(car);
car.hasChairs = true;
console.log(car);

// arrays
var colors = ["red", "blue", "green", 12, true];
console.log(colors);
console.log(colors[1]);
console.log(colors[2]);
console.log(colors[3]);

colors[2] = "yellow";
console.log(colors.length);
colors.push("golden");
console.log(colors);
colors.pop();
console.log(colors);
console.log(colors.includes("red"));

//loose equality
var text = "hello";
var z = 10;
console.log(text + z)

var d = 850;
var w = "850";
var e = d + w;
console.log(d == w);
console.log(d === w);

/*
js comments
opuopupuipuiop
*/

var a = 54;
var b = 87;
// console.log(a + b);

// var c = a + b;
// console.log(c);

// function
function add(num01, num02){
    var f = num01 + num02;
    // console.log(f);
    return f;
}
// function call or invokation
console.log(add(85, 78));
var summ = add(65, 55);
console.log(summ);

// scope
// global scope
var ss = 10;

function myFunction(){
    console.log(ss);
}
myFunction();
console.log(window);
console.log(this);

// local scope
function test01(){
    var ww = 11;
}

test01();

//console.log(ww);

// conditional statement
var xx = 4;
if(xx > 5){
    // code to be executed
    console.log("x is greater than 5");
}else {
    // code to be executed
    console.log("x is less than 5");
}


// ternary operator
// conditional ? true case: false case
age > 18 ? console.log("you are an adult, you can watch the movie!") : console.log("you are not an adult, you can not watch the movie!");



if(wifiSpeed > 50){
    console.log("you're wifi speed is too fast, you can watch the movie!");
}

// loops
// while loop

//start point
var i = 0;
while( i < 5){
    // code to be executed
    console.log(i);
    // update, Increment, STEP
    i = i + 1;
}

// FOR loop

for(var j = 0; j < 5; j++){
    console.log(j);
}
// equal sign
var s = "hello";
console.log(s !== "hello");
//strict equality
console.log(s !== Number("hello"));
console.log(typeof s, typeof Number("hello"));

// logical operators
// && and

var age = 19;
var wifiSpeed = 11;
var movieQuality = 6;
// if(age > 18){
//     console.log("you are an adult, you can watch the movie!");
// }
// else if(age == 18){
//     console.log("you are nearly an adult, you can watch the movie with parental giudence!");
// }else {
//     console.log("you are not an adult, you can not watch the movie!");
// }

if( (age > 18) && (wifiSpeed > 10)){
    console.log("you are an adult, you can watch the movie!");
}
// or operator
if((wifiSpeed > 10) || (movieQuality < 5)){
    console.log("0000000000, you can watch the movie!");
}

// ! Not operator

if(!(wifiSpeed > 12) || (movieQuality < 5)){
    console.log("0000000000, you can watch the movie!");
}

// truthy and falsy values
// falsy values: false, 0, "", null, undefined
// truthy values: anything else
var xxx = 78;
if(xxx){
    console.log("1111111111");
}


/*

project plan 
1- Project description
- student list with name and level.
- teacher list with name and subject.
- levels with subject list.
2. goal:
- a list of classes to match each teacher with a specific group of students and a specific subject
3. Algorithm:

---1- create a list of students with name and levels.
    [{
        name: "Ali",
        level: "2"
    },
    {
        name: "Ahmed",
        level: "3"
    },
    {
        name: "Osama",
        level: "4"
    }]
---2- create a list of teachers with name and subjects.
    [{
        teacherName: "Samy",
        subject: "Math"
    },
    {
        teacherName: "Ola",
        subject: "English"
    },
    {
        teacherName: "Asem",
        subject: "Arabic"
    }]
---3- create a list of levels with subjects.
    [{
        level: "2",
        subjects: ["Math02", "English02", "Arabic02"]
    },
    {
        level: "3",
        subjects: ["Math03", "English03", "Arabic03"]
    },
    {
        level: "4",
        subjects: ["Math04", "English04", "Arabic04"]
    }
    ]
---4- create a list of classes to match each teacher with a specific group of students and a specific subject.
    {
        class01:{
            teacherName: "Samy",
            subject: "Math",
            studentList: ["Ali", "Ahmed", "Osama"]
            },
        class02:{
            teacherName: "Ola",
            subject: "English",
            studentList: ["Ali", "Ahmed", "Osama"]
            },
        class03:{
            teacherName: "Asem",
            subject: "Arabic",
            studentList: ["Ali", "Ahmed", "Osama"]
            }
    }








*/