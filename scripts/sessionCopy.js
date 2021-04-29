//#############################################################################
//
//                      session id copy JS
//
//#############################################################################


function sessionIDCopy() {
  const modalDiv  = document.querySelector('.modal-background');
  const bodyContainer = document.querySelector("body"); // selects Body container
  navigator.clipboard.writeText('05577626bd543fbd9cc17239cdaf1e6c6e402e4f3ef4eb964b72f3c851f1d91c30');
  modalDiv.style.display = "flex";
  bodyContainer.classList.add('stop-scroll');
  setTimeout(function() {
    bodyContainer.classList.remove('stop-scroll');
    modalDiv.style.display = "none";
  }, 2500);
};

function hoverFunc() {
  const buttonText = document.querySelector("#session-button-text");
  const hoverText = document.querySelector('#session-button-hover-text');
  buttonText.classList.add('display-none');
  hoverText.classList.remove('display-none');
  setTimeout(function() {
      buttonText.classList.remove('display-none');
      hoverText.classList.add('display-none');
    }, 1000);
};

function closeModal() {
  const bodyContainer = document.querySelector("body"); // selects Body container
  const modalDiv  = document.querySelector('#modalBackground');
  // bodyContainer.classList.remove('interaction-disabled');
  bodyContainer.classList.remove('stop-scroll');
  modalDiv.style.display = "none";

}

//#############################################################################
//
//                Click and Mouse Events
//
//#############################################################################

const sessionButton = document.querySelector("#sessionButton");
const closeModalButton = document.querySelector("#closeModalButton");
const modalBackground = document.querySelector("#modalBackground");
//
sessionButton.addEventListener('click', sessionIDCopy);
sessionButton.addEventListener('mouseenter', hoverFunc);
modalBackground.addEventListener('click', closeModal);

//#############################################################################
//
//                    Graveyard
//
//#############################################################################

// set a timeout instead
// function outFunc() {
//   const buttonText = document.querySelector("#session-button-text");
//   const hoverText = document.querySelector('#session-button-hover-text');
//   buttonText.classList.remove('display-none');
//   hoverText.classList.add('display-none');
// }
