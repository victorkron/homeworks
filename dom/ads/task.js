'use strict';

const arr_case = Array.from(document.querySelectorAll('.rotator__case'));

function changeActiveClassName(arr, item) {
  arr.forEach((i) => {
    i.classList.remove('rotator__case_active');
  });
  item.classList.add('rotator__case_active');
  item.style.color = item.dataset.color;
}

// Другого способа установки времени прокрутки я не нашла =(  :
let time = 0;

arr_case.forEach((item) => {
  time += Number(item.dataset.speed);
});

let additive = [];

arr_case.forEach((item, i) => {
  let sum = 0;
  while (i >= 0) {
    sum += Number(arr_case[i].dataset.speed);
    i--;
  }
  additive.push(sum);
});

// Следующие две строчки нужны для того, чтобы запускать отображение работы кода не через время целого цикла,
// которое равно последнему элементу массива additive, а сразу, поэтому мы удаляем последний элемент и вначало добавляем 0.
additive.pop();
additive.unshift(0);

arr_case.forEach((item, i) => {
  setTimeout(() => {
    changeActiveClassName(arr_case, item);
    setInterval(changeActiveClassName, time, arr_case, item);
  }, additive[i])
});
