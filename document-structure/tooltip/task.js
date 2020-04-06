'use strict';

let arr_links = Array.from(document.querySelectorAll('.has-tooltip'));
let arr_tooltip = [];
let arr_pos = ['top', 'right', 'bottom', 'left'];
let arr_arg = ['beforeBegin', 'afterBegin', 'beforeEnd', 'afterEnd'];

function createElement(tag, className, dataPosition) {
  let element = document.createElement(tag);
  element.classList.add(className);
  element.dataset.position = dataPosition;
  return element;
}


arr_links.forEach((item, i) => {
  let element = createElement('div', 'tooltip', arr_pos[Math.floor(Math.random() * 4)]);
  element.innerText = item.getAttribute('title');
  element.style.position = `absolute`;

  switch (element.dataset.position) {
    case 'top':  //  Позиционирование элемента сверху не удалось =()
                 //  Проблема в том, что не понятно к чему было прицепиться, т.к. у метода getBoundingClientRect()
                 // переменные координаты относительно верхнего края браузера, а свойства top и bottom в css в этом плане стационарны,
                 // в связи с этим возникали проблемы при прокрутке страницы. (если переметать страницу вниз и перезагрузить, то
                 // подсказски расставятся неверно, но если учитывать, что при перезагрузки страницы, она будет появляться с самого верха, то все ок)

      element.style.bottom = `${window.innerHeight - item.getBoundingClientRect().y}px`;
      element.style.marginLeft = `${item.getBoundingClientRect().x}px`;
      item.insertAdjacentElement(arr_arg[2], element);
      break;
    case 'right':

      item.insertAdjacentElement(arr_arg[2], element);
      break;
    case 'bottom':
      element.style.marginLeft = `${item.getBoundingClientRect().x}px`;
      item.insertAdjacentElement(arr_arg[2], element);
      break;
    case 'left':
      element.style.right = `${window.innerWidth - item.getBoundingClientRect().x}px`;
      element.style.left = 'auto';
      item.insertAdjacentElement(arr_arg[1], element);
      break;
    default:
    console.error('data-position');
  }


  item.addEventListener('click', event => {
    arr_links.forEach((it, ii) => {
      if (it.lastElementChild.dataset.position == 'top' || it.lastElementChild.dataset.position == 'bottom') {
        if (it.lastElementChild.classList.contains('tooltip_active')) {
          if (ii == i) {

          } else {
            it.lastElementChild.classList.remove('tooltip_active');
          }
        }
      }
      if (it.lastElementChild.dataset.position == 'left' || it.lastElementChild.dataset.position == 'right') {
        if (it.lastElementChild.classList.contains('tooltip_active2')) {
          if (ii == i) {

          } else {
            it.lastElementChild.classList.remove('tooltip_active2');
          }
        }
      }
    });

    event.preventDefault();

    if (item.lastElementChild.dataset.position == 'top' || item.lastElementChild.dataset.position == 'bottom') {
      if (item.lastElementChild.classList.contains('tooltip_active')) {
        item.lastElementChild.classList.remove('tooltip_active');
      } else {
        item.lastElementChild.classList.add('tooltip_active');

      }
    }

    if (item.lastElementChild.dataset.position == 'left' || item.lastElementChild.dataset.position == 'right') {
      if (item.lastElementChild.classList.contains('tooltip_active2')) {
        item.lastElementChild.classList.remove('tooltip_active2');
      } else {
        item.lastElementChild.classList.add('tooltip_active2');

      }
    }
  });
});
