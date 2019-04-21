'use strict';

const time = document.querySelector('.time');
const grapes = document.querySelector('.grapes');
const celebration = document.querySelector('.celebration');

let counter = 0;

const newYear = () => {
    if (counter < 12) {
        counter++;
        time.innerHTML = counter;
        grapes.innerHTML += `<p class="grape"></p>`;
    } else {
        celebration.innerHTML = '<img class="image" src="https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2018/07/depositphotos_13962832_original.jpg?itok=JIFo19RZ&fc=50,50" alt="fireworks"><p class="message">Happy New Year!!</p>'
      }
 }

 setInterval(newYear, 1000);
