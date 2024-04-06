var sides = [
    "Miso Glazed Carrots",
    "Coleslaw",
    "Garden Salad",
    "Crispy Potatoes", 
    "Sweet Potato Tots",
    "Coconut Rice",
    "Caeser Salad",
    "Shrimp Summer Rolls",
    "Garlic Butter Mushrooms",
    "Hush Puppies"
  ];

var mains = [
    "Spaghetti and Meatballs",
    "Pineapple Chicken",
    "Shakshuka",
    "Thai Yellow Curry",
    "Bibimbap",
    "Chicken Parmesean",
    "Butternut Squash Soup",
    "BBQ Chicken Burgers",
    "Ramen",
    "Empanadas",
    "Chicken Fried Rice", 
    "Sheet Pan Fajitas",
    "Margarita Pizza"
  ];
  
var desserts = [
    "Apple Pie",
    "Lemon Meringue Pie",
    "Black Forest Cake",
    "Banana Bread",
    "Peach Cobbler",
    "Cheesecake",
    "Funfetti Cake",
    "Baklava",
    "Flan",
    "Macarons",
    "Macaroons",
    "Chocolate Cupcakes",
    "Pavlova",
    "Pumpkin Pie",
    "Key Lime Pie",
    "Tart Tatin",
    "Croissants",
    "Eclairs"
  ];
var mealTypes = ['sides', 'mains', 'desserts','side','main','dessert'];
//queryvariables
var sideInput = document.querySelector('#side');
var mainDishInput = document.querySelector('#main-dish');
var dessertInput = document.querySelector('#dessert');
var entireMealInput = document.querySelector('#entire-meal');
var letsCookButton = document.querySelector('#lets-cook');
var mealBox = document.querySelector('#meal-box')
var userShouldMakeText = document.querySelector('.you-should-make')
var secondWrapper = document.querySelector('#second-box')
var cookPotImage = document.querySelector('#cookpot')
var clearButton = document.querySelector("#clear-button")
var allInputs = document.querySelectorAll('input');
var addRecipeButton = document.querySelector('#add-recipe');
var recipeInputBar = document.querySelector('#add-recipe-container')
var recipeTypeInput = document.querySelector('#recipe-type');
var recipeNameInput = document.querySelector('#recipe-name');
var recipeAddNewButton = document.querySelector('#add-recipe-button');

letsCookButton.addEventListener('click', showMeals);
clearButton.addEventListener('click', clearMeals);
addRecipeButton.addEventListener('click', showAddRecipeBar);
recipeAddNewButton.addEventListener('click', addUserRecipe);


function showAddRecipeBar() {
  recipeInputBar.classList.remove('hidden')
}

function clearMeals(event) {
  event.preventDefault();
  mealBox.innerHTML = ""
  cookPotImage.classList.remove('hidden')
  userShouldMakeText.classList.add('hidden')
  clearButton.classList.add('hidden')
}

function enableCookButton() {
  for (var i = 0; i < allInputs.length; i++) {
    allInputs[i].onchange = function() {
      if(this.checked) {
        letsCookButton.removeAttribute('disabled');
      }
    }
  }
}

function displayMeals() {
  userShouldMakeText.classList.remove('hidden');
  clearButton.classList.remove("hidden");
  cookPotImage.classList.add('hidden');
}

function addUserRecipe(event) {
  event.preventDefault();
  if (recipeTypeInput.value && recipeNameInput.value) {
    if (!mealTypes.includes(recipeTypeInput.value)) {
      window.alert("Please choose a type between side(s), main(s), or dessert(s)")
    }
    else {
      if (recipeTypeInput.value === 'sides') {
        sides.push(recipeNameInput.value);
      }
      else if (recipeTypeInput.value === 'mains') {
        mains.push(recipeNameInput.value);
      }
      else if (recipeTypeInput.value === 'desserts') {
        desserts.push(recipeNameInput.value);
      }
      displayMeals();
      mealBox.innerHTML = `<p class=any-dish>${recipeNameInput.value}!</p>`
      recipeInputBar.classList.add('hidden')
    }
  } 
}

function showMeals(event) {
  event.preventDefault();
  var randomSideDish = randomMeal(sides);
  var randomMainDish = randomMeal(mains);
  var randomDessertDish = randomMeal(desserts);
  displayMeals();
  if (sideInput.checked) {
    mealBox.innerHTML = `<p class=any-dish>${randomSideDish}!</p>`
  }
  else if (mainDishInput.checked) {
    mealBox.innerHTML = `<p class=any-dish>${randomMainDish}!</p>`
  }
  else if (dessertInput.checked) {
    mealBox.innerHTML = `<p class=any-dish>${randomDessertDish}!</p>`
  }
  else if (entireMealInput.checked) {
    mealBox.innerHTML = `<p class=entire-meal>${randomMainDish} with a side of ${randomSideDish} and ${randomDessertDish} for dessert!</p>`
  }
}

function randomMeal(meal) {
  return meal[getRandomNumber(meal.length)];
}
function getRandomNumber(max) {
  return Math.floor(Math.random() * max)
}

enableCookButton();