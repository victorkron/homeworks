'use strict';

let questionTitle = document.getElementById('poll__title');
let answers = document.getElementById('poll__answers');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');

xhr.addEventListener('readystatechange', event => {
  if (xhr.readyState == xhr.DONE) {
    let data = JSON.parse(xhr.responseText);
    console.log(data.data.answers);
    questionTitle.innerHTML = `${data.data.title}`;
    for (let param of data.data.answers) {
      answers.innerHTML += `<button class="poll__answer">
                              ${param}
                            </button>`
    }
    let arr_button = Array.from(document.getElementsByClassName('poll__answer'));
    arr_button.forEach(item => {
      item.addEventListener('click', event => {
        alert('Спасибо, ваш голос засчитан!');
        event.preventDefault();
      });
    });

  }
});

xhr.send();
