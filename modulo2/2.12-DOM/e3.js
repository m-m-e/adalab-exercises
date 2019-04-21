'use strict';

//elements
const select = document.querySelector('#select');
const firstName = document.querySelector('#firstname');
const surname = document.querySelector('#surname');
const phone = document.querySelector('#phone');

//arrays
const users = [
    {
        name: 'Ana',
        surname: 'Romero',
        phone: '123456',
    },
    {
        name: 'Meg',
        surname: 'Edwards',
        phone: '789123',
    },
    {
        name: 'Carlos',
        surname: 'Mañas',
        phone: '456789',
    }
]

//function - choose name
const createSelect = array => {
    for (let i = 0; i < array.length; i++) {
        const newItem = document.createElement('option');
        newItem.value = i;
        const newContent = document.createTextNode(array[i].name);
        newItem.appendChild(newContent);
        select.appendChild(newItem);
    }
}

//function - auto fill form
const autofill = () => {
    console.log(select.value);
    // firstName.value = users[parseInt(select.value)].name;
    // surname.value = users[parseInt(select.value)].surname;
    // phone.value = users[parseInt(select.value)].phone; 
}

createSelect(users);

select.addEventListener('change', autofill);