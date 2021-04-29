// ############################################################################
//
//                            Flashcard JS
//
// ############################################################################

const germanList = ["der Stern", "der Berg", "der Stuhl", "der Wissenschaftler"]; //obv. the german list of words
const englishList = ["The Star", "The Mountain", "The Chair", "The Scientist"]; //obv. the matched english set of words
let englishList_randomNumber = []; //an object to store the randomNumber generated to link german to english lists


function flipcardButton() {
  //declaring variables for readability of code
  //
  const flashcardBack = document.querySelector("#flashcardEnglish");
  const flashcardFront = document.querySelector("#flashcardGerman");
  const flashcardGermanText = document.querySelector("#flashcardGermanText")
  const flashcardEnglishText = document.querySelector("#flashcardEnglishText")
  //
  //
  let randomNumber = Math.floor(Math.random() * germanList.length); //create a random between 0 and the length of the german list
  flashcardGermanText.innerHTML = germanList[randomNumber]; //the location of the final output
  //
  let englishList_randomNumber = englishList[randomNumber]; // store that randomNumber
  flashcardEnglishText.innerHTML = englishList_randomNumber; //the location of the english output
};

// ########## Click Events ###########
//
const flipButton = document.querySelector("#flipButton");
flipButton.addEventListener('click', flipcardButton);
//
// ############################################################################
