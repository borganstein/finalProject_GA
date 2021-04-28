// ###########################################################################

// Code to change Menu Icon to Blue after scrolling

// ############################################################################

window.onscroll = () => {
  const menuButton = document.querySelector('#menuButton');
  const headerTitle = document.querySelector('#headerTitle');
  const header = document.querySelector('#header');
  const heroH1 = document.querySelector('.hero-h1');
  const headerArea = document.querySelector('.header-menuButton-title');

  if (window.scrollY) {
    menuButton.classList.remove('menu-icon-white');
    menuButton.classList.add('menu-icon-blue');
    headerArea.classList.remove('hidden');
    headerTitle.classList.add('transformLarge')
    headerTitle.classList.remove('hidden');
    header.classList.add('header-background-opacity');
    header.classList.add('shadow');
    heroH1.classList.remove('transformLarge');
    heroH1.classList.add('scaleTransformSmall');
    heroH1.classList.add('hidden');

  } else {
    menuButton.classList.remove('menu-icon-blue');
    menuButton.classList.add('menu-icon-white');
    headerArea.classList.add('hidden');
    headerTitle.classList.add('hidden');
    header.classList.remove('header-background-opacity');
    header.classList.remove('shadow');
    heroH1.classList.remove('transformSmall');
    heroH1.classList.add('transformLarge');
    heroH1.classList.remove('hidden');
  }
}
