/* for of */
let classAmarks = [23, 3, 73, 19, 57, 66, 78, 98, 1, 3];
let classBmarks = [45, 31, 53, 9, 77];

function PrintMarks(marks) {
  let pass = 0;
  let fail = 0;
  let position = 0;
  // each of the elements of marks will be referred to by the the identifier 'mark'
  for (const mark of marks) {
    //console.log(mark);
    // console.log(`We are at position ${position}`);
    if (mark > 59) {
      console.log(" pass " + mark);
      pass++;
    } else {
      console.log("  fail " + mark + " ");
      fail++;
    }
    // position++;
  }

  console.log("total pass is " + pass);
  console.log("total fail is " + fail);
} // end/ closing of block of statements

PrintMarks(classAmarks);
