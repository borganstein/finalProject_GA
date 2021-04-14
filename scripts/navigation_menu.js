// ####################### Navigation Menu JS #####################

function openNav() {
  var stopScroll = document.querySelector("body");
  document.getElementById("mySidenav").style.width = "100%";
  stopScroll.classList.add('stop-scroll');
}

function closeNav() {
  var stopScroll = document.querySelector("body");
  document.getElementById("mySidenav").style.width = "0";
  stopScroll.classList.remove('stop-scroll')
}
// ----------------------------------------------------------------