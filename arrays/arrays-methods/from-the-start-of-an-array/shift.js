/* Shif removes elements from the start of an array */
let arr = [1, 32, 5, 8, 3];

function RemoveFromStartOfArray(arr, noOfItemsToRemove) {
  for (let i = 0; i < noOfItemsToRemove; i++) {
    arr.shift();
  }
  return arr;
}
arr;
