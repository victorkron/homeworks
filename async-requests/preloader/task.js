'use strict';

let shell = document.getElementById('items');
let img = document.getElementById('loader');
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');

xhr.addEventListener('readystatechange', event => {
  if (xhr.readyState == 4) {
    img.classList.remove('loader_active');
    let data = JSON.parse(xhr.responseText);

    for (let key in data.response.Valute) {
      let str = `<div class="item">
                  <div class="item__code">${data.response.Valute[key].CharCode}</div>
                  <div class="item__value">${data.response.Valute[key].Value}</div>
                  <div class="item__currency">руб.</div>
                 </div>`;
      shell.innerHTML += str;
    }
  }
});

xhr.send();
