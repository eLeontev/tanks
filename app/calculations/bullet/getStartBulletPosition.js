import { CELLS_COUNT, TANK_SCALE } from '../../config';
import { ARROW_DOWN, ARROW_LEFT, ARROW_RIGHT, ARROW_UP } from '../../constants/eventsConstant';

let startBulletPosition = {
    [ARROW_UP]: (position) => position,
    [ARROW_LEFT]: (position) => position,
    [ARROW_DOWN]: ({ x, y }) => ({ x: x, y: y + TANK_SCALE - 1 }),
    [ARROW_RIGHT]: ({ x, y }) => ({ x: x + TANK_SCALE - 1, y: y })
};

export let getStartBulletPosition = (keyCode, position) => startBulletPosition[keyCode](position);