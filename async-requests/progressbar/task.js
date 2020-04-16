'use strict';

let progressBar = document.getElementById('progress');
let sendButton = document.getElementById('send');
let myForm = document.getElementById('form');

myForm.addEventListener('submit', event => {
  event.preventDefault();

  let formData = new FormData(myForm);
  let xhr = new XMLHttpRequest();

  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php'); // Зачем что-то указывать в form в атрибуте action, если мы указываем адресс передачи данных здесь?

  xhr.upload.addEventListener('progress', event => {
    progressBar.value = event.loaded / event.total;
  });

  xhr.addEventListener('readystatechange', event => {
    console.log(xhr.readyState);
    if (xhr.readyState == xhr.DONE) {
      console.log('DONE');
    }
  });

  xhr.send(formData);
});

sendButton.addEventListener('click', event => {
  /* Вопрос. Если раскомментировать этот блок кода, то страница перезагрузится, не смотря на то, что event.preventDefault()
    прописано и для события 'submit' на форме и для события 'click' на кнопке. Почему? При этом если не прописывать event.preventDefault()
    для button, то событе 'submit' происходит, как я понимаю, по умолчанию, и страница не перезагружается, в отличае от случая если
    myForm.submit() указать явно. Почему?
  myForm.submit();
  event.preventDefault();
  */
});
