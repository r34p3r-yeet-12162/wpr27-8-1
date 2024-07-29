// obj literal
let litObj = {};
// constructor
let constrObj = new Object({ bar: true, baz: "foo" });

// 3. In JS objects are functions!

// SUppose we want to create an object, we can use function notation

//3. This function defines a type.
function Person(name, surname) {
  this.name = name;
  this.surname = surname;
  function getSurname() {
    return this.surname;
  }
}

let james = new Person("James", "Doe");
let john = new Person("John", "Doe");
console.log(james.name);
console.log(james.surname);

// The CLASS keyword
//The class keyword is meant to stop non-JS programmers from having a stroke
// a shock when they use ES
// it is syntactic sugar

class Animal {
  //
}

let cat = new Animal();
//
let someObj = Object.create(constrObj);
console.log(someObj);
