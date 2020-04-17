'use strict';

let popup = document.getElementById('subscribe-modal');
let close = document.querySelector('.modal__close');

/* Это реализация с помощью cookie, но она не работает, т.к. куки, как я поняла, не устанавливаются на локальном домене...
if (document.cookie.includes('close=true')) {

} else {
  popup.classList.add('modal_active');
}

close.addEventListener('click', event => {
  popup.classList.remove('modal_active');
  document.cookie = 'close=true';
});
*/

// Реализация с использованием localStorage:
if (localStorage.getItem('close') == 'true') {

} else {
  popup.classList.add('modal_active');
}

close.addEventListener('click', event => {
  popup.classList.remove('modal_active');
  localStorage.setItem('close', 'true');
});
