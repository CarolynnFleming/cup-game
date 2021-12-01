// import functions and grab DOM elements
const imgStar = document.getElementById('bucket-star-img');
const imgSquare = document.getElementById('bucket-square-img');
const imgCircle = document.getElementById('bucket-circle-img');

const buttonStar = document.getElementById('bucket-star-button')
const buttonSquare = document.getElementById('bucket-square-button')
const buttonCircle = document.getElementById('bucket-circle-button')

const hitsEl = document.getElementById('hits')
const failsEl = document.getElementById('fails')
const playsEl = document.getElementById('plays')
// let state
let rightPlays = 0;
let overallPlays = 0;
// set event listeners 
function displayHitsFailsAndPlays() {
  hitsEl.textContent = rightPlays;
  playsEl.textContent = overallPlays;
  failsEl.textContent = overallPlays - rightPlays;
}
function resetImages() {
  imgStar.src = './assets/bucket.png';
  imgSquare.src = './assets/bucket.png';
  imgCircle.src = './assets/bucket.png';
}

buttonStar.addEventListener('click', () => {
resetImages();

  overallPlays++;

const randomBucketNumber = Math.floor(Math.random() *3);

if(randomBucketNumber === 0) {

  rightPlays++;
  imgStar.src = './assets/right-bucket.png'; 
} else if (randomBucketNumber === 1) {
  imgSquare.src = './assets/right-bucket.png';
} else {
  imgCircle.src = './assets/right-bucket.png';
}

displayHitsFailsAndPlays()
});

buttonSquare.addEventListener('click', () => {
  resetImages();

  overallPlays++;

const randomBucketNumber = Math.floor(Math.random() *3);

if(randomBucketNumber === 0) {

  rightPlays++;
  imgStar.src = './assets/right-bucket.png'; 
} else if (randomBucketNumber === 1) {
  imgSquare.src = './assets/right-bucket.png';
} else {
  imgCircle.src = './assets/right-bucket.png';
}

displayHitsFailsAndPlays()
});

buttonCircle.addEventListener('click', () => {
  resetImages();

  overallPlays++;

const randomBucketNumber = Math.floor(Math.random() *3);

if(randomBucketNumber === 0) {

  rightPlays++;
  imgStar.src = './assets/right-bucket.png'; 
} else if (randomBucketNumber === 1) {
  imgSquare.src = './assets/right-bucket.png';
} else {
  imgCircle.src = './assets/right-bucket.png';
}

displayHitsFailsAndPlays()
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
