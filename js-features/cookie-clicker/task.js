'use strict';

let counter = document.getElementById('clicker__counter');
let clicker = document.getElementById('clicker__cookie');
let speed = document.getElementById('click__speed');

let width = clicker.width;
let hight = clicker.hight;
let timeNow = new Date();
let timeLastCkick;

clicker.onclick = () => {
  timeLastCkick = timeNow;
  timeNow = new Date();
  counter.textContent = Number(counter.textContent) + 1;
  if (Number(counter.textContent) % 2 == 0) {
    clicker.width = width;
    clicker.hight = hight;
  } else {
    clicker.width = width * 1.1;
    clicker.hight = hight * 1.1;
  }
  speed.textContent = ((1 * 1000) / (timeNow - timeLastCkick)).toFixed(2); // Умножая занменатель дроби на 1000 мы переходм от милисекунд к секундам
}
