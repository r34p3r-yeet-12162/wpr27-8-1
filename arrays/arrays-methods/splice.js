let arr = ["I", "study", "JavaScript"];
let startIndexOfDeletion = 1;

const numberOfItemsToDelete = 1; // 'study is at index 1'
//arr.splice(startIndexOfDeletion, numberOfItemsToDelete); //
arr.splice(startIndexOfDeletion); // everything is deleted up to the end
console.log(arr); // ["I", "JavaScript"]
