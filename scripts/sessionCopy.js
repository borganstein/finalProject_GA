//#############################################################################
//
//                      session id copy JS
//
//#############################################################################

const buttonText = document.querySelector("#session-button-text");
const hoverText = document.querySelector('#session-button-hover-text');
const sessionButton = document.querySelector("#sessionButton");

function sessionIDCopy() {
  navigator.clipboard.writeText('05577626bd543fbd9cc17239cdaf1e6c6e402e4f3ef4eb964b72f3c851f1d91c30');
  hoverText.classList.remove('hidden');
  hoverText.innerText = "Copied!";
  hoverText.style.backgroundColor = "#268bcc";
  hoverText.style.color = "#f5f5f5";
  setTimeout(function() {
    hoverText.innerText = "Copy";
    hoverText.style.backgroundColor = "#f5f5f5";
    hoverText.style.color = "#268bcc";
  }, 1000);
};

function hoverFunc() {
  hoverText.classList.remove('hidden');
};

function exitHoverFunc() {
  hoverText.classList.add('hidden');
}

//#############################################################################
//
//                Click and Mouse Events
//
//#############################################################################
//
sessionButton.addEventListener('click', sessionIDCopy);
sessionButton.addEventListener('mouseenter', hoverFunc);
sessionButton.addEventListener('mouseleave', exitHoverFunc);

//#############################################################################
//
//                    Graveyard
//
//#############################################################################
