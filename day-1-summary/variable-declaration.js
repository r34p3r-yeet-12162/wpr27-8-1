// var
var foo = true; // var gives you less control over scoping. DO not use it!!

//let gives you block scope; can be declared without initial value; allows reassignment
let bar = false;

{
  let bar = null; // bar at line 7 is NOT the same as bar at line 5
}

bar = true; //you can also reassign
console.log(bar);

//const gives you block scope; can NOT be declared without initial value; does NOT allow reassignment
const baz = false;
{
  let baz = null; // bar at line 7 is NOT the same as bar at line 5
}
baz = true; //you can also reassign. This line fives an error
console.log(baz);
