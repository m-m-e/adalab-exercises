'use strict';

//elements to use
const button = document.querySelector('.btn');
const message = document.querySelector('.message');
const image = document.querySelector('.image');

//function to find dog breeds
const getDogs = () => {
    return fetch('https://dog.ceo/api/breeds/list')
        .then(dogResponse => dogResponse.json())
        .then(dogData => {
            console.log(dogData);
            const length = dogData.message.length;
            console.log(`Length of list: ` + length);
            return dogData;
        })
}

//function to get random number
const getRandNum = (max) => {
    return fetch(`https://api.rand.fun/number/integer?max=${max}`)
        .then(numResponse => numResponse.json())
        .then(numData => {
            const rndm = numData.result
            console.log(`Random number: ` + rndm);
            return rndm;
        })
}
//function to choose a random breed
const getDogPic = (breed) => {
    return fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(dogPicResponse => dogPicResponse.json())
        .then(dogPicData => {
            console.log(dogPicData);
            return dogPicData;  
        })
}


const handleClickButton = () => {
    getDogs()
        .then(dogData => {
            if (dogData && dogData.message) {
                getRandNum(dogData.message.length)
                    .then(rndm => {
                        const chosenBreed = dogData.message[rndm];
                        getDogPic(chosenBreed)
                            .then(dogPic => {
                                // +print message with name of chosen breed
                                message.innerHTML = `You've chosen ${chosenBreed}`;
                                //+print picture of dog
                                image.src = dogPic.message;
                                image.alt = `Image of ${chosenBreed}`;
                            })
                    })
            }
        })
        .catch(error => {
            console.error(error);
        })
}

//add listener to button
button.addEventListener('click', handleClickButton);




// //function to find dog breeds
// const getDog = () => {
//     fetch('https://dog.ceo/api/breeds/list')
//     .then(dogResponse => dogResponse.json())
//     .then(dogData => {
//         console.log(dogData);
//         const length = dogData.message.length;
//         console.log(`Length of list: ` + length);
//         //+ choose random number
//         return fetch(`https://api.rand.fun/number/integer?max=${length}`)
//     })
//     .then(numResponse => numResponse.json())
//     .then(numData => {
//         const rndm = numData.result
//         console.log(`Random number: ` + rndm);
//         debugger;
//         //+choose a random breed
//         const chosenDog = dogData.message[rndm];
//         //+print message with name of chosen breed
//         message.innerHTML = `You've chosen ${chosenDog}`;
//         return fetch(`https://dog.ceo/api/breed/${chosenDog}/images/random`)
//     })
//     .then(picResponse => picResponse.json())
//     .then(picData => {
//         //+print picture of dog
//         image.src = picData.message;
//     }) 
// }