const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

console.log('Task-2');
let ulEl = [];

for (let ingredient of ingredients) {
  const liEl = document.createElement('li');
  liEl.textContent = ingredient;
  liEl.classList.add('item');
  ulEl.push(liEl);
  console.log(liEl);
}
console.log(ulEl);
document.ul.append(ulEl);
