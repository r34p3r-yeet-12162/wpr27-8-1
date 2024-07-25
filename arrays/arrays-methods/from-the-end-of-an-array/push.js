/* PUSH: Adds an element to the end of an array */

let arr = [1, 2, 3, 4, 5];

/* function AddItemsToArray(arr, items) {
  arr.push(...items); 
  return arr;

} */
function AddItemsToArray(arr, item) {
  arr.push(item);
  return arr;
}

AddItemsToArray(arr, 3);
console.log(arr);
