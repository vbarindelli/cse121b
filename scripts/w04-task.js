/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name : "Virginia Haedo",
    photo : "images/VirginiaBarindelli.png",
    favoriteFoods : [
        'asado', 
        'sushi', 
        'ice-cream'
    ],
    hobbies: [
        'reading',
        'running',
        'cooking',
    ],
    placesLived : [],
};


/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: 'Buenos Aires, Argentina',
        length: '15 years'
    }
);
myProfile.placesLived.push(
    {
        place: 'Neuquen, Argentina',
        length: '1 year'
    }
);

myProfile.placesLived.push(
    {
        place: 'Malaga, España',
        length: '1 year'
    }
);



/* DOM Manipulation - Output */


/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */

document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(item=>{
    let li = document.createElement('li');
    li.textContent = item;
    document.querySelector('#hobbies').appendChild(li);
})

/* Places Lived DataList */

myProfile.placesLived.forEach(item=>{
    let dt = document.createElement('dt');
    dt.textContent = item.place;
    let dd = document.createElement('dd');
    dd.textContent = item.length;
    document.querySelector('#places-lived').append(dt);
    document.querySelector('#places-lived').append(dd);
})
