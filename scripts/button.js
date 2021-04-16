//
//
// Not worth it; doesn't look that good


function changeIconToText() {
  const icon = document.querySelector('.link-style-icon');
  const text = document.querySelector('.button-text');

  icon.style.display = 'none';
  text.style.display = 'block';
}

function changeTextToIcon() {
  const icon = document.querySelector('.link-style-icon');
  const text = document.querySelector('.button-text');

  icon.style.display = 'block';
  text.style.display = 'none';
}
