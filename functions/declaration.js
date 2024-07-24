/* A function is a named body of code that does something.
There are 3 ways to declare functions 
*/

//1. function declaration
// The function MUST always have a name

function funcA() {
  // do something
}
//2. function expression: We store the function value in a variable
// the function name is optional. You only need it for recurssion
let funcB = function () {
  // do something
};
//3. arrow functions: We store the function value in a variable, but with modern syntax

let funcC = () => {
  // do something
};

// to call a function, you refer to it by name
funcC();
