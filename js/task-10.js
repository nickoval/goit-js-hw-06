function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divX = 30;
const stepX = 10;

const refs = {
  boxesDiv: document.querySelector('#boxes'),
  input: document.querySelector('#controls input'),
  create: document.querySelector('[data-create]'),
  destroy: document.querySelector('[data-destroy]'),
};

refs.create.addEventListener('click', onCreateButtonClick);
refs.destroy.addEventListener('click', destroyBoxes);

function onCreateButtonClick(event) {
  const amountDiv = Number(refs.input.value);
  if (amountDiv === 0) {
    console.log('Зробіть свій вибір');
  } else {
    refs.boxesDiv.append(...createBoxes(amountDiv));
  }
}

function createBoxes(amount) {
  const divArr = [];
  for (let i = 0; i < amount; i += 1) {
    divArr[i] = document.createElement('div');
    divArr[i].style.backgroundColor = getRandomHexColor();
    divArr[i].style.width = divX + stepX * i + 'px';
    divArr[i].style.height = divX + stepX * i + 'px';
  }
  return divArr;
}

function destroyBoxes() {
  const deadArray = document.querySelectorAll('#boxes div');
  deadArray.forEach(deadItem => {
    deadItem.remove();
  });
}
