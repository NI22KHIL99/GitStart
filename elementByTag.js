
// Write your code below:
document.addEventListener('DOMContentLoaded', () => {

  const liElements = document.getElementsByTagName('li');

  if (liElements.length >= 5) {
    liElements[4].style.color = 'blue';
  }

  for (let li of liElements) {
    li.style.fontStyle = 'italic';
  }
});