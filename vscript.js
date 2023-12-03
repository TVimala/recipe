function openForm() {
  document.getElementById("recipeForm").style.display = "block";
}

function closeForm() {
  document.getElementById("recipeForm").style.display = "none";
  document.getElementById("recipeFormContent").reset();
}

function addRecipe() {
  // Get values from the form
  const recipeName = document.getElementsByName("recipeName")[0].value;
  const ingredients = document.getElementsByName("ingredients")[0].value;
  const instructions = document.getElementsByName("instructions")[0].value;

  // Validate that all fields are filled
  if (recipeName && ingredients && instructions) {
    // Create a new recipe div
    const recipeDiv = document.createElement("div");
    recipeDiv.className = "recipe";

    // Populate the recipe div
    recipeDiv.innerHTML = `
      <h3>${recipeName}</h3>
      <p><strong>Ingredients:</strong> ${ingredients}</p>
      <p><strong>Instructions:</strong> ${instructions}</p>
      <button onclick="deleteRecipe(this)">Delete</button>
    `;

    // Append the new recipe div to the recipe box
    document.getElementById("recipeBox").appendChild(recipeDiv);

    // Close the form
    closeForm();
  } else {
    alert("Please fill in all fields");
  }
}

function deleteRecipe(button) {
  // Get the parent element (recipe div) and remove it
  const recipeDiv = button.parentNode;
  recipeDiv.remove();
}
