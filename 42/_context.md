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
    if (isNaN(inputVal)) 
        return false
    return inputVal
  }
let res = isNumber(4) 



function findOddsandEvens(inputVal) {
    if(typeof inputVal !== 'number')return `Provide a number.`
    
  // let number = inputVal; // These values can come from anywhere
  if (inputVal % 2 === 0) 
    return (`${inputVal} is even`); // 
   // console.log(`${inputVal} is even`); // 
  else 
  return(`${inputVal} is odd`); // 

  /* if(inputVal%2 === 0)
  {
    console.log(`${inputVal} is even`);
  }
  else{
    console.log(`${inputVal} is odd`);


  } */
}

console.log(findOddsandEvens(res));
