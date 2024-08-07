/* Overview */
function ReadInput(inputId) {
  // error flag vaiable
  let error = false;
  //
  let queriedID = `#${inputId}`;
  //alert(queriedID);
  let recipeNameElem = document.querySelector(queriedID);
  let recipeName = recipeNameElem.value;
  //
  //
  recipeName = recipeName.trim(); // removes leading ans trailing white spaces
  //
  //alert(recipeName);
  if (recipeName === "") {
    document.getElementById(inputId).style.border = "2px solid red";
    //  document.getElementById(inputId+ '-error').style.border = "2px solid red";
    //
    error = true;
  }
  if (error) {
    alert(`The input has an error`);
  }

  //
  return recipeName;
}

function PrintRecipeToOutputParagraph(recipe) {
  // assume you have the value to print
  let someValueToPrint = recipe;

  // target the element
  let outputParagraphElem = document.querySelector("#output");
  // manipulate the element
  outputParagraphElem.innerHTML = recipe;
}

function AddRecipe() {
  // read input
  const inputRecipe = ReadInput("recipe-name");

  // guard clauses
  /* if (!inputRecipe)
    // if indeed we have a recipe. skip next line
    return false;
  return PrintRecipeToOutputParagraph(inputRecipe); // look at this line
 */
  return !inputRecipe ? false : PrintRecipeToOutputParagraph(inputRecipe);
}

function CreateForm() {
  alert("creating form");
  // Create elements by passing the tag name as an argument to the .createElement method
  /* STEP 1: CREATE THE NODES! */

  // Creating a FORM element
  let formElement = document.createElement("form");

  // a child of the FORM is label, with id: recipe type; and with text 'Recipe Name'
  let recipeNameLabel = document.createElement("label");
  recipeNameLabel.setAttribute("for", "recipe-name");
  recipeNameLabel.setAttribute("id", "recipe-title");
  recipeNameLabel.innerHTML = "Recipe Name";

  // lets create the INPUT for the recipe name
  let recipeNameInput = document.createElement("input");
  recipeNameInput.setAttribute("id", "recipe-name");
  recipeNameInput.setAttribute("placeholder", "enter a recipe");

  // name error label
  let recipeNameError = document.createElement("label");

  recipeNameError.setAttribute("for", "recipe-name-error");
  recipeNameError.setAttribute("class", "error"); // set to default at creation time
  recipeNameError.innerHTML = "*";

  //Button
  let btnAddrecipeElem = document.createElement("button");
  btnAddrecipeElem.setAttribute("type", "button");
  btnAddrecipeElem.setAttribute("id", "recipe-name-error");
  btnAddrecipeElem.innerHTML = "Add recipe";

  //> adding an event listener for the button
  btnAddrecipeElem.addEventListener("click", () => {
    AddRecipe();
  });

  //
  btnAddrecipeElem.addEventListener("hover", () => {
    document.body.style.backgroundColor = "orangered";
  });
  /* <button onclick ='AddRecipe()'> */

  // horizontal line
  let hrElem = document.createElement("hr");

  // output paragraph
  let paragraphElem = document.createElement("p");
  paragraphElem.setAttribute("id", "output");
  paragraphElem.innerHTML = "No recipes";

  /* STEP 2: APPEND THEM TO THE DOCUMENT */
  //

  formElement.appendChild(recipeNameLabel);
  formElement.appendChild(recipeNameInput);
  formElement.appendChild(recipeNameError);
  formElement.appendChild(btnAddrecipeElem);
  formElement.appendChild(hrElem);
  formElement.appendChild(paragraphElem);
  //
  document.body.appendChild(formElement);
}

function testMouseEnter() {
  document.body.style.backgroundColor = "red";
}
function testMouseLeave() {
  document.body.style.backgroundColor = "blue";
}
function bodyLoading() {
  alert("The body is loading ...");
}
