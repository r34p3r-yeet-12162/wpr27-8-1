/* Some values evaluate to FALSY */
// the BOOL value FALSE

/* 
falsy values
 */

let expression = 1 < 2; // this gives either TRUE or FALSE
let condition = expression;

// 1. The BOOL falsy is false
if (condition) {
  console.log("Condition is true");
}
// 2. empty strings
let username = "John";
//if(username == "")
if (!username) {
  // The line above is uquivalent to this one
  username = "guest"; // In the absence of a username, set it to 'guest'
}
console.log("Hello " + username);
console.log(`Hello ${username}`);

//3. null
let someVal = null;
//if(someVal==null)
if (!someVal) {
  // do something
}

// undefined
//
