let classAmarks = [23, 3, 73, 19, 57, 66, 78, 98, 1, 3];
let classBmarks = [45, 31, 53, 9, 77];

let pass = 0;
let fail = 0;

// Class A
// a named block of statements that do something is called a function.
// A function can also take input. The inputs are known as parameters (parameter equals 'in place of a future value')
// functions allow us to reuse a block of statements by calling the name of the block

// marks is a parameter. It will show how a future valus is gong to be used
function WhoPassed(marks) {
  // start/ opening of block of statements

  for (i = 0; i < marks.length; i++) {
    if (marks[i] > 59) {
      console.log(" pass " + marks[i]);
      pass++;
    } else {
      console.log("  fail " + marks[i] + " ");
      fail++;
    }
  }

  console.log(" ");
  console.log("total pass is " + pass);
  console.log("total fail is " + fail);
} // end/ closing of block of statements

WhoPassed(classAmarks);
// Class B
WhoPassed(classBmarks);
