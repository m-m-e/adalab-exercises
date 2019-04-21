'use strict';

const films = [
    '10 Things I Hate About You',
    'Amélie',
    'Howl\'s Moving Castle'
];

function workWithMovies() {
    films [3] = 'Princess Mononoke';
    films[1] = 'Bring it on!';
    films[0] = 'My neighbor Totoro';
    console.log(films);
}

console.log(films);
workWithMovies();