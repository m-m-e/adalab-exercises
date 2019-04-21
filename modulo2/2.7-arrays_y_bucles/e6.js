'use strict';

const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const text = document.querySelector('.text');
const btn = document.querySelector('.btn');

const movies = [];

// function addInput1(event) {
//     const inputValue1 = event.currentTarget.value;
//     movies[0] = inputValue1;
//     console.log(movies);
// }

// function addInput2(event) {
//     const inputValue2 = event.currentTarget.value;
//     movies[1] = inputValue2;
//     console.log(movies);
// }

function inputTotal(event) {
    const culpable = event.currentTarget;
    const index = parseInt(culpable.getAttribute('data-index'));
    console.log(index);
    movies[index] = culpable.value;
    console.log(movies);
}

function message() {
    for (const movie of movies) {
    text.innerHTML += `<p>¡A mí también me encantó "${movie}"!</p>`;
    }
}

input1.addEventListener('keyup', inputTotal);
input2.addEventListener('keyup', inputTotal);

btn.addEventListener('click', message);

// text.innerHTML = `¡A mí también me encantó "${movies[0]}"!`;



