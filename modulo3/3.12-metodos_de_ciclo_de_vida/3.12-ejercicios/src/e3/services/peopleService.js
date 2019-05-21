const endpoint = 'https://randomuser.me/api/'

const fetchPeople = () => fetch(endpoint).then(response => response.json())

export { fetchPeople };