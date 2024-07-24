/* The return keyword is used inside functions. It achieves two things:
1. It stops the execution of a function
2. It causes the function to pass a value to the calling program
 */

let classAmarks = [63, 3, 73, 19, "39", 57, 66, 78, 98, 1, 3]; // we have abritrarily added 39: string as a dirty value

function ClassifyStudents(marks) {
  let pass = 0;
  let fail = 0;
  const marksLen = marks.length;
  for (i = 0; i < marksLen; i++) {
    let currVal = marks[i];

    if (currVal > 59) {
      //console.log(" pass " + currVal);
      pass++;
    } else {
      //  console.log("  fail " + currVal + " ");
      fail++;
    }
  }
  return {
    NumberOfStudentsWhoPassed: pass,
    NumberOfStudentsWhoFailed: fail,
  };
  // return pass;
}

let result = ClassifyStudents(classAmarks);
console.log(
  `The number of students who passed is ${result.NumberOfStudentsWhoPassed}, and the number of students who failed is ${result.NumberOfStudentsWhoFailed}`
);

function Add(a, b) {
  return a + b;
}
/* let res = Add(2, 3);
console.log(res); */

console.log(Add(2, 3)); // when return is used, the function behaves just like a variable
// ....
let res = (Add(9, 0) * Add(1, 1)) / Add(87, 2);
console.log(res);

/* IMPORTANT: If there in no return, the function returns void (undefined) */
function func(arg) {
  console.log(arg);
}
let output = func("Hello");
console.log(output);
