'use strict';

let dead = document.getElementById('dead');
let lost = document.getElementById('lost');


function getHole(index) {
  let hole = document.getElementById(`hole${index}`);
  return hole;
}

for (let i = 1; i < 10; i++) {
  getHole(i).onclick = function() {
    if (getHole(i).className.includes('hole_has-mole')) {
      dead.textContent = Number(dead.textContent) + 1;
      if (dead.textContent == 10) {
        alert('Вы победили!');
        dead.textContent = 0;
      }
    } else {
      lost.textContent = Number(lost.textContent) + 1;
      if (lost.textContent == 5) {
        alert('Вы проиграли...');
        lost.textContent = 0;
      }
    }
  }
}
