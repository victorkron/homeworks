'use strict';

let arr_product = Array.from(document.querySelectorAll('div.product'));
let basket = document.querySelector('.cart__products');

basket.closest('.cart').classList.add('cart__non-active');

function getElement(item) {
  let element = document.createElement('div');
  element.classList.add('cart__product');
  element.dataset.id = item.dataset.id;
  element.appendChild(document.createElement('img'));
  element.appendChild(document.createElement('div'));
  element.firstElementChild.classList.add('cart__product-image');
  element.firstElementChild.setAttribute('src', item.querySelector('.product__image').getAttribute('src'));
  element.lastElementChild.classList.add('cart__product-count');
  element.lastElementChild.innerText = item.querySelector('.product__quantity-value').innerText;
  element.appendChild(document.createElement('div'));
  element.lastElementChild.classList.add('delete');
  element.lastElementChild.innerText = 'x';
  return element;
}

function moving(element, finishElem) {
  let img = element.querySelector('.product__image').cloneNode(false);
  element.insertBefore(img, element.querySelector('.product__image'));
  img = element.querySelector('.product__image');
  console.log(img);
  img.style.position = 'absolute';

  let stateImg = Array.from(element.querySelectorAll('.product__image'));
  stateImg = stateImg[stateImg.length - 1];

  img.style.top = `${Math.round(stateImg.getBoundingClientRect().y)}px`;
  img.style.left = `${Math.round(stateImg.getBoundingClientRect().x)}px`;

  let N = 100;
  let delay = 5;
  for (let i = 0; i < N + 1; i++) {
    setTimeout(function () {
      let ii = i;
      img.style.left = `${Math.round(stateImg.getBoundingClientRect().x) + ((Math.round(finishElem.getBoundingClientRect().x) - Math.round(stateImg.getBoundingClientRect().x)) / N) * ii}px`;
      img.style.top = `${Math.round(stateImg.getBoundingClientRect().y) - ((Math.round(stateImg.getBoundingClientRect().y) - Math.round(finishElem.getBoundingClientRect().y)) / N) * ii}px`;
    }, delay * i);
  }

  setTimeout(function () {
    img.remove();
  }, delay * (N + 1));
}

arr_product.forEach((item, i) => {
  let block = item.querySelector('.product__quantity-controls');
  let value = item.querySelector('.product__quantity-value');
  block.firstElementChild.addEventListener('click', event => {
    if (Number(value.innerText) > 1) {
      value.innerText = Number(value.innerText) - 1;
    } else if (Number(value.innerText) == 1) {

    } else {
      console.error('valueError');
    }
  });
  block.lastElementChild.addEventListener('click', event => {
    value.innerText = Number(value.innerText) + 1;
  });
});

arr_product.forEach((item, i) => {
  let add = item.querySelector('.product__add');
  add.addEventListener('click', event => {
    let arr_basketElements = Array.from(basket.querySelectorAll('.cart__product'));
    let bool = false;
    let num;
    arr_basketElements.forEach((it, ii) => {
      if (item.dataset.id == it.dataset.id) {
        bool = true;
        num = ii;
      }
    });
    if (bool) {
      arr_basketElements[num].querySelector('.cart__product-count').innerText = Number(arr_basketElements[num].querySelector('.cart__product-count').innerText) + Number(item.querySelector('.product__quantity-value').innerText);
      moving(item, arr_basketElements[num]);
    } else {
      if (basket.children.length == 0) {
        basket.closest('.cart').classList.remove('cart__non-active');
      }
      let elem = getElement(item);
      basket.appendChild(elem);
      moving(item, basket.lastElementChild);

      basket.lastElementChild.addEventListener('click', event => {
        basket.removeChild(elem);
        if (basket.children.length == 0) {
          basket.closest('.cart').classList.add('cart__non-active');
        }
      });
    }

    item.querySelector('.product__quantity-value').innerText = 1;
  });
});















//
