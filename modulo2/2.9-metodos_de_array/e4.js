'use strict';

const btns = document.querySelectorAll('.btn');
const page = document.querySelector('.page');

const background = () => {
    if (page.classList.contains('red')){
        page.classList.toggle('red');
    } else {
        page.classList.add('red');
    }
}

for (const btn of btns) {
    btn.addEventListener('click', background);
}