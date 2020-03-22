'use strict';

const arr_sliderItems = Array.from(document.getElementsByClassName('slider__item'));
const arr_sliderDot = Array.from(document.getElementsByClassName('slider__dot'));
const sliderPrev = document.querySelector('div.slider__arrow_prev');
const sliderNext = document.querySelector('div.slider__arrow_next');
let counter = 0;

arr_sliderDot[counter].className += ' slider__dot_active';

sliderPrev.onclick = function () {
  arr_sliderItems.forEach((item, i) => {
    item.className = 'slider__item';
    arr_sliderDot[i].className = 'slider__dot';
  });

  if (counter > 0) {
    counter--;
  } else {
    counter = arr_sliderItems.length - 1;
  }

  arr_sliderItems[counter].className += ' slider__item_active';
  arr_sliderDot[counter].className += ' slider__dot_active';
}

sliderNext.onclick = function () {
  arr_sliderItems.forEach((item, i) => {
    item.className = 'slider__item';
    arr_sliderDot[i].className = 'slider__dot';
  });

  if (counter < arr_sliderItems.length - 1) {
    counter++;
  } else {
    counter = 0;
  }

  arr_sliderItems[counter].className += ' slider__item_active';
  arr_sliderDot[counter].className += ' slider__dot_active';
}

arr_sliderDot.forEach((item, i) => {
  item.onclick = function () {
    arr_sliderDot.forEach((item, i) => {
      item.className = 'slider__dot';
      arr_sliderItems[i].className = 'slider__item';
    });
    
    item.className += ' slider__dot_active';
    arr_sliderItems[i].className += ' slider__item_active';
    counter = i;
  }
});
