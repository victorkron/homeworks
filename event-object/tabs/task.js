'use strict';

const arr_tabs = Array.from(document.querySelectorAll('div.tabs'));

function addClassName(arr, i, className) {
  arr[i].className += className;
}

function setClassName(arr, className) {
  arr.forEach((item, i) => {
    item.className = className;
  });
}

function start() {
  arr_tabs.forEach((item, i) => {
    let arr_tabNavigation = Array.from(item.querySelectorAll('div.tab'));
    let arr_tabContent = Array.from(item.querySelectorAll('div.tab__content'));

    arr_tabNavigation.forEach((item, i) => {
      item.addEventListener('click', () => {
        setClassName(arr_tabContent, 'tab__content');
        addClassName(arr_tabContent, i, ' tab__content_active');
        setClassName(arr_tabNavigation, 'tab');
        addClassName(arr_tabNavigation, i, ' tab_active');
      });
    });
  });
}

start();
