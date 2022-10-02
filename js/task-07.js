const refs = {
  input: document.querySelector('#font-size-control'),
  textSpan: document.querySelector('#text'),
};

refs.input.addEventListener('input', onChangeFontSize);

function onChangeFontSize(event) {
  // refs.textSpan.style.fontSize = event.currentTarget.value + 'px';
  refs.textSpan.style.fontSize = this.value + 'px';
  console.log('input', this.value);
}
