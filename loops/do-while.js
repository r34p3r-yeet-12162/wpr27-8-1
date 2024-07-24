/* 
do while */

let classAmarks = [23, 3, 73, 19, 57, 66, 78, 98, 1, 3];
let classBmarks = [45, 31, 53, 9, 77];

let pass = 0;
let fail = 0;

function PrintMarks(marks) {
  const marksLen = marks.length;

  /* for (let i = 0; i < marksLen; i++) {
    if (marks[i] > 59) {
      console.log(" pass " + marks[i]);
      pass++;
    } else {
      console.log("  fail " + marks[i] + " ");
      fail++;
    }
  } */
  // do while  guarantees execution at least once, unlike a for loop

  let i = 0; // initilialise a variable OUTSIDE of the loop
  do {
    if (marks[i] > 59) {
      console.log(" pass " + marks[i]);
      pass++;
    } else {
      console.log("  fail " + marks[i] + " ");
      fail++;
    }
    i++; // modify the counter variable
  } while (i < marksLen); // the condition is checked after execution

  console.log(" ");
  console.log("total pass is " + pass);
  console.log("total fail is " + fail);
} // end/ closing of block of statements

PrintMarks(classAmarks);
