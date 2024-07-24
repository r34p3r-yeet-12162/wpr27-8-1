let foo = false;

function setVariable(val) {
  let foo = val; // variables that are declared inside a function are local to that function
}
setVariable(true);
console.log(foo);

function outer() {
  let foo = 1;
  function inner() {
    // let foo = 2; // this is a different instance of foo
    // .. note: inner functions have access to the values in the outer functions
    foo = 100;
    let innerVar = true;
  }
  // innerVar is not accessible
}
