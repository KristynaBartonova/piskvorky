'use strict';

let natahu = 'circle';

let hrac = document.querySelector('.hra');
const tlacitka = document.querySelectorAll('button');

for (let i = 0; i < tlacitka.length; i++) {
  tlacitka[i].addEventListener('click', (event) => {
    if (natahu === 'circle') {
      event.target.classList.toggle('board__field--circle');
      hrac.innerHTML = `hraje:
      <img class="ikonka" src="img/cross.svg" alt="křížek" />`;
      natahu = 'cross';
      event.target.setAttribute('disabled', true);
    } else if (natahu === 'cross') {
      event.target.classList.toggle('board__field--cross');
      hrac.innerHTML = ` hraje:
      <img class="ikonka" src="img/circle.svg" alt="kolečko" />`;
      natahu = 'circle';
      event.target.setAttribute('disabled', true);
    }
  });
}
