import {BaseCell} from './cells';

let playfield = document.getElementById('playfield_canvas');
let ctx = playfield.getContext('2d');
let cellsCount = 20;

let width = playfield.getAttribute('width');
let cellSize = width / cellsCount;

let randomInteger = () => Math.round(-0.5 + Math.random() * (10));

let colours = [
    'green', 'red', 'black', 'yellow', 'orange', 'beige',
    'blue', 'aliceblue', 'antiquewhite', 'aquamarine'
];

let setCells = ({x, y, fillStyle}) => {
    ctx.fillStyle = colours[randomInteger()];
    ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
}

let battleField = new Array(cellsCount).fill()
    .map((e, x) => new Array(cellsCount).fill()
        .map((e, y) => ({
            x, 
            y, 
            fillStyle: colours[randomInteger()]
        })));

battleField.forEach((row) => row.forEach(setCells));
