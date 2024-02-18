/* W05: Programming Tasks */

/* Declare and initialize global variables */
const fruitsElement = document.querySelector('#fruits');
let fruitsList = [];

/* async displayFruitsFunction */
const displayFruits = (fruits) => {
fruits.forEach(fruit => {
    let article = document.createElement('article');
    let h3 = document.createElement('h3');
    h3.textContent = fruit.name;
    article.appendChild(h3);
    nutrients = fruit.nutritions;
    for (let key in nutrients) {
        const value = nutrients[key];
        let p = document.createElement('p');
        p.textContent = `${key}: ${value}`;
        article.appendChild(p);
    }
    
    fruitsElement.appendChild(article);
})};

/* async getFruits Function using fetch()*/
 const getFruits= async () => {
    const response = await fetch("https://run.mocky.io/v3/8e3eb056-80b8-41a9-9e98-bef689ce4e02");
  if (response.ok) {
    fruitsList = await response.json();
    displayFruits(fruitsList);
  }
 }

/* reset Function */
const reset = function() {
  fruitsElement.innerHTML = ""; 
}


/* filterFruits in Ascending Order Function */
function filterFruitsA (fruits) {
    reset();

    let userInput = Number(document.querySelector('#userInput').value);

    let filter = document.getElementById('filtered').value;

    switch (filter) {
        case 'carbohydrates':
           
            displayFruits(fruits.sort((a, b) => a.nutritions.carbohydrates - b.nutritions.carbohydrates).filter(fruit => fruit.nutritions.carbohydrates < userInput));
            break; 
        
        case 'sugar':
            displayFruits(fruits.sort((a, b) => a.nutritions.sugar - b.nutritions.sugar).filter(fruit => fruit.nutritions.sugar < userInput));
            break;
        
        case 'protein':
            displayFruits(fruits.sort((a, b) => a.nutritions.protein - b.nutritions.protein).filter(fruit => fruit.nutritions.protein < userInput));
            break;

        case 'fat':
            displayFruits(fruits.sort((a, b) => a.nutritions.fat - b.nutritions.fat).filter(fruit => fruit.nutritions.fat < userInput));
            break;

        case 'calories':
            displayFruits(fruits.sort((a, b) => a.nutritions.calories - b.nutritions.calories).filter(fruit => fruit.nutritions.calories < userInput));
            break;

        case 'all':
            displayFruits(fruits.sort((a, b) => a.name - b.name));
    }
}

/* filterFruits in Descending Order Function */
function filterFruitsD (fruits) {
    reset();
    
    let userInput = Number(document.querySelector('#userInput').value);
    
    let filter = document.getElementById('filtered').value;
    
    switch (filter) {
        case 'carbohydrates':
               
            displayFruits(fruits.sort((a, b) => b.nutritions.carbohydrates - a.nutritions.carbohydrates).filter(fruit => fruit.nutritions.carbohydrates < userInput));
            break; 
            
        case 'sugar':
            displayFruits(fruits.sort((a, b) => b.nutritions.sugar - a.nutritions.sugar).filter(fruit => fruit.nutritions.sugar < userInput));
            break;
            
        case 'protein':
            displayFruits(fruits.sort((a, b) => b.nutritions.protein - a.nutritions.protein).filter(fruit => fruit.nutritions.protein < userInput));
            break;
    
        case 'fat':
            displayFruits(fruits.sort((a, b) => b.nutritions.fat - a.nutritions.fat).filter(fruit => fruit.nutritions.fat < userInput));
            break;
    
        case 'calories':
            displayFruits(fruits.sort((a, b) => b.nutritions.calories - a.nutritions.calories).filter(fruit => fruit.nutritions.calories < userInput));
            break;
    
        case 'all':
            displayFruits(fruits.sort((a, b) => a.name - b.name));
    }
}
    

/* Event Listener */
document.querySelector('#sortA').addEventListener('click', () => {filterFruitsA (fruitsList)});
document.querySelector('#sortD').addEventListener('click', () => {filterFruitsD (fruitsList)});


getFruits();
