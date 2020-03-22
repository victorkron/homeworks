'use strict';

const doGood = document.getElementById('modal_main');
const doneGood = document.getElementById('modal_success');
let classNameDoGood = doGood.className;
let classNameDoneGood = doneGood.className;

doGood.className += ' modal_active';

let arr_do = Array.from(doGood.getElementsByClassName('modal__close'));

arr_do.forEach(item => {
  item.onclick = () => doGood.className = classNameDoGood;
});

doGood.getElementsByClassName('show-success')[0].onclick = () => {
  doneGood.className += ' modal_active';
  doGood.className = classNameDoGood;
}

let arr_done = Array.from(doneGood.getElementsByClassName('modal__close'));

arr_done.forEach(item => {
  item.onclick = () => doneGood.className = classNameDoneGood;
});


















//let arr_done = Array.from(doneGood.getElementsByClassName('modal__close'));
