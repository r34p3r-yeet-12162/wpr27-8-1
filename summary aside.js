/* 25 July */

// Numbers: Sci notation

//let num = 1000;
let num = 1e3; // the same as 1 * 10 to the power 3: 1* Math.pow(10, 3); 1*10**3
let anotherNum = 4.2e-3; // 00000004.2 / 10^3: 00000.0042

let inputNum = "12"; // we do not always have the correct data type
/* Conversion */
//  note: all data from forms is str by default

//before conversion
console.log(typeof inputNum);
//inputNum = parseInt(inputNum);
inputNum = parseInt(inputNum);
console.log(typeof inputNum);
inputNum = parseFloat("12");
console.log(inputNum);

function IsResANumber(a, b) {
  const res = a * b;
  if (Number.isNaN(res)) return "There is a problem with the calculation";
  return `res: ${res}`;
}

console.log(IsResANumber(1, 2));
/* Formatting */

let val = 36643123567;
console.log(val.toPrecision(3));

// round
console.log(Math.round(7.55));
console.log(Math.round(7.45));

// ceil
console.log(Math.ceil(7.55));
console.log(Math.ceil(7.45));

// ceil
console.log(Math.floor(7.45));
console.log(Math.floor(7.55));

// index of
let str = "there was a time when custard tasted better";
let indexOft = str.indexOf("there");
let lastIndexOft = str.lastIndexOf("t");
console.log(indexOft);
console.log(lastIndexOft);

// substr
let subStr = str.substring(1, 4); // start at index 1, and up to but NOT including the item at position 4
subStr;

// Immutability (the ability to be changed)
let immutableStr = "abc";
console.log(immutableStr[0]);
// try to change a character
immutableStr[1] = "z";
console.log(immutableStr); // the string remains unchanged! Therefore strings are immutable

// DATE
// Date difference calculator

function howManyDays(dateA, dateB) {
  //
  let date1 = new Date(dateA);
  let date2 = new Date(dateB);
  // The date object has getters and setters

  // getters: allow us to access certa]in properties of the date value
  console.log(dateA.getFullYear());
  console.log(dateA.getDay()); //

  // setters: allow us to modify certain properties of the date value
  date2.setFullYear(2025);

  // TO find the difference between dates, you want to calucate the milliseconds
  // then you convert them to the output format

  let difference = dateA - dateB;
  // to account for negative values, let us use an absolute

  difference = Math.abs(difference); // returns the scalar quantity
  console.log(difference); // the difference is in milliseconds

  // we will convert to seconds, then to minutes, then to hours, then to days
  let dayDifference = difference / (1000 * 60 * 60 * 24);

  // we want a min number of days
  return Math.ceil(dayDifference);
}
let date1 = new Date("2024-07-24");
let date2 = new Date("2024-07-27");

//

howManyDays(date1, date2);

/* Operators */
let a = 2,
  b = 3;
let sum = a + b; // a is an operand; b is an operand; + is an operator
// + is a BINARY operator because it works on two operands
// other examples: -, *, /, =,
// Note: == VS === (== compares value only & === compares value and type)

console.log(1 == 2);
console.log(1 == 1);
console.log(1 == "1"); // the type does not matter, as long as value are equal
console.log(1 === 1);
console.log(1 === "1"); // tripple equal also checks data types

// Unary operators
// These work on one operand: Examples include: +=, ++, --, typeof

// ternary operators
// JS has (condition)?do if true:do if false;
let answer = 2;
if (answer < 5) {
  console.log("less than 5");
} else {
  console.log("greater than 5");
}

//
answer < 5 ? console.log("less than 5") : console.log("greater than 5");

/* 
Array methods */

let fruits = ["tomato"];
let veggies = ["brocoli"];
let drinks = ["wine"];

//let food = fruits.concat(veggies)
let food = fruits.concat(veggies, drinks);
food;
