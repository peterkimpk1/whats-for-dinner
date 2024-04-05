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
var cookPotImage = document.querySelector('#cookpot')
var userShouldMakeText = document.querySelector('.you-should-make')
var secondWrapper = document.querySelector('#second-box')
letsCookButton.addEventListener('click', showMeals);


function showMeals(event) {
  event.preventDefault();
  var randomSideDish = randomMeal(sides);
  var randomMainDish = randomMeal(mains);
  var randomDessertDish = randomMeal(desserts);
  var entireMeal = [randomMainDish, randomSideDish, randomDessertDish]
  userShouldMakeText.classList.remove('hidden');
  cookPotImage.innerHTML = "";
  if (sideInput.checked) {
    cookPotImage.innerHTML = `<p class=any-dish>${randomSideDish}!</p>`
  }
  else if (mainDishInput.checked) {
    cookPotImage.innerHTML = `<p class=any-dish>${randomMainDish}!</p>`
  }
  else if (dessertInput.checked) {
    cookPotImage.innerHTML = `<p class=any-dish>${randomDessertDish}!</p>`
  }
  else if (entireMealInput.checked) {
    cookPotImage.innerHTML = `<p class=entire-meal>${entireMeal[0]} with a side of ${entireMeal[1]} and ${entireMeal[2]} for dessert!</p>`
  }
}

function randomMeal(meal) {
  return meal[getRandomNumber(meal.length)];
}
function getRandomNumber(max) {
  return Math.floor(Math.random() * max)
}