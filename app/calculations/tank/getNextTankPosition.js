import { CELLS_COUNT, TANK_SCALE } from '../../config';
import { ARROW_DOWN, ARROW_LEFT, ARROW_RIGHT, ARROW_UP } from '../../constants/eventsConstant';

let STEP = 1;
let START_VALUE = 0;
let MAX_COORD_VALUE = CELLS_COUNT - TANK_SCALE;

let movements = {
    arrowUp: ({ x, y }) => ({ x, y: y - STEP }),
    arrowDown: ({ x, y }) => ({ x, y: y + STEP }),
    arrowLeft: ({ x, y }) => ({ x: x - STEP , y }),
    arrowRight: ({ x, y }) => ({ x: x + STEP , y }),
    [ARROW_UP]: (position) => position.y - STEP >= START_VALUE ? movements.arrowUp(position) : position,
    [ARROW_LEFT]: (position) => position.x - STEP >= START_VALUE ? movements.arrowLeft(position) : position,
    [ARROW_DOWN]: (position) => position.y + STEP <= MAX_COORD_VALUE ? movements.arrowDown(position) : position,
    [ARROW_RIGHT]: (position) => position.x + STEP <= MAX_COORD_VALUE ? movements.arrowRight(position) : position,
};

export let getNextTankPosition = (keyCode, position) => movements[keyCode](position);