/* DECLARATION  */

//1. array literal
//let arrLit = [] // we are literally building an array because we are using square brackets
let arrLit = [1, 5, 6, "4", true]; // we can also give initial values to an array

//2. Array constructor
//let arrConstr = new Array() // The new keyword invokes the type constructor for they type
//let arrConstr = new Array(3) // the array will have an initial length of 3
let arrConstr = new Array(3, "Hi"); // the array will have two elements

//3. You can also build an array from JS values that are array-like
let buildArrFromStr = Array.from("Hi");
