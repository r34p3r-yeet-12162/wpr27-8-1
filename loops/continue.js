/* Continue statement */

let classAmarks = [23, 3, 73, 19, "39", 57, 66, 78, 98, 1, 3]; // we have abritrarily added 39: string as a dirty value
let classBmarks = [45, 31, 53, 9, 77];

let pass = 0;
let fail = 0;

function CleanData() {
  // pass by value VS pass by ref ...
}

function ClassifyStudents(marks) {
  const marksLen = marks.length;
  for (i = 0; i < marksLen; i++) {
    // let us assume that the moment we come across an undesirable value, we want to skip the current iteration of the loop
    // meaning we want to go the next value in the array
    let currVal = marks[i];

    // if there is a non-Number value, stop the loop. The dataset is contaminated
    if (typeof currVal !== "number") continue;

    if (currVal > 59) {
      console.log(" pass " + currVal);
      pass++;
    } else {
      console.log("  fail " + currVal + " ");
      fail++;
    }
  }

  console.log(" ");
  console.log("total pass is " + pass);
  console.log("total fail is " + fail);
}

ClassifyStudents(classAmarks);
