'use strict';

const arr_sliderItems = Array.from(document.getElementsByClassName('slider__item'));
const arr_sliderDot = Array.from(document.getElementsByClassName('slider__dot'));
const sliderPrev = document.querySelector('div.slider__arrow_prev');
const sliderNext = document.querySelector('div.slider__arrow_next');


function assignClassName(arr, className) {
  arr.forEach(item => {
    item.className = className
  });
}

function getImageNumber(arr, fullActiveClassName) {
  let num;
  arr.forEach((item, i) => {
    if (item.className == fullActiveClassName) num = i;
  });
  return num;
}

function setActiveElement(arr, i, activeClassName) {
  arr[i].className += activeClassName;
}

function drawing(arr, i, className, activeClassName) {
  assignClassName(arr, className);
  setActiveElement(arr, i, activeClassName);
}

let num = getImageNumber(arr_sliderItems, 'slider__item slider__item_active');
setActiveElement(arr_sliderDot, num, ' slider__dot_active');



sliderPrev.onclick = function () {
  let i = getImageNumber(arr_sliderItems, 'slider__item slider__item_active');
  i = (i == 0) ? 4 : (i - 1);
  drawing(arr_sliderItems, i, 'slider__item', ' slider__item_active');
  drawing(arr_sliderDot, i, 'slider__dot', ' slider__dot_active');
}

sliderNext.onclick = function () {
  let i = getImageNumber(arr_sliderItems, 'slider__item slider__item_active');
  i = (i == 4) ? 0 : (i + 1);
  drawing(arr_sliderItems, i, 'slider__item', ' slider__item_active');
  drawing(arr_sliderDot, i, 'slider__dot', ' slider__dot_active');
}

arr_sliderDot.forEach((item, i) => {
  item.onclick = function () {
    drawing(arr_sliderItems, i, 'slider__item', ' slider__item_active');
    drawing(arr_sliderDot, i, 'slider__dot', ' slider__dot_active');
  }
});
