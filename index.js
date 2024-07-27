/* testing the null vs undefined*/
// console.log(null);
//console.log(undefined);
//console.log( null === undefined);
//console.log( null == undefined);
//var any;
//console.log(any);
//any = null;
//console.log(any);
//console.log( null + 1);
//console.log( undefined + 1);

/*testing the conditional if*/
/*
var myAge= 35,
    yourAge= 15,
    anyAge=0;
if (myAge > yourAge){
    console.log("I am older than you!");
}else if(myAge == yourAge){
    console.log("We are at the same age")

}else{
    console.log("You are older than me!")
}

if(yourAge>18){
  console.log("welcome!")
}
else if(yourAge==18){
    console.log("welcome!!!!!")
} else {
  console.log("You don't have access to this website!")
}
/*testing ternary operator*/
/*var age = true;
age>30 ?(console.log("you ara a mature man")):(console.log("you ar a young man"))*/

/*testing the switch statement*/
/*
var myAge= 40;
var yourAge= 35;
switch(myAge){
  case yourAge:
    console.log("I am older than you!");
  case 40:
    console.log("We are at the same age");
    break;
  default:
    console.log("You are older than me!");
}*/
/*testing while loop*/
/*var age= 30;
while (age < 40){
    console.log("you are " + age + " not a baby anymore");
    age =age  + 1;
}*/

/*testing the for loop*/

// for (i=0; i< 10; i++){
//   console.log("*...* " + i);
// };

/*testing the nested for loop*/
// for (i=0; i<10; i++){
//   for(j=0; j<10; j++){
//     console.log(i + " *..* " + j)
//   }
//   console.log("this for loop round number " + i + " is done");
// };


/*
function myFunc(){};

function print(point){
  //var point = 10;
  for (var i=0; i<5; i++){

    console.log(point);
   console.log("    00   ");
    console.log("    _   ")
  };

};
print(47);*/

// build a function to test arrays and objects
  /*var names= ["May", "Heba", "Adel", "Samer", "Saly", "Hend", ["Mosa", "Ahmed", "Noha"]];
console.log(names[0]+names[2])
names[0]="Ali"
console.log(names.length)
for(i=0; i<names.length; i++){
  console.log(names[i])
}
names.push("mido")
console.log(names)
names.pop("mido")
console.log(names[6][1])*/
/*



function useArr(){
  var names= ["May", "Heba", "Adel", "Samer", "Saly", "Hend"];
 var container=document.getElementById("container");
  console.log(container);
    console.log(names);
  for (var i=0; i <names.length; i++){
    console.log(names[i]);

  };
  */
  /*
  var profession= {
    name00: "Developer",
    name01: "Doctor",
    name02: "Designer",
    name03: "Programmer",
    name04: "Nurse",
    name05: "Teacher"
  };

console.log(profession.name00)
profession.name00="Engineer"
console.log(profession.name00)
console.log(Object.values(profession))
for(i=0; i<Object.values(profession); i++){
  console.log(Object.values(profession)[i])

}
*/
/*
  var teamProfession= Object.values(profession);
  console.log(teamProfession);
  // for loop to show message
  for (var x= 0; x < names.length; x++){
    var message= "Hi " + names[x] + ", pleased to meet a " + teamProfession[x] + ".";
    //var messages=[];
    //messages.push(message);
    //console.log(messages);
container.textContent = message;
    console.log(container);
  };
  console.log(message);
};
useArr();*/


/*var amountNeededEgy= 4400;
var egyAccount=3000;
var amountNeededDoll= amountNeededEgy/15;
var dollarAccount=300;
var password=1234

if ((amountNeededEgy < egyAccount) || (amountNeededDoll < dollarAccount)){
  console.log("Your transaction is processing......")
}else if(amountNeededEgy == egyAccount) {
  console.log("You have only " + amountAvail + " in your account")
}else if(password != 1234){
  cosole.log("you hav entered a wronge password!!!")
}else {
   console.log("You have no enough money in your account!")
}

console.log(dollarAccount * 15)*/



// var hello="test";
// var world=55;
// var helloWorld=hello+world;
// console.log(hello)
// console.log(hello == world)
// console.log(hello === world)

// var x;
// // x=5;
// console.log(x)

// var z=null;

// console.log( typeof null);
// console.log( typeof undefined);
// // var yourName = prompt("What's your name?");
// // console.log("Welcome, "+ yourName)

// console.log( null + 1);
// console.log( undefined + 1);


// var list=["one", 1, true, null, "two"]
// list[3]="change"
// console.log(list[3])
// var testStr="test the string";
// testStr[2] = "z"
// console.log(testStr)
// list.push("ttthree")
// console.log(list)
// list.pop()
// console.log(list)
// console.log(list.includes("one"))
// var cars=["car0", "car01", "car02", true, 1]
// console.log(cars)
// var car={
//     //properties
//     color: "red",

//     hasWheels: true,
//     hasMirrors: true,
//     speed: 200,
//     //methods
//     canMove: function(){
//         console.log("Car is moving!!")
//     }
// ,
//     canTurn: function(){
//         console.log("Car is turning!!")
//     },
//     brand: "BMW"
// }

// console.log(car.brand)
// console.log(car.canMove())
// console.log(car)
// car.hasGlass=true;
// console.log(car)





