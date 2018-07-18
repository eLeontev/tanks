import {BaseCell} from './cells';

let STEP = 1;

let ARROW_UP = 38;
let ARROW_DOWN = 40;
let ARROW_LEFT = 37;
let ARROW_RIGHT = 39;
let TANK_SIZE = 2;

let playfield = document.getElementById('playfield_canvas');

document.addEventListener('keydown', function ({ keyCode }) {
	if (Object.keys(movments).every(key => +key !== keyCode)) return;

	let position = tank.position;
	let {x, y} = getNextMoveDirection(keyCode, position);

	ctx.clearRect(position.x, position.y, tank.cellSize, tank.cellSize);

	position.x = x;
	position.y = y;

	fillBattleFiled();
	setCells(tank.cellSize, tank);
});

let movments = {
	arrowUp: ({ x, y }) => ({ x, y: y - STEP }),
	arrowDown: ({ x, y }) => ({ x, y: y + STEP }),
	arrowLeft: ({ x, y }) => ({ x: x - STEP , y }),
	arrowRight: ({ x, y }) => ({ x: x + STEP , y }),
	getSamePosition: (position) => position,
	[ARROW_UP]: ({ x, y }) => y - STEP >= 0 ? movments.arrowUp({ x, y }) : movments.getSamePosition({ x, y }),
	[ARROW_DOWN]: ({ x, y }) => y + STEP <= cellsCount - TANK_SIZE ? movments.arrowDown({ x, y }) : movments.getSamePosition({ x, y }),
	[ARROW_LEFT]: ({ x, y }) => x - STEP >= 0 ? movments.arrowLeft({ x, y }) : movments.getSamePosition({ x, y }),
	[ARROW_RIGHT]: ({ x, y }) => x + STEP <= cellsCount - TANK_SIZE ? movments.arrowRight({ x, y }) : movments.getSamePosition({ x, y }),
};

let getNextMoveDirection = (keyCode, position) => movments[keyCode](position);


let ctx = playfield.getContext('2d');
let cellsCount = 20;

let width = playfield.getAttribute('width');
let cellSize = width / cellsCount;

let randomInteger = () => Math.round(-0.5 + Math.random() * (10));

let colours = [
    'green', 'red', 'chocolate', 'yellow', 'orange', 'beige',
    'blue', 'aliceblue', 'antiquewhite', 'aquamarine'
];

let setCells = (presetSize, { position: { x, y }, fillStyle }) => {
    let size = presetSize || cellSize;
    ctx.fillStyle = fillStyle || colours[randomInteger()];
    ctx.fillRect(x * cellSize, y * cellSize, size, size);
};

let battleField = new Array(cellsCount).fill()
    .map((e, x) => new Array(cellsCount).fill()
        .map((e, y) => ({
			position: { x, y },
            fillStyle: colours[randomInteger()]
        })));

let fillBattleFiled = () => battleField.forEach((row) => row.forEach((elem) => setCells(false, elem)));
fillBattleFiled();

let tank = {
	position: {
		x: 0,
		y: 0,
	},
	fillStyle: '#000',
    cellSize: cellSize * TANK_SIZE,
};

setCells(tank.cellSize, tank);

console.log(1);
