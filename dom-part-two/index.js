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
    error = true;
    return;
  }
  // what if there is an error?
  if (error) {
    alert("error");
  }
  document.getElementById(inputId).style.border = "2px solid red";

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
  alert(inputRecipe);

  // guard clauses
  /* if (!inputRecipe)
    // if indeed we have a recipe. skip next line
    return false;
  return PrintRecipeToOutputParagraph(inputRecipe); // look at this line
 */
  return !inputRecipe ? false : PrintRecipeToOutputParagraph(inputRecipe);
}

//console.log(ReadInput());
