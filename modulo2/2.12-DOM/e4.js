'use strict';

const box = document.querySelector('.box');

const boxHeight = box.offsetHeight;
console.log(boxHeight);

box.style = "height: 70px; overflow: hidden";

const boxNewHeight = box.offsetHeight;

console.log(boxNewHeight);