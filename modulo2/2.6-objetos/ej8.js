'use strict';

const background = document.querySelector('.page');
const select = document.querySelector('.choose');
const button = document.querySelector('.btn');
const smile = document.querySelector('.smile');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min + 1)) + min;
}

function moodPaint(event) {
    const value = select.value;
    if (value === 'sad') {
        smile.innerHTML = ':(';
    } else if (value === 'happy') {
        smile.innerHTML = ':)';
    } 
    console.log(value);
}

function moodPaint2(event) {
    const rndm = getRandomInt(1,10);
    console.log(rndm);
    if (rndm % 2 === 0) {
        background.classList.toggle('chilean-orange');
    } else {
        background.classList.remove('chilean-orange')
        background.classList.add('correct-yellow');
    }
}

button.addEventListener('click', moodPaint);
button.addEventListener('click', moodPaint2);
