//Code for opening the modal to fade out background

function openModal() {
  const modalDiv  = document.querySelector('.modal-background');
  const bodyContainer = document.querySelector("body"); // selects Body container
  modalDiv.style.display = "flex";
  bodyContainer.classList.add('stop-scroll');

}
function closeModal() {
  //declaring variables for readability of code
  const flashcardBack = document.querySelector("#flashcard-back");
  const flashcardFront = document.querySelector("#flashcard-front");
  const flashcardButtonEnglish = document.querySelector("#flashcardButton-english");
  const flashcardButtonGerman = document.querySelector("#flashcardButton-german");
  const bodyContainer = document.querySelector("body"); // selects Body container
  const modalDiv  = document.querySelector('.modal-background');
  //
  flashcardBack.style.display = "none";
  flashcardFront.style.display = "none";
  flashcardButtonEnglish.style.display = "none";
  flashcardButtonGerman.style.display = "flex";
  //
  bodyContainer.classList.remove('stop-scroll');
  modalDiv.style.display = "none";
}

//#############################################################################

const german = ["der Stern", "der Berg", "der Stuhl", "der Wissenschaftler"]; //obv. the german list of words
const english = ["The Star", "The Mountain", "The Chair", "The Scientist"]; //obv. the matched english set of words
var english_randomNumber = []; //an object to store the randomNumber generated to link german to english lists

function flipcardButton() {
  //declaring variables for readability of code
  const flashcardBack = document.querySelector("#flashcard-back");
  const flashcardFront = document.querySelector("#flashcard-front");
  const flashcardGerman = document.querySelector("#flashcard-german")
  const flashcardButtonEnglish = document.querySelector("#flashcardButton-english");
  const flashcardButtonGerman = document.querySelector("#flashcardButton-german");
  //
  flashcardBack.style.display = "none"; //hide english flashcard
  flashcardFront.style.display = "flex"; //display the german flashcard
  flashcardButtonEnglish.style.display = "none";
  flashcardButtonGerman.style.display = "flex";
  //
  var randomNumber = Math.floor(Math.random() * german.length); //create a random between 0 and the length of the german list
  flashcardGerman.innerHTML = german[randomNumber]; //the location of the final output
  navigator.clipboard.writeText(german[randomNumber]); // actually write that final ouput
  return (english_randomNumber = english[randomNumber]); // store that randomNumber so that it can be matched against the English list
}

function flipCardtoEnglish() {
  //declaring variables for readability of code
  const flashcardBack = document.querySelector("#flashcard-back");
  const flashcardFront = document.querySelector("#flashcard-front");
  const flashcardEnglish = document.querySelector("#flashcard-english")
  const flashcardButtonEnglish = document.querySelector("#flashcardButton-english");
  const flashcardButtonGerman = document.querySelector("#flashcardButton-german");
  //
  flashcardFront.style.display = "none"; //hide german flashcard
  flashcardBack.style.display = "block"; //show english flashcard
  flashcardButtonEnglish.style.display = "flex";
  flashcardButtonGerman.style.display = "none";
  //
  flashcardEnglish.innerHTML = english_randomNumber; //the location of the english output
  navigator.clipboard.writeText(english_randomNumber); //actually write it
}

function flipCardtoGerman() {
  //declaring variables for readability of code
  const flashcardBack = document.querySelector("#flashcard-back");
  const flashcardFront = document.querySelector("#flashcard-front");
  const flashcardButtonEnglish = document.querySelector("#flashcardButton-english");
  const flashcardButtonGerman = document.querySelector("#flashcardButton-german");
  //
  flashcardBack.style.display = "none";
  flashcardFront.style.display = "block";
  flashcardButtonEnglish.style.display = "none";
  flashcardButtonGerman.style.display = "flex";
}
