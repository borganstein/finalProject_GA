//declaring variables for readability of code
const flashcardBack = document.querySelector("#flashcardEnglish");
const flashcardFront = document.querySelector("#flashcardGerman");
const flashcardGermanText = document.querySelector("#flashcardGermanText")
const flashcardEnglishText = document.querySelector("#flashcardEnglishText")
const flipButton = document.querySelector("#flipButton");

const germanList = ["der Stern", "der Berg", "der Stuhl", "der Wissenschaftler"]; //obv. the german list of words
const englishList = ["The Star", "The Mountain", "The Chair", "The Scientist"]; //obv. the matched english set of words
var englishList_randomNumber = []; //an object to store the randomNumber generated to link german to english lists


function flipcardButton() {
  //
  //
  let randomNumber = Math.floor(Math.random() * germanList.length); //create a random between 0 and the length of the german list
  flashcardGermanText.innerHTML = germanList[randomNumber]; //the location of the final output
  navigator.clipboard.writeText(germanList[randomNumber]); // actually write that final ouput
  let englishList_randomNumber = englishList[randomNumber]; // store that randomNumber
  flashcardEnglishText.innerHTML = englishList_randomNumber; //the location of the english output
  navigator.clipboard.writeText(englishList_randomNumber); //actually write it so that it can be matched against the English list
};

// ########## Click Events ###########

flipButton.addEventListener('click', flipcardButton);

// ############################################################################
//
//
//
// testing graveyard

// function flipCardtoEnglish() {
//   //
//   // flashcardFront.style.display = "none"; //hide german flashcard
//   // flashcardBack.style.display = "block"; //show english flashcard
//   //
//   flashcardEnglish.innerHTML = english_randomNumber; //the location of the english output
//   navigator.clipboard.writeText(english_randomNumber); //actually write it
// };
//
// function flipCardtoGerman() {
//   //
//   flashcardBack.style.display = "none";
//   flashcardFront.style.display = "block";
//   flashcardButtonEnglish.style.display = "none";
//   flashcardButtonGerman.style.display = "flex";
// };
