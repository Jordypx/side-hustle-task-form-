const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const genderInput = document.getElementById('gender');
const emailInput = document.getElementById('email');
const addressInput = document.getElementById('address');
const phoneInput = document.getElementById('phone');
const successMessage = document.createElement('p');
const errorMessage = document.createElement('p');

successMessage.textContent = 'Form submitted successfully!';
successMessage.style.color = 'green';

errorMessage.textContent = 'Please enter a valid email address.';
errorMessage.style.color = 'red';

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let hasError = false;

  if (nameInput.value.trim() === '') {
    nameInput.classList.add('error');
    hasError = true;
  } else {
    nameInput.classList.remove('error');
  }

  if (genderInput.value === '') {
    genderInput.classList.add('error');
    hasError = true;
  } else {
    genderInput.classList.remove('error');
  }

  if (emailInput.value.trim() === '' || !/\S+@\S+\.\S+/.test(emailInput.value)) {
    emailInput.classList.add('error');
    errorMessage.classList.add('visible');
    hasError = true;
  } else {
    emailInput.classList.remove('error');
    errorMessage.classList.remove('visible');
  }

  if (addressInput.value.trim() === '') {
    addressInput.classList.add('error');
    hasError = true;
  } else {
    addressInput.classList.remove('error');
  }

  if (phoneInput.value.trim() === '') {
    phoneInput.classList.add('error');
    hasError = true;
  } else {
    phoneInput.classList.remove('error');
  }

  if (!hasError) {
    form.appendChild(successMessage);
  }
});
