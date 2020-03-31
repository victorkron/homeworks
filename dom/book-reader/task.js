'use strict';

const book = document.querySelector('.book');
const arr_font = Array.from(document.querySelectorAll('.font-size'));
const arr_color = Array.from(document.querySelectorAll('.book__control_color a.color'));
const arr_backgroundColor = Array.from(document.querySelectorAll('.book__control_background a.color'));

function forAllRemoveClassName(arr, className) {
  arr.forEach((item) => {
    item.classList.remove(className);
  });
}

function changeClassName(element, className, ...arg) {
  arg.forEach(item => {
    element.classList.remove(item);
  });

  if (className !== null) {
    element.classList.add(className);
  }
}

arr_font.forEach((item, i) => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    forAllRemoveClassName(arr_font, 'font-size_active');
    item.classList.add('font-size_active');

    if (item.dataset.size == 'small') {
      changeClassName(book, 'book_fs-small', 'book_fs-big', 'book_fs-small')
    } else if (item.dataset.size == 'big') {
      changeClassName(book, 'book_fs-big', 'book_fs-big', 'book_fs-small')
    } else if (item.dataset.size == undefined) {
      changeClassName(book, null, 'book_fs-big', 'book_fs-small')
    }
  });
});

arr_color.forEach((item, i) => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    forAllRemoveClassName(arr_color, 'color_active');
    item.classList.add('color_active');

    if (item.dataset.color == 'gray') {
      changeClassName(book, 'book_color-gray', 'book_color-gray', 'book_color-whitesmoke')
    } else if (item.dataset.color == 'whitesmoke') {
      changeClassName(book, 'book_color-whitesmoke', 'book_color-gray', 'book_color-whitesmoke')
    } else if (item.dataset.color == undefined) {
      changeClassName(book, null, 'book_color-gray', 'book_color-whitesmoke')
    }
  });
});

arr_backgroundColor.forEach((item, i) => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    forAllRemoveClassName(arr_backgroundColor, 'color_active');
    item.classList.add('color_active');

    if (item.dataset.color == 'black') {
      changeClassName(book, 'book_bg-black', 'book_bg-black', 'book_bg-gray')
    } else if (item.dataset.color == 'gray') {
      changeClassName(book, 'book_bg-gray', 'book_bg-black', 'book_bg-gray')
    } else if (item.dataset.color == undefined) {
      changeClassName(book, null, 'book_bg-black', 'book_bg-gray')
    }
  });
});
