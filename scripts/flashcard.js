// ############################################################################
//
//                            Flashcard JS
//
// ############################################################################

const germanList = ["der Stern", "der Berg", "der Stuhl", "der Wissenschaftler"]; //obv. the german list of words
const englishList = ["The Star", "The Mountain", "The Chair", "The Scientist"]; //obv. the matched english set of words
let englishList_randomNumber = []; //an object to store the randomNumber generated to link german to english lists

const flashcardBack = document.querySelector("#flashcardEnglish");
const flashcardFront = document.querySelector("#flashcardGerman");
const flashcardGermanText = document.querySelector("#flashcardGermanText")
const flashcardEnglishText = document.querySelector("#flashcardEnglishText")
const flipButton = document.querySelector("#flipButton");

function flipcardButton() {
  //
  let randomNumber = Math.floor(Math.random() * germanList.length); //create a random between 0 and the length of the german list
  flashcardGermanText.innerText = germanList[randomNumber]; //the location of the final output
  //
  let englishList_randomNumber = englishList[randomNumber]; // store that randomNumber
  flashcardEnglishText.innerText = englishList_randomNumber; //the location of the english output
};


function flipCard() {
  flashcardFront.classList.add('hidden');
  flashcardBack.classList.remove('hidden');
  flashcardBack.classList.add('transform-rotate')
};

function flipCardBack() {
  flashcardFront.classList.remove('hidden');
  flashcardBack.classList.add('hidden');
  flashcardFront.classList.add('transform-rotate')
};
// ########## Events ###########
//
flipButton.addEventListener('click', flipcardButton);
// flashcardFront.addEventListener('click', flipCard);
// flashcardBack.addEventListener('click', flipCardBack);
//
// ############################################################################
