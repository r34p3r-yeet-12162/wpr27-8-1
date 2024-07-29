// Imutability: cannot be changed

let str = "John";
console.log(str[0]);
str[0] = "Z";
console.log(str);

// Mutability
let arr = [1, 2, 3];
arr[0] = 9;
arr;

obj = {
  foo: true,
};
obj["foo"] = false;
obj;
obj.foo = true;
obj;
