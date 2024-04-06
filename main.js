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

letsCookButton.addEventListener('click', showMeals);
clearButton.addEventListener('click', clearMeals);


enableCookButton();

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
      else {
        letsCookButton.addAttribute('disabled', true)
      }
    }
  }
}

function showMeals(event) {
  event.preventDefault();
  var randomSideDish = randomMeal(sides);
  var randomMainDish = randomMeal(mains);
  var randomDessertDish = randomMeal(desserts);
  userShouldMakeText.classList.remove('hidden');
  clearButton.classList.remove("hidden");
  cookPotImage.classList.add('hidden');
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