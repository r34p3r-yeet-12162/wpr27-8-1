/* Objects  */
// there are multiple ways to declare an object
// Objects allow a key:value pairing
// the key and value are known as a property of a object
// therefore, the key is a property name, and the value is a property value

//1. literally
let myLitObject = {
  name: "John",
  surname: "Doe",
  age: 18,
};
// 2. constructor
let myConstrObject = new Object();

// Objects do not use 0 indexing. We use iterators to access the properties

/* for (const key in myLitObject) {
  const val = myLitObject[key];
  console.log(val);
} */

function PrintObjectDetails(obj) {
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      const val = obj[key];
      console.log(val);
    }
  }
}

PrintObjectDetails(myLitObject);
