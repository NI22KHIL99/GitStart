document.addEventListener('DOMContentLoaded', () => {

  const basketHeading = document.querySelector('#basket-heading');
  basketHeading.style.color = 'brown';

  const fruitItems = document.querySelectorAll('.fruits .fruit');

  if (fruitItems.length >= 2) {
    fruitItems[1].style.backgroundColor = 'brown';
    fruitItems[1].style.color = 'white';
  }

  if (fruitItems.length >= 4) {
    fruitItems[3].style.backgroundColor = 'brown';
    fruitItems[3].style.color = 'white';
  }
});