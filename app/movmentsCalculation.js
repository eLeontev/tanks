import { CELLS_COUNT, TANK_SIZE } from './config';
import { ARROW_UP, ARROW_DOWN, ARROW_LEFT, ARROW_RIGHT } from './constants/eventsConstant';
import { battleField } from './initBattleField';

let STEP = 1;
let EMPTY = '#000';
let MAX_COORD_VALUE = 24;

let movments = {
	arrowUp: ({ x, y }) => ({ x, y: y - STEP }),
	arrowDown: ({ x, y }) => ({ x, y: y + STEP }),
	arrowLeft: ({ x, y }) => ({ x: x - STEP , y }),
	arrowRight: ({ x, y }) => ({ x: x + STEP , y }),
	[ARROW_UP]: (position) => position.y - STEP >= 0 ? movments.arrowUp(position) : position,
	[ARROW_DOWN]: (position) => position.y + STEP <= MAX_COORD_VALUE ? movments.arrowDown(position) : position,
	[ARROW_LEFT]: (position) => position.x - STEP >= 0 ? movments.arrowLeft(position) : position,
	[ARROW_RIGHT]: (position) => position.x + STEP <= MAX_COORD_VALUE ? movments.arrowRight(position) : position,
};

export let isNextPositionFree = ({ x, y }) => 
	battleField[x][y].fillStyle === EMPTY && battleField[x + 1][y + 1].fillStyle === EMPTY
	&& battleField[x][y + 1].fillStyle === EMPTY && battleField[x + 1][y].fillStyle === EMPTY;  

export let getNextMoveDirection = (keyCode, position) => movments[keyCode](position);