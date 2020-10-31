'use strict';

let natahu = 'circle';
const hrac = document.querySelector('.hra');
const tlacitko = document.querySelectorAll('button');


for (let i = 0; i < tlacitko.length; i++) {
  tlacitko[i].addEventListener('click', (event) => {
    if (natahu === 'circle') {
      event.target.classList.toggle('board__field--circle');
      hrac.innerHTML = `hraje:
      <img class="ikonka" src="obrazek/cross.svg" alt="křížek" />`;
      natahu = 'cross';
      event.target.setAttribute('disabled', true);
    } else if (natahu === 'cross') {
      event.target.classList.toggle('board__field--cross');
      hrac.innerHTML = ` hraje:
      <img class="ikonka" src="obrazek/circle.svg" alt="kolečko" />`;
      natahu = 'circle';
      event.target.setAttribute('disabled', true);
    }
    else null;
  console.log('Get position', getPosition(tlacitko[i]));
  console.log('Get symbol', getSymbol(tlacitko[i]));
  console.log('Winning', isWinningMove(tlacitko[i]));
  });
}

const boardSize = 10 // 10x10
const fields = document.querySelectorAll('.board_field') // Selektor pozměň tak, aby odpovídal tvému kódu.

const getPosition = (field) => {
	let fieldIndex = 0
	while (fieldIndex < fields.length) {
		if (field === fields[fieldIndex]) {
			break
		}
		fieldIndex++
	}

	return {
		row: Math.floor(fieldIndex / boardSize),
    column: fieldIndex % boardSize,
	}
}

const getField = (row, column) => tlacitko[row * boardSize + column]

const getSymbol = (field) => {
	// Název třídy přizpůsob tvému kódu.
	if (field.classList.contains('board__field--cross')) {
		return 'cross'
	} else if (field.classList.contains('board__field--circle')) {
		return 'circle'
	}
}

const symbolsToWin = 5
const isWinningMove = (field) => {
	const origin = getPosition(field)
	const symbol = getSymbol(field)

	let i

	let inRow = 1 // Jednička pro právě vybrané políčko
	// Koukni doleva
	i = origin.column
	while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
		inRow++
		i--
	}

	// Koukni doprava
	i = origin.column
	while (
		i < boardSize - 1 &&
		symbol === getSymbol(getField(origin.row, i + 1))
	) {
		inRow++
		i++
	}

	if (inRow >= symbolsToWin) {
		return true
	}

	let inColumn = 1
	// Koukni nahoru
	i = origin.row
	while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
		inColumn++
		i--
	}

	// Koukni dolu
	i = origin.row
	while (
		i < boardSize - 1 &&
		symbol === getSymbol(getField(i + 1, origin.column))
	) {
		inColumn++
		i++
	}

	if (inColumn >= symbolsToWin) {
		return true
	}

	return false
}

const vitezstvi = () => {
  if (isWinningMove(tlacitko[i])===true && getSymbol(tlacitko[i])==='circle') {
        return alert ('Gratulujeme kolečku k vítězství! Chcete rozdrtit křížek ještě jednou?');}
      else if (isWinningMove(tlacitko[i])===true && getSymbol(tlacitko[i])==='cross'){
        return alert ('Gratuluji křížku!');
      };}

