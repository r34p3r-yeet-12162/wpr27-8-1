/* let marks = [45, 2, 56, 90, 32];

// select students who passed
let studentsWhoPassed = marks.filter((mark) => {
  return mark > 50;
});
let sum = studentsWhoPassed.reduce((sum, curr) => {
  return sum + curr;
});
console.log(sum);
console.log(`Average: ${sum / studentsWhoPassed.length}`);
// then let us find the total

// then let us find the average
 */

let marks = [45, 2, 56, 90, 32];

// select students who passed
let answer = marks
  .filter((mark) => {
    return mark > 50;
  })
  .reduce((sum, curr) => {
    return sum + curr;
  });
console.log(`Sum of who passed: ${answer}`);
