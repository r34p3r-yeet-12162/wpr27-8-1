// build an array with n (10) values
//let arrLiteral = []// array literal notation; empty array
////let arrLiteral = [1,2]// array literal notation; array with values 1 and 2

let arrConstructor = new Array(); // empty array
//let arrConstructor = new Array(2) // array of length 2
//let arrConstructor = new Array(1,2) // array with two elements

// create random numbers ...

/* for(let i = 0; i<3; i++){

    //arrConstructor.push(i+1)//PUSH adds an element to the end of an array
   arrConstructor[arrConstructor.length] = i+1; // equivalent to the above statement
    //arrConstructor.push(i++)//PUSH adds an element to the end of an array
    //arrConstructor.push(++i)//PUSH adds an element to the end of an array
} */

function GenerateNumbers(arrayLength, max) {
  for (let i = 0; i < arrayLength; i++) {
    //arrConstructor.push(i+1)//PUSH adds an element to the end of an array
    arrConstructor[arrConstructor.length] = Math.floor(Math.random() * max); // equivalent to the above statement
    //arrConstructor.push(i++)//PUSH adds an element to the end of an array
    //arrConstructor.push(++i)//PUSH adds an element to the end of an array
  }
}
GenerateNumbers(5, 10);

console.log(arrConstructor);

/* for (let index = 0; index < 10 ; index++) {
    arrConstructor[index] = index + 1; // 
    
}
console.log(arrConstructor); */

let classAmarks = [23, 3, 73, 19, 57, 66, 78, 98, 1, 3];
let classBmarks = [45, 31, 53, 9, 77];

let pass = 0;
let fail = 0;

// Class A
// a named block of statements that do something is called a function.
// A function can also take input. The inputs are known as parameters (parameter equals 'in place of a future value')
// functions allow us to reuse a block of statements by calling the name of the block

// marks is a parameter. It will show how a future valus is gong to be used
function PrintMarks(marks) {
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

PrintMarks(arrConstructor);
// Class B
//WhoPassed(classBmarks);
