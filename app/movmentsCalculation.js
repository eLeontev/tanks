import { CELLS_COUNT, TANK_SCALE } from './config';
import { ARROW_UP, ARROW_DOWN, ARROW_LEFT, ARROW_RIGHT } from './constants/eventsConstant';
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