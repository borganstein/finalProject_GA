function sessionIDCopy() {
  const modalDiv  = document.querySelector('#session-modal-background');
  const bodyContainer = document.querySelector("body"); // selects Body container

  navigator.clipboard.writeText('05577626bd543fbd9cc17239cdaf1e6c6e402e4f3ef4eb964b72f3c851f1d91c30');
  modalDiv.style.display = "flex";
  // bodyContainer.classList.add('interaction-disabled');
  bodyContainer.classList.add('stop-scroll');

}
/* --------------------------------------*/
function hoverFunc() {
  const buttonText = document.querySelector("#session-button-text");
  const hoverText = document.querySelector('#session-button-hover-text');
  buttonText.classList.add('display-none');
  hoverText.classList.remove('display-none');
}

function outFunc() {
  const buttonText = document.querySelector("#session-button-text");
  const hoverText = document.querySelector('#session-button-hover-text');
  buttonText.classList.remove('display-none');
  hoverText.classList.add('display-none');
}

function closeModal() {
  const bodyContainer = document.querySelector("body"); // selects Body container
  const modalDiv  = document.querySelector('#session-modal-background');
  bodyContainer.classList.remove('interaction-disabled');
  bodyContainer.classList.remove('stop-scroll');
  modalDiv.style.display = "none";
}
