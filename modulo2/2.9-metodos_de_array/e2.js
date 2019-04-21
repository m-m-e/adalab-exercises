'use strict';

const numbers = [];

const get100Numbers = () => {
    for (let i = 1; i < 101; i++){
        numbers.push(i);
    }
    console.log(numbers);
}

const getReversed100Numbers = () => {
    get100Numbers();
    console.log(numbers.reverse());
}

getReversed100Numbers();

