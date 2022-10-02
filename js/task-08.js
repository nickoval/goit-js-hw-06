const refs = {
  form: document.querySelector('.login-form'),
  // email: document.querySelector('.email'),
  // password: document.querySelector('.password'),
};

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (email === '' || password === '') {
    alert('Увага, всі поля цієї форми повинні бути заповнені!');
  } else {
    const formData = { email, password };
    console.log('formData: ', formData);

    event.currentTarget.elements.email.value = '';
    event.currentTarget.elements.password.value = '';
  }
}

// function onFormSubmit(event) {
//   event.preventDefault();
//   // const { email, password } = event.currentTarget.elements;
//   // const { email, password } = this.elements;

//   if (email === '' || password === '') {
//     alert('Увага, всі поля цієї форми повинні бути заповнені!');
//   }
// }
