import { CELLS_COUNT, TANK_SIZE } from './config';
import { ARROW_UP, ARROW_DOWN, ARROW_LEFT, ARROW_RIGHT } from './constants/eventsConstant';

let STEP = 1;

let movments = {
	arrowUp: ({ x, y }) => ({ x, y: y - STEP }),
	arrowDown: ({ x, y }) => ({ x, y: y + STEP }),
	arrowLeft: ({ x, y }) => ({ x: x - STEP , y }),
	arrowRight: ({ x, y }) => ({ x: x + STEP , y }),
	[ARROW_UP]: (position) => position.y - STEP >= 0 ? movments.arrowUp(position) : position,
	[ARROW_DOWN]: (position) => position.y + STEP <= 9 ? movments.arrowDown(position) : position,
	[ARROW_LEFT]: (position) => position.x - STEP >= 0 ? movments.arrowLeft(position) : position,
	[ARROW_RIGHT]: (position) => position.x + STEP <= 9 ? movments.arrowRight(position) : position,
};

let getNextMoveDirection = (keyCode, position) => movments[keyCode](position);

export default getNextMoveDirection;