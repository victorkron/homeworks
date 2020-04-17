'use strict';

let textarea = document.getElementById('editor');
let button = document.querySelector('button');

textarea.value = localStorage.getItem('text');

function inputEvent(event) {
  localStorage.setItem('text', textarea.value);
}

textarea.addEventListener('input', inputEvent);

button.addEventListener('click', event => {
  textarea.value = '';
  inputEvent();
});
