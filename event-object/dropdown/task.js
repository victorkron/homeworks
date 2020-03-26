'use strict';

const activeElement = document.querySelectorAll('div.dropdown__value');
const dropDown = document.querySelectorAll('ul.dropdown__list');
const elementsDropDown = document.querySelectorAll('ul.dropdown__list li');
const linksDropDown = document.querySelectorAll('ul.dropdown__list li a')

const arr_activeElement = Array.from(activeElement);
const arr_dropDown = Array.from(dropDown);
const arr_elementsDropDown = Array.from(elementsDropDown);
const arr_linksDropDown = Array.from(linksDropDown);

function cancelDefaultAction(arr) {
  arr.forEach(item => {
    item.addEventListener('click', (event) => event.preventDefault());
  });
}

function addClassName(arr, className) {
  arr.forEach(item => {
    item.className += className;
  });
}

function setClassName(arr, className) {
  arr.forEach(item => {
    item.className = className;
  });
}

function changeTextContent(element1, element2) {
  element2.textContent = element1.textContent;
}

function start() {
  let arr_counter = [];
  arr_activeElement.forEach((item, i) => {
    arr_counter.push(0);
    item.addEventListener('click', () => {
      if (arr_counter[i] == 1) {
        setClassName([item.closest('div.dropdown').querySelector('ul')], 'dropdown__list');
        arr_counter[i] = 0;
      } else if (arr_counter[i] == 0) {
        if (document.getElementsByClassName('dropdown__list_active').length == 1) {
          Array.from(document.querySelectorAll('ul.dropdown__list')).forEach((item, i) => {
            if (item.className == 'dropdown__list dropdown__list_active') arr_counter[i] = 0;
          });
          setClassName([document.querySelector('ul.dropdown__list_active')], 'dropdown__list');
        }
        addClassName([item.closest('div.dropdown').querySelector('ul')], ' dropdown__list_active');
        arr_counter[i] = 1;
      } else {
        console.error('Error counter');
      }
    });
  });

  arr_elementsDropDown.forEach(item => {
    item.addEventListener('click', function () {
      changeTextContent(this, this.closest('div.dropdown').querySelector('div.dropdown__value'))
      this.closest('div.dropdown').querySelector('div.dropdown__value').click()
    });
  });
}

cancelDefaultAction(arr_linksDropDown);
start();
