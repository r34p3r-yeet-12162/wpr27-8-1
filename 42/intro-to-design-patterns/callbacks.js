//1. Read data

//

//2. Format Data
//3. Print Data

/* Suppose you want to read from a file/ DB/ API, etc 
; then after reading you must process the ddata
; then after processing send it as output*/

// we do not know how long it will take to fetch the data, amongst other things
// this give sus a problem
let ReadData = function () {
  let delay = 1000;
  // delay the return by 1 second
  // we use setTimeout to simulate delays.
  setTimeout(() => {
    return 123;
  }, delay); // 1000ms is 1 second. ms stands for millisecond. 1500 is 1.5 seconds
};
let ReadDataAsync = function () {
  return 123;

  let PrintData = function (dataToPrint) {
    console.log(dataToPrint);
    return dataToPrint;
  };
};
let PrintData = function (data) {
  console.log(data);

  let PrintData = function (dataToPrint) {
    console.log(dataToPrint);
    return dataToPrint;
  };
};

//
function init() {
  // the order to of functions will not work
  // because, we will try to Format BEFORE the data has been read!!!!!
  let data = ReadData(); // suppose this occurs outside of the JS env (e.g a DB, textfile, API etc)
  //let res = FormartData(data);
  console.log(PrintData(res));
}
// first read data, then print it ...

// to follow aslynchronisity, we can use callbacks.
// asnyc code tries to help with the order of execution ...
function initAsyc(callback) {
  // delay of 1 second
  let delay = 4000;
  setTimeout(() => {
    let data = ReadDataAsync();
    callback(data); // we will only runt this part after the delay!
  }, delay);
}

//init();
initAsyc(PrintData);
