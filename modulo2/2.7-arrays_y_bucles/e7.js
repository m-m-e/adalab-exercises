'use strict';

//array of objects - 1 object per person
const content = document.querySelector('.content');
const adalabers = [
    {
        name: 'María',
        age: 29,
        job: 'diseñadora'
    },
    {
        name: 'Lucía',
        age: 31,
        job: 'ingeniera química'
    },
    {
        name: 'Susana',
        age: 34,
        job: 'periodista'
    },
    {
        name: 'Rocío',
        age: 25,
        job: 'actriz'
    },
    {
        name: 'Inmaculada',
        age: 21,
        job: 'diseñadora'
    }
];

//change array
adalabers[0].name = 'Jane';
adalabers[0].age = 20;
adalabers[0].job = 'profesora';


//function countAdalabers to find the list length
const countAdalabers = (lst) => lst.length;

//function averageAge to work out average age
function averageAge(lst) {
    let totalAge = 0;
    for (let i = 0; i < lst.length; i++) {
        totalAge += lst[i].age;
    };
    const average = totalAge / lst.length;
    console.log(average);
};
//function theYoungest to find the name of the youngest Adalaber

function theYoungest(lst) {
    let youngestName = '';
    let count = 30;
    for (let i = 0; i < lst.length; i++) {
        if (lst[i].age < count) {
            count = lst[i].age;
            youngestName = lst[i].name;
        }
    }
    console.log(count);
    console.log(youngestName);
}
//function countDesigners to find number of designers
function countDesigners(lst) {
    let count = 0;
    for (let i = 0; i < lst.length; i++) {
        if (lst[i].job === 'diseñadora') {
            count++;
        }
    }
    console.log(count);
}

// function print to print details to the screen
function print() {
    content.innerHTML = `<p>Number of Adalabers: ${numAda}.</p>
    <p>Average age of Adalabers: ${ageAda}.</p>
    <p>Number of designers: ${designersAda}.</p>
    <p>The youngest Adalaber is: ${youngestAda}.</p>`
}


//call the functions to see if they work

const numAda = countAdalabers(adalabers);
const ageAda = averageAge(adalabers);
const designersAda = countDesigners(adalabers);
const youngestAda = theYoungest(adalabers);


print();
