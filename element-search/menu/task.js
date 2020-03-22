'use strict';

const items = document.querySelectorAll('body ul.menu_main li a.first_line');// был добавлен класс first_line в html, чтобы различать ссылки первого и второго уровня
const arr_items = Array.from(items);

arr_items.forEach(item => {
  let elementDropDown = item.parentElement.getElementsByTagName('ul');
  if (elementDropDown.length !== 0){
    let className = elementDropDown[0].className;
    item.onclick = () => {
      let arr_menuSub = Array.from(document.getElementsByClassName('menu_sub'));
      arr_menuSub.forEach(i => {
        i.className = className;
        console.log(i.className);
      });
      item.parentElement.getElementsByTagName('ul')[0].className += ' menu_active';
      return false;
    }

  }
});
