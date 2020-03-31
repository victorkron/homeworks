'use strict';

const reveal = document.querySelectorAll('.reveal');
const arr_reveal = Array.from(reveal);

function inWindow(item) {
  let bool;
  let top = item.getBoundingClientRect().top;
  let bottom = item.getBoundingClientRect().bottom;

  if ((window.innerHeight - top) > 0 && top > 0) {
    bool = true;
  } else if ((window.innerHeight - bottom) > 0 && bottom > 0) {
    bool = true;
  } else {
    bool = false;
  }

  return bool;
}

function toggle(arr, className) {
  arr.forEach(item => {
    if (inWindow(item) && !item.classList.contains(className)) {
      item.classList.add(className);
    } else if (!inWindow(item) && item.classList.contains(className)) {
      item.classList.remove(className);
    }
  });
}

window.addEventListener('scroll', () => {
  toggle(arr_reveal, 'reveal_active')
});
