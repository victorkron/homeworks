'use strict';

let input = document.querySelector('form input.tasks__input');
let button = document.querySelector('form button.tasks__add');
let taskList = document.getElementById('tasks__list');

input.required = true;
let count = localStorage.length;

for (let item in localStorage) { //  Элементы todo-листа становятся не в том же порядке, но все сохраняются, сохранить порядок не удалось, т.к.
                                 // если добавлять счетчик для упорядочивания, то возникают проблемы при удалении элемента и сохранении информации в счетчике...
  count--;
  if (count < 0) {
    break;
  }
  let elem = getElem(item);
  taskList.appendChild(elem);
}

function actionRemoveElem(elem) {
  elem.addEventListener('click', event => {
    elem.closest('.task').remove();
    localStorage.removeItem(elem.previousElementSibling.innerText)
  });
}

function getElem(str) {
  let element = document.createElement('div');
  element.classList.add('task');
  element.appendChild(document.createElement('div'));
  element.appendChild(document.createElement('a'));
  element.firstElementChild.classList.add('task__title');
  element.firstElementChild.innerText = str;
  element.lastElementChild.classList.add('task__remove');
  element.lastElementChild.setAttribute('href', '#');
  element.lastElementChild.innerHTML = '&times;';
  actionRemoveElem(element.lastElementChild);
  return element;
}

input.addEventListener('focus', event => event.preventDefault());
input.addEventListener('click', event => event.preventDefault());

button.addEventListener('click', event => {
  input.required = true;
  if (input.checkValidity()) {
    let elem = getElem(input.value);
    taskList.appendChild(elem);
    localStorage.setItem(input.value, input.value);
    input.value = '';
  } else {
    console.error('input is empty');
  }
  input.required = false; //  Эта строчка добавлена для того, чтобы после очищения поля input'а, при добавление элемента в todo-лист,
                          // не появлялся флажок 'Заполните это поле', который можно увидить, если закоментить эту строчку.
});

document.addEventListener('keydown', event => {
  if (event.key == 'Enter') {
    //button.click(); // закоменчено т.к. браузер по умолчанию при нажатии на Enter взвимодействует с кнопкой
  }
});