// /*________________ sum function__________*/
// function sum(){
//   var age=20;
//   var country="Egy";
//   var tall=170;
//   console.log("Hello, my age is "+age+", I live in "+country+", my tall is "+tall)
// }

// // sum();
// console.log(sum)
//   var age=20;
//   var country="Egy";
//   var tall=170;
//   console.log("Hello, my age is "+age+", I live in "+country+", my tall is "+tall)
/*________________ multiply function__________*/

/*_______________project plan_______________________ */
/*
1. collect user input
2. validation input
-----if user input = number >>> next step
-----if user input = character >>> error message
3. collect user click event
4. calculation
5. display output
*/

// var x=9;
// function testScope(){
//   var test="test";
//   console.log(test)
// }
// testScope();

// function one(personName, personAge){
//   console.log("Hi "+personName+", I know you are "+personAge+" years old!")
// }
// one("Ali", 20);
// one("Sameh", 32);
// one("Adel", 25);

// var students=["Ali", "Adel", "Sameh", "Shrief"]
// var age=[20, 22, 25, 30]
// var st=[{
//   stName: "Ali",
//   stAge: 50,
// },
// {
//   stName: "Ali",
//   stAge: 50,
// }]
// var student=
// for (initialize; condition; update) {
//   // statements to repeat
// }

// for(var i=0; i<students.length; i++){
//   one(students[i], age[i])
// }

// var x = 0;
// while (x <= 5) {
//   console.log(x);
//   x = x + 1;
// }


// var txt="Alii";

// if(txt == "Ali"){
//   //some code
//   console.log("Hello, Ali")
// }else if(txt == "Ahmed"){
//   console.log("Hello, Ahmed")
// }else {
//   console.log("Hello, stranger!")
// }


// //ternary operators
// var x=8;
// x != 8?console.log("yes"):console.log("no")
// // logical operators

// var person="Adel";
// var age=24;
// if(!(age == 25)){
//   console.log("Hello Adel, I know you are 25 years old!")
// }

// var z;
// if(z){
//   console.log("I can find z")
// }else{
//   console.log("I can not find z")
// }

// var num1 = 1;
// var num2 = 2;
// if ((num1 + num2 == 3) || (num1 == 1)){
//    console.log("true")
// }
// else
//     console.log("false")


// function testContext(){
//   //some code
//   var d = 8;
//   console.log(d);
//   function nested(){
//     console.log(d);
//   }
// nested()
// }
// // console.log(d);
// testContext()
// console.log(egr)
// const students="test";
// var egr="mpllkd";

// callFun();
// function callFun(){
//   console.log("working")
// }

// var x=10;
// console.log(x)
// var x=1;
// console.log(x)

// //arrow function

// function arro(){

// }

// let sum=(a, b)=> {
//   return a+b
// }
// let multiply=(a, b)=> {
//   return a*b
// }

// let minus=(x, z)=>{
//   return x-z;
// }
// let result=minus(sum(50,80), multiply(4,5))
// console.log(result)


// let hello="Hello";
// let world="world";

// console.log(`${hello} my love ${world}`)

// let list=["May", "Heba", "Adel", "Samer", "Saly", "Hend"];
// // for(i=0; i<list.length; i++){
// //   console.log(list[i])
// // }

// for(item of list){
//   console.log(item)
// }


// let studentNames=["May", "Heba", "Adel", "Samer", "Saly", "Hend"];
// let studentsAges=[15, 50, 12, 20, 17, 15];

// let student={
//   studentName: "May",
//   studentAge: 15
// }

// let studentArr=[
//   {
//     studentName: "May",
//     studentAge: 15
//   },
//   {
//     studentName: "Heba",
//     studentAge: 50
//   }

// ]
//store all students
// let studentList=[];
// //build a function to iteratte over the arrays to get the student's data
// function studentMaker(arr1, arr2){
//   for(sName of arr1){
//     for(sAge of arr2){
//       studentList.push({studentName: sName, studentAge: sAge})
//     }
//   }
//   //console.log(studentList)
// }

// studentMaker(studentNames, studentsAges)
// console.log(studentList)

/*______________________plan_________________________ */
/*
-- Input
let studentNames=["May", "Heba", "Adel", "Samer", "Saly", "Hend"];
let studentsAges=[15, 50, 12, 20, 17, 15];
-- Output
studentList=[
  {
    studentName: "May",
    studentAge: 15
  },
    {
    studentName: "May",
    studentAge: 15
  },
  {
    studentName: "May",
    studentAge: 15
  },
  {
    studentName: "May",
    studentAge: 15
  },
  {
    studentName: "May",
    studentAge: 15
  },
  {
    studentName: "May",
    studentAge: 15
  }
]
--steps
1. use for loop to extract the names----------
2. use for loop to extract the ages-------
3. combine names and ages in an object
4. combine all objects in one array
5. log the student list
*/

let studentNames=["May", "Heba", "Adel", "Samer", "Saly", "Hend"];
let studentsAges=[15, 50, 12, 20, 17, 16];
let studentList=[];


for(i=0; i< studentNames.length; i++){
  studentList.push({
    studentName : studentNames[i] ,
   studentAge : studentsAges[i]})
}
console.log(studentList);

for(snamee of studentNames){
  //some code
}

