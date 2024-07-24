/* HOISTING is a term that refers to whether function definitions are 
implicitly lifted to the top of the script or not

*/
foo(); // foo is being called before the line that declares it
// this will work because function declarations are HOISTED

function foo() {
  console.log("Foo");
}

// function expressions and arrow functions are NOT hoisted
bar();
let bar = function () {
  console.log("Bar");
};
baz();
let baz = () => {
  console.log("Bar");
};
