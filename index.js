'use strict';

let natahu = 'circle';
let hraje = document.querySelector('.hra');
const tlacitko = document.querySelectorAll('button');

for (let i = 0; i < tlacitko.length; i++) {
  tlacitko[i].addEventListener('click', (event) => {
    if (natahu === 'circle') {
      event.target.classList.toggle('board_field--circle');
      hraje.innerHTML = `hraje:
      <img class="ikonka" src="obrazek/cross.svg" alt="křížek" />`;
      natahu = 'cross';
      event.target.setAttribute('disabled', true);
    } else if (natahu === 'cross') {
      event.target.classList.toggle('board_field--cross');
      hraje.innerHTML = ` hraje:
      <img class="ikonka" src="obrazek/circle.svg" alt="kolečko" />`;
     natahu = 'circle';
      event.target.setAttribute('disabled', true);
    }
  });
}



