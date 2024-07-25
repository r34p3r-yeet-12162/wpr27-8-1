/* Here is a manual pop*/

var arr = [1, 2, 3, 4, 5];
// Imperative: You determine HOW something is done
// reducicng the length pf an array, concatenates the remaining elements

// Declarative: You just state what must be done. Not HOW
//arr.sort()
function RemovePopElementsFromArray(arr, numberOfElementsToPop) {
  arr.length = arr.length - numberOfElementsToPop;
  return arr;
}
// Oh waaow. WHat is the issue with the quality of this code?
// wrt to var
var arr = [1, 32, 5, 8, 3];

function RemoveFromStartOfArray(arr, noOfItemsToRemove) {
  for (let i = 0; i < noOfItemsToRemove; i++) {
    arr.shift();
  }
  return arr;
}
arr;
