//1. Read data

//

//2. Format Data
//3. Print Data

/* Suppose you want to read from a file/ DB/ API, etc 
; then after reading you must process the ddata
; then after processing send it as output*/

// we do not know how long it will take to fetch the data
// this give sus a problem
let ReadData = function () {
  // delay the return by 1 second
  setTimeout(() => {
    return 123;
  }, 1000);
};
let FormartData = function (data) {
  return data;
};
let PrintData = function (dataToPrint) {
  console.log(dataToPrint);
  return dataToPrint;
};

//
function init() {
  // the order to of functions will not work
  // because, we will try to Format BEFORE the data has been read!!!!!
  let data = ReadData();
  data;
  let res = FormartData(data);
  res;
  console.log(PrintData(res));
}

init();
