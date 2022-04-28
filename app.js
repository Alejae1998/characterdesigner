/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
// import functions and grab DOM elements
const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');
const reportEl = document.getElementById('report');
const catchphrasesEl = document.getElementById('catchphrases');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');

// set state for how many times the user changes the head, middle, and bottom
// set state for all of the character's catchphrases
const headDiv = document.getElementById('head');
const middleDiv = document.getElementById('middle');
const bottomDiv = document.getElementById('bottom');

let head = 0;
let middle = 0;
let bottom = 0;
let catchphrase = [];

headDropdown.addEventListener('change', () => {
    console.log('changing select', headDropdown.value);
    headDiv.style = `background-image: url('./assets/${headDropdown.value}-head.png`;
    head++;
    displayStats();
});

middleDropdown.addEventListener('change', () => {
    console.log('changing select', middleDropdown.value);
    middleDiv.style = `background-image: url('./assets/${middleDropdown.value}-middle.png`;
    middle++;
    displayStats();

});

bottomDropdown.addEventListener('change', () => {
    console.log('changing select', bottomDropdown);
    bottomDiv.style = `background-image: url('./assets/${bottomDropdown.value}-pants.png`;
    bottom++;
    displayStats();

});

catchphraseButton.addEventListener('click', () => {
    catchphrase.push(catchphraseInput.value);
    displayCatchphrases();
});

function displayStats() {
    reportEl.textContent = `You have change the head ${head} times , middle ${middle} times , bottom ${bottom} times`;
}

function displayCatchphrases() {
    const catchphraseList = document.getElementById('catchphrase-list'); 
    catchphraseList.textContent = '';
    for (let phrase of catchphrase) {
        const li = document.createElement('li');
        li.textContent = phrase;
        catchphraseList.append(li);
    }
    // for (let phrase of catchphrase) {
    //     if (catchphrase[phrase]) {
    //         return phrase;
    //     } console.log(phrase);
    //     catchphrasesEl.textContent = phrase;
    // }
}
