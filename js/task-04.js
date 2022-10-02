let counterValue = 0;

const decrementBtn = document.querySelector('[data-action ="decrement"]');

const incrementBtn = document.querySelector('[data-action ="increment"]');

const spanEl = document.querySelector('#value');

incrementBtn.addEventListener('click', () => {
  counterValue += 1;
  console.log('decrementBtn.addEventListener ~ counterValue', counterValue);
  spanEl.textContent = counterValue;
});

decrementBtn.addEventListener('click', () => {
  counterValue -= 1;
  console.log('incrementBtn.addEventListener ~ counterValue', counterValue);
  spanEl.textContent = counterValue;
});

// ----------------------------------------------
// Вариант с использованием текстового содержимого кнопки
// incrementBtn.addEventListener('click', () => {
//   counterValue += Number(incrementBtn.textContent);
//   spanEl.textContent = counterValue;
// });

// decrementBtn.addEventListener('click', () => {
//   counterValue += Number(decrementBtn.textContent);
//   spanEl.textContent = counterValue;
// });
// --------------------------------------------------

// Прочий мусор
// const CounterPlugin = function ({ initialValue = 0, step = 1 } = {}) {
//   this._value = initialValue;
//   this._step = step;
// };

// CounterPlugin.prototype.increment = function () {
//   this._value += this._step;
// };

// CounterPlugin.prototype.decrement = function () {
//   this._value -= this._step;
// };

// const counter = new CounterPlugin({});
// console.log(counter);
// counter.increment();
// console.log(counter);

// const actions = document.querySelectorAll('#counter button');
// console.log('actions', actions);
// console.log(actions[0].dataset.action);
// const incrementBtn = document.querySelector('[]');
