'use strict';

const lostNumbers = [4, 8, 15, 16, 23, 42];


const bestLostNumber = arr => {
    const evenNumbers = [];
    for (const number of arr) {
        if (number % 2 === 0) {
            evenNumbers.push(number);
        }
    }
    const multiplesOf3 = [];
    for (const number of arr) {
        if (number % 3 === 0) {
            multiplesOf3.push(number);
        }
    }
    const lostArray = evenNumbers.concat(multiplesOf3);
    console.log(evenNumbers);
    console.log(multiplesOf3);
    console.log(lostArray);
}

bestLostNumber(lostNumbers);