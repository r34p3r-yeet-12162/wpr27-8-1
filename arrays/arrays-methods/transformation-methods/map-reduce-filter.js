let marks = [45, 2, 56, 90, 32];

// find all the marks above 50
function Double(mark) {
  // mark>=50
  return mark * 2;
}

//let studentsWhoPassed = marks.forEach(Pass); // foreach does not return anything
//let studentsWhoPassed = marks.forEach(Double); // foreach does not return anything
let studentsWhoPassed = marks.forEach((mark) => {
  return mark >= 50;
}); // foreach does not return anything

console.log(studentsWhoPassed);

// map allows you to save the result of the operation
studentsWhoPassed = marks.map(Double); // foreach does not return anything
console.log(studentsWhoPassed);

// What if we wanted to select only marks that are now above 100?
// filter allows you to SET A CRITERIA FOR WHAT YOU WANT TO KEEP
let res = studentsWhoPassed.filter((mark) => {
  return mark > 100;
  //return mark % 2 === 0
});
console.log(res);

// Reduce:
// suppose we want to find the total of the marks, after doubling and selecting marks above 100

let total = res.reduce((sum, curr) => {
  return sum + curr;
}, 0);
total;
