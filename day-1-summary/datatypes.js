/* 

    DATA TYPES
*/

//Number
let looselyTypedvariableThatCanBeChangedNoMatterWhatItWasInitialisedToBecauseJavaScriptIsLooselytyped = 12,
  b; // multi-vaiable declaration
looselyTypedvariableThatCanBeChangedNoMatterWhatItWasInitialisedToBecauseJavaScriptIsLooselytyped = 12.0; // you can change the value, and the typing does not matter
looselyTypedvariableThatCanBeChangedNoMatterWhatItWasInitialisedToBecauseJavaScriptIsLooselytyped =
  "12"; // numerical STRING

// Boolean
looselyTypedvariableThatCanBeChangedNoMatterWhatItWasInitialisedToBecauseJavaScriptIsLooselytyped = true;

//Undefined
looselyTypedvariableThatCanBeChangedNoMatterWhatItWasInitialisedToBecauseJavaScriptIsLooselytyped =
  undefined; //Undefined means you have declared a variable but with no value. You can explicity assign it, or just declare without initial value

//object
looselyTypedvariableThatCanBeChangedNoMatterWhatItWasInitialisedToBecauseJavaScriptIsLooselytyped =
  { personName: "John", personSurname: "Doe" }; // the curley brackets mean a LITERAL object
looselyTypedvariableThatCanBeChangedNoMatterWhatItWasInitialisedToBecauseJavaScriptIsLooselytyped =
  new Object(); // object constructor [new creates an instance, and allocates space on the heap]
looselyTypedvariableThatCanBeChangedNoMatterWhatItWasInitialisedToBecauseJavaScriptIsLooselytyped.personAddress =
  "123 StreetName, City";
//Null
looselyTypedvariableThatCanBeChangedNoMatterWhatItWasInitialisedToBecauseJavaScriptIsLooselytyped =
  null; //Null is an invalid referrence; and it can be assigned

//Strings (we do not have the char data type; single quotes and double are equivalent)
let strToJoin = "The output is ";
looselyTypedvariableThatCanBeChangedNoMatterWhatItWasInitialisedToBecauseJavaScriptIsLooselytyped =
  "a";
looselyTypedvariableThatCanBeChangedNoMatterWhatItWasInitialisedToBecauseJavaScriptIsLooselytyped =
  "b";
looselyTypedvariableThatCanBeChangedNoMatterWhatItWasInitialisedToBecauseJavaScriptIsLooselytyped = `c`; // we can also use TEMPLATE STRINGS that utilise backticks ``

//backticks are useful for variable-string interpolation
console.log(
  strToJoin +
    looselyTypedvariableThatCanBeChangedNoMatterWhatItWasInitialisedToBecauseJavaScriptIsLooselytyped +
    "; end of message"
);
console.log(`${strToJoin} ; end of message`);
console.log(`${strToJoin} ; end of message`); // backticks allow us to call JS in the string
// console.log(`${Math.random()*10} ; end of message`); // You can integrate JS with a string, and not have to worry about concatenation (joining strings)

//
looselyTypedvariableThatCanBeChangedNoMatterWhatItWasInitialisedToBecauseJavaScriptIsLooselytyped =
  new Date("23 July 2024"); //
let day =
  looselyTypedvariableThatCanBeChangedNoMatterWhatItWasInitialisedToBecauseJavaScriptIsLooselytyped.getMonth();
console.log(day);
//Object
//a = {} // the curley brackets mean a LITERAL object
console.log(
  looselyTypedvariableThatCanBeChangedNoMatterWhatItWasInitialisedToBecauseJavaScriptIsLooselytyped
);
console.log(
  typeof looselyTypedvariableThatCanBeChangedNoMatterWhatItWasInitialisedToBecauseJavaScriptIsLooselytyped
); //
console.log(typeof b); //
