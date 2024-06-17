console.time('Change Main Heading');
const mainHeading = document.getElementById("main-heading");
  mainHeading.textContent = "Fruit World";
  mainHeading.style.color = "orange";
console.timeEnd('Change Main Heading');

console.time('Change Main Heading');
const header = document.getElementById("header");
  header.style.background = "green";
  header.style.borderBottom = "1px solid orange"
console.timeEnd('Change Main Heading');

console.time('Change Basket Heading');
const basketHeading = document.getElementById("basket-heading");
  basketHeading.style.color = "green";
console.timeEnd('Change Basket Heading');

console.time('Change thanks');
const thanks = document.getElementById("thanks");
        const paragraph = document.createElement("p");
        paragraph.textContent = "Please visit us again";
        thanks.appendChild(paragraph);
console.timeEnd('Change thanks');