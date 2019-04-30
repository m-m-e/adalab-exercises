'use strict';

const runners = [
  { name: 'Gregory Goyle', time: 56 },
  { name: 'Nymphadora Tonks', time: 9 },
  { name: 'Luna Lovegood', time: 45 },
  { name: 'Cedric Diggory', time: 28 },
  { name: 'Cho Chang', time: 35 },
];

const findWinner = (winner, runner) => {
  if (runner.time < winner.time) {
    return runner;
  }
  else {
    return winner;
  }
};

const winner = runners.reduce(findWinner);

console.log(winner.name);