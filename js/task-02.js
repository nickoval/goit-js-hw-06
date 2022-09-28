const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

console.log('Task-2');

// let ulEl = document.createElement('ul');
// ulEl.id = 'ingredients';
const ulEl = document.querySelector('ul')

for (let ingredient of ingredients) {
  const liEl = document.createElement('li');
  liEl.textContent = ingredient;
  liEl.classList.add('item');
  ulEl.append(liEl);
  // document.append(liEl);
  console.log(liEl);
}
// console.log(ulEl);
// document.append(ulEl);
