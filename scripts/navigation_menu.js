// ####################### Navigation Menu JS #####################

function openNav() {
  // setting variables for use within function
  var mainContainer = document.querySelector("main"); // selects Main container
  var bodyContainer = document.querySelector("body"); // selects Body container
  var menuLink  = document.querySelectorAll(".menu-link"); //querySelectorAll returns a list
  var socialLink = document.querySelectorAll(".social-link"); //querySelectorAll returns a list
  var sideMenu = document.querySelector("#mySidenav"); // selects element with ID mySidenav

  sideMenu.classList.remove('hidden'); // removes .hidden class from sidemenu
  sideMenu.style.width = "100%"; // changes width to 100%; can be done without but this aids in having nice animation
  mainContainer.classList.add('interaction-disabled'); //disables pointer-events
  bodyContainer.classList.add('stop-scroll'); // stops the ability to scroll while the menu is open
  
  socialLink.forEach(element => element.tabIndex="-1"); //uses forEach to iterate through array to add tabIndex=-1 to all elements with class .social-link
  menuLink.forEach(element => element.tabIndex="0"); //uses forEach to iterate through array to add tabIndex=0 to all elements with class .menu-link

 }

function closeNav() {
  var mainContainer = document.querySelector("main"); // selects Main container
  var bodyContainer = document.querySelector("body"); // selects Body container
  var menuLink  = document.querySelectorAll(".menu-link") //querySelectorAll returns a list
  var socialLink = document.querySelectorAll(".social-link") //querySelectorAll returns a list
  var sideMenu = document.querySelector("#mySidenav"); // selects element with ID mySidenav

  sideMenu.classList.add('hidden') // hides the menu
  sideMenu.style.width = "0"; // makes the width 0; can be done without but this makes for a nice animation
  mainContainer.classList.remove('interaction-disabled'); // enables pointer-events
  bodyContainer.classList.remove('stop-scroll')

  socialLink.forEach(element => element.tabIndex="0"); //uses forEach to iterate through array to add tabIndex=0 to all elements with class .social-link
  menuLink.forEach(element => element.tabIndex="-1"); //uses forEach to iterate through array to add tabIndex=-1 to all elements with class .menu-link
}
// ----------------------------------------------------------------
