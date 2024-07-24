/* while do */
let classAmarks = [23, 3, 73, 19, 57, 66, 78, 98, 1, 3];
let classBmarks = [45, 31, 53, 9, 77];

let pass = 0;
let fail = 0;

function ClassifyStudents(marks) {
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

  let i = 0;
  /*  do {
    if (marks[i] > 59) {
      console.log(" pass " + marks[i]);
      pass++;
    } else {
      console.log("  fail " + marks[i] + " ");
      fail++;
    }
    i++;
  } while (i < marksLen); */
  // while do does not guarantee execution, just like a for loop
  while (i < marksLen) {
    // condition
    if (marks[i] > 59) {
      console.log(" pass " + marks[i]);
      pass++;
    } else {
      console.log("  fail " + marks[i] + " ");
      fail++;
    }
    i++; // modification
  }

  console.log(" ");
  console.log("total pass is " + pass);
  console.log("total fail is " + fail);
} // end/ closing of block of statements

ClassifyStudents(classAmarks);
