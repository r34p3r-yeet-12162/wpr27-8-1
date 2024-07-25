/* Unshift adds element to the start of an array */
let arr = [2, 4, 5, 7];

function AddElementToStartOfArray(arr, elemToAd) {
  arr.unshift(elemToAd);
  return arr;
}

console.log(AddElementToStartOfArray(arr, 3));
