'use strict';

//elements to use
const board = document.querySelector('.board');
const colors = ['white', 'blue', 'red', 'green', 'yellow', 'pink'];

//function to print sentences
const printPhrase = () => {
    for (let i = 0; i < 100; i++) {
        const newItem = document.createElement('p');
        newItem.classList.add('text');
        const newContent = document.createTextNode(`I can use loops!`);
    
        newItem.appendChild(newContent);
        board.appendChild(newItem);
    }    
}

//function to add options
const addOptions = (array, element) => {
    for (const color of array) {
        const newOption = document.createElement('option');
        const newOptionText = document.createTextNode(color);
        newOption.appendChild(newOptionText);
        element.appendChild(newOption);
    }
}

//function to add select and options
const addSelect = () => {
    const paragraphs = document.querySelectorAll('.text');
    for (const paragraph of paragraphs) {
        const newSelect = document.createElement('select');
        newSelect.classList.add('select');
        addOptions(colors, newSelect);
        
        paragraph.appendChild(newSelect);
    }
}

//function to print colour depending on selected option
const chooseColor = event => {
    const current = event.currentTarget;
    const selected = current.selectedIndex;
    const parent = current.parentElement;
    console.log(selected);
    parent.classList.add(colors[selected]);
}

//call functions
printPhrase();
addSelect();

//add listeners
const addListeners = () => {
    const allSelects = document.querySelectorAll('.select');
    
    for (const select of allSelects) {
        select.addEventListener('change', chooseColor);
    }   
}

addListeners();