'use strict';

const numbers = [7, 10, 2, 1, 5];

const numbers2 = [7, 10, 2];

numbers[5] = 20;

function average(numbers) {
    let acc = 0;

    for (let i = 0; i < numbers.length; i++) {
        acc = acc + numbers[i];
    }
    console.log(acc / numbers.length);
}

average(numbers);
average(numbers2);