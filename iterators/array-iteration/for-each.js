let classAmarks = [23, 3, 73, 19, 57, 66, 78, 98, 1, 3];

// a function that prints a value
function PrintVal(val) {
  console.log(val);
}
// and suppose we want print out a double of every mark
function Doobler(val) {
  console.log(val * 2);
}

// what if you want to run a function against a bunch of values in an array
//classAmarks.forEach(PrintVal); // we can call a function for each item in an array
//classAmarks.forEach(Doobler);

// callback functions
// In JS, functions are values. Remember that values can be passed to functions as arguments
// A function that is passed to another function as an argument is called a callback function

// In the previous example, PrintVal and Doobler are callback functions

// We do not always have a reason to declare variables/ functions expecially if they will be called once!

/* classAmarks.forEach(function PrintVal(val) {
  console.log(val);
});  */
// we can call a function for each item in an array. The following function is an ANNONYMOUS function
classAmarks.forEach(function (val) {
  console.log(val);
});

// we can call a function for each item in an array
classAmarks.forEach(function Doobler(val) {
  console.log(val * 2);
});
