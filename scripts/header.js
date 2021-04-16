// ###########################################################################

// Code to change Menu Icon to Blue after scrolling
// past hero image

// ############################################################################

window.onscroll = () => {
  const menuButton = document.getElementById('menu-button');
  const headerTitle = document.getElementById('header-title');
  const header = document.getElementById('header');
  // const heightOfHero = document.getElementById('hero-cover').clientHeight;

  if (window.scrollY) {
    menuButton.classList.remove('menu-icon-white')
    menuButton.classList.add('menu-icon-blue')
    headerTitle.classList.remove('display-none')
    header.classList.add('header-background-opacity')
    header.classList.add('shadow');

  } else {
    menuButton.classList.remove('menu-icon-blue')
    menuButton.classList.add('menu-icon-white')
    headerTitle.classList.add('display-none')
    header.classList.remove('header-background-opacity')
    header.classList.remove('shadow');
  }
}
