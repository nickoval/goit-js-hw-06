function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  button: document.querySelector('.change-color'),
  span: document.querySelector('.color'),
};

refs.button.addEventListener('click', onChangeColor);

function onChangeColor(event) {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  refs.span.textContent = color;
}
