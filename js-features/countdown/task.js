'use strict';

let timerElement = document.getElementById('timer');

// Решение основного задания:
// Начало блока решения основного задания
let time = Number(timerElement.textContent);
let intervalId = setInterval(() => {
  if (time == 0) {
    clearInterval(intervalId);
    alert('Вы победили в конкурсе!');
  } else {
    time -= 1;
    timerElement.textContent = time;
  }
}, 1000);
// Конец блока решения основного задания

//Решение повышенного уровня сложности №1, №2: (нужно закоментировать блок с решением основного задания и раскоментировать все, что идёт далее)

/* let arrTimer =  timerElement.textContent.split(':');
let link = document.getElementById('link');

function transformToString(arr) {
  let str = false;
  if (arr.length == 3) {
    if (String(arr[0]).length != 2) arr[0] = `0${arr[0]}`;
    if (String(arr[1]).length != 2) arr[1] = `0${arr[1]}`;
    if (String(arr[2]).length != 2) arr[2] = `0${arr[2]}`;
    str = arr.join(':');
  } else {
    console.error('Error length');// Указание этой ошибки не обязательно, т. к. мы будем использовать эту функцию там, где массив уже прошел проверку на количесвто элементов
  }
  return str;
}

switch (arrTimer.length) {
  case 1:
    arrTimer.unshift(0, 0);
    arrTimer = arrTimer.map(num => Number(num));
    break;
  case 2:
    arrTimer.unshift(0);
    arrTimer = arrTimer.map(num => Number(num));
    break;
  case 3:

    break;
  default:
    console.error('Error length');
}

let intervalId = setInterval (() => {
  if (arrTimer[2] == 0) {
    if (arrTimer[1] == 0) {
      if (arrTimer[0] == 0) {
        clearInterval(intervalId);
        //alert('Вы победили в конкурсе!'); не нужно раскоментировать (в случае отсутсвия перехода, можно просто высветить окно)
        //location = 'newLocation.html'; не нужно раскоментировать (вариация перехода)
        link.click();
      } else {
        arrTimer[0] -= 1;
        arrTimer[1] = 59;
        timerElement.textContent = transformToString(arrTimer);
      }
    } else {
      arrTimer[1] -= 1;
      arrTimer[2] = 59;
      timerElement.textContent = transformToString(arrTimer);
    }
  } else {
    arrTimer[2] -= 1;
    timerElement.textContent = transformToString(arrTimer);
  }
}, 1000);
*/
