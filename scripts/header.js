// ###########################################################################

// Code to change Menu Icon to Blue after scrolling
// past hero image

// ############################################################################

window.onscroll = () => {
  const menuButton = document.querySelector('#menuButton');
  const headerTitle = document.querySelector('#headerTitle');
  const header = document.querySelector('#header');
  const heroH1 = document.querySelector('.hero-h1');
  // const heightOfHero = document.getElementById('hero-cover').clientHeight;

  if (window.scrollY) {
    menuButton.classList.remove('menu-icon-white')
    menuButton.classList.add('menu-icon-blue')
    headerTitle.classList.remove('display-none')
    heroH1.style.display = 'none';
    header.classList.add('header-background-opacity')
    header.classList.add('shadow');

  } else {
    menuButton.classList.remove('menu-icon-blue')
    menuButton.classList.add('menu-icon-white')
    headerTitle.classList.add('display-none')
    header.classList.remove('header-background-opacity')
    header.classList.remove('shadow');
    heroH1.style.display = 'flex';
  }
}
