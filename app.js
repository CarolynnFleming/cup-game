// import functions and grab DOM elements
const firstButton = document.getElementById('first-troll-button');
const secondButton = document.getElementById('second-troll-button');
const thirdButton = document.getElementById('third-troll-button');


const firstTroll = document.getElementById('first-troll');
const secondTroll = document.getElementById('second-troll');
const thirdTroll = document.getElementById('third-troll');

const totalEl = document.getElementById('total');
const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');

const hidingPlaces = [
    'first',
    'second',
    'third'
];

let rightChoices = 0;
let totalChoices = 0;

function getRandomItem(arr) {
    const index = Math.floor(Math.random() * arr.length);

    return arr[index];
}

function handleGuess(userGuess, correctSpot) {
    // should reset the styles
    resetStyles();
    // then increment the guesses
    totalChoices++;
    // then grab the appropriate container element for the correct guess from the DOM
    const correctHidingPlaceEl = document.getElementById(`${correctSpot}-troll`);
    // then add the face class to that element so that the face shows up
    correctHidingPlaceEl.classList.add('face');
    // then if the user guess is correct, increment the correct guesses
    if (userGuess === correctSpot) {
        rightChoices++;
    }
    // update the DOM to show this change to the user (including the losses, not tracked directly in state)
    totalEl.textContent = totalChoices;
    winsEl.textContent = rightChoices;
    lossesEl.textContent = totalChoices - rightChoices;

} 

firstButton.addEventListener('click', () => {
    // should get a random item to call the 'correct spot'
    const correctSpot = getRandomItem(hidingPlaces);
    // then use that correct spot to 'handle the guess' using the handleGuess function
    handleGuess('first', correctSpot);
});

secondButton.addEventListener('click', () => {
    // should get a random item to call the 'correct spot'
    const correctSpot = getRandomItem(hidingPlaces);
    // then use that correct spot to 'handle the guess' using the handleGuess function
    handleGuess('second', correctSpot);
});

thirdButton.addEventListener('click', () => {
    // should get a random item to call the 'correct spot'
    const correctSpot = getRandomItem(hidingPlaces);
    // then use that correct spot to 'handle the guess' using the handleGuess function
    handleGuess('third', correctSpot);
});

function resetStyles() {
    firstTroll.classList.remove('face');
    secondTroll.classList.remove('face');
    thirdTroll.classList.remove('face');
    // should remove the face class from all containers
}
