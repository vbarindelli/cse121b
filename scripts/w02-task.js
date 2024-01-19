/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Virginia Barindelli';
let currentYear = '2024';
let profilePicture = 'images/VirginiaBarindelli.png';




/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const homeElement = document.getElementById('home');
let imageElement = homeElement.children[0].children[0];
console.log(imageElement);



/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);




/* Step 5 - Array */
 let favoriteFoods = ["asado", "sushi", "ice-cream"];
 foodElement.innerHTML = favoriteFoods;
 let oneFood = ["pizza"];
 favoriteFoods.push(oneFood);
 foodElement.innerHTML += `<br>${favoriteFoods}`;
 favoriteFoods.shift();
 foodElement.innerHTML += `<br>${favoriteFoods}`;
 favoriteFoods.pop();
 foodElement.innerHTML += `<br>${favoriteFoods}`;









