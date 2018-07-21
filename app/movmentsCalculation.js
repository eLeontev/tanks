import { CELLS_COUNT, TANK_SCALE } from './config';
import { ARROW_UP, ARROW_DOWN, ARROW_LEFT, ARROW_RIGHT } from './constants/eventsConstant';
import { GUN_SIZE, GUN_OFFSET, GUN_HEIGHT_RATE } from './constants/gunParameters';
import { battleField } from './initBattleField';

let STEP = 1;
let EMPTY = '#000';
let START_VALUE = 0;
let MAX_COORD_VALUE = CELLS_COUNT - TANK_SCALE;

let movments = {
	arrowUp: ({ x, y }) => ({ x, y: y - STEP }),
	arrowDown: ({ x, y }) => ({ x, y: y + STEP }),
	arrowLeft: ({ x, y }) => ({ x: x - STEP , y }),
	arrowRight: ({ x, y }) => ({ x: x + STEP , y }),
	[ARROW_UP]: (position) => position.y - STEP >= START_VALUE ? movments.arrowUp(position) : position,
	[ARROW_LEFT]: (position) => position.x - STEP >= START_VALUE ? movments.arrowLeft(position) : position,
	[ARROW_DOWN]: (position) => position.y + STEP <= MAX_COORD_VALUE ? movments.arrowDown(position) : position,
	[ARROW_RIGHT]: (position) => position.x + STEP <= MAX_COORD_VALUE ? movments.arrowRight(position) : position,
};


let tankPosition = new Array(TANK_SCALE).fill()
	.map((e, x) => new Array(TANK_SCALE).fill()
		.map((e, y) => ({ offsetX: x, offsetY: y })));

// TODO: can improve - check only one side of the entity, since we can move only in one direction
export let isNextPositionFree = ({ x, y }) => tankPosition
	.every(e => e.every(({ offsetX, offsetY }) => battleField[x + offsetX][y + offsetY].fillStyle === EMPTY));

export let getNextMoveDirection = (keyCode, position) => movments[keyCode](position);

let GUN_HEIGHT = TANK_SCALE / GUN_HEIGHT_RATE;
let GUN_DIAMETR = GUN_SIZE * 2; // double radius
let GUN_START_POSITION = TANK_SCALE - GUN_HEIGHT;

export let getGunPosition = {
    [ARROW_UP]: ({ x, y }, cellSize) => ({
		xPosition: (x + GUN_OFFSET) * cellSize - GUN_SIZE, 
		yPosition: y * cellSize, 
		width: GUN_DIAMETR, 
		height: cellSize * GUN_HEIGHT 
	}),
    [ARROW_DOWN]: ({ x, y }, cellSize) => ({
		xPosition: (x + GUN_OFFSET) * cellSize - GUN_SIZE,
		yPosition: (y + GUN_START_POSITION) * cellSize,
		width: GUN_DIAMETR,
		height: cellSize * GUN_HEIGHT
	}),
    [ARROW_LEFT]: ({ x, y }, cellSize) => ({
		xPosition: x * cellSize,
		yPosition: (y + GUN_OFFSET) * cellSize - GUN_SIZE,
		width: cellSize * GUN_HEIGHT,
		height: GUN_DIAMETR
	}),
    [ARROW_RIGHT]: ({ x, y }, cellSize) => ({
		xPosition: (x + GUN_START_POSITION) * cellSize,
		yPosition: (y + GUN_OFFSET) * cellSize - GUN_SIZE,
		width: cellSize * GUN_HEIGHT,
		height: GUN_DIAMETR
	}),
};
