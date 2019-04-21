'use strict';

const input = document.querySelector('#input');
const button = document.querySelector('.btn');
const list = document.querySelector('.info-list');

//function - take name from input
//search name in API
//print results
const getCharacter = () => {
    const character = input.value;
    fetch(`https://swapi.co/api/people/?search=${character}`)
        .then(characterResponse => characterResponse.json())
        .then(characterData => {
            let listContent = '';
            console.log(characterData);
            for (const person of characterData.results){
                listContent += `<li>Name: ${person.name}.</br> Gender: ${person.gender}.</li>`;
            }
            list.innerHTML = listContent;
        })
}

//add listener

button.addEventListener('click', getCharacter);