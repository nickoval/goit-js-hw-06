console.log('task-1');

// const itemsArray = categories.querySelectorAll('.item');
const itemsArray = document.querySelectorAll('#categories .item');
const numberOfCategories = itemsArray.length;

console.log(`Number of categories: ${numberOfCategories}`);

itemsArray.forEach(item => {
  const titleEl = item.firstElementChild;
  console.log(`Category: ${titleEl.textContent}`);
  const listEl = item.lastElementChild.children.length;

  console.log(`Elements: ${listEl}`);
});
