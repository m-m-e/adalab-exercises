'use strict';

//elements to use
const input = document.querySelector('#input');
const button = document.querySelector('.button');
const name = document.querySelector('.name');
const photo = document.querySelector('.photo');
const repos = document.querySelector('.repos');

//function to get username from input and 'fetch' from API
const searchGit = () => {
    let userName = input.value;
    fetch(`https://api.github.com/users/${userName}`)
        .then(response => response.json())
        .then(data => {
            name.innerHTML = data.name;
            photo.src = data.avatar_url;
            repos.innerHTML = data.public_repos;
        })
    }

//add listener to button
button.addEventListener('click', searchGit);