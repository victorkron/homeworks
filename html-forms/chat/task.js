'use strict';

const chatContainer =  document.querySelector('.chat-widget__messages-container');
const chatFlaf = document.querySelector('.chat-widget');
const chat = document.getElementById('chat-widget__input');
const messageBox = document.getElementById('chat-widget__messages');


let botMessage = ['Кто тут?', 'До свидания!', 'Имейте совесть...', 'Вы недостойны покупать у нас!'];

function getRandomMessage(arr) {
  return Math.floor((Math.random() * arr.length))
}

chatFlaf.addEventListener('click', () => {
  chatFlaf.classList.add('chat-widget_active');
});

function getTimeNow() {
  let time = '';
  if ((new Date()).getHours() < 10) time += `0${(new Date()).getHours()}`;
  else  time += `${(new Date()).getHours()}`;

  if ((new Date()).getMinutes() < 10) time += `:0${(new Date()).getMinutes()}`;
  else  time += `:${(new Date()).getMinutes()}`;
  return time;
}

chat.required = true;

chat.addEventListener('focus', () => {
  let id = setTimeout(() => {
    messageBox.innerHTML += `
    <div class="message">
        <div class="message__time">${getTimeNow()}</div>
        <div class="message__text">Вы тут?</div>
    </div>
    `;
  }, 30000);
  document.onkeypress = event => {
    clearTimeout(id);
    let timeNow = getTimeNow();
    let indexForBotMessage = getRandomMessage(botMessage);
    if (event.key == 'Enter' && chat.checkValidity()) {
      messageBox.innerHTML += `
      <div class="message message_client">
          <div class="message__time">${timeNow}</div>
          <div class="message__text">${chat.value}</div>
      </div>
      <div class="message">
          <div class="message__time">${timeNow}</div>
          <div class="message__text">${botMessage[indexForBotMessage]}</div>
      </div>
      `;
      chat.value = '';
      let res =  chat.getBoundingClientRect().top - messageBox.lastElementChild.getBoundingClientRect().bottom;
      while (res < 10) { // Число 10 полученно эксперементально =) Более адаптивного способа не нашла...
        chatContainer.scrollBy(0, 1);
        res =  chat.getBoundingClientRect().top - messageBox.lastElementChild.getBoundingClientRect().bottom;
      }
    } else if (event.key == 'Enter' && !(chat.checkValidity())) {
      console.error('Empty message');
    }

  }
});

chat.addEventListener('blur', () => {
  document.onkeypress = () => {};
});
