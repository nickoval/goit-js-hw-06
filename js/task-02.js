const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

console.log('Task-2');

const ulEl = document.querySelector('ul');

// Вариант с map()
const liElArray = ingredients.map(ingredient => {
  const liEl = document.createElement('li');
  liEl.textContent = ingredient;
  liEl.classList.add('item');
  return liEl;
});

ulEl.append(...liElArray);

// -----------------------------------------
//
// Вариант c for(-of-)
// const liElArray = [];
// for (const ingredient of ingredients) {
//   const liEl = document.createElement('li');
//   liEl.textContent = ingredient;
//   liEl.classList.add('item');
//   liElArray.push(liEl);
// }
// ulEl.append(...liElArray);

// console.log(liElArray);
// console.log(...liElArray);
//
// -----------------------------------------
//
// Вариант пошагового добавления (плохая практика)
// for (let ingredient of ingredients) {
//   const liEl = document.createElement('li');
//   liEl.textContent = ingredient;
//   liEl.classList.add('item');

//   ulEl.append(liEl);
// }
//
// -----------------------------------------
//
// Вариант с подменой ul (не затирает предыдущий )
// const newUlEl = document.createElement('ul');
// newUlEl.id = 'ingredients';
// for (let ingredient of ingredients) {
//   const newLiEl = document.createElement('li');
//   newLiEl.textContent = ingredient;
//   newLiEl.classList.add('item');
//   newUlEl.append(newLiEl);
// }

// const bodyEl = document.querySelector('body');
// bodyEl.append(newUlEl);

// Не работает
// const liElString = liElArray.join('');
// console.log(liElString);
// ulEl.innerHTML = liElString;
