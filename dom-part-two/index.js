/* Overview */
function ReadInput() {
  //
  let recipeNameElem = document.querySelector("#recipe-name");
  let recipeName = recipeNameElem.value;
  //
  //alert(recipeName);
  // error flag vaiable
  let error = false;
  //
  recipeName = recipeName.trim(); // removes leading ans trailing white spaces
  //
  if (recipeName === "") {
    error = true;
    return;
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
  const inputRecipe = ReadInput();

  if (inputRecipe) {
    // print recipe on page
    PrintRecipeToOutputParagraph(inputRecipe);
    return true;
  }
  return false;
}

//console.log(ReadInput());
