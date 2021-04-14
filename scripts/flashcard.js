var german = ["Der Stern", "Der Berg", "Der Stuhl"]; //obv. the german list of words
var english = ["The Star", "The Mountain", "The Chair"]; //obv. the matched english set of words
var english_randomNumber = []; //an object to store the randomNumber generated to link german to english lists

function flipcardButton() {
  document.getElementById("flashcard-back").style.display = "none"; //hide english flashcard
  document.getElementById("flashcard-front").style.display = "block"; //display the german flashcard
  var randomNumber = Math.floor(Math.random() * german.length); //create a random between 0 and the length of the german list
  document.getElementById("flashcard-german").innerHTML = german[randomNumber]; //the location of the final output 
  navigator.clipboard.writeText(german[randomNumber]); // actually write that final ouput
  return (english_randomNumber = english[randomNumber]); // store that randomNumber so that it can be matched against the English list
}

function flipCardFront() {
  document.getElementById("flashcard-front").style.display = "none"; //hide german flashcard
  document.getElementById("flashcard-back").style.display = "block"; //show english flashcard
  document.getElementById("flashcard-english").innerHTML = english_randomNumber; //the location of the english output
  navigator.clipboard.writeText(english_randomNumber); //actually write it 
}

function flipCardBack() {
  document.getElementById("flashcard-back").style.display = "none";
  document.getElementById("flashcard-front").style.display = "block";
}
