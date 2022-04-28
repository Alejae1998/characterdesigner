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
  // get the value of the head dropdown

  // increment the head change count state

  // update the dom for the head (use style.backgroundImage on the headEl div instead of trying to set the .src -- it's NOT an img tag!)

  // update the stats to show the new count (call displayStats() to do this work)
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
  // get the value of the catchphrase input
  // push the new catchphrase to the catchphrase array in state
  // clear out the form input's value so it's empty to the user
  // update the dom to show the new catchphrases (refactor to/call displayCatchphrases to do this work)
});

function displayStats() {
    reportEl.textContent = `You have change the head ${head} times , middle ${middle} times , bottom ${bottom} times`;
  // text content of the reportEl to tell the user how many times they've changed each piece of the state
}

function displayCatchphrases() { 
    for (let phrase of catchphrase) {
        if (catchphrase[phrase]) {
            return phrase;
        } console.log(phrase);
        catchphrasesEl.textContent = phrase;
    }

  // clear out the DOM for the currently displayed catchphrases
  // loop through each catchphrase in state
  // and for each catchphrase
  // create an HTML element with the catchphrase as its text content
  // and append that HTML element to the cleared-out DOM
}
