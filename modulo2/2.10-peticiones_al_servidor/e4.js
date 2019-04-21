'use strict';

//elements to use
const input = document.querySelector('#input');
const button = document.querySelector('.btn');
const list = document.querySelector('.list');

//function to 'fetch' organization from API 
//+ find all repos from organization
//+ print as a list
const getRepos = () => {
    const org = input.value;
    fetch(`https://api.github.com/orgs/${org}`)
    .then(orgResponse => orgResponse.json())
    .then(orgData => {
        console.log('List of data: ', orgData);
        const orgInfo = orgData.message;
        return fetch(`${orgData.repos_url}`)
    })
    .then(repoResponse => repoResponse.json())
    .then(repoData => {
        console.log(repoData);
        let listContent = '';
        for (const repo of repoData) {
            const repoContent = `<li>${repo.name}</li>`;
            listContent += repoContent;
        }
        list.innerHTML = listContent;
    
    })
}

//add listener to button
button.addEventListener('click', getRepos);