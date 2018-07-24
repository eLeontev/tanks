import { CELLS_COUNT } from '../config';
import { ARROW_DOWN, ARROW_LEFT, ARROW_RIGHT, ARROW_UP } from '../constants/eventsConstant';

let MIN = 0;
let STEP = 1;

let nexBulletPosition = {
    [ARROW_UP]: (position) => position.y > MIN 
        ? { x: position.x, y: position.y - STEP } 
        : position,
    [ARROW_LEFT]: (position) => position.x > MIN 
        ? { x: position.x - STEP, y: position.y }
        : position,
    [ARROW_DOWN]: (position) => position.y < CELLS_COUNT - STEP 
        ? { x: position.x, y: position.y + STEP }
        : position,
    [ARROW_RIGHT]: (position) => position.x < CELLS_COUNT - STEP
        ? { x: position.x + STEP, y: position.y }
        : position,
}
export let getNextBulletPosition = (keyCode, position) => nexBulletPosition[keyCode](position);