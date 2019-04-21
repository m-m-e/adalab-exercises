'use strict';

const btn = document.querySelector('.btn');

function log (event) {
  console.log(event);
}

btn.addEventListener('mouseover', log);
