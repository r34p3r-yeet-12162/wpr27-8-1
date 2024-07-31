// mark
let mark = 23;

// what if I want a lof marks
// > create multiple variables to store the marks;

// we should lists of things

let marksArrObjContructorEmpty = new Array(); // This an empty array
let marksArrObjContructorInitLength = new Array(5); // an int arg creates the array with that length (n arg: number), and all the elements are UNDEFINED
console.log(marksArrObjContructorInitLength);

let marksArrObjContructorInitialValues = new Array(23, 70, 90); //marksArrObjContructorInitialValues is [3,4,2]
console.log(marksArrObjContructorInitialValues);

//let marksArrLiteral = [];
let marksArrLiteral = [23, 70, 90];

console.log(marksArrLiteral);

marksArrLiteral.push(23);
marksArrLiteral.push(70);
marksArrLiteral.push(90);

//
marksArrLiteral;
console.log(marksArrLiteral[0]);

// arrays are not able to describe values
// arrays are 0 indexed,
// this is where OBJECTS come in

let personArr = ["John"];
console.log(personArr[0]);

// we are creating a literal object
// now we do not use the position, but we use a word
let personObj = {
  name: "John",
};
personObj.name; // instead of person[0]
personObj["name"]; // this also works

// objects have properties.
// ... john: 23 is a property. The property name is 'john', and the property value is '23'
// this means we do not use  anymore, we use a word

let marksArrLiteralObj = [{ john: 23 }, { jane: 70 }, { jill: 90 }];
