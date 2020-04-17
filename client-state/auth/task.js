'use strict';

let signFormWrapper = document.getElementById('signin');
let myForm = document.getElementById('signin__form');
let welcome = document.querySelector('.welcome');
let resetButton = document.querySelector('button.none');
let exitButton = document.querySelector('button.exit');

if (localStorage.getItem('id') !== null) {
  welcome.classList.add('welcome_active');
  welcome.querySelector('span').innerText = localStorage.getItem('id');
} else {
  signFormWrapper.classList.add('signin_active');
}


myForm.addEventListener('submit', event => {
  event.preventDefault();
  let xhr = new XMLHttpRequest();
  let formData = new FormData(myForm);

  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');

  xhr.addEventListener('readystatechange', event => {
    if (xhr.readyState == xhr.DONE) {
      console.log('DONE');
      let response = JSON.parse(xhr.responseText);
      if (response.success) {
        resetButton.click();
        signFormWrapper.classList.remove('signin_active');
        welcome.classList.add('welcome_active');
        welcome.querySelector('span').innerText = response.user_id;
        localStorage.setItem('id', response.user_id);
      } else {
        alert('Неверный логин/пароль');
        resetButton.click();
      }
    }
  });

  xhr.send(formData);
});

exitButton.addEventListener('click', event => {
  welcome.classList.remove('welcome_active');
  signFormWrapper.classList.add('signin_active');
  localStorage.removeItem('id');
});
