/* After the changes, the code is now broken.  */

/* 
    Problem: We want to find odds and evens

*/

// The first problem with this function is that it' calculates odd or even' and then 'logs it to console'
// This function is doing more that one thing!
// What if we want to print this to:
//  1. console
//  2. text file
//  3. DB object
//  4. etc

function isNumber(inputVal) {
  if (isNaN(inputVal)) return false;
  return inputVal;
}

// where do we get the 4 from? The 4 on the next line
function readInput() {
  // 1. prompt // to use prompt, we need to be on the frontend. Prompts are used to ask for input in a pop up
  //let inputVal = prompt("Provide a number: "); //

  /* suppose we have an input */
  //
  let inputValElem = document.getElementById("inputVal");
  let inputVal = inputValElem.value;

  if (!inputVal.length) return;
  inputVal = Number(inputVal);
  //alert(typeof inputVal); //2.alert is a modal popup that shows info
  /* let res = 4;
  return res; */
  // for testing use altert, log, etc
  alert(inputVal);

  if (typeof inputVal === "number") {
    return inputVal;
  } else {
    return; // undefined
  }
}

function findOddsandEvens(inputVal) {
  if (typeof inputVal !== "number") return `Provide a number.`;

  // let number = inputVal; // These values can come from anywhere
  if (inputVal % 2 === 0) return `${inputVal} is even`; //
  // console.log(`${inputVal} is even`); //
  else return `${inputVal} is odd`; //

  /* if(inputVal%2 === 0)
    {
    console.log(`${inputVal} is even`);
    }
    else{
        console.log(`${inputVal} is odd`);
    
    
} */
}

function determineIfInputNumberIsOddOrEven() {
  let numberOfValues = prompt("How many values do you want to capture?");
  //numberOfValues = Number(numberOfValues) // type constructor
  //numberOfValues = numberOfValues*1 // multiplying by forces an implicit conversion
  numberOfValues = parseInt(numberOfValues); // use a helper method called parse*

  //
  for (let i = 0; i < numberOfValues; i++) {
    // Step1: read input
    let inputVal = readInput(); // read input needs to be refactored.
    // Step 2: Check number

    let isItNumber = isNumber(inputVal);
    // Step 3: Check if odd or even
    let output = findOddsandEvens(isItNumber);
    //
    console.log(output);
  }
}

// console.log(findOddsandEvens(res));

/* 

    Call the functions in order. Remember
    that some of the functions have been commented out
 */

function runCodeAsync() {
  // a function that runs determineIfInputNumberIsOddOrEven after 3 seconds
  // This is an intro
}
