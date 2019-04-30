'use strict';

const times = [56, 9, 45, 28, 35];

// const sum = (total, time) => {
//   return total + time;
// };

const totalTime = times.reduce((total, time) => total + time, 0);
const averageTime = totalTime / times.length;

console.log(averageTime);