//
function Greet() {
  console.log(
    "Hi"
  ); /* If console is referenced in the document, it refers to console in the browser */
}
function RequestColor() {
  return prompt(
    "What color do you want. Choose 1 for red, 2 for white, 3 for blue"
  );
}

function readInputCode() {}
function LogDOMnodes() {
  let loginForm = document.getElementById("login-form");

  console.log(loginForm);
}

function ChangeFormBg(color) {
  let loginForm = document.getElementById("login-form"); // we are creating a variable to 'control' the item on the DOM
  loginForm.style.backgroundColor = color;
  //
  // there is also an API that allows code from executing immediately
  // it is called setTimeout

  let delay = 10000; // time in milliseconds: 1 second is 1000
  setTimeout(() => {
    loginForm.style.backgroundColor = "green"; // runs once
  }, delay);

  // setInterval (is a gap between recalls to a function). Used to run code, every other xxxx milliseconds
}

function ChangeParagraphTest() {
  let paragraph = document.getElementById("para");
  paragraph.innerHTML = "This is new text";
}

function ChangeBtnBackgroundsByTagName() {
  let buttons = document.getElementsByTagName("button");
  console.log(buttons);
  /*   buttons.forEach((button) => {
    button.style.backgroundColor = "orangered";
  }); */
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = "orangered";
  }
}
function ChangeBtnBackgroundsByClassName() {
  let labels = document.getElementsByClassName("default-label");
  // console.log(buttons);
  /*   buttons.forEach((button) => {
    button.style.color = "orangered";
  });
 */
  for (let i = 0; i < labels.length; i++) {
    labels[i].style.backgroundColor = "orangered";
  }
}

function Login() {
  let usernameElement = document.getElementById("username");
  let username = usernameElement.value; // we do not always use value
  console.log(username);

  let passwordElement = document.getElementById("password");
  let password = passwordElement.value; // we do not always use value
  console.log(password);
}

function GetNameQrySelector() {
  // let someElement = document.getElementById('some-id')
  //let someElement = document.querySelector('#some-id')

  // let someElement = document.getElementsByClassName('username')
  //let someBunchOfElements = document.querySelector(".some-class");

  //let specialBunchOfElements = document.querySelector("form input[type='text']");

  // WIth query selector, you can use forEach

  let usernameElement = document.querySelector("#username"); // The selector is qualified by preprending the symbol for ID, Class,etc
  let username = usernameElement.value; // we do not always use value
  console.log(username);
}

function ChangeBtnBackgroundsByClassNameQry() {
  //let labels = document.querySelector(".default-label"); // Only the first elem
  let labels = document.querySelectorAll(".default-label"); // An array
  // console.log(buttons);
  /*   buttons.forEach((button) => {
    button.style.color = "orangered";
  });
 */
  for (let i = 0; i < labels.length; i++) {
    labels[i].style.backgroundColor = "orangered";
  }
}

function SpecialSelection() {
  let allTextInputs = document.querySelectorAll("form input[type='text']");
}

Greet();
