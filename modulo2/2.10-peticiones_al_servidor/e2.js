'use strict';

const button = document.querySelector('.btn');

const showMe = () => {
    fetch('https://dog.ceo/api/breed/Chihuahua/images/random')
    .then(response => response.json())
    .then(data => {
        const img = document.querySelector('img');
        img.src = data.message;
        img.alt = 'Un perro';
    });      
}

button.addEventListener('click', showMe);